"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const newLine = '\n';
exports.default = (params) => {
    const header = params.header;
    const body = params.body;
    const rowLeangth = body[0].length;
    const headerLine = header && types_1.Marker.header.repeat(rowLeangth);
    const headerRow = headerLine && [
        headerLine,
        header,
        headerLine
    ].join(newLine) || '';
    const bodyLine = types_1.Marker.body.repeat(rowLeangth);
    const bodyRows = body.join(`${newLine}${bodyLine}${newLine}`);
    const tableString = [
        headerRow,
        bodyRows,
        bodyLine
    ].join(newLine);
    return tableString;
};
//# sourceMappingURL=index.js.map