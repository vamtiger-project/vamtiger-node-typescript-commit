# VAMTIGER Node Typescript Commit
[VAMTIGER Node Typescript Commit](https://github.com/vamtiger-project/vamtiger-node-typescript-commit) commits unsaved **_source code_** on the **_source_** branch, and merges the corresponding build into the **_master_** branch. The purpose for this commit strategy is to explore the feesibility of removing any requirement/reliance on any postinstall configuration by branch-based separation of [Typescript](https://www.typescriptlang.org/) source code and the corresponding [traspiled](https://www.stevefenton.co.uk/2012/11/compiling-vs-transpiling/) result to reduce install time.<br>
<sup>_* The **Source** branch is thus always reserved for **development**._</sup>
<sup>_* The **Master** branch is thus always **derived** from the **source** branch._</sup>

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
[VAMTIGER Node Typescript Commit](https://github.com/vamtiger-project/vamtiger-node-typescript-commit) can be referenced as an [npm](https://www.npmjs.com/) script:
```javascript
{
    ...
    "scripts": {
        "commit": "vamtigerNodeTypescriptCommit"
    }
    ...
}
```

[VAMTIGER Node Typescript Commit](https://github.com/vamtiger-project/vamtiger-node-typescript-commit) can then be executed using:

To push changes to a defined the default remote repository:
```bash
npm run commit
```

The latest master build can be published to [npm](https://www.npmjs.com/):
```javascript
{
    ...
    "scripts": {
        "commit": "vamtigerNodeTypescriptCommit --push --publish"
    }
    ...
}
```

If installed globally, (https://github.com/vamtiger-project/vamtiger-node-typescript-commit) can be run as follows:
```bash
vamtigerNodeTypescriptCommit --push --publish
```