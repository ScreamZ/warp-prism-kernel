"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const includeAll = require("include-all");
const _ = require("lodash");
const path = require("path");
exports.registerProvider = (client, providersDir = "src/providers") => {
    process.stdout.write("Now registrating providers...\n");
    process.stdout.write("-----------------------------\n");
    includeAll.optional({
        dirname: path.resolve(providersDir),
        filter: /(.+)\.js$/,
        flatten: true,
        keepDirectoryPath: true,
    }, (err, providers) => {
        if (err) {
            process.stderr.write("Failed to load controllers.  Details:", err);
            return;
        }
        _.each(providers, ({ default: procedure }, name) => {
            process.stdout.write(` • ${name.toUpperCase()} provider ✔\n`);
            procedure.procedures.forEach((element) => {
                client.rpc.provide(`${name}/${element.name}`, element.handler);
            });
        });
    });
};
