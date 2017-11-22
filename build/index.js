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
var UpdateVersion;
(function (UpdateVersion) {
    UpdateVersion["patch"] = "patch";
    UpdateVersion["minor"] = "minor";
    UpdateVersion["major"] = "major";
    UpdateVersion["prepatch"] = "prepatch";
})(UpdateVersion = exports.UpdateVersion || (exports.UpdateVersion = {}));
var RunScript;
(function (RunScript) {
    RunScript["npm"] = "npm run";
    RunScript["yarn"] = "yarn";
})(RunScript = exports.RunScript || (exports.RunScript = {}));
var BuildScript;
(function (BuildScript) {
    BuildScript["build"] = "build";
})(BuildScript = exports.BuildScript || (exports.BuildScript = {}));
var Folder;
(function (Folder) {
    Folder["source"] = "source";
    Folder["build"] = "build";
})(Folder = exports.Folder || (exports.Folder = {}));
//# sourceMappingURL=index.js.map