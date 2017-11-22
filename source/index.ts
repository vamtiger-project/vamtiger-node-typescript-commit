import { PathLike } from 'fs';
import commit from './commit';

export default async function main(options: Options) {
    const repositoryPath = options.repositoryPath ? options.repositoryPath : process.argv[1];
    const originalWorkingDirector = process.cwd();

    let result: boolean;

    process.chdir(repositoryPath as string);

    result = await commit(options);

    return result
};

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