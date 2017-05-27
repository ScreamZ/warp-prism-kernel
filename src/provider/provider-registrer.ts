import * as includeAll from "include-all";
import * as _ from "lodash";
import * as path from "path";
import { Provider } from "./index";

/**
 * Register providers in the client.
 *
 * @param client deepstream client
 * @param providers
 */
export const registerProvider = (client: deepstreamIO.Client, providersDir: string = "src/providers"): void => {
    process.stdout.write("Now registrating providers...\n");
    process.stdout.write("-----------------------------\n");

    // Register all mod ules
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
