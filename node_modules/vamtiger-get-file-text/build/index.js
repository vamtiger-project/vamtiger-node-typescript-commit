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
const vamtiger_get_file_data_1 = require("vamtiger-get-file-data");
exports.default = (filePath) => __awaiter(this, void 0, void 0, function* () {
    const fileText = yield vamtiger_get_file_data_1.default(filePath, 'utf-8');
    return fileText;
});
//# sourceMappingURL=index.js.map