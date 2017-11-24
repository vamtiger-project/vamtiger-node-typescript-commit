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

main().catch(error => handleError({error}));

async function main() {
    const commitChanges = await commit(params);

    return commitChanges;
}

function handleError(params: IHandleErrorParams) {
    const error = params.error;

    console.warn(error.message);
    console.warn(error.stack);
    
    throw error;
}

interface IHandleErrorParams {
    error: Error;
}