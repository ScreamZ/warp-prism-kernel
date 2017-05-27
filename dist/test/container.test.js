"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const Container = require("../src/container");
ava_1.default("Container expose all services", (t) => {
    t.true(typeof Container.ImageService === "function");
    t.true(typeof Container.SystemService === "function");
    t.true(typeof Container.ImageService === "function");
});
