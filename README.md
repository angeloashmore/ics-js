# ics-js
Create ICS files in ES6 JavaScript.

## Status

[![npm version](https://badge.fury.io/js/ics-js.svg)](http://badge.fury.io/js/ics-js)
[![Build Status](https://secure.travis-ci.org/angeloashmore/ics-js.svg?branch=master)](http://travis-ci.org/angeloashmore/ics-js?branch=master)

## Installation

`npm install ics-js`

## Usage

Import the module:

```js
import ICS from "ics-js";
```

### Create a component

```js
const cal = new ICS.VCALENDAR();
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

| Name | Input | Output |
| ---- | ----- | ------ |
| `CATEGORIES` | `Array<String>` | Array items separated by `,` |
| `CREATED` | `Date` | Formatted date to spec |
| `DTEND` | `Date` | Formatted date to spec |
| `DTSTAMP` | `Date` | Formatted date to spec |
| `DTSTART` | `Date` | Formatted date to spec |
| `DUE` | `Date` | Formatted date to spec |
| `EXDATE` | `Array<Date>` | Array items separated by `,` formatted to spec |
| `GEO` | `Array<Float>` | Array items separated by `;` (should be `[x, y]`) |
| `LAST-MODIFIED` | `Date` | Formatted date to spec |
| `RDATE` | `Date` | Formatted date to spec |
| `TRANSP` | `Boolean` | `TRANSPARENT` if true, `OPAQUE` if false |
| `UID` | `String` or none | If no input is provided, generates a random GUID |
| `VERSION` | `Number` | Float with 1 decimal to spec |

All other properties (e.g. `SUMMARY`, `LOCATION`) are stored as-is without transformations.

### Nest a component

```js
const event = new ICS.VEVENT();
event.addProp("UID");
event.addProp("DTSTAMP", new Date("2015-07-18 10:00:00"));

cal.addComponent(event);
```

Each component contains a list of valid nested components. Only valid components
can be nested according to the RFC 5545 spec.

### Generate ICS data

```js
cal.toString(); // Returns a string
cal.toBlob(); // Returns a Blob
cal.toBase64(); // Returns a Promise with a base64 string as the resolved value
```

## Acknowledgements

Inspired by [nwcell/ics.js](https://github.com/nwcell/ics.js)
