import test from "ava";
import * as Container from "../src/container";

test("Container expose all services", (t) => {
    t.true(typeof Container.ImageService === "function");
    t.true(typeof Container.SystemService === "function");
    t.true(typeof Container.ImageService === "function");
});
