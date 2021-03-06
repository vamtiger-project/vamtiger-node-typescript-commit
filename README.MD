# VAMTIGER Node Typescript Commit
[VAMTIGER Node Typescript Commit](https://github.com/vamtiger-project/vamtiger-node-typescript-commit) commits unsaved **_source code_** on the **_source_** branch, and merges the corresponding build into the **_master_** branch. The purpose for this commit strategy is to explore the feesibility of removing any requirement/reliance on postinstall configuration by branch-based separation of [Typescript](https://www.typescriptlang.org/) source code and the corresponding [traspiled](https://www.stevefenton.co.uk/2012/11/compiling-vs-transpiling/) result in order to reduce install time.<br>
<sup>_* The **source** branch is thus reserved for **development**._</sup><br>
<sup>_* The **master** branch is always **derived** from the **source** branch._</sup><br>
<img src=https://cdn.rawgit.com/vamtiger-project/vamtiger-node-typescript-commit/HEAD/asset/image/vamtiger-node-typescript-commit.svg style="max-height: 350px; background-color: #f0f0f0; border-radius: 3px" height=350>

## Installation
[VAMTIGER Node Typescript Commit](https://github.com/vamtiger-project/vamtiger-node-typescript-commit) can be installed using [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/lang/en/):
```javascript
npm i --save-dev vamtiger-node-typescript-commit
```
or
```javascript
yarn add --dev vamtiger-node-typescript-commit
```

[VAMTIGER Node Typescript Commit](https://github.com/vamtiger-project/vamtiger-node-typescript-commit) can also be installed globally:
```javascript
npm i --global vamtiger-node-typescript-commit
```
or
```javascript
yarn global vamtiger-node-typescript-commit
```

## Usage
Customiseable options can be listed:
```bash
vamtiger-node-typescript-commit --help
```

[VAMTIGER Node Typescript Commit](https://github.com/vamtiger-project/vamtiger-node-typescript-commit) can be referenced as an [npm](https://www.npmjs.com/) script:
```json
{
    "scripts": {
        "commit": "vamtiger-node-typescript-commit"
    }
}
```

[VAMTIGER Node Typescript Commit](https://github.com/vamtiger-project/vamtiger-node-typescript-commit) can then be executed using:

To push changes to a defined remote repository:
```bash
{
    "scripts": {
        "commit": "vamtiger-node-typescript-commit -- --push"
    }
}
```
<sup>_* "--" before options._</sup><br>

The latest master build can also be published to [npm](https://www.npmjs.com/):
```json
{
    "scripts": {
        "commit": "vamtiger-node-typescript-commit -- --push --publish"
    }
}
```

Once defined as an [npm](https://www.npmjs.com/) script, [VAMTIGER Node Typescript Commit](https://github.com/vamtiger-project/vamtiger-node-typescript-commit) can executed using:
```bash
npm run commit
```

A custom commit meessage can also be defined:
```bash
npm run commit --commitMessage "Some custom commit message"
```

Custom folder names can also be defined:
```bash
npm run commit --buildFolder "build" --sourceFolder "source" # default
```

TS config file can be retained:
```bash
npm run commit --keepTsConfig
```

If installed globally, [VAMTIGER Node Typescript Commit](https://github.com/vamtiger-project/vamtiger-node-typescript-commit) can be run as follows:
```bash
vamtiger-node-typescript-commit --push --publish --otp 123456
```
