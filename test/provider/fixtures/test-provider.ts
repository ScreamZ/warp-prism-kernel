import * as deepstream from "deepstream.io-client-js";
import { Provider } from "../../../src/provider";

const testAction = (data, response) => {};

export default new Provider([
    { name: "testAction", handler: testAction },
]);
