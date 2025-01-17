/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "@project-chip/matter.js/log";
import {
    ClusterModel,
    ClusterVariance,
    CommandModel,
    DatatypeModel,
    IllegalFeatureCombinations,
    ValueModel,
    conditionToBitmaps,
    translateBitmap,
} from "@project-chip/matter.js/model";
import { Block } from "../util/TsFile.js";
import { camelize, serialize } from "../util/string.js";
import { ClusterComponentGenerator } from "./ClusterComponentGenerator.js";
import { ClusterFile } from "./ClusterFile.js";
import { ConditionalElements } from "./ConditionalElements.js";

const logger = Logger.get("generate-cluster");

export function generateCluster(file: ClusterFile) {
    const cluster = file.cluster;
    logger.info(`${cluster.name} → ${file.name}.ts`);
    file.addImport("cluster/ClusterFactory", "ClusterFactory");

    // Analyze variance
    const variance = ClusterVariance(cluster);
    const illegal = variance.illegal.map(bitmap => translateBitmap(bitmap, cluster));

    // Load features
    const features = cluster.features;

    // Generate the base component
    let base;
    if (cluster.id === undefined) {
        // Base cluster
        base = file.ns
            .expressions(`export const Base = ClusterFactory.Component({`, "})")
            .document(
                `${cluster.name} is a derived cluster, not to be used directly.  These elements are present in all clusters derived from ${cluster.name}.`,
            );
    } else if (!features.length) {
        // Non-extensible cluster
        base = file.ns.expressions(`export const Cluster = ClusterFactory.Definition({`, "})").document(cluster);
        generateMetadata(base, cluster);
    } else {
        base = generateExtensibleClusterBase(file);
    }
    const gen = new ClusterComponentGenerator(file.ns, cluster);
    gen.populateComponent(variance.base, base);

    // Generate status codes even if they aren't referenced directly
    const status = cluster.get(DatatypeModel, "StatusCode");
    if (status) {
        gen.tlv.reference(status);
    }

    // Generate other components
    for (const component of variance.components) {
        gen.defineComponent(component);
    }

    // The rest of this code only applies to non-base componentized clusters
    if (cluster.id === undefined) {
        return;
    }
    if (!features.length) {
        generateClusterExport(file);
        return;
    }

    // Create the default cluster instance
    if (variance.requiresFeatures) {
        // The cluster requires some features to be present
        const instance = file
            .expressions(`export const Cluster = ClusterFactory.ExtensibleOnly(`, ")")
            .document(
                cluster,
                `Per the Matter specification you cannot use {@link ${file.clusterName}} without enabling certain feature combinations.  ` +
                    `You must use the ${file.clusterName}.with() factory method to obtain a working cluster.`,
            );
        generateFactory(instance, variance, illegal);
    } else {
        // The cluster has optional features but functions without them
        const instance = file.ns
            .expressions(`export const Cluster = ClusterFactory.Extensible(`, ")")
            .document(
                cluster,
                `${file.clusterName} supports optional features that you can enable with the ${file.clusterName}.with() factory method.`,
            );

        const supportedFeatures = cluster.featureMap.effectiveDefault;
        if (typeof supportedFeatures === "number" && supportedFeatures) {
            // Override supportedFeatures in base as there are default
            // supported features
            const supportedFeatureBlock = instance.expressions(`{ ...Base, supportedFeatures: {`, "} }");
            features.forEach(feature => {
                if (typeof feature.constraint.value === "number") {
                    if (supportedFeatures & (1 << feature.constraint.value)) {
                        const name = camelize(feature.description ?? feature.name, false);
                        supportedFeatureBlock.atom(name, "true");
                    }
                }
            });
        } else {
            // Just extend base directly
            instance.atom("Base");
        }

        generateFactory(instance, variance, illegal);
    }

    // Generate the conditional type that defines cluster structure
    generateExtensionType(file, variance, illegal);

    // Generate the "complete" cluster
    if (variance.components.length) {
        generateExhaustive(file, variance);
    }

    // Export the cluster
    generateClusterExport(file);
}

function generateClusterExport(file: ClusterFile) {
    file.atom(`export type ${file.clusterName} = typeof ${file.cluster.name}.Cluster`);
    file.atom(`export const ${file.clusterName} = ${file.cluster.name}.Cluster`);
}

function withArticle(what: string) {
    switch (what[0].toLowerCase()) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            return `an ${what}`;

        default:
            return `a ${what}`;
    }
}

function generateExtensibleClusterBase(file: ClusterFile) {
    // Feature enum
    const featureEnum = file.ns.expressions(`export enum Feature {`, "}").document({
        description: `These are optional features supported by ${file.clusterName}.`,
        xref: file.cluster.featureMap.xref,
    });
    for (const f of file.cluster.features) {
        const name = camelize(f.description ?? f.name);
        featureEnum.atom(`${name} = ${serialize(name)}`).document(f);
    }

    // Base component
    const base = file.ns
        .expressions(`export const Base = ClusterFactory.Definition({`, "})")
        .document(`These elements and properties are present in all ${file.cluster.name} clusters.`);
    generateMetadata(base, file.cluster);

    // Features
    const features = file.cluster.features;
    if (features.length) {
        const featureBlock = base.expressions("features: {", "}");
        base.file.addImport("schema/BitmapSchema", "BitFlag");
        features.forEach(feature => {
            const name = camelize(feature.description ?? feature.name, false);
            featureBlock.atom(name, `BitFlag(${feature.constraint.value})`).document(feature);
        });
    }

    return base;
}

