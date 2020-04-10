# VAMTIGER Get String Table
VAMTIGER Get String Table will return a string for a defined tabular data.

## Installation
[VAMTIGER Get String Table](https://github.com/vamtiger-project/vamtiger-get-string-table) can be installed using [npm](https://www.npmjs.com/) or [yarn]():
```bash
npm i --save vamtiger-get-string-table
```
or
```bash
yarn add vamtiger-get-string-table
```

## Usage
[Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) or [require](https://nodejs.org/api/modules.html#modules_require) a referece to [VAMTIGER Get String Table](https://github.com/vamtiger-project/vamtiger-get-string-table):
```javascript
import getStringTable from 'vamtiger-get-string-table';
```
or
```javascript
const getStringTable = require('vamtiger-get-string-table').default;
```

A representative string table can be reference for structured tabular data.
```javascript
const someTabularData = {
    // Optional, but recommended
    header: ['Column 1', 'Column 1', 'Column 1'],
    body: [
        ['Value 1', 'Value 1', 'Value 1'],
        ['Value 1', 'Value 1', 'Value 1'],
        ['Value 1', 'Value 1', 'Value 1']
    ]
}
const stringTable = getStringTable(someTabularData);

/*
==================================
| Column 1 | Column 2 | Column 3 |
==================================
| Value 1  | Value 2  | Value 3  |
----------------------------------
| Value 1  | Value 2  | Value 3  |
----------------------------------
| Value 1  | Value 2  | Value 3  |
----------------------------------
*/
```

Table markers can be hidden, by setting the __**hideMarker**__ option to __**true**__.
```javascript
const someTabularData = {
    // Optional, but recommended
    header: ['Column 1', 'Column 1', 'Column 1'],
    body: [
        ['Value 1', 'Value 1', 'Value 1'],
        ['Value 1', 'Value 1', 'Value 1'],
        ['Value 1', 'Value 1', 'Value 1']
    ],
    hideMarker: true
}
const stringTable = getStringTable(someTabularData);

/*
  Column 1   Column 2   Column 3  
                                  
  Value 1    Value 2    Value 3   
                                  
  Value 1    Value 2    Value 3   
                                  
  Value 1    Value 2    Value 3  
*/
```