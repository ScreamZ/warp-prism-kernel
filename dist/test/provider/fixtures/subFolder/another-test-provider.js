"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const provider_1 = require("../../../../src/provider");
const testAction = (data, response) => { };
exports.default = new provider_1.Provider([
    { name: "anotherTestAction", handler: testAction },
]);
