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
const path_1 = require("path");
const vamtiger_get_file_text_1 = require("vamtiger-get-file-text");
const { cwd } = process;
const { parse } = JSON;
const packageJsonPath = path_1.resolve(cwd(), 'package.json');
function default_1(field) {
    return __awaiter(this, void 0, void 0, function* () {
        const packageJsonText = yield vamtiger_get_file_text_1.default(packageJsonPath);
        const packageJson = parse(packageJsonText);
        if (field === 'version') {
            return packageJson.version;
        }
        else if (field === 'name') {
            return packageJson.name;
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=get-package-data.js.map