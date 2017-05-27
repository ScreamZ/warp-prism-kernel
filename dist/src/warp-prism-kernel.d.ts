/// <reference types="bluebird" />
import * as Promise from "bluebird";
import { IWarpPrismConfig } from "../config/warp-prism-config";
import * as Container from "./container";
export declare class WarpPrismKernel {
    private container;
    private client;
    private config;
    constructor(config: IWarpPrismConfig);
    boot(): Promise<{}>;
    getContainer(): Container.IContainerInterface;
    private onDeepstreamConnect(resolve, reject);
}
