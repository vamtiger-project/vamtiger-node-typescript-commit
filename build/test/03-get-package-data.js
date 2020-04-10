"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const get_package_data_1 = require("../get-package-data");
const name = get_package_data_1.default('name');
const packageVersion = get_package_data_1.default('version');
describe.only('get-package-data', function () {
    it('name', function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.expect(name).to.be.ok;
        });
    });
    it('version', function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.expect(packageVersion).to.be.ok;
        });
    });
});
//# sourceMappingURL=03-get-package-data.js.map