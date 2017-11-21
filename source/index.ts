import bash from 'vamtiger-bash';

let commitMessage = 'vamtiger-node-typescript-commit';

export default async function main(options: Options) {
    const test = options.test;
    const message = test ? `${commitMessage}: Test`: commitMessage;
    const checkoutSource = await bash('git checkout source');
    const status = await bash('git status');
    const add = await bash('git add -A');
    const commit = await bash(`git commit -m "${message}"`);

    console
};

export interface Options {
    test: boolean;
}