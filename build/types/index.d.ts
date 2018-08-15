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
    buildFolder = "buildFolder",
    j = "j",
    buildScript = "buildScript",
    b = "b",
    commitMessage = "commitMessage",
    c = "c",
    help = "help",
    h = "h",
    otp = "otp",
    o = "o",
    runscript = "runscript",
    r = "r",
    sourceFolder = "sourceFolder",
    s = "s"
}
export declare enum CommandlineArgumentShort {
    buildFolder = "j",
    commitMessage = "c",
    help = "h",
    otp = "o",
    runscript = "r",
    sourceFolder = "s"
}
export declare enum CommandlineArgumentDescription {
    buildFolder = "Name of the source folder (default = \"build\")",
    commitMessage = "Git commit message",
    help = "List all commandline arguments",
    otp = "One time password",
    runscript = "Run script (npm, yarn)",
    sourceFolder = "Name of the source folder (default = \"source\")"
}
export declare type CommandlineArgumentKey = keyof typeof CommandlineArgumentDescription;
