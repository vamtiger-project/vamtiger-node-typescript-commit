/// <reference types="node" />
/// <reference types="bluebird" />
import { ExecOptions } from 'child_process';
import * as BlueBird from 'bluebird';
export declare type VamtigerBash = (script: string, options?: ExecOptions) => BlueBird<string>;
declare const _default: VamtigerBash;
export default _default;
