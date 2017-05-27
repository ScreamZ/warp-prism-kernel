"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const warp_prism_kernel_1 = require("./../src/warp-prism-kernel");
ava_1.default.beforeEach((t) => {
    t.context.kernel = warp_prism_kernel_1.WarpPrismKernel;
});
ava_1.default("Kernel require config", (t) => {
    const emptyKernel = () => { const kernel = new warp_prism_kernel_1.WarpPrismKernel(); };
    t.throws(emptyKernel);
});
ava_1.default.todo("Kernel has boot method");
ava_1.default.todo("kernel has getContainer");
ava_1.default.todo("kernel has onDeepstreamConnect not exposed");
