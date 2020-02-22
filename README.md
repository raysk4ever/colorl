# color-log

🌈 A colorful logger for the browser

## Installation

```
$ npm i colorl -S
```

## Usage

You can use this logger for your frontend projects, choose as an ES6 module.

```js
import { error, silly } from './logs';

error('your error message here');
silly('your message here');

```
===========OR==============
```js
import log from './logs';

log.error('your error mesg')
log.silly('your message here');

```