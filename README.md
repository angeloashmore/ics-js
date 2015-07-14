# ics-js
Create ICS files in JavaScript.

## Installation

`npm install ics-js`

## Usage

Import the module:

```js
import ICS from "ics-js";
```

Create an ICS instance:

```js
const cal = new ICS();
```

Add an event:

```js
let event = new ICS.Event();
event.subject = "Apple WWDC 2015 Keynote";
event.description = "Annual Worldwide Developers Conference held by Apple in San Francisco, California.";
event.location = "Moscone Center West";
event.start = new Date(Date.parse("08 Jul 2015 09:00:00 PST"));
event.end = new Date(Date.parse("08 Jul 2015 11:30:00 PST"));

cal.addEvent(event);
```

Get the ICS file:

```js
cal.toString(); // Get a string.
cal.toBlob(); // Get a Blob.
cal.toBase64(); // Get a base64 string.
```

## Acknowledgements

Inspired by [nwcell/ics.js](https://github.com/nwcell/ics.js)
