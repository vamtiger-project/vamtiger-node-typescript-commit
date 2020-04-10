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
const __1 = require("../..");
describe('vamtiger-bash should', function () {
    it('execute a bash command inside async function', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const listDirectoryContents = `ls ${__dirname}`;
            const result = yield __1.default(listDirectoryContents);
            const directoryContents = result
                .split('\n')
                .map(entry => entry.trim())
                .filter(entry => entry);
            const expected = [
                'index.js',
                'index.d.ts',
                'index.js.map'
            ];
            chai_1.expect(directoryContents).to.be.ok;
            chai_1.expect(directoryContents.length).to.equal(3);
            chai_1.expect(directoryContents.every(entry => expected.some(expectedEntry => entry === expectedEntry))).to.be.true;
        });
    });
});
//# sourceMappingURL=index.js.map