import { IArgs, Index } from '../types';
import { RawArgument, RawArguments } from '../raw-arguments';
declare const _default: (params: Params) => void;
export default _default;
export interface Params {
    context: IArgs;
    index: Index;
    args: RawArguments;
    arg: RawArgument;
}
