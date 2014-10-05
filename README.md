# vz constants

[![NPM](https://nodei.co/npm/vz.constants.png?downloads=true)](https://nodei.co/npm/vz.constants/)

No piece of software is ever completed, feel free to contribute and be humble

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