function generateFactory(base: Block, variance: ClusterVariance, illegal: IllegalFeatureCombinations) {
    const file = base.file as ClusterFile;
    const factoryFunction = base
        .statements(`<T extends \`\${Feature}\`[]>(...features: [...T]) => {`, "}")
        .document(
            [
                `Use this factory method to create ${withArticle(
                    file.cluster.name,
                )} cluster with support for optional features.  Include each {@link Feature} you wish to support.`,
                `@param features the optional features to support`,
                `@returns ${withArticle(file.cluster.name)} cluster with specified features enabled`,
                "@throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification",
            ].join("\n"),
        );

    factoryFunction.atom(`ClusterFactory.validateFeatureSelection(features, Feature)`);

    const cluster = factoryFunction.expressions(`const cluster = ClusterFactory.Definition({`, "})");
    cluster.atom(`...Base`);

    file.addImport("schema/BitmapSchema", "BitFlags");
    cluster.atom(`supportedFeatures: BitFlags(Base.features, ...features)`);

    for (const component of variance.components) {
        const extension = factoryFunction.expressions(`ClusterFactory.extend(`, ")");
        extension.atom("cluster");
        extension.atom(`${component.name}Component`);
        if (component.condition) {
            const bitmaps = conditionToBitmaps(component.condition, file.cluster);
            for (const bitmap of bitmaps) {
                extension.value(bitmap);
            }
        }
    }

    if (illegal.length) {
        const prevent = factoryFunction.expressions("ClusterFactory.prevent(", ")");
        prevent.atom("cluster");
        illegal.forEach(bitmap => prevent.value(bitmap));
    }

    factoryFunction.atom(`return cluster as unknown as Extension<BitFlags<typeof Base.features, T>>`);
}

function generateExtensionType(file: ClusterFile, variance: ClusterVariance, illegal: IllegalFeatureCombinations) {
    file.addImport("schema/BitmapSchema", "TypeFromPartialBitSchema");

    const factoryType = Array<string>(
        `export type Extension<SF extends TypeFromPartialBitSchema<typeof Base.features>> =`,
        `    Omit<typeof Base, "supportedFeatures">`,
        `    & { supportedFeatures: SF }`,
    );

    for (const component of variance.components) {
        let componentPhrase = `typeof ${component.name}Component`;
        if (component.condition) {
            const test = conditionToBitmaps(component.condition, file.cluster).map(serialize).join(" | ");
            componentPhrase = `(SF extends ${test} ? ${componentPhrase} : {})`;
        }

        factoryType.push(`    & ${componentPhrase}`);
    }

    for (const bitmap of illegal) {
        factoryType.push(`    & (SF extends ${serialize(bitmap)} ? never : {})`);
    }

    file.ns.atom(factoryType.join("\n"));
}

function generateMetadata(base: Block, cluster: ClusterModel) {
    if (cluster.id === undefined) {
        return;
    }

    base.atom("id", `0x${cluster.id.toString(16)}`);
    base.atom("name", `${JSON.stringify(cluster.name)}`);
    base.atom("revision", `${JSON.stringify(cluster.revision)}`);
}

function generateExhaustive(file: ClusterFile, variance: ClusterVariance) {
    const conditions = new ConditionalElements(file.cluster, variance);
    for (const name in conditions.definitions) {
        file.ns.value((conditions.definitions as any)[name], `const ${name} = `);
    }

    const baseName = "Cluster";
    const complete = file.ns
        .expressions(`export const Complete = ClusterFactory.Definition({`, "})")
        .document(
            `This cluster supports all ${file.cluster.name} features.  It may support illegal feature combinations.\n` +
                "If you use this cluster you must manually specify which features are active and ensure the set of active features is legal per the Matter specification.",
        );

    complete.atom("id", `${baseName}.id`);
    complete.atom("name", `${baseName}.name`);
    complete.atom("revision", `${baseName}.revision`);
    if (file.cluster.features.length) {
        complete.atom("features", `${baseName}.features`);
    }

    // Add elements of specific type
    function addElements(tag: string) {
        // Collect elements and a name referencing them in their original location
        const elements = new Map<ValueModel, string>();
        for (const component of variance.components) {
            for (const element of [...component.optional, ...component.mandatory]) {
                if (element.tag !== tag) {
                    continue;
                }

                if (element instanceof CommandModel && element.isResponse) {
                    continue;
                }

                if (!elements.has(element)) {
                    elements.set(element, `${component.name}Component.${tag}s.${camelize(element.name, false)}`);
                }
            }
        }

        // If the base has elements of this type, we add them without modification
        let baseElements: string | undefined;
        if ([...variance.base.mandatory, ...variance.base.optional].some(e => e.tag === tag)) {
            baseElements = `${baseName}.${tag}s`;
            if (!elements.size) {
                // Only elements are only contributed by the base so just map 1:1
                complete.atom(`${tag}s`, baseElements);
            }
        }

        if (!elements.size) {
            return;
        }

        const block = complete.expressions(`${tag}s: {`, "}");

        // If we have base elements, spread them into the block
        if (baseElements) {
            block.atom(`...${baseElements}`);
        }

        // Order elements by ID so they appear roughly in spec order
        const ordered = [...elements.keys()].sort((a, b) => (a.id ?? 0) - (b.id ?? 0));

        // Add the elements
        for (const model of ordered) {
            const elementBlock = block.expressions(
                `${camelize(model.name, false)}: ClusterFactory.AsConditional(`,
                ")",
            );
            elementBlock.atom(`${elements.get(model)}`);
            elementBlock.value(conditions.forModel(model));
        }
    }

    ["attribute", "command", "event"].forEach(addElements);
}
