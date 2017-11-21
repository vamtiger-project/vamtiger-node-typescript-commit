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
const path = require("path");
const params = {
    test: true,
    runScript: __1.RunScript.yarn,
    repositoryPath: path.resolve(__dirname, 'test-node-typescript-repository')
};
describe('vamtiger-node-typescript-commit', function () {
    it('commit a node typescript project', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield __1.default(params);
            chai_1.expect(result).to.be.ok;
        });
    });
});
//# sourceMappingURL=index.spec.js.map