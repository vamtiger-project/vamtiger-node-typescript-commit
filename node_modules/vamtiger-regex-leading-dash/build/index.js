"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const XRegExp = require("xregexp");
const pattern = `^
        (?<dash>
            \\-+
        )
        (?<afterDash>
            .*?
        )
    $`, flags = 'xnms', regex = XRegExp(pattern, flags);
exports.default = regex;
//# sourceMappingURL=index.js.map