declare const regex: RegExp;
export default regex;
export interface IMatch {
    dash?: string;
    afterDash?: string;
}
export declare type Match = RegExpExecArray & IMatch;
