import { Provider } from "./index";

/**
 * Register providers in the client.
 *
 * @param client deepstream client
 * @param providers
 */
export const registerProvider = (client: deepstreamIO.Client, providers: Provider[]): void => {
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
