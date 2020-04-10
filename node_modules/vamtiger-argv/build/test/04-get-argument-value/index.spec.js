"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Args = require("../..");
const args = new Args();
describe("vamtiger-argv: args.get should", function () {
    it("return the corresponding argument value", function (done) {
        chai_1.expect(args.get('--booya')).to.equal('kasha');
        chai_1.expect(args.get('booya')).to.equal('kasha');
        done();
    });
});
//# sourceMappingURL=index.spec.js.map