import * as Promise from "bluebird";
import * as chalk from "chalk";
import * as deepstream from "deepstream.io-client-js";
import { IWarpPrismConfig } from "../config/warp-prism-config";
import * as Container from "./container";
import { registerProvider } from "./provider/provider-registrer";

import * as includeAll from "include-all";
import * as _ from "lodash";
import * as path from "path";

export class WarpPrismKernel {
    private container: Container.IContainerInterface;
    private client: deepstreamIO.Client;
    private config: any;

    constructor(config: IWarpPrismConfig) {
        process.stdout.write(chalk.green(`
  ----------------------
  |     WARP PRISM     |
  |       1.0.0        |
  | Starting server... |
  ----------------------\n`));

        this.config = config;
        this.client = deepstream(config.deepstreamUrl);
    }

    /**
     * Initialize the pairing to deepstream network.
     */
    public boot(): Promise<{}> {
        return new Promise((resolve, reject) => {
            // Build the container loading file in the service folder
            const servicesFiles = includeAll({
                dirname: path.join(__dirname, "services"),
                filter: /(.+-service)\.js$/,
            });
            this.container = _.reduce(servicesFiles, (acc, exportedData, filename) => {
                const serviceName = `${filename.match(/(.+)-service/)[1]}Service`;

                return { ...acc, [serviceName]: new exportedData[_.upperFirst(serviceName)]() };
            }, {});

            // Pairing with deepstream
            this.client.login(this.config.authData, this.onDeepstreamConnect(resolve, reject));
        });
    }

    /**
     * Return the services container that provide some helpers.
     */
    public getContainer(): Container.IContainerInterface {
        return this.container;
    }

    public getDeepstream(): deepstreamIO.Client {
        return this.client;
    }

    private onDeepstreamConnect(resolve, reject) {
        return (success) => {
            if (!success) {
                reject();
            }
            process.stdout.write("Connection successful !\n");

            // Registering provider
            registerProvider(this.client, this.config.providersDir);

            process.stdout.write((chalk.green(`
  ----------------------
  | Server initialized |
                    ----------------------\n`)));

            // Server has been initialized
            resolve();
        };
    }
}
