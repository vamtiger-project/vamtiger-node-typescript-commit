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
const vamtiger_bash_1 = require("vamtiger-bash");
let commitMessage = 'vamtiger-node-typescript-commit';
function main(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const test = options.test;
        const message = test ? `${commitMessage}: Test` : commitMessage;
        const checkoutSource = yield vamtiger_bash_1.default('git checkout source');
        const status = yield vamtiger_bash_1.default('git status');
        const add = yield vamtiger_bash_1.default('git add -A');
        const commit = yield vamtiger_bash_1.default(`git commit -m "${message}"`);
        console;
    });
}
exports.default = main;
;
//# sourceMappingURL=index.js.map