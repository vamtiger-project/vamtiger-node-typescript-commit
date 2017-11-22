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
const fs_1 = require("fs");
const path_1 = require("path");
const chai_1 = require("chai");
const moment = require("moment");
const bluebird_1 = require("bluebird");
const vamtiger_bash_1 = require("vamtiger-bash");
const __1 = require("../..");
const write = bluebird_1.promisify(fs_1.writeFile);
const filePath = path_1.resolve(__dirname, '../'.repeat(3), 'source', 'test', '01-commit-node-typescript-project', 'test-node-typescript-repository', 'source', 'index.ts');
const update = `export default "${moment().format('YYYY MMMM DD - hh:mm:ss.SSS')}"`;
const params = {
    test: true,
    runScript: __1.RunScript.yarn,
    repositoryPath: path_1.resolve(__dirname, 'test-node-typescript-repository').replace('/build/', '/source/'),
    push: true,
    publish: true
};
describe('vamtiger-node-typescript-commit', function () {
    this.timeout(20000);
    it('commit a node typescript project', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const checkoutSource = yield vamtiger_bash_1.default(`git checkout source`, {
                cwd: params.repositoryPath
            });
            const updateFile = yield write(filePath, update);
            const result = yield __1.default(params);
            chai_1.expect(result).to.be.ok;
        });
    });
});
//# sourceMappingURL=index.spec.js.map