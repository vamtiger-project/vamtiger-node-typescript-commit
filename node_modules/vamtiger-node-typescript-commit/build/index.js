"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./types"));
const commit_1 = require("./commit");
function main(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const repositoryPath = options.repositoryPath ? options.repositoryPath : process.argv[1];
        const originalWorkingDirector = process.cwd();
        let result;
        process.chdir(repositoryPath);
        result = yield commit_1.default(options);
        return result;
    });
}
exports.default = main;
;
//# sourceMappingURL=index.js.map