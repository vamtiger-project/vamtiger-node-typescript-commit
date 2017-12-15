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
const XRegExp = require("xregexp");
const Args = require("vamtiger-argv");
const regex = {
    noChanges: XRegExp('nothing to commit', 'msi')
};
const args = new Args();
const argCommitMessage = args.get('commitMessage') || '';
let commitMessage = 'vamtiger-node-typescript-commit' + argCommitMessage ? `: ${argCommitMessage}` : argCommitMessage;
console.log(commitMessage);
function commit(options) {
    return __awaiter(this, void 0, void 0, function* () {
        // const test = options.test;
        // const updateVersion = options.updateVersion ? options.updateVersion : UpdateVersion.patch;
        // const repositoryPath = options.repositoryPath ? options.repositoryPath : process.argv[1];
        // const sourceBranch = options.sourceBranch ? options.sourceBranch : 'source';
        // const masterBranch = options.masterBranch ? options.masterBranch : 'master';
        // const sourceFolder = options.sourceFolder ? options.sourceFolder : resolvePath(repositoryPath, Folder.source);
        // const sourceFolderName = basename(sourceFolder as string);
        // const buildFolder = options.buildFolder ? options.buildFolder : resolvePath(repositoryPath, Folder.build);
        // const runScript = options.runScript ? options.runScript : RunScript.npm;
        // const buildScript = options.buildScript ? options.buildScript : BuildScript.build;
        // const push = options.push ? true : false;
        // const publish = push && options.publish ? true : false;
        // const bashOptions = {
        //     cwd: repositoryPath as string
        // };
        // const message = test ? `${commitMessage}: Test`: commitMessage;
        // const autoUpdate = await bash(`git pull origin ${sourceBranch}`, bashOptions);
        // const checkoutSource = await bash(`git checkout ${sourceBranch}`, bashOptions);
        // const removeBuild = await bash(`rm -rfv ${buildFolder}`, bashOptions);
        // const addSource = await bash('git add -A', bashOptions);
        // const sourceStatus = await bash('git status', bashOptions);
        // const commitSourceChanges = sourceStatus.match(regex.noChanges) ? false : true;
        // const commitSource = await bash(`git commit -m "${message}"`, bashOptions);
        // const updateSource = await bash(`npm version ${UpdateVersion.prepatch}`, bashOptions);
        // const checkoutMaster = await bash(`git checkout ${masterBranch}`, bashOptions);
        // const mergeFromSource = await bash(`git checkout ${sourceBranch} -- .`, bashOptions);
        // const build = await bash(`${runScript} ${buildScript}`, bashOptions);
        // const removeRedundantSource = await bash(`rm -rfv ${repositoryPath}/yarn.lock ${repositoryPath}/tsconfig.json ${repositoryPath}/.vscode ${sourceFolder}`, bashOptions);
        // const addBuild = await bash('git add -A', bashOptions);
        // const masterStatus = await bash('git status', bashOptions);
        // const commitBuild = await bash(`git commit -m "${message}"`, bashOptions);
        // const updateBuild = await bash(`npm version ${updateVersion}`, bashOptions);
        // let pushSourceUpdate: string;
        // let pushBuildUpdate: string;
        // let publishUpdate: string;
        // if (push) {
        //     pushSourceUpdate = await bash(`git push origin ${sourceBranch}`);
        //     pushBuildUpdate = await bash(`git push -f origin ${masterBranch} --tags`);
        // }
        // if (publish)
        //     publishUpdate = await bash(`npm publish`);
        return true;
    });
}
exports.default = commit;
//# sourceMappingURL=index.js.map