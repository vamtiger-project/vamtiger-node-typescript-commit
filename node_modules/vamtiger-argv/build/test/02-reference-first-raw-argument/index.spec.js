"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Args = require("../..");
const args = new Args();
describe("vamtiger-argv: args.first should", function () {
    it("reference the first argument", function (done) {
        chai_1.expect(args.first).to.equal('--recursive');
        done();
    });
});
//# sourceMappingURL=index.spec.js.map