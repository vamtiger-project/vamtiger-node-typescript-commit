"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../");
const getStringTable = require('vamtiger-get-string-table').default;
exports.default = () => {
    const argumentKeys = Object.keys(__1.CommandlineArgumentDescription);
    const argumentDetails = argumentKeys
        .map(argumentKey => [
        '--' + __1.CommandlineArgument[argumentKey],
        '-' + __1.CommandlineArgumentShort[argumentKey],
        __1.CommandlineArgumentDescription[argumentKey]
    ]).sort();
    const help = getStringTable({
        header: [
            'Argument',
            'Shortcut',
            'Description'
        ],
        body: argumentDetails,
    });
    console.log(help);
};
//# sourceMappingURL=index.js.map