import { RawArgument, RawArguments } from '../raw-arguments';
export interface IArgs extends Map<RawArgument, RawArgument | undefined> {
    raw: RawArguments;
    next: (arg: RawArgument) => RawArgument | undefined;
    first: RawArgument | undefined;
    _initialize: (arg: RawArgument, index: Index, args: RawArguments) => void;
}
export declare type Index = number;
