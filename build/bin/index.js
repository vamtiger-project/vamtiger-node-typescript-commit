#!/usr/bin/env node
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
const __1 = require("../");
const display_help_1 = require("../display-help");
const __2 = require("../");
exports.default = __1.default;
const Args = require('vamtiger-argv');
const args = new Args();
const test = args.has('test');
const runScript = args.has(__2.CommandlineArgument.runscript) ? args.get(__2.CommandlineArgument.runscript) : __2.RunScript.npm;
const help = args.has(__2.CommandlineArgument.help) || args.has(__2.CommandlineArgumentShort.help);
const repositoryPath = process.cwd();
const push = args.has('push');
const publish = args.has('publish');
const params = {
    test,
    runScript,
    repositoryPath,
    push,
    publish
};
if (help)
    display_help_1.default();
else
    main().catch(handleError);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const commitChanges = yield __1.default(params);
        return commitChanges;
    });
}
function handleError(error) {
    console.warn(error);
    throw error;
}
//# sourceMappingURL=index.js.map