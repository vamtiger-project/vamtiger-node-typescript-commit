import { writeFile } from 'fs';
import { resolve as resolvePath, dirname } from 'path';
import { expect } from 'chai';
import * as moment from 'moment';
import { promisify } from 'bluebird';
import bash from 'vamtiger-bash';
import {default as commit, RunScript} from '../..';

const write = promisify(writeFile);
const filePath = resolvePath(
    __dirname, 
    '../'.repeat(3),
    'source',
    'test',
    '01-commit-node-typescript-project',
    'test-node-typescript-repository',
    'source',
    'index.ts'
);
const update = `export default "${moment().format('YYYY MMMM DD - hh:mm:ss.SSS')}"`;
const params = {
    test: true,
    runScript: RunScript.yarn,
    repositoryPath: resolvePath(__dirname, 'test-node-typescript-repository').replace('/build/', '/source/'),
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

describe('vamtiger-node-typescript-commit', function () {
    this.timeout(30000);
    it('commit a node typescript project', async function () {
        const clone = await bash(`git clone "${testRepo}"`, bashInitializationParams).catch(error => {
            error
        });
        const checkoutSource = await bash(`git checkout source`,bashParams).catch(error => {
            error
        });
        const updateFile = await write(filePath, update);
        const result = await commit(params);

        expect(result).to.be.ok;
    })
})