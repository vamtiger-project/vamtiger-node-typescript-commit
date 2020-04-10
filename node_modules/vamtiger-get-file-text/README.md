# VAMTIGER Get Path Data
[VAMTIGER Get File Text](https://github.com/vamtiger-project/vamtiger-get-file-text) returns text for a defined file path.

## Installation
[VAMTIGER Get File Text](https://github.com/vamtiger-project/vamtiger-get-file-text) can be installed using [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/lang/en/):
```javascript
npm i vamtiger-get-file-text 
```
or
```javascript
yarn add vamtiger-get-file-text
```

## Usage
[Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) or [require](https://nodejs.org/api/modules.html#modules_require) a referece to [VAMTIGER Get File Text](https://github.com/vamtiger-project/vamtiger-get-file-text):
```javascript
import getFileText from 'vamtiger-get-file-text';
```
or
```javascript
const getFileText = require('vamtiger-get-file-text').default;
```

[VAMTIGER Get File Text](https://github.com/vamtiger-project/vamtiger-get-file-text) will return text for defined file path.:
```javascript
const fileText = getFileText('some/file/absolute/path')
    .then(handleResult)
    .catch(handleError);
```

Since [VAMTIGER Get File Text](https://github.com/vamtiger-project/vamtiger-get-file-text) returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), it can be more conveniently executed within an [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function):
```javascript
async someAsyncFunction function() {
    const fileText = await getFileText('some/file/absolute/path');
}
``` 
