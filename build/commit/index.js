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
const index_1 = require("../index");
const Args = require("vamtiger-argv");
const get_package_data_1 = require("../get-package-data");
const regex = {
    noChanges: XRegExp('nothing to commit', 'msi')
};
const args = new Args();
const commitMessagePrefix = 'vamtiger-node-typescript-commit';
const argCommitMessageSuffix = args.get(index_1.CommandlineArgument.commitMessage) || args.get(index_1.CommandlineArgument.c) || '';
const otp = args.get(index_1.CommandlineArgument.otp) || args.get(index_1.CommandlineArgument.o) || '';
const otpArg = otp ? `--otp=${otp}` : '';
const publishScript = `npm publish ${otpArg}`;
const publishSource = args.has(index_1.CommandlineArgument.publishSource) || args.has(index_1.CommandlineArgument.P);
const buildScriptArg = args.get(index_1.CommandlineArgument.buildScript) || args.get(index_1.CommandlineArgument.b) || '';
let commitMessage = argCommitMessageSuffix ? `${commitMessagePrefix}: ${argCommitMessageSuffix}` : commitMessagePrefix;
function commit(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const packageName = yield get_package_data_1.default('name');
        const test = options.test;
        const updateVersion = options.updateVersion ? options.updateVersion : index_1.UpdateVersion.patch;
        const repositoryPath = options.repositoryPath ? options.repositoryPath : process.argv[1];
        const sourceBranch = options.sourceBranch ? options.sourceBranch : 'source';
        const masterBranch = options.masterBranch ? options.masterBranch : 'master';
        const sourceFolder = options.sourceFolder ? options.sourceFolder : path_1.resolve(repositoryPath, index_1.Folder.source);
        const sourceFolderName = path_1.basename(sourceFolder);
        const buildFolder = options.buildFolder ? options.buildFolder : path_1.resolve(repositoryPath, index_1.Folder.build);
        const runScript = options.runScript ? options.runScript : index_1.RunScript.npm;
        const buildScript = buildScriptArg || options.buildScript && options.buildScript || index_1.BuildScript.build;
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
        const updateSource = yield vamtiger_bash_1.default(`npm version ` + (publishSource && index_1.UpdateVersion.minor || index_1.UpdateVersion.prepatch), bashOptions);
        const sourcePackageVersion = (yield get_package_data_1.default('version')) || '';
        const sourceDistTagsScript = sourcePackageVersion && `npm dist-tags add ${packageName}@${sourcePackageVersion} source ${otpArg}` || '';
        if (publishSource) {
            yield vamtiger_bash_1.default(publishScript, bashOptions);
            sourceDistTagsScript && (yield vamtiger_bash_1.default(sourceDistTagsScript, bashOptions));
        }
        const checkoutMaster = yield vamtiger_bash_1.default(`git checkout ${masterBranch}`, bashOptions);
        const mergeFromSource = yield vamtiger_bash_1.default(`git checkout ${sourceBranch} -- .`, bashOptions);
        const build = yield vamtiger_bash_1.default(`${runScript} ${buildScript}`, bashOptions);
        const redundantSource = [
            path_1.resolve(repositoryPath, 'yarn.lock'),
            args.has('keepTsConfig') ? '' : path_1.resolve(repositoryPath, 'tsconfig.json'),
            args.has('keepTsConfig') ? '' : path_1.resolve(repositoryPath, 'tsconfig-declaration.json'),
            args.has('keepTsConfig') ? '' : path_1.resolve(repositoryPath, 'tsconfig-bin.json'),
            path_1.resolve(repositoryPath, '.vscode'),
            path_1.resolve(repositoryPath, 'cucumber.js'),
            path_1.resolve(repositoryPath, '.python-version'),
            path_1.resolve(repositoryPath, 'LICENSE'),
            path_1.resolve(repositoryPath, 'build/test'),
            sourceFolder
        ].join(' ');
        const removeRedundantSource = yield vamtiger_bash_1.default(`rm -rfv ${redundantSource}`, bashOptions);
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
        if (publish) {
            publishUpdate = yield vamtiger_bash_1.default(publishScript);
        }
        return true;
    });
}
exports.default = commit;
//# sourceMappingURL=index.js.map