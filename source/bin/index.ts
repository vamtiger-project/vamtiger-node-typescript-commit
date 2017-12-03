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

function handleError(error: Error) {
    console.log(error);
    
    throw error;
}