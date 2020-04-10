"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Args = require("../..");
const args = new Args();
describe("vamtiger-argv: args.next should", function () {
    it("return the next argument", function (done) {
        chai_1.expect(args.next('--booya')).to.equal('kasha');
        done();
    });
});
//# sourceMappingURL=index.spec.js.map