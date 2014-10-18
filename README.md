[![NPM](https://nodei.co/npm/vz.constants.png?downloads=true)](https://nodei.co/npm/vz.constants/)

This package uses or may use at some point in the future ECMAScript 6 features. Use it on a compatible environment or transpile it with Traceur, Closure Compiler, es6-transpiler or equivalent. Please note that some of these have flaws and bugs, test your code carefully until you find a suitable tool for your task.

When cloning this repository, put the folder inside another named "node_modules" in order to avoid potential errors related to npm's dependency handling, and then run `npm install` on it.

No piece of software is ever completed, feel free to contribute and be humble.

# vz constants

## Sample usage:

```javascript

var constants = require('vz.constants');

constants.NOOP(); // Does nothing
constants.TRUE(); // Returns true
constants.FALSE(); // Returns false

// Calls Function.apply with given arguments
constants.APPLY(console.log,['Hello','world'],console);

window.onclick = constants.STOP; // Stops event propagation
window.oncontextmenu = constants.PREVENT; // Prevents default
window.onerror = constants.ERROR; // Throws given error

```

