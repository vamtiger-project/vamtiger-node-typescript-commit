import { resolve as resolvePath } from 'path';

const packageJsonPath = resolvePath(
    __dirname,
    '../package'
);

export default function (field: Field) {
    const packageJson = require(packageJsonPath);

    if (field === 'version') {
        return packageJson.version as string;
    } else if (field === 'name') {
        return packageJson.name as string;
    }
}

export type Field = 'version' | 'name';