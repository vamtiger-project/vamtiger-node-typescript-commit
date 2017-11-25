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
const update = `export default "${moment().format('YYYY MMMM DD - hh:mm:ss.SSS')}"`;
const repositoryPath = path_1.resolve(__dirname, 'test-node-typescript-repository');
const filePath = path_1.resolve(repositoryPath, 'source', 'index.ts');
const repositoryUrl = 'https://github.com/vamtiger-project/test-node-typescript-repository.git';
const params = {
    test: true,
    runScript: __1.RunScript.yarn,
    repositoryPath,
    push: true,
    publish: true
};
const bashParams = {
    cwd: params.repositoryPath
};
const testRepo = 'https://github.com/vamtiger-project/test-node-typescript-repository.git';
const testRepoParentFolder = path_1.dirname(bashParams.cwd);
const bashInitializationParams = {
    cwd: testRepoParentFolder
};
const removeRepo = `rm -rfv ${repositoryPath}`;
const vamtigerNodeTypescriptCommitPath = path_1.resolve(__dirname, '../'.repeat(3));
const vamtigerNodeTypescriptCommit = `file://${vamtigerNodeTypescriptCommitPath}`;
const npmPath = path_1.resolve(path_1.dirname(process.argv[0]), 'npm');
describe('vamtiger-node-typescript-commit', function () {
    this.timeout(90000);
    it.skip('commit a node typescript project from npm script', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let remove = yield vamtiger_bash_1.default(removeRepo);
            const clone = yield vamtiger_bash_1.default(`git clone "${testRepo}"`, bashInitializationParams);
            const install = yield vamtiger_bash_1.default(`npm install ${vamtigerNodeTypescriptCommit}`, bashParams);
            const checkoutSource = yield vamtiger_bash_1.default(`git checkout source`, bashParams);
            const updateFile = yield write(filePath, update);
            const commit = yield vamtiger_bash_1.default(`${npmPath} run commit`, bashParams);
            chai_1.expect(commit).to.be.ok;
            remove = yield vamtiger_bash_1.default(removeRepo);
        });
    });
});
//# sourceMappingURL=index.spec.js.map