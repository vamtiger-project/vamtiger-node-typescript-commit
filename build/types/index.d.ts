/// <reference types="node" />
import { PathLike } from 'fs';
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
    prepatch = "prepatch"
}
export declare enum RunScript {
    npm = "npm run",
    yarn = "yarn"
}
export declare enum BuildScript {
    build = "build"
}
export declare enum Folder {
    source = "source",
    build = "build"
}
export declare enum CommandlineArgument {
    buildScript = "buildScript",
    b = "b",
    commitMessage = "commitMessage",
    c = "c",
    help = "help",
    h = "h",
    otp = "otp",
    o = "o",
    runscript = "runscript",
    r = "r"
}
export declare enum CommandlineArgumentShort {
    commitMessage = "c",
    help = "h",
    otp = "o",
    runscript = "r"
}
export declare enum CommandlineArgumentDescription {
    commitMessage = "Git commit message",
    help = "List all commandline arguments",
    otp = "One time password",
    runscript = "Run script (npm, yarn)"
}
export declare type CommandlineArgumentKey = keyof typeof CommandlineArgumentDescription;
