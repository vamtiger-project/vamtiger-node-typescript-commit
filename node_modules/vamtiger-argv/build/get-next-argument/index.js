"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (params) => {
    const arg = params.arg;
    const args = params.args;
    let index = 0;
    let currentArg;
    let nextArg;
    for (index; index < args.length; index++) {
        currentArg = args[index];
        if (currentArg === arg) {
            nextArg = args[index + 1];
            break;
        }
    }
    return nextArg;
};
//# sourceMappingURL=index.js.map