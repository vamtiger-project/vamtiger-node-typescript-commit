"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const XRegExp = require("xregexp");
const index_1 = require("../../index");
describe("vamtiger-regex-leading-dash: regex.default", function () {
    it("should match a leading dashes", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const input = '--leadingDashes', match = input.match(index_1.default), xMatch = XRegExp.exec(input, index_1.default);
            chai_1.expect(match).to.be.ok;
            chai_1.expect(match.length).to.be.gt(0);
            chai_1.expect(match[0]).to.equal(input);
            chai_1.expect(match[1]).to.equal('--');
            chai_1.expect(match[2]).to.equal('leadingDashes');
            chai_1.expect(xMatch).to.be.ok;
            chai_1.expect(xMatch.dash).to.be.ok;
            chai_1.expect(xMatch.dash).to.equal('--');
            chai_1.expect(xMatch.afterDash).to.equal('leadingDashes');
        });
    });
});
//# sourceMappingURL=index.spec.js.map