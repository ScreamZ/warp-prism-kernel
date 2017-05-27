import test from "ava";
import * as Provider from "../../src/provider/index";

test("Should expose provider class", (t) => {
    t.true(typeof Provider.Provider === "function", "Is a function (class)");
});

test.todo("Provider should have procedures array");
