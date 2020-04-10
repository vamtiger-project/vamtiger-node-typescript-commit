/// <reference types="node" />
import { PathLike } from 'fs';
declare const _default: (filePath: PathLike) => Promise<string>;
export default _default;
export declare type FilePath = PathLike | string;
