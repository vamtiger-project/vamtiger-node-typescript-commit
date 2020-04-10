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
const __1 = require("../..");
const filePath = path_1.resolve(__dirname, 'mock-data', 'index.js');
describe('vamtiger-get-file-text should', function () {
    it('get text for a defined file path', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const fileText = yield __1.default(filePath);
            chai_1.expect(fileText).to.contain('some file with text');
        });
    });
});
//# sourceMappingURL=index.js.map