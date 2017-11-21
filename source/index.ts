import bash from 'vamtiger-bash';
import { PathLike } from 'fs';

let commitMessage = 'vamtiger-node-typescript-commit';

export default async function main(options: Options) {
    const test = options.test;
    const updateVersion = options.updateVersion ? options.updateVersion : UpdateVersion.patch;
    const sourceBranch = options.sourceBranch ? options.sourceBranch : 'source';
    const masterBranch = options.masterBranch ? options.masterBranch : 'master';
    const sourceFolder = options.sourceFolder ? options.sourceFolder : sourceBranch;
    const runScript = options.runScript ? options.runScript : RunScript.npm;
    const buildScript = options.buildScript ? options.buildScript : BuildScript.build;
    const push = options.push ? true : false;
    const publish = push && options.publish ? true : false;
    const message = test ? `${commitMessage}: Test`: commitMessage;
    const checkoutSource = await bash(`git checkout ${sourceBranch}`);
    const status = await bash('git status');
    const removeBuild = await bash('rm -rfv build');
    const addSource = await bash('git add -A');
    const commitSource = await bash(`git commit -m "${message}"`);
    const checkoutMaster = await bash(`git checkout ${masterBranch}`);
    const mergeFromSource = await bash(`git merge ${sourceBranch}`);
    const build = await bash(`${runScript} ${buildScript}`);
    const removeRedundantSource = await bash(`rm -rfv yarn.lock tsconfig .vscode ${sourceFolder}`);
    const addBuild = await bash('git add -A');
    const commitBuild = await bash(`git commit -m "${message}"`);
    const update = await bash(`npm version ${updateVersion}`);

    let pushUpdate: string[];
    let publishUpdate: string;

    if (push)
        pushUpdate = await Promise.all([
            bash(`git push origin ${sourceBranch}`),
            bash(`git push origin ${masterBranch} --tags`)
        ]);

    if (publish)
        publishUpdate = await bash(`npm publish`);

    console
};

export interface Options {
    test: boolean;
    updateVersion?: UpdateVersion;
    sourceBranch?: string;
    masterBranch?: string
    sourceFolder?: PathLike|string;
    runScript?: RunScript;
    buildScript?: BuildScript|string;
    push?: boolean;
    publish?: boolean;
}

export enum UpdateVersion {
    patch = "patch",
    minor = "minor",
    major = "major"
}

export enum RunScript {
    npm = "npm run",
    yarn = "yarn"
}

export enum BuildScript {
    build = "build"
}