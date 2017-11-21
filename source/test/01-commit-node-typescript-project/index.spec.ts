import { expect } from 'chai';
import commit from '../..';

const params = {
    test: true
};

describe('vamtiger-node-typescript-commit', function () {
    it('commit a node typescript project', async function () {
        const result = await commit(params);

        expect(result).to.be.ok;
    })
})