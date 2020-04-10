"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (params) => {
    const rows = params.rows;
    const columnSizes = [];
    let updateColumnSize;
    let columnSize;
    rows.forEach((row, rowIndex) => row.forEach((column, columnIndex) => {
        columnSize = columnSizes[columnIndex];
        !columnSizes.length
            ||
                !columnSize
            ||
                columnSize < column.length
            ?
                columnSizes[columnIndex] = column.length
            :
                undefined;
    }));
    return columnSizes;
};
//# sourceMappingURL=index.js.map