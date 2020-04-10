"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_column_sizes_1 = require("./get-column-sizes");
const get_row_string_1 = require("./get-row-string");
const get_table_string_1 = require("./get-table-string");
const types_1 = require("./types");
const MarkerObject = types_1.Marker;
const Marker = MarkerObject;
exports.default = (params) => {
    const header = params.header;
    const body = params.body;
    const hideMarker = params.hideMarker;
    const markerPattern = hideMarker && Object
        .keys(Marker)
        .map(key => Marker[key] === types_1.Marker.vertical ? `(\\${Marker[key]})` : `(${Marker[key]})`)
        .join(types_1.Marker.vertical);
    const markerRegex = markerPattern && new RegExp(markerPattern, 'gm');
    const rows = header && [header].concat(body) || body;
    const columnSizes = get_column_sizes_1.default({ rows });
    const headerString = header && get_row_string_1.default({
        row: header,
        columnSizes
    });
    const bodyRowStrings = body.map(row => get_row_string_1.default({
        row,
        columnSizes
    }));
    let tableString = get_table_string_1.default({
        header: headerString,
        body: bodyRowStrings
    });
    if (markerRegex)
        tableString = tableString.replace(markerRegex, ' ');
    return tableString.trim();
};
//# sourceMappingURL=index.js.map