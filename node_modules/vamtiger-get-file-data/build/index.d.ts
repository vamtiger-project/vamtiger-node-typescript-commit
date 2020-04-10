/// <reference types="node" />
import { readFile } from 'fs';
declare const getFileData: typeof readFile.__promisify__;
export default getFileData;
