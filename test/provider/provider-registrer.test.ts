import test from "ava";
import * as path from "path";
import * as ProviderRegister from "../../src/provider/provider-registrer";

test("Should expose a registerProvider function", (t) => {
    t.true(typeof ProviderRegister.registerProvider === "function", "Is a function");
});

test.todo("Should register provider correctly");
