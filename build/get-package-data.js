"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const { cwd } = process;
const packageJsonPath = path_1.resolve(cwd(), 'package');
function default_1(field) {
    const packageJson = require(packageJsonPath);
    if (field === 'version') {
        return packageJson.version;
    }
    else if (field === 'name') {
        return packageJson.name;
    }
}
exports.default = default_1;
//# sourceMappingURL=get-package-data.js.map