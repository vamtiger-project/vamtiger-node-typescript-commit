import { ExecOptions} from 'child_process';
import bash from 'vamtiger-bash';
import { PathLike } from 'fs';
import { resolve as resolvePath, basename} from 'path';
import * as XRegExp from 'xregexp';
import { Options, UpdateVersion, Folder, RunScript, BuildScript, CommandlineArgument } from '../index';
import Args = require('vamtiger-argv');

const regex = {
    noChanges: XRegExp('nothing to commit', 'msi')
};
const args = new Args();
const commitMessagePrefix = 'vamtiger-node-typescript-commit';
const argCommitMessageSuffix = args.get(CommandlineArgument.commitMessage) || args.get(CommandlineArgument.c) || '';
const otp = args.get(CommandlineArgument.otp) || args.get(CommandlineArgument.o)  || '';
const otpArg = otp ? `--otp=${otp}` : '';

let commitMessage = argCommitMessageSuffix ? `${commitMessagePrefix}: ${argCommitMessageSuffix}` : commitMessagePrefix;

export default async function commit(options: Options) {
    const test = options.test;
    const updateVersion = options.updateVersion ? options.updateVersion : UpdateVersion.patch;
    const repositoryPath = options.repositoryPath ? options.repositoryPath as string : process.argv[1];
    const sourceBranch = options.sourceBranch ? options.sourceBranch : 'source';
    const masterBranch = options.masterBranch ? options.masterBranch : 'master';
    const sourceFolder = options.sourceFolder ? options.sourceFolder : resolvePath(repositoryPath, Folder.source);
    const sourceFolderName = basename(sourceFolder as string);
    const buildFolder = options.buildFolder ? options.buildFolder : resolvePath(repositoryPath, Folder.build);
    const runScript = options.runScript ? options.runScript : RunScript.npm;
    const buildScript = options.buildScript ? options.buildScript : BuildScript.build;
    const push = options.push ? true : false;
    const publish = push && options.publish ? true : false;
    const bashOptions = {
        cwd: repositoryPath as string
    };
    const message = test ? `${commitMessage}: Test`: commitMessage;
    const autoUpdate = await bash(`git pull origin ${sourceBranch}`, bashOptions);
    const checkoutSource = await bash(`git checkout ${sourceBranch}`, bashOptions);
    const removeBuild = await bash(`rm -rfv ${buildFolder}`, bashOptions);
    const addSource = await bash('git add -A', bashOptions);
    const sourceStatus = await bash('git status', bashOptions);
    const commitSourceChanges = sourceStatus.match(regex.noChanges) ? false : true;
    const commitSource = await bash(`git commit -m "${message}"`, bashOptions);
    const updateSource = await bash(`npm version ${UpdateVersion.prepatch}`, bashOptions);
    const checkoutMaster = await bash(`git checkout ${masterBranch}`, bashOptions);
    const mergeFromSource = await bash(`git checkout ${sourceBranch} -- .`, bashOptions);
    const build = await bash(`${runScript} ${buildScript}`, bashOptions);
    const redundantSource = [
        resolvePath(repositoryPath, 'yarn.lock'),
        args.has('keepTsConfig') ? '' : resolvePath(repositoryPath, 'tsconfig.json'),
        args.has('keepTsConfig') ? '' : resolvePath(repositoryPath, 'tsconfig-declaration.json'),
        resolvePath(repositoryPath, '.vscode'),
        sourceFolder
    ].join(' ')
    const removeRedundantSource = await bash(`rm -rfv ${redundantSource}`, bashOptions);
    const addBuild = await bash('git add -A', bashOptions);
    const masterStatus = await bash('git status', bashOptions);
    const commitBuild = await bash(`git commit -m "${message}"`, bashOptions);
    const updateBuild = await bash(`npm version ${updateVersion}`, bashOptions);

    let pushSourceUpdate: string;
    let pushBuildUpdate: string;
    let publishUpdate: string;

    if (push) {
        pushSourceUpdate = await bash(`git push origin ${sourceBranch}`);
        pushBuildUpdate = await bash(`git push -f origin ${masterBranch} --tags`);
    }

    if (publish)
        publishUpdate = await bash(`npm publish ${otpArg}`);

    return true;
}

interface IHandleError {
    error: Error;
    bashOptions: ExecOptions;
}