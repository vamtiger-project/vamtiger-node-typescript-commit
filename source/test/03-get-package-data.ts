import { expect } from 'chai';
import getPackageData from '../get-package-data';

const name = getPackageData('name');
const packageVersion = getPackageData('version');

describe.only('get-package-data', function () {
    it('name', async function () {
        expect(name).to.be.ok;
    })
    
    it('version', async function () {
        expect(packageVersion).to.be.ok;
    });
})