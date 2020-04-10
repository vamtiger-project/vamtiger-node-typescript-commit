# VAMTIGER Bash
A [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to match leading **_dash_** character(s) for a defined input string.

## Installation
[VAMTIGER Regex Leading Dash](https://github.com/vamtiger-project/vamtiger-regex-leading-dash) can be installed using [npm](https://www.npmjs.com/) or [yarn]():
```bash
npm i --save vamtiger-regex-leading-dash
```
or
```bash
yarn add vamtiger-regex-leading-dash
```

## Usage
[Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) or [require](https://nodejs.org/api/modules.html#modules_require) a referece to [VAMTIGER Regex Leading Dash](https://github.com/vamtiger-project/vamtiger-regex-leading-dash):
```javascript
import regex from 'vamtiger-regex-leading-dash';
```
or
```javascript
const regex = require('vamtiger-regex-leading-dash').default;
```

[VAMTIGER Regex Leading Dash](https://github.com/vamtiger-project/vamtiger-regex-leading-dash) can then be used to test whether a defined input string contains a _leading_ **Dash**:
```javascript
import regex from 'vamtiger-regex-leading-dash';

const input = '-SomeInputStringWithALeadingDash';
const match = input.match(regex);

/**
 * if (match) {
 *     // Yep, the input string has a leading dash
 *     match[0] === '-';
 *     match[1] === 'SomeInputStringWithALeadingDash'
 * }
 **/
```

Named capture groups can be referenced when used together with [XRegExp](https://www.npmjs.com/package/xregexp):
```javascript
import * as XRegExp from 'xregexp';
import {default as regex, Match} from 'vamtiger-regex-leading-dash';
const input = '--SomeInputStringWithALeadingDashes';
const match = XRegExp.exec(input, regex);
// const match: Match = XRegExp.exec(input, regex); // Typescript

/**
 * if (match) {
 *     // Yep, the input string has a leading dashes
 *     match[0] === '--';
 *     match[1] === 'SomeInputStringWithALeadingDash';
 *     match.dash === '--';
 *     match.afterDash === 'SomeInputStringWithALeadingDashes';
 * }
 **/
```
