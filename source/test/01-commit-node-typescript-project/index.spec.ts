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

describe('vamtiger-node-typescript-commit', function () {
    this.timeout(90000);
    it('commit a node typescript project', async function () {
        let remove = await bash(removeRepo);
        const clone = await bash(`git clone "${testRepo}"`, bashInitializationParams);
        const checkoutSource = await bash(`git checkout source`,bashParams);
        const updateFile = await write(filePath, update);
        const result = await commit(params);

        expect(result).to.be.ok;

        remove = await bash(removeRepo);
    })
})