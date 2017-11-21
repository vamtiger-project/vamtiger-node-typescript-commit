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
let commitMessage = 'vamtiger-node-typescript-commit';
function main(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const test = options.test;
        const updateVersion = options.updateVersion ? options.updateVersion : UpdateVersion.patch;
        const sourceBranch = options.sourceBranch ? options.sourceBranch : 'source';
        const masterBranch = options.masterBranch ? options.masterBranch : 'master';
        const sourceFolder = options.sourceFolder ? options.sourceFolder : sourceBranch;
        const runScript = options.runScript ? options.runScript : RunScript.npm;
        const buildScript = options.buildScript ? options.buildScript : BuildScript.build;
        const push = options.push ? true : false;
        const publish = push && options.publish ? true : false;
        const message = test ? `${commitMessage}: Test` : commitMessage;
        const checkoutSource = yield vamtiger_bash_1.default(`git checkout ${sourceBranch}`);
        const status = yield vamtiger_bash_1.default('git status');
        const removeBuild = yield vamtiger_bash_1.default('rm -rfv build');
        const addSource = yield vamtiger_bash_1.default('git add -A');
        const commitSource = yield vamtiger_bash_1.default(`git commit -m "${message}"`);
        const checkoutMaster = yield vamtiger_bash_1.default(`git checkout ${masterBranch}`);
        const mergeFromSource = yield vamtiger_bash_1.default(`git merge ${sourceBranch}`);
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
        console;
    });
}
exports.default = main;
;
var UpdateVersion;
(function (UpdateVersion) {
    UpdateVersion["patch"] = "patch";
    UpdateVersion["minor"] = "minor";
    UpdateVersion["major"] = "major";
})(UpdateVersion = exports.UpdateVersion || (exports.UpdateVersion = {}));
var RunScript;
(function (RunScript) {
    RunScript["npm"] = "npm run";
    RunScript["yarn"] = "yarn";
})(RunScript = exports.RunScript || (exports.RunScript = {}));
var BuildScript;
(function (BuildScript) {
    BuildScript["build"] = "build";
})(BuildScript = exports.BuildScript || (exports.BuildScript = {}));
//# sourceMappingURL=index.js.map