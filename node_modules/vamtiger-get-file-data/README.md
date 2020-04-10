# VAMTIGER Get File Data
[VAMTIGER Get File Data](https://github.com/vamtiger-project/vamtiger-get-file-data) returns data associated for a defined file path.

## Installation
[VAMTIGER Get File Data](https://github.com/vamtiger-project/vamtiger-get-file-data) can be installed using [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/lang/en/):
```javascript
npm i vamtiger-get-file-data
```
or
```javascript
yarn add vamtiger-get-file-data
```

## Usage
[Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) or [require](https://nodejs.org/api/modules.html#modules_require) a referece to [VAMTIGER Get File Data](https://github.com/vamtiger-project/vamtiger-get-file-data):
```javascript
import getFileData from 'vamtiger-get-file-data';
```
or
```javascript
const getFileData = require('vamtiger-get-file-data').default;
```

[VAMTIGER Get File Data](https://github.com/vamtiger-project/vamtiger-get-file-data) will return data for defined file path as a [buffer](https://nodejs.org/api/buffer.html):
```javascript
const fileData = getFileData('some/file/absolute/path')
    .then(handleResult)
    .catch(handleError);
```

When defining the encoding as **utf-8**, data will be returned as a string:
```javascript
const fileText = getFileData('some/file/absolute/path', 'utf-8')
    .then(handleResult)
    .catch(handleError);
```

Since [VAMTIGER Get File Data](https://github.com/vamtiger-project/vamtiger-get-file-data) returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), it can be more conveniently executed within an [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function):
```javascript
async someAsyncFunction function() {
    const fileData = await getFileData('some/file/absolute/path');
}
```