# eval-debug

A wrapper around [debug](https://github.com/visionmedia/debug/) if you are worried about the 
performance penalty of creating logging data in production mode.

## usage

```js

const createDebug = require('harrysarson/eval-debug');

const debug = createDebug('namespace');

debug('%e', expensiveFunction);

// will log the return value of expensiveFunction(). 
// expensiveFunction() will not be called unless debug is enabled


```

## warning

Conditionally running code dependant on whether or not debugging is enabled is an anti-pattern.
This could lead to errors in production code that disapear when you try to debug them causing 
everyone involved a lot of grief.

See https://github.com/visionmedia/debug/pull/497.