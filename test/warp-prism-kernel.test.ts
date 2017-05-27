import test from "ava";
import { WarpPrismKernel } from "./../src/warp-prism-kernel";

test.beforeEach((t) => {
    t.context.kernel = WarpPrismKernel;
});

test("Kernel require config", (t) => {
  const emptyKernel = () => { const kernel = new WarpPrismKernel(); };
  t.throws(emptyKernel);
});

test.todo("Kernel has boot method");

test.todo("kernel has getContainer");

test.todo("kernel has onDeepstreamConnect not exposed");

