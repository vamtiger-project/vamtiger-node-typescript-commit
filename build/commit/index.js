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
const vamtiger_bash_1 = require("vamtiger-bash");
const __1 = require("..");
let commitMessage = 'vamtiger-node-typescript-commit';
function commit(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const test = options.test;
        const updateVersion = options.updateVersion ? options.updateVersion : __1.UpdateVersion.patch;
        const sourceBranch = options.sourceBranch ? options.sourceBranch : 'source';
        const masterBranch = options.masterBranch ? options.masterBranch : 'master';
        const sourceFolder = options.sourceFolder ? options.sourceFolder : __1.Folder.source;
        const buildFolder = options.buildFolder ? options.buildFolder : __1.Folder.build;
        const runScript = options.runScript ? options.runScript : __1.RunScript.npm;
        const buildScript = options.buildScript ? options.buildScript : __1.BuildScript.build;
        const push = options.push ? true : false;
        const publish = push && options.publish ? true : false;
        const message = test ? `${commitMessage}: Test` : commitMessage;
        const checkoutSource = yield vamtiger_bash_1.default(`git checkout ${sourceBranch}`);
        const removeBuild = yield vamtiger_bash_1.default('rm -rfv build');
        const status = yield vamtiger_bash_1.default('git status');
        const addSource = yield vamtiger_bash_1.default('git add -A');
        const commitSource = yield vamtiger_bash_1.default(`git commit -m "${message}"`);
        const checkoutMaster = yield vamtiger_bash_1.default(`git checkout ${masterBranch}`);
        const mergeFromSource = yield vamtiger_bash_1.default(`git merge -X theirs ${sourceBranch}`);
        const build = yield vamtiger_bash_1.default(`${runScript} ${buildScript}`);
        const removeRedundantSource = yield vamtiger_bash_1.default(`rm -rfv yarn.lock tsconfig .vscode ${sourceFolder}`);
        const addBuild = yield vamtiger_bash_1.default('git add -A');
        const commitBuild = yield vamtiger_bash_1.default(`git commit -m "${message}"`);
        const update = yield vamtiger_bash_1.default(`npm version ${updateVersion}`);
        let pushUpdate;
        let publishUpdate;
        if (push)
            pushUpdate = yield Promise.all([
                vamtiger_bash_1.default(`git push origin ${sourceBranch}`),
                vamtiger_bash_1.default(`git push origin ${masterBranch} --tags`)
            ]);
        if (publish)
            publishUpdate = yield vamtiger_bash_1.default(`npm publish`);
        return true;
    });
}
exports.default = commit;
//# sourceMappingURL=index.js.map