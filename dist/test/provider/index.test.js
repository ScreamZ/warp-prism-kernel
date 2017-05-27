"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const Provider = require("../../src/provider/index");
ava_1.default("Should expose provider class", (t) => {
    t.true(typeof Provider.Provider === "function", "Is a function (class)");
});
ava_1.default.todo("Provider should have procedures array");
