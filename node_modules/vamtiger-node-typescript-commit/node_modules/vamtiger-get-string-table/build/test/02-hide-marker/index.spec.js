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
const path_1 = require("path");
const chai_1 = require("chai");
const mock_data_1 = require("./mock-data");
const __1 = require("../..");
const table = path_1.resolve(__dirname, 'mock-data/index.ts');
describe('vamtiger-get-string-table should', function () {
    it('return a string table', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const stringTable = __1.default(mock_data_1.default);
            chai_1.expect(stringTable).to.be.ok;
            chai_1.expect(stringTable).to.equal(mock_data_1.expected);
        });
    });
});
//# sourceMappingURL=index.spec.js.map