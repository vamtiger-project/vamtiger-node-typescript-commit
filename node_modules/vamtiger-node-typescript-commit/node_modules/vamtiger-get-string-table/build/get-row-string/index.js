"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
exports.default = (params) => {
    const row = params.row;
    const columnSizes = params.columnSizes;
    const rowString = row
        .map((column, index) => column.padEnd(columnSizes[index]))
        .join(` ${types_1.Marker.vertical} `);
    return `${types_1.Marker.vertical} ${rowString} ${types_1.Marker.vertical}`;
};
//# sourceMappingURL=index.js.map