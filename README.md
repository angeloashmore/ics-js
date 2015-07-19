# ics-js
Create ICS files in ES6 JavaScript.

## Installation

`npm install ics-js`

## Usage

Import the module:

```js
import ICS from "ics-js";
```

### Create a component

The following components are implenented:

* `VCALENDAR`
* `VEVENT`

To create a component:

```js
const cal = new ICS.components.VCALENDAR();
```

### Add properties to a component

To add a property to a component:

```js
cal.addProp(new ICS.properties.VERSION(2)); // Number(2) is converted to "2.0"
cal.addProp(new ICS.properties.PRODID("XYZ Corp"));
```

Each component contains a list of property validations. Only valid properties
can be added according to the RFC 5545 spec.

The following properties are implemented:

* `DTEND` - Formats a Date object to standard.
* `DTSTAMP` - Formats a Date object to standard.
* `DTSTART` - Formats a Date object to standard.
* `VERSION` - Formats a Number object to "x.0"

Other properties (e.g. `SUMMARY`, `LOCATION`) will be stored as-is.

### Add a component

To add a component to another component:

```js
const event = new ICS.components.VEVENT();
event.addProp(new ICS.properties.UID(1));
event.addProp(new ICS.properties.DTSTAMP(new Date(Date.parse("2015-07-18 10:00:00"))));

cal.addComponent(event);
```

Each component contains a list of valid nested components. Only valid components
can be added according to the RFC 5545 spec.

### Generate ICS data

To generate the ICS data:

```js
cal.toString(); // Returns a string
ICS.toBlob(cal.toString()); // Returns a Blob
ICS.toBase64(cal.toString()); // Returns a base64 string
```

## Acknowledgements

Inspired by [nwcell/ics.js](https://github.com/nwcell/ics.js)
