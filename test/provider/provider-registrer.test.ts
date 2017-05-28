import test from "ava";
import * as path from "path";
import * as sinon from "sinon";
import * as ProviderRegister from "../../src/provider/provider-registrer";

test("Should expose a registerProvider function", (t) => {
    t.true(typeof ProviderRegister.registerProvider === "function", "Is a function");
});

test.todo("Should register provider correctly", (y) => {
    let stub = { rpc: { make: () => { } } };

    let makeStub = sinon.stub(stub.rpc, "make");

    ProviderRegister.registerProvider(stub, path.join("fixtures"));

    console.log(makeStub.callCount);
});
