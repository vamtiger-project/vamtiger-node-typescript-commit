"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const raw_arguments_1 = require("../raw-arguments");
const initialize_1 = require("../initialize");
const get_next_argument_1 = require("../get-next-argument");
class Args extends Map {
    constructor() {
        super();
        this.first = undefined;
        this.raw.forEach((arg, index, args) => this._initialize(arg, index, args));
    }
    get raw() {
        return raw_arguments_1.default;
    }
    next(arg) {
        const args = this.raw;
        return get_next_argument_1.default({ arg, args });
    }
    _initialize(arg, index, args) {
        const context = this;
        initialize_1.default({ context, arg, index, args });
    }
}
exports.default = Args;
;
//# sourceMappingURL=index.js.map