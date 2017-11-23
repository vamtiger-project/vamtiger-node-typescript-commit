/// <reference types="node" />
import { PathLike } from 'fs';
export default function main(options: Options): Promise<boolean>;
export interface Options {
    test?: boolean;
    updateVersion?: UpdateVersion;
    sourceBranch?: string;
    masterBranch?: string;
    sourceFolder?: PathLike | string;
    buildFolder?: PathLike | string;
    runScript?: RunScript;
    buildScript?: BuildScript | string;
    push?: boolean;
    publish?: boolean;
    repositoryPath?: PathLike | string;
}
export declare enum UpdateVersion {
    patch = "patch",
    minor = "minor",
    major = "major",
    prepatch = "prepatch",
}
export declare enum RunScript {
    npm = "npm run",
    yarn = "yarn",
}
export declare enum BuildScript {
    build = "build",
}
export declare enum Folder {
    source = "source",
    build = "build",
}
