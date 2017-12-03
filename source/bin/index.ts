#!/usr/bin/env node

import commit from '..';
import { RunScript } from '..';

export default commit;

const Args = require('vamtiger-argv');
const args = new Args();
const test = args.has('test');
const runScript = args.has('runscript') ? args.get('runscript') as RunScript : RunScript.npm;
const repositoryPath = process.cwd();
const push = args.has('push') as boolean;
const publish = args.has('publish') as boolean;
const params = {
    test,
    runScript,
    repositoryPath,
    push,
    publish
};

main().catch(handleError);

async function main() {
    const commitChanges = await commit(params);

    return commitChanges;
}

function handleError(params: IHandleErrorParams) {
    const error = params.error;
    const errorMessage = error && error.message;
    const errorStack = error && error.stack;

    console.log(errorMessage);
    console.log(errorStack);
    console.log(error);
    
    throw error;
}

interface IHandleErrorParams {
    error: Error;
}