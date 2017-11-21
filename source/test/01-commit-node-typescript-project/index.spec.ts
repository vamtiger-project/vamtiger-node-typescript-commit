import { expect } from 'chai';
import {default as commit, RunScript} from '../..';
import * as path from 'path';

const params = {
    test: true,
    runScript: RunScript.yarn,
    repositoryPath: path.resolve(__dirname, 'test-node-typescript-repository')
};

describe('vamtiger-node-typescript-commit', function () {
    it('commit a node typescript project', async function () {
        const result = await commit(params);

        expect(result).to.be.ok;
    })
})