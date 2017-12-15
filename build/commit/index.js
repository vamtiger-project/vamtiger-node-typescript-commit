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
const path_1 = require("path");
const XRegExp = require("xregexp");
const __1 = require("..");
const Args = require("vamtiger-argv");
const regex = {
    noChanges: XRegExp('nothing to commit', 'msi')
};
const args = new Args();
const commitMessagePrefix = 'vamtiger-node-typescript-commit';
const argCommitMessageSuffix = args.get('commitMessage') || '';
let commitMessage = argCommitMessageSuffix ? `${commitMessagePrefix}: ${argCommitMessageSuffix}` : commitMessagePrefix;
function commit(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const test = options.test;
        const updateVersion = options.updateVersion ? options.updateVersion : __1.UpdateVersion.patch;
        const repositoryPath = options.repositoryPath ? options.repositoryPath : process.argv[1];
        const sourceBranch = options.sourceBranch ? options.sourceBranch : 'source';
        const masterBranch = options.masterBranch ? options.masterBranch : 'master';
        const sourceFolder = options.sourceFolder ? options.sourceFolder : path_1.resolve(repositoryPath, __1.Folder.source);
        const sourceFolderName = path_1.basename(sourceFolder);
        const buildFolder = options.buildFolder ? options.buildFolder : path_1.resolve(repositoryPath, __1.Folder.build);
        const runScript = options.runScript ? options.runScript : __1.RunScript.npm;
        const buildScript = options.buildScript ? options.buildScript : __1.BuildScript.build;
        const push = options.push ? true : false;
        const publish = push && options.publish ? true : false;
        const bashOptions = {
            cwd: repositoryPath
        };
        const message = test ? `${commitMessage}: Test` : commitMessage;
        const autoUpdate = yield vamtiger_bash_1.default(`git pull origin ${sourceBranch}`, bashOptions);
        const checkoutSource = yield vamtiger_bash_1.default(`git checkout ${sourceBranch}`, bashOptions);
        const removeBuild = yield vamtiger_bash_1.default(`rm -rfv ${buildFolder}`, bashOptions);
        const addSource = yield vamtiger_bash_1.default('git add -A', bashOptions);
        const sourceStatus = yield vamtiger_bash_1.default('git status', bashOptions);
        const commitSourceChanges = sourceStatus.match(regex.noChanges) ? false : true;
        const commitSource = yield vamtiger_bash_1.default(`git commit -m "${message}"`, bashOptions);
        const updateSource = yield vamtiger_bash_1.default(`npm version ${__1.UpdateVersion.prepatch}`, bashOptions);
        const checkoutMaster = yield vamtiger_bash_1.default(`git checkout ${masterBranch}`, bashOptions);
        const mergeFromSource = yield vamtiger_bash_1.default(`git checkout ${sourceBranch} -- .`, bashOptions);
        const build = yield vamtiger_bash_1.default(`${runScript} ${buildScript}`, bashOptions);
        const removeRedundantSource = yield vamtiger_bash_1.default(`rm -rfv ${repositoryPath}/yarn.lock ${repositoryPath}/tsconfig.json ${repositoryPath}/.vscode ${sourceFolder}`, bashOptions);
        const addBuild = yield vamtiger_bash_1.default('git add -A', bashOptions);
        const masterStatus = yield vamtiger_bash_1.default('git status', bashOptions);
        const commitBuild = yield vamtiger_bash_1.default(`git commit -m "${message}"`, bashOptions);
        const updateBuild = yield vamtiger_bash_1.default(`npm version ${updateVersion}`, bashOptions);
        let pushSourceUpdate;
        let pushBuildUpdate;
        let publishUpdate;
        if (push) {
            pushSourceUpdate = yield vamtiger_bash_1.default(`git push origin ${sourceBranch}`);
            pushBuildUpdate = yield vamtiger_bash_1.default(`git push -f origin ${masterBranch} --tags`);
        }
        if (publish)
            publishUpdate = yield vamtiger_bash_1.default(`npm publish`);
        return true;
    });
}
exports.default = commit;
//# sourceMappingURL=index.js.map