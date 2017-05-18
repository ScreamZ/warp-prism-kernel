import { Provider } from "../src/provider";

export interface IWarpPrismConfig {
    deepstreamUrl: string;
    providers?: Provider[];
}
