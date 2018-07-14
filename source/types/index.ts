import { PathLike } from 'fs';

export interface Options {
    test?: boolean;
    updateVersion?: UpdateVersion;
    sourceBranch?: string;
    masterBranch?: string
    sourceFolder?: PathLike|string;
    buildFolder?: PathLike|string;
    runScript?: RunScript;
    buildScript?: BuildScript|string;
    push?: boolean;
    publish?: boolean;
    repositoryPath?: PathLike|string;
}

export enum UpdateVersion {
    patch = "patch",
    minor = "minor",
    major = "major",
    prepatch = "prepatch"
}

export enum RunScript {
    npm = "npm run",
    yarn = "yarn"
}

export enum BuildScript {
    build = "build"
}

export enum Folder {
    source = "source",
    build = "build"
}

export enum CommandlineArgument {
    commitMessage = 'commitMessage',
    c = 'c',
    help = 'help',
    h = 'h',
    otp = 'otp',
    o = 'o',
    runscript = 'runscript',
    r = 'r'
}

export enum CommandlineArgumentShort {
    commitMessage = CommandlineArgument.c,
    help = CommandlineArgument.h,
    otp = CommandlineArgument.o,
    runscript = CommandlineArgument.r
}

export enum CommandlineArgumentDescription {
    commitMessage = 'Git commit message',
    help = 'List all commandline arguments',
    otp = 'One time password',
    runscript = 'Run script (npm, yarn)'
}

export type CommandlineArgumentKey = keyof typeof CommandlineArgumentDescription;