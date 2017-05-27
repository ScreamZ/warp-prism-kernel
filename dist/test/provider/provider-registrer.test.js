"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const ProviderRegister = require("../../src/provider/provider-registrer");
ava_1.default("Should expose a registerProvider function", (t) => {
    t.true(typeof ProviderRegister.registerProvider === "function", "Is a function");
});
ava_1.default.todo("Should register provider correctly");