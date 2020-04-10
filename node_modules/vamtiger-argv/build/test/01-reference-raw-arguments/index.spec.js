"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Args = require("../..");
const args = new Args();
describe("vamtiger-argv: args.raw should", function () {
    it("reference arguments with corresponding values", function (done) {
        const result = args.raw.every(argument => typeof argument === 'string');
        chai_1.expect(result).to.be.true;
        done();
    });
});
//# sourceMappingURL=index.spec.js.map