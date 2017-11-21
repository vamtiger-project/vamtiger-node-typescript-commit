import { expect } from 'chai';
import {default as commit, RunScript} from '../..';

const params = {
    test: true,
    runScript: RunScript.yarn
};

describe('vamtiger-node-typescript-commit', function () {
    it('commit a node typescript project', async function () {
        const result = await commit(params);

        expect(result).to.be.ok;
    })
})