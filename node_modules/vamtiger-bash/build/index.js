"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const BlueBird = require("bluebird");
exports.default = BlueBird.promisify(child_process_1.exec);
//# sourceMappingURL=index.js.map