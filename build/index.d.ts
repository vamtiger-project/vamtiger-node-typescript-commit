/// <reference types="node" />
import { PathLike } from 'fs';
export default function main(options: Options): Promise<void>;
export interface Options {
    test: boolean;
    updateVersion?: UpdateVersion;
    sourceBranch?: string;
    masterBranch?: string;
    sourceFolder?: PathLike | string;
    runScript?: RunScript;
    buildScript?: BuildScript | string;
    push?: boolean;
    publish?: boolean;
}
export declare enum UpdateVersion {
    patch = "patch",
    minor = "minor",
    major = "major",
}
export declare enum RunScript {
    npm = "npm run",
    yarn = "yarn",
}
export declare enum BuildScript {
    build = "build",
}
