"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Promise = require("bluebird");
const chalk = require("chalk");
const deepstream = require("deepstream.io-client-js");
const Container = require("./container");
const provider_registrer_1 = require("./provider/provider-registrer");
class WarpPrismKernel {
    constructor(config) {
        process.stdout.write(chalk.green(`
  ----------------------
  |     WARP PRISM     |
  |       1.0.0        |
  | Starting server... |
  ----------------------
    `));
        this.config = config;
        this.client = deepstream(config.deepstreamUrl);
    }
    boot() {
        return new Promise((resolve, reject) => {
            this.container = {
                imageService: new Container.ImageService(),
                mailerService: new Container.MailerService(),
                systemService: new Container.SystemService(),
            };
            this.client.login(null, this.onDeepstreamConnect(resolve, reject));
        });
    }
    getContainer() {
        return this.container;
    }
    onDeepstreamConnect(resolve, reject) {
        return (success) => {
            if (!success) {
                reject();
            }
            process.stdout.write("Connection successful !\n");
            provider_registrer_1.registerProvider(this.client, this.config.providers);
            process.stdout.write((chalk.green(`
  ----------------------
  | Server initialized |
  ----------------------
    `)));
            resolve();
        };
    }
}
exports.WarpPrismKernel = WarpPrismKernel;
