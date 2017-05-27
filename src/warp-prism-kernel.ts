import * as Promise from "bluebird";
import * as chalk from "chalk";
import * as deepstream from "deepstream.io-client-js";
import { IWarpPrismConfig } from "../config/warp-prism-config";
import * as Container from "./container";
import { registerProvider } from "./provider/provider-registrer";

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
            // Build container
            this.container = {
                imageService: new Container.ImageService(),
                mailerService: new Container.MailerService(),
                systemService: new Container.SystemService(),
            };

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
