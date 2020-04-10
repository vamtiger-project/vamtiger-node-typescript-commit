# VAMTIGER Bash
Programmatically execute [bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) scripts.

## Installation
[VAMTIGER Bash](https://github.com/vamtiger-project/vamtiger-bash/tree/master) can be installed using [npm](https://www.npmjs.com/) or [yarn]():
```bash
npm instal --save vamtiger-bash
```
or
```bash
yarn add vamtiger-bash
```

## Usage
[Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) or [require](https://nodejs.org/api/modules.html#modules_require) a referece to [VAMTIGER Bash](https://github.com/vamtiger-project/vamtiger-bash/tree/master):
```javascript
import bash from 'vamtiger-bash';
```
or
```javascript
const bash = require('vamtiger-bash').default;
```
Executing a [bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) script returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise):
```javascript
bash('some bash code')
    .then(handleResult)
    .catch(handleError);
```
Since [VAMTIGER Bash](https://github.com/vamtiger-project/vamtiger-bash/tree/master) returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), the result can be more conveniently referenced within an [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function):
```javascript
async someAsyncFunction function() {
    const bashResult = await bash('some bash code');
}
```