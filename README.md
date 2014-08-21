# vz constants

[![NPM](https://nodei.co/npm/vz.constants.png?downloads=true)](https://nodei.co/npm/vz.constants/)

## Example ussage:

```javascript

var constants = require('vz.constants');

constants.NOOP(); // Does nothing
constants.TRUE(); // Returns true
constants.FALSE(); // Returns false
constants.APPLY(console.log,['Hello','world'],console); // Calls Function.apply with given arguments

window.onclick = constants.STOP; // Stops event propagation
window.oncontextmenu = constants.PREVENT; // Prevents default
window.onerror = constants.ERROR; // Throws given error

```

