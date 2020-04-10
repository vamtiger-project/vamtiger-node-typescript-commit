"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const XRegExp = require("xregexp");
const vamtiger_regex_leading_dash_1 = require("vamtiger-regex-leading-dash");
exports.default = (params) => {
    const context = params.context;
    const index = params.index;
    const args = params.args;
    const arg = params.arg;
    const match = XRegExp.exec(arg, vamtiger_regex_leading_dash_1.default);
    let argValue;
    if (match && match.afterDash) {
        argValue = args[index + 1] && args[index + 1].match(vamtiger_regex_leading_dash_1.default) ? undefined : args[index + 1];
        context.set(arg, argValue);
        context.set(match.afterDash, argValue);
        if (!context.first)
            context.first = arg;
    }
};
//# sourceMappingURL=index.js.map