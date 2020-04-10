"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Args = require("../..");
const args = new Args();
describe("vamtiger-argv: args.has should", function () {
    it("return true a defined argument", function (done) {
        chai_1.expect(args.has('--booya')).to.be.true;
        chai_1.expect(args.has('booya')).to.be.true;
        done();
    });
});
//# sourceMappingURL=index.spec.js.map