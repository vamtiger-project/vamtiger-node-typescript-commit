# VAMTIGER Argv
This defines a class for conveniently accessing command-line arguments.

## Installation
[VAMTIGER Argv](https://github.com/vamtiger-project/vamtiger-argv) can be installed using [npm](https://www.npmjs.com/) or [yarn]():
```bash
npm i --save vamtiger-argv
```
or
```bash
yarn add vamtiger-argv
```

## Usage
[Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) or [require](https://nodejs.org/api/modules.html#modules_require) a referece to [VAMTIGER Argv](https://github.com/vamtiger-project/vamtiger-argv):
```javascript
import Args = require('vamtiger-argv');
```
or
```javascript
const Args = require('vamtiger-argv');
```

Any [Node.js](https://nodejs.org/en/) script can be executed with commandline arguments.
```bash
node someNodeProgram.js --someArgument someValue
```

Commandline arguments can then be referenced by name using the **_get_** _method_.
```javascript
const args = new Args();

args.get('someArgument'); // someValue
```

The first argument be referenced by using the **__first__** _method_.
```javascript
argv.first(); // --someArgument
```

Raw commandline arguments can also be referenced by using the **_next_** _method_.
```javascript
args.next('--someArgument'); // someValue
```

The **_has_** _method_ can be used to check whether a commandline arguments is present.
```javascript
args.has('someArgument'); // true
args.has('--someArgument'); // true
args.has('someValue'); // true
args.has('someOtherArgument'); // false
```
