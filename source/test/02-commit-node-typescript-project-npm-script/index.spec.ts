import { writeFile } from 'fs';
import { resolve as resolvePath, dirname } from 'path';
import { expect } from 'chai';
import * as moment from 'moment';
import { promisify } from 'bluebird';
import bash from 'vamtiger-bash';
import {default as commit, RunScript} from '../..';

const write = promisify(writeFile);
const update = `export default "${moment().format('YYYY MMMM DD - hh:mm:ss.SSS')}"`;
const repositoryPath = resolvePath(__dirname, 'test-node-typescript-repository');
const filePath = resolvePath(
    repositoryPath,
    'source',
    'index.ts'
);
const repositoryUrl = 'https://github.com/vamtiger-project/test-node-typescript-repository.git';
const params = {
    test: true,
    runScript: RunScript.yarn,
    repositoryPath,
    push: true,
    publish: true
};
const bashParams = {
    cwd: params.repositoryPath
};
const testRepo = 'https://github.com/vamtiger-project/test-node-typescript-repository.git';
const testRepoParentFolder = dirname(bashParams.cwd);
const bashInitializationParams = {
    cwd: testRepoParentFolder
};
const removeRepo = `rm -rfv ${repositoryPath}`;
const vamtigerNodeTypescriptCommitPath = resolvePath(
    __dirname,
    '../'.repeat(3)
);
const vamtigerNodeTypescriptCommit = `file://${vamtigerNodeTypescriptCommitPath}`;
const npmPath = resolvePath(
    dirname(process.argv[0]),
    'npm'
);

describe('vamtiger-node-typescript-commit', function () {
    this.timeout(90000);
    it.skip('commit a node typescript project from npm script', async function () {
        let remove = await bash(removeRepo);
        const clone = await bash(`git clone "${testRepo}"`, bashInitializationParams);
        const install = await bash(`npm install ${vamtigerNodeTypescriptCommit}`, bashParams);
        const checkoutSource = await bash(`git checkout source`, bashParams);
        const updateFile = await write(filePath, update);
        const commit = await bash(`${npmPath} run commit`, bashParams);

        expect(commit).to.be.ok;

        remove = await bash(removeRepo);
    })
});