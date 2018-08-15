#!/usr/bin/env node

import commit from '../';
import displayHelp from '../display-help';
import { RunScript, CommandlineArgument, CommandlineArgumentShort } from '../';

export default commit;

const Args = require('vamtiger-argv');
const args = new Args();
const test = args.has('test');
const runScript = args.has(CommandlineArgument.runscript) ? args.get(CommandlineArgument.runscript) as RunScript : RunScript.npm;
const help = args.has(CommandlineArgument.help) || args.has(CommandlineArgumentShort.help)
const repositoryPath = process.cwd();
const push = args.has('push') as boolean;
const publish = args.has('publish') as boolean;
const buildFolder = (args.has(CommandlineArgument.j) || args.has(CommandlineArgument.buildFolder)) && args.get(CommandlineArgument.buildFolder);
const sourceFolder = (args.has(CommandlineArgument.s) || args.has(CommandlineArgument.sourceFolder)) && args.get(CommandlineArgument.sourceFolder);
const params = {
    test,
    runScript,
    repositoryPath,
    push,
    publish,
    buildFolder,
    sourceFolder
};

if (help)
    displayHelp();
else
    main().catch(handleError);

async function main() {
    const commitChanges = await commit(params);

    return commitChanges;
}

function handleError(error: Error) {
    console.warn(error);

    throw error;
}