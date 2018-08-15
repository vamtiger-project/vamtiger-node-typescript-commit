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
    buildFolder = 'buildFolder',
    j = 'j',
    buildScript = 'buildScript',
    b = 'b',
    commitMessage = 'commitMessage',
    c = 'c',
    help = 'help',
    h = 'h',
    otp = 'otp',
    o = 'o',
    runscript = 'runscript',
    r = 'r',
    sourceFolder = 'sourceFolder',
    s = 's'
}

export enum CommandlineArgumentShort {
    buildFolder = CommandlineArgument.j,
    commitMessage = CommandlineArgument.c,
    help = CommandlineArgument.h,
    otp = CommandlineArgument.o,
    runscript = CommandlineArgument.r,
    sourceFolder = CommandlineArgument.s
}

export enum CommandlineArgumentDescription {
    buildFolder = 'Name of the source folder (default = "source")',
    commitMessage = 'Git commit message',
    help = 'List all commandline arguments',
    otp = 'One time password',
    runscript = 'Run script (npm, yarn)',
    sourceFolder = 'Name of the source folder (default = "source")'
}

export type CommandlineArgumentKey = keyof typeof CommandlineArgumentDescription;