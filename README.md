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

```js
const cal = new ICS.components.VCALENDAR();
```

The following components are implenented:

* `VCALENDAR`
* `VEVENT`
* `VALARM`
* `VTODO`

### Add properties to a component

```js
cal.addProp("VERSION", 2) // Number(2) is converted to "2.0"
cal.addProp("PRODID", "XYZ Corp");
```

Each component contains a list of property validations. Only valid properties
can be added according to the RFC 5545 spec.

The following properties are implemented:

| Name         | Input            | Output                                           |
| ------------ | ---------------- | ------------------------------------------------ |
| `CATEGORIES` | `Array<String>`  | Array items separated by `,`                     |
| `DTEND`      | `Date`           | Formatted date to spec                           |
| `DTSTAMP`    | `Date`           | Formatted date to spec                           |
| `DTSTART`    | `Date`           | Formatted date to spec                           |
| `DUE`        | `Date`           | Formatted date to spec                           |
| `UID`        | `String` or none | If no input is provided, generates a random GUID |
| `VERSION`    | `Number`         | Float with 1 decimal to spec                     |

All other properties (e.g. `SUMMARY`, `LOCATION`) are stored as-is without transformations.

### Nest a component

```js
const event = new ICS.components.VEVENT();
event.addProp("UID");
event.addProp("DTSTAMP", new Date("2015-07-18 10:00:00"));

cal.addComponent(event);
```

Each component contains a list of valid nested components. Only valid components
can be nested according to the RFC 5545 spec.

### Generate ICS data

```js
cal.toString(); // Returns a string
ICS.toBlob(cal.toString()); // Returns a Blob
ICS.toBase64(cal.toString()); // Returns a base64 string
```

## Acknowledgements

Inspired by [nwcell/ics.js](https://github.com/nwcell/ics.js)
