# color-log

🌈 A colorful logger for the browser

## Installation

```
$ npm i colorl -S
```

## demo

![demo](https://ibb.co/GfDYR7Z)

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

## API

```js
log.info('your error mesg') // for info
log.warn('your error mesg') // for warnings
log.error('your error mesg') // for errors
log.debug('your error mesg') // for debuging (check log level is in debug or all in the browser)
log.silly('your error mesg') // for silly logs
log.verbose('your error mesg') // for verbose 
log.custom('your error mesg', 'My Custom Tag Name', 'css style here') // for custom log which can also take css style for custom style
```

### custom log example
```js

const style = 'background-image: linear-gradient(90deg, #FFAFBD, #ffc3a0); padding: 5px; color: #fff; border-radius: 8px';
const message = 'hi, checkout this is so cool';
const Tag = 'My Tag Name';

custom(message, Tag, style);

```
