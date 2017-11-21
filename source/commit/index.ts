import bash from 'vamtiger-bash';
import { PathLike } from 'fs';
import { resolve as resolvePath} from 'path';
import { Options, UpdateVersion, Folder, RunScript, BuildScript } from '..';

let commitMessage = 'vamtiger-node-typescript-commit';

export default async function commit(options: Options) {
    const test = options.test;
    const updateVersion = options.updateVersion ? options.updateVersion : UpdateVersion.patch;
    const repositoryPath = options.repositoryPath ? options.repositoryPath : process.argv[1];
    const sourceBranch = options.sourceBranch ? options.sourceBranch : 'source';
    const masterBranch = options.masterBranch ? options.masterBranch : 'master';
    const sourceFolder = options.sourceFolder ? options.sourceFolder : resolvePath(repositoryPath, Folder.source);
    const buildFolder = options.buildFolder ? options.buildFolder : resolvePath(repositoryPath, Folder.build);
    const runScript = options.runScript ? options.runScript : RunScript.npm;
    const buildScript = options.buildScript ? options.buildScript : BuildScript.build;
    const push = options.push ? true : false;
    const publish = push && options.publish ? true : false;
    const bashOptions = {
        cwd: repositoryPath as string
    };
    const message = test ? `${commitMessage}: Test`: commitMessage;
    const checkoutSource = await bash(`git checkout ${sourceBranch}`, bashOptions);
    const removeBuild = await bash(`rm -rfv ${buildFolder}`, bashOptions);
    const status = await bash('git status', bashOptions);
    const addSource = await bash('git add -A');
    const commitSource = await bash(`git commit -m "${message}"`, bashOptions);
    const checkoutMaster = await bash(`git checkout ${masterBranch}`, bashOptions);
    const mergeFromSource = await bash(`git merge -X theirs ${sourceBranch}`, bashOptions);
    const build = await bash(`${runScript} ${buildScript}`, bashOptions);
    const removeRedundantSource = await bash(`rm -rfv ${repositoryPath}/yarn.lock ${repositoryPath}/tsconfig ${repositoryPath}/.vscode ${sourceFolder}`, bashOptions);
    const addBuild = await bash('git add -A', bashOptions);
    const commitBuild = await bash(`git commit -m "${message}"`, bashOptions);
    const update = await bash(`npm version ${updateVersion}`, bashOptions);

    let pushUpdate: string[];
    let publishUpdate: string;

    if (push)
        pushUpdate = await Promise.all([
            bash(`git push origin ${sourceBranch}`),
            bash(`git push origin ${masterBranch} --tags`)
        ]);

    if (publish)
        publishUpdate = await bash(`npm publish`);

    return true;
}