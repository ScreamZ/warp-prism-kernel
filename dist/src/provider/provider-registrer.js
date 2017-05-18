"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerProvider = (client, providers) => {
    if (!providers) {
        throw new Error("No provider given. Please add some");
    }
    process.stdout.write("Now registrating providers...\n");
    process.stdout.write("-----------------------------\n");
    providers.forEach((procedure) => {
        process.stdout.write(` • ${procedure.name.toUpperCase()} provider ✔\n`);
        procedure.procedures
            .forEach((element) => {
            client.rpc.provide(element.name, element.handler);
        });
    });
};
