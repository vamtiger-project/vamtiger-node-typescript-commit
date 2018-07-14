export * from './types';

import { Options } from './types';
import commit from './commit';

export default async function main(options: Options) {
    const repositoryPath = options.repositoryPath ? options.repositoryPath : process.argv[1];
    const originalWorkingDirector = process.cwd();

    let result: boolean;

    process.chdir(repositoryPath as string);

    result = await commit(options);

    return result;
};