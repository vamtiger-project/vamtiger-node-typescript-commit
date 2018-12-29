import { resolve as resolvePath } from 'path';
import getFileText from 'vamtiger-get-file-text';

const { cwd } = process;
const { parse } = JSON;
const packageJsonPath = resolvePath(
    cwd(),
    'package.json'
);

export default async function (field: Field) {
    const packageJsonText = await getFileText(packageJsonPath);
    const packageJson = parse(packageJsonText);

    if (field === 'version') {
        return packageJson.version as string;
    } else if (field === 'name') {
        return packageJson.name as string;
    }
}

export type Field = 'version' | 'name';