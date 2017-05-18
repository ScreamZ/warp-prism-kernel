"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Provider {
    constructor(namespace, procedures) {
        procedures.forEach((el) => {
            el.name = `${namespace}/${el.name}`;
        });
        this.name = namespace;
        this.procedures = procedures;
    }
}
exports.Provider = Provider;
