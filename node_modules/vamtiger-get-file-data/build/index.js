"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const util_1 = require("util");
const BlueBird = require("bluebird");
const getFileData = util_1.promisify && util_1.promisify(fs_1.readFile) || BlueBird.promisify(fs_1.readFile);
exports.default = getFileData;
//# sourceMappingURL=index.js.map