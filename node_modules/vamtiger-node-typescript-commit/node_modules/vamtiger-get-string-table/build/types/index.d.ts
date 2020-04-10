export interface MainParams {
    header?: Row;
    body: Rows;
    hideMarker?: boolean;
}
export interface GetColumnSizesParams {
    rows: Rows;
}
export interface GetRowString {
    row: Row;
    columnSizes: number[];
}
export interface GetTableStringParams {
    header?: string;
    body: Row;
}
export interface StringObject {
    [key: string]: string;
}
export declare enum Marker {
    header = "=",
    body = "-",
    vertical = "|",
}
export declare type Row = string[];
export declare type Rows = Row[];
