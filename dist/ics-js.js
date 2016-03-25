(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Property = function () {
	  function Property(value, props) {
	    var skipTransformer = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	    _classCallCheck(this, Property);

	    this.value = value;
	    this.props = props || {};
	    this.skipTransformer = skipTransformer;
	  }

	  _createClass(Property, [{
	    key: 'shortTransformer',
	    value: function shortTransformer() {
	      return true;
	    }
	  }, {
	    key: 'transformer',
	    value: function transformer() {
	      return this.value;
	    }
	  }, {
	    key: 'transformedValue',
	    value: function transformedValue() {
	      if (this.skipTransformer || this.shortTransformer()) return this.value;
	      return this.transformer();
	    }
	  }, {
	    key: 'transformedProps',
	    value: function transformedProps() {
	      var props = [];
	      for (var key in this.props) {
	        props.push(key + '=' + this.props[key]);
	      }return props.join(';');
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      var hasProps = Object.keys(this.props).length > 0;
	      var key = this.constructor.propName + (hasProps ? ';' + this.transformedProps() : '');
	      var value = this.transformedValue();
	      var keyValuePair = key + ':' + value;
	      return keyValuePair.match(/.{1,75}/g).join('\r\n ');
	    }
	  }]);

	  return Property;
	}();

	Property.keyRegex = /^[A-Z]([A-Z]|-)*[A-Z]$/;
	Property.propName = 'Property';
	exports.default = Property;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _ICS = __webpack_require__(4);

	var _ICS2 = _interopRequireDefault(_ICS);

	var _properties = __webpack_require__(34);

	var properties = _interopRequireWildcard(_properties);

	var _errors = __webpack_require__(6);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Component = function () {
	  function Component() {
	    _classCallCheck(this, Component);

	    this.prefix = 'BEGIN:' + this.constructor.componentName;
	    this.suffix = 'END:' + this.constructor.componentName;

	    this._props = [];
	    this._components = [];
	  }

	  _createClass(Component, [{
	    key: 'props',
	    value: function props() {
	      return Object.freeze(this._props.slice(0));
	    }
	  }, {
	    key: 'propNames',
	    value: function propNames() {
	      return Object.freeze(this.props().map(function (prop) {
	        return prop.constructor.propName;
	      }));
	    }

	    // Set props to null or {} if not needed

	  }, {
	    key: 'addProp',
	    value: function addProp(name, value, props, skipTransformer) {
	      var _this = this;

	      var validProps = this.constructor.validProps;

	      if (!validProps[name]) throw new _errors.InvalidProvidedPropError();

	      var PropClass = properties[name] || properties._default(name);
	      var prop = new PropClass(value, props, skipTransformer);
	      validProps[name].forEach(function (validator) {
	        return validator(_this, prop);
	      });

	      this._props.push(prop);

	      return prop;
	    }
	  }, {
	    key: 'components',
	    value: function components() {
	      return Object.freeze(this._components.slice(0));
	    }
	  }, {
	    key: 'componentNames',
	    value: function componentNames() {
	      return Object.freeze(this.components().map(function (prop) {
	        return prop.constructor.componentName;
	      }));
	    }
	  }, {
	    key: 'addComponent',
	    value: function addComponent(component) {
	      var _this2 = this;

	      var validComponents = this.constructor.validComponents;
	      var componentName = component.constructor.componentName;


	      if (!(component instanceof Component)) throw new TypeError('Expected `component` to be an instance of Component.');
	      if (!validComponents[componentName]) throw new _errors.InvalidProvidedComponentError();

	      validComponents[componentName].forEach(function (validator) {
	        return validator(_this2, component);
	      });

	      this._components.push(component);
	      return component;
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this._props = this._components = [];
	    }
	  }, {
	    key: 'validateRequired',
	    value: function validateRequired() {
	      var requiredProps = this.constructor.requiredProps;


	      var intersection = Component._intersect(requiredProps, this.propNames());

	      if (intersection.length > 0) throw new _errors.InvalidComponentError();

	      return true;
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      this.validateRequired();

	      var props = this._props.map(function (prop) {
	        return prop.toString();
	      });
	      var components = this._components.map(function (component) {
	        return component.toString();
	      });

	      return [this.prefix].concat(_toConsumableArray(props), _toConsumableArray(components), [this.suffix]).join(this.constructor.separator);
	    }
	  }, {
	    key: 'toBlob',
	    value: function toBlob() {
	      return new Blob([this.toString()], { type: _ICS2.default.MIME_TYPE });
	    }
	  }, {
	    key: 'toBase64',
	    value: function toBase64() {
	      var blob = this.toBlob();
	      var reader = new window.FileReader();

	      return new Promise(function (resolve, reject) {
	        reader.readAsDataURL(blob);
	        reader.onloadend = function () {
	          return resolve(reader.result);
	        };
	        reader.onerror = function () {
	          return reject(reader.error);
	        };
	        reader.onabort = function () {
	          return reject();
	        };
	      });
	    }
	  }], [{
	    key: '_intersect',
	    value: function _intersect(a, b) {
	      var b_ = new Set(b);
	      return a.filter(function (item) {
	        return !b_.has(item);
	      });
	    }
	  }]);

	  return Component;
	}();

	Component.separator = '\r\n';
	Component.requiredProps = [];
	Component.validProps = {};
	Component.validComponents = {};
	exports.default = Component;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _formatoid = __webpack_require__(8);

	var _formatoid2 = _interopRequireDefault(_formatoid);

	var _ICS = __webpack_require__(4);

	var _ICS2 = _interopRequireDefault(_ICS);

	var _Property2 = __webpack_require__(1);

	var _Property3 = _interopRequireDefault(_Property2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DTSTAMP = function (_Property) {
	  _inherits(DTSTAMP, _Property);

	  function DTSTAMP() {
	    _classCallCheck(this, DTSTAMP);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(DTSTAMP).apply(this, arguments));
	  }

	  _createClass(DTSTAMP, [{
	    key: 'shortTransformer',
	    value: function shortTransformer() {
	      return !(this.value instanceof Date);
	    }
	  }, {
	    key: 'transformer',
	    value: function transformer() {
	      var valueIsDate = this.props.VALUE == 'DATE';

	      if (valueIsDate) {
	        // Remove timezone offset
	        var offset = this.value.getTimezoneOffset() * 60000;
	        this.value = new Date(this.value.getTime() + offset);
	      }

	      var format = valueIsDate ? _ICS2.default.DateFormat : _ICS2.default.DateTimeFormat;
	      return (0, _formatoid2.default)(this.value, format);
	    }
	  }]);

	  return DTSTAMP;
	}(_Property3.default);

	DTSTAMP.propName = 'DTSTAMP';
	exports.default = DTSTAMP;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Property = __webpack_require__(1);

	var _Property2 = _interopRequireDefault(_Property);

	var _Component = __webpack_require__(2);

	var _Component2 = _interopRequireDefault(_Component);

	var _components = __webpack_require__(13);

	var components = _interopRequireWildcard(_components);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ICS = function ICS() {
	  _classCallCheck(this, ICS);
	};

	ICS.Property = _Property2.default;
	ICS.Component = _Component2.default;
	ICS.MIME_TYPE = 'text/calendar';
	ICS.DateFormat = 'YYYYMMDD';
	ICS.DateTimeFormat = 'YYYYMMDDTHHmmss';
	exports.default = ICS;


	for (var componentName in components) {
	  ICS[componentName] = components[componentName];
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.unique = exports.singleton = exports.required = undefined;

	var _required2 = __webpack_require__(14);

	var _required3 = _interopRequireDefault(_required2);

	var _singleton2 = __webpack_require__(15);

	var _singleton3 = _interopRequireDefault(_singleton2);

	var _unique2 = __webpack_require__(16);

	var _unique3 = _interopRequireDefault(_unique2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.required = _required3.default;
	exports.singleton = _singleton3.default;
	exports.unique = _unique3.default;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ValidationError = exports.InvalidProvidedPropError = exports.InvalidProvidedComponentError = exports.InvalidComponentError = undefined;

	var _InvalidComponentError2 = __webpack_require__(17);

	var _InvalidComponentError3 = _interopRequireDefault(_InvalidComponentError2);

	var _InvalidProvidedComponentError2 = __webpack_require__(18);

	var _InvalidProvidedComponentError3 = _interopRequireDefault(_InvalidProvidedComponentError2);

	var _InvalidProvidedPropError2 = __webpack_require__(19);

	var _InvalidProvidedPropError3 = _interopRequireDefault(_InvalidProvidedPropError2);

	var _ValidationError2 = __webpack_require__(20);

	var _ValidationError3 = _interopRequireDefault(_ValidationError2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.InvalidComponentError = _InvalidComponentError3.default;
	exports.InvalidProvidedComponentError = _InvalidProvidedComponentError3.default;
	exports.InvalidProvidedPropError = _InvalidProvidedPropError3.default;
	exports.ValidationError = _ValidationError3.default;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var ExtendableError = (function (_Error) {
	  function ExtendableError(message) {
	    _classCallCheck(this, ExtendableError);

	    Error.captureStackTrace(this, this.constructor);
	    this.message = message;
	    _get(Object.getPrototypeOf(ExtendableError.prototype), "constructor", this).call(this, message);
	  }

	  _inherits(ExtendableError, _Error);

	  _createClass(ExtendableError, {
	    name: {
	      get: function () {
	        return this.constructor.name;
	      }
	    }
	  });

	  return ExtendableError;
	})(Error);

	module.exports = ExtendableError;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	const months = __webpack_require__(37)
	    , days = __webpack_require__(35)
	    , fillo = __webpack_require__(36)
	    , ParseIt = __webpack_require__(38).Parser
	    ;

	const parser = new ParseIt({
	    // Years
	    /// 2015
	    "YYYY": function (i) { return i.getFullYear(); }

	    // 15
	  , "YY": function (i) { return i.getFullYear() % 100; }

	    // Months
	    // January
	  , "MMMM": function (i) { return months[i.getMonth()]; }

	    // Jan
	  , "MMM": function (i) { return months.abbr[i.getMonth()]; }

	    // 01
	  , "MM": function (i) { return fillo(i.getMonth() + 1); }

	    // 1
	  , "M": function (i) { return i.getMonth() + 1; }

	    // Days
	    // Sunday
	  , "dddd": function (i) { return days[i.getDay()]; }
	    // Sun
	  , "ddd": function (i) { return days.abbr[i.getDay()]; }
	    // Su
	  , "dd": function (i) { return days.short[i.getDay()]; }
	    // 0
	  , "d": function (i) { return i.getDay(); }

	    // Dates
	    // 06  Day in month
	  , "DD": function (i) { return fillo(i.getDate()); }
	    // 6   Day in month
	  , "D": function (i) { return i.getDate(); }

	    // AM/PM
	    // AM/PM
	  , "A": function (i) { return i.getHours() >= 12 ? "PM" : "AM"; }
	    // am/pm
	  , "a": function (i) { return i.getHours() >= 12 ? "pm" : "am"; }

	    // Hours
	    // 08 Hour
	  , "hh": function (i) { return fillo(i.getHours() % 12 || 12); }
	    // 8 Hour
	  , "h": function (i) { return i.getHours() % 12 || 12; }
	    // (alias)
	  , "HH": function (i) { return fillo(i.getHours()); }
	    // (alias)
	  , "H": function (i) { return i.getHours(); }

	    // Minutes
	    // 09 Minute
	  , "mm": function (i) { return fillo(i.getMinutes()); }
	    // 9  Minute
	  , "m": function (i) { return i.getMinutes(); }

	    // Seconds
	    // 09 Seconds
	  , "ss": function (i) { return fillo(i.getSeconds()); }

	    // 9  Seconds
	  , "s": function (i) { return i.getSeconds(); }
	});

	/**
	 * formatoid
	 * Formats the date into a given format.
	 *
	 * Usable format fields:
	 *
	 *  - **Years**
	 *      - `YYYY` (e.g. `"2015"`)
	 *      - `YY` (e.g. `"15"`)
	 *  - **Months**
	 *      - `MMMM` (e.g. `"January"`)
	 *      - `MMM` (e.g. `"Jan"`)
	 *      - `MM` (e.g. `"01"`)
	 *      - `M` (e.g. `"1"`)
	 *  - **Days**
	 *      - `dddd` (e.g. `"Sunday"`)
	 *      - `ddd` (e.g. `"Sun"`)
	 *      - `dd` (e.g. `"Su"`)
	 *      - `d` (e.g. `"Su"`)
	 *  - **Dates**
	 *      - `DD` (e.g. `"07"`)
	 *      - `D` (e.g. `"7"`)
	 *  - **AM/PM**
	 *      - `A` (e.g. `"AM"`)
	 *      - `a` (e.g. `"pm"`)
	 *  - **Hours**
	 *      - `hh` (e.g. `"07"`)–12 hour format
	 *      - `h` (e.g. `"7"`)
	 *      - `HH` (e.g. `"07"`)–24 hour format
	 *      - `H` (e.g. `"7"`)
	 *  - **Minutes**
	 *      - `mm` (e.g. `"07"`)
	 *      - `m` (e.g. `"7"`)
	 *  - **Seconds**
	 *      - `ss` (e.g. `"07"`)
	 *      - `s` (e.g. `"7"`)
	 *
	 * @name formatoid
	 * @function
	 * @param {Date} i The date object.
	 * @param {String} f The date format.
	 * @return {String} The formatted date (as string).
	 */
	module.exports = function formatoid (i, f) {
	    return parser.run(f, [i]);
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Component2 = __webpack_require__(2);

	var _Component3 = _interopRequireDefault(_Component2);

	var _validators = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var VALARM = function (_Component) {
	  _inherits(VALARM, _Component);

	  function VALARM() {
	    _classCallCheck(this, VALARM);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(VALARM).apply(this, arguments));
	  }

	  return VALARM;
	}(_Component3.default);

	VALARM.componentName = 'VALARM';
	VALARM.requiredProps = ['ACTION', 'TRIGGER'];
	VALARM.validProps = {
	  ACTION: [(0, _validators.singleton)()],
	  TRIGGER: [(0, _validators.singleton)()],

	  DURATION: [(0, _validators.singleton)()],
	  REPEAT: [(0, _validators.singleton)()],

	  DESCRIPTION: [(0, _validators.singleton)()],
	  SUMMARY: [(0, _validators.singleton)()],
	  ATTACH: [(0, _validators.singleton)()],

	  ATTENDEE: []
	};
	exports.default = VALARM;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Component2 = __webpack_require__(2);

	var _Component3 = _interopRequireDefault(_Component2);

	var _validators = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var VCALENDAR = function (_Component) {
	  _inherits(VCALENDAR, _Component);

	  function VCALENDAR() {
	    _classCallCheck(this, VCALENDAR);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(VCALENDAR).apply(this, arguments));
	  }

	  return VCALENDAR;
	}(_Component3.default);

	VCALENDAR.componentName = 'VCALENDAR';
	VCALENDAR.requiredProps = ['PRODID', 'VERSION'];
	VCALENDAR.validProps = {
	  PRODID: [(0, _validators.singleton)()],
	  VERSION: [(0, _validators.singleton)()],

	  CALSCALE: [(0, _validators.singleton)()],
	  METHOD: [(0, _validators.singleton)()]
	};
	VCALENDAR.validComponents = {
	  VEVENT: [],
	  VTODO: [],
	  VJOURNAL: [],
	  VFREEBUSY: [],
	  VTIMEZONE: []
	};
	exports.default = VCALENDAR;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Component2 = __webpack_require__(2);

	var _Component3 = _interopRequireDefault(_Component2);

	var _validators = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var VEVENT = function (_Component) {
	  _inherits(VEVENT, _Component);

	  function VEVENT() {
	    _classCallCheck(this, VEVENT);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(VEVENT).apply(this, arguments));
	  }

	  return VEVENT;
	}(_Component3.default);

	VEVENT.componentName = 'VEVENT';
	VEVENT.requiredProps = ['DTSTAMP', 'UID'];
	VEVENT.validProps = {
	  DTSTAMP: [(0, _validators.singleton)()],
	  UID: [(0, _validators.singleton)()],

	  DTSTART: [(0, _validators.singleton)()],
	  CLASS: [(0, _validators.singleton)()],
	  CREATED: [(0, _validators.singleton)()],
	  DESCRIPTION: [(0, _validators.singleton)()],
	  GEO: [(0, _validators.singleton)()],
	  'LAST-MOD': [(0, _validators.singleton)()],
	  LOCATION: [(0, _validators.singleton)()],
	  ORGANIZER: [(0, _validators.singleton)()],
	  PRIORITY: [(0, _validators.singleton)()],
	  SEQUENCE: [(0, _validators.singleton)()],
	  STATUS: [(0, _validators.singleton)()],
	  SUMMARY: [(0, _validators.singleton)()],
	  TRANSP: [(0, _validators.singleton)()],
	  URL: [(0, _validators.singleton)()],
	  'RECURRENCE-ID': [(0, _validators.singleton)()],
	  RRULE: [(0, _validators.singleton)()],

	  DTEND: [(0, _validators.singleton)(), (0, _validators.unique)(['DURATION'])],
	  DURATION: [(0, _validators.singleton)(), (0, _validators.unique)(['DTEND'])],

	  ATTACH: [],
	  ATTENDEE: [],
	  CATEGORIES: [],
	  COMMENT: [],
	  CONTACT: [],
	  EXDATE: [],
	  'REQUEST-STATUS': [],
	  RELATED: [],
	  RESOURCES: [],
	  RDATE: []
	};
	VEVENT.validComponents = {
	  VALARM: []
	};
	exports.default = VEVENT;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Component2 = __webpack_require__(2);

	var _Component3 = _interopRequireDefault(_Component2);

	var _validators = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var VTODO = function (_Component) {
	  _inherits(VTODO, _Component);

	  function VTODO() {
	    _classCallCheck(this, VTODO);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(VTODO).apply(this, arguments));
	  }

	  return VTODO;
	}(_Component3.default);

	VTODO.componentName = 'VTODO';
	VTODO.requiredProps = ['DTSTAMP', 'UID'];
	VTODO.validProps = {
	  DTSTAMP: [(0, _validators.singleton)()],
	  UID: [(0, _validators.singleton)()],

	  CLASS: [(0, _validators.singleton)()],
	  COMPLETED: [(0, _validators.singleton)()],
	  CREATED: [(0, _validators.singleton)()],
	  DESCRIPTION: [(0, _validators.singleton)()],
	  DTSTART: [(0, _validators.singleton)()],
	  GEO: [(0, _validators.singleton)()],
	  'LAST-MOD': [(0, _validators.singleton)()],
	  LOCATION: [(0, _validators.singleton)()],
	  ORGANIZER: [(0, _validators.singleton)()],
	  PERCENT: [(0, _validators.singleton)()],
	  PRIORITY: [(0, _validators.singleton)()],
	  'RECURRENCE-ID': [(0, _validators.singleton)()],
	  SEQUENCE: [(0, _validators.singleton)()],
	  STATUS: [(0, _validators.singleton)()],
	  SUMMARY: [(0, _validators.singleton)()],
	  URL: [(0, _validators.singleton)()],
	  RRULE: [(0, _validators.singleton)()],

	  DUE: [(0, _validators.singleton)(), (0, _validators.unique)(['DURATION'])],
	  DURATION: [(0, _validators.singleton)(), (0, _validators.unique)(['DUE'])],

	  ATTACH: [],
	  ATTENDEE: [],
	  CATEGORIES: [],
	  COMMENT: [],
	  CONTACT: [],
	  EXDATE: [],
	  'REQUEST-STATUS': [],
	  RELATED: [],
	  RESOURCES: [],
	  RDATE: []
	};
	VTODO.validComponents = {
	  VALARM: []
	};
	exports.default = VTODO;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.VTODO = exports.VEVENT = exports.VCALENDAR = exports.VALARM = undefined;

	var _VALARM2 = __webpack_require__(9);

	var _VALARM3 = _interopRequireDefault(_VALARM2);

	var _VCALENDAR2 = __webpack_require__(10);

	var _VCALENDAR3 = _interopRequireDefault(_VCALENDAR2);

	var _VEVENT2 = __webpack_require__(11);

	var _VEVENT3 = _interopRequireDefault(_VEVENT2);

	var _VTODO2 = __webpack_require__(12);

	var _VTODO3 = _interopRequireDefault(_VTODO2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.VALARM = _VALARM3.default;
	exports.VCALENDAR = _VCALENDAR3.default;
	exports.VEVENT = _VEVENT3.default;
	exports.VTODO = _VTODO3.default;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = required;

	var _Property = __webpack_require__(1);

	var _Property2 = _interopRequireDefault(_Property);

	var _Component = __webpack_require__(2);

	var _Component2 = _interopRequireDefault(_Component);

	var _errors = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function required() {
	  return function (component, subject) {
	    var subjectName = void 0;
	    var names = void 0;

	    if (subject instanceof _Property2.default) {
	      subjectName = subject.constructor.propName;
	      names = component.propNames();
	    } else if (subject instanceof _Component2.default) {
	      subjectName = subject.constructor.componentName;
	      names = component.componentNames();
	    }

	    if (!names.includes(subjectName)) throw new _errors.ValidationError();
	  };
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = singleton;

	var _Property = __webpack_require__(1);

	var _Property2 = _interopRequireDefault(_Property);

	var _Component = __webpack_require__(2);

	var _Component2 = _interopRequireDefault(_Component);

	var _errors = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function singleton() {
	  return function (component, subject) {
	    var subjectName = void 0;
	    var names = void 0;

	    if (subject instanceof _Property2.default) {
	      subjectName = subject.constructor.propName;
	      names = component.propNames();
	    } else if (subject instanceof _Component2.default) {
	      subjectName = subject.constructor.componentName;
	      names = component.componentNames();
	    }

	    var filtered = names.filter(function (name) {
	      return name === subjectName;
	    });
	    if (filtered.length >= 1) throw new _errors.ValidationError();
	  };
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = unique;

	var _Property = __webpack_require__(1);

	var _Property2 = _interopRequireDefault(_Property);

	var _Component = __webpack_require__(2);

	var _Component2 = _interopRequireDefault(_Component);

	var _errors = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function unique(uniqueNames) {
	  return function (component, subject) {
	    var subjectName = void 0;
	    var names = void 0;

	    if (subject instanceof _Property2.default) {
	      subjectName = subject.constructor.propName;
	      names = component.propNames();
	    } else if (subject instanceof _Component2.default) {
	      subjectName = subject.constructor.componentName;
	      names = component.componentNames();
	    }

	    var a = new Set(names);
	    var b = new Set([subjectName].concat(_toConsumableArray(uniqueNames)));
	    var difference = new Set([].concat(_toConsumableArray(a)).filter(function (x) {
	      return !b.has(x);
	    }));

	    if (difference > 1) throw new _errors.ValidationError();
	  };
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _es6Error = __webpack_require__(7);

	var _es6Error2 = _interopRequireDefault(_es6Error);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InvalidComponentError = function (_ExtendableError) {
	  _inherits(InvalidComponentError, _ExtendableError);

	  function InvalidComponentError() {
	    var message = arguments.length <= 0 || arguments[0] === undefined ? 'Component does not contain all required properties.' : arguments[0];

	    _classCallCheck(this, InvalidComponentError);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(InvalidComponentError).call(this, message));
	  }

	  return InvalidComponentError;
	}(_es6Error2.default);

	exports.default = InvalidComponentError;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _es6Error = __webpack_require__(7);

	var _es6Error2 = _interopRequireDefault(_es6Error);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InvalidProvidedComponentError = function (_ExtendableError) {
	  _inherits(InvalidProvidedComponentError, _ExtendableError);

	  function InvalidProvidedComponentError() {
	    var message = arguments.length <= 0 || arguments[0] === undefined ? 'Provided component\'s type is not listed in validComponents.' : arguments[0];

	    _classCallCheck(this, InvalidProvidedComponentError);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(InvalidProvidedComponentError).call(this, message));
	  }

	  return InvalidProvidedComponentError;
	}(_es6Error2.default);

	exports.default = InvalidProvidedComponentError;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _es6Error = __webpack_require__(7);

	var _es6Error2 = _interopRequireDefault(_es6Error);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InvalidProvidedPropError = function (_ExtendableError) {
	  _inherits(InvalidProvidedPropError, _ExtendableError);

	  function InvalidProvidedPropError() {
	    var message = arguments.length <= 0 || arguments[0] === undefined ? 'Provided property\'s type is not listed in validProps.' : arguments[0];

	    _classCallCheck(this, InvalidProvidedPropError);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(InvalidProvidedPropError).call(this, message));
	  }

	  return InvalidProvidedPropError;
	}(_es6Error2.default);

	exports.default = InvalidProvidedPropError;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _es6Error = __webpack_require__(7);

	var _es6Error2 = _interopRequireDefault(_es6Error);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ValidationError = function (_ExtendableError) {
	  _inherits(ValidationError, _ExtendableError);

	  function ValidationError() {
	    var message = arguments.length <= 0 || arguments[0] === undefined ? 'Provided object was invalid for the recieving component.' : arguments[0];

	    _classCallCheck(this, ValidationError);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ValidationError).call(this, message));
	  }

	  return ValidationError;
	}(_es6Error2.default);

	exports.default = ValidationError;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Property2 = __webpack_require__(1);

	var _Property3 = _interopRequireDefault(_Property2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CATEGORIES = function (_Property) {
	  _inherits(CATEGORIES, _Property);

	  function CATEGORIES() {
	    _classCallCheck(this, CATEGORIES);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CATEGORIES).apply(this, arguments));
	  }

	  _createClass(CATEGORIES, [{
	    key: 'shortTransformer',
	    value: function shortTransformer() {
	      return typeof this.value === 'string';
	    }
	  }, {
	    key: 'transformer',
	    value: function transformer() {
	      return this.value.join(',');
	    }
	  }]);

	  return CATEGORIES;
	}(_Property3.default);

	CATEGORIES.propName = 'CATEGORIES';
	exports.default = CATEGORIES;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _DTSTAMP2 = __webpack_require__(3);

	var _DTSTAMP3 = _interopRequireDefault(_DTSTAMP2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CREATED = function (_DTSTAMP) {
	  _inherits(CREATED, _DTSTAMP);

	  function CREATED() {
	    _classCallCheck(this, CREATED);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CREATED).apply(this, arguments));
	  }

	  return CREATED;
	}(_DTSTAMP3.default);

	CREATED.propName = 'CREATED';
	exports.default = CREATED;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _DTSTAMP2 = __webpack_require__(3);

	var _DTSTAMP3 = _interopRequireDefault(_DTSTAMP2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DTEND = function (_DTSTAMP) {
	  _inherits(DTEND, _DTSTAMP);

	  function DTEND() {
	    _classCallCheck(this, DTEND);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(DTEND).apply(this, arguments));
	  }

	  return DTEND;
	}(_DTSTAMP3.default);

	DTEND.propName = 'DTEND';
	exports.default = DTEND;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _DTSTAMP2 = __webpack_require__(3);

	var _DTSTAMP3 = _interopRequireDefault(_DTSTAMP2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DTSTART = function (_DTSTAMP) {
	  _inherits(DTSTART, _DTSTAMP);

	  function DTSTART() {
	    _classCallCheck(this, DTSTART);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(DTSTART).apply(this, arguments));
	  }

	  return DTSTART;
	}(_DTSTAMP3.default);

	DTSTART.propName = 'DTSTART';
	exports.default = DTSTART;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _DTSTAMP2 = __webpack_require__(3);

	var _DTSTAMP3 = _interopRequireDefault(_DTSTAMP2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DUE = function (_DTSTAMP) {
	  _inherits(DUE, _DTSTAMP);

	  function DUE() {
	    _classCallCheck(this, DUE);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(DUE).apply(this, arguments));
	  }

	  return DUE;
	}(_DTSTAMP3.default);

	DUE.propName = 'DUE';
	exports.default = DUE;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _formatoid = __webpack_require__(8);

	var _formatoid2 = _interopRequireDefault(_formatoid);

	var _ICS = __webpack_require__(4);

	var _ICS2 = _interopRequireDefault(_ICS);

	var _Property2 = __webpack_require__(1);

	var _Property3 = _interopRequireDefault(_Property2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EXDATE = function (_Property) {
	  _inherits(EXDATE, _Property);

	  function EXDATE() {
	    _classCallCheck(this, EXDATE);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(EXDATE).apply(this, arguments));
	  }

	  _createClass(EXDATE, [{
	    key: 'shortTransformer',
	    value: function shortTransformer() {
	      if (Array.isArray(this.value)) {
	        return !this.value.every(function (value) {
	          return value instanceof Date;
	        });
	      } else {
	        return true;
	      }
	    }
	  }, {
	    key: 'transformer',
	    value: function transformer() {
	      var valueIsDate = this.props.VALUE == 'DATE';
	      var format = valueIsDate ? _ICS2.default.DateFormat : _ICS2.default.DateTimeFormat;

	      return this.value.map(function (value) {
	        if (valueIsDate) {
	          // Remove timezone offset
	          var offset = value.getTimezoneOffset() * 60000;
	          value = new Date(value.getTime() + offset);
	        }

	        return (0, _formatoid2.default)(value, format);
	      }).join();
	    }
	  }]);

	  return EXDATE;
	}(_Property3.default);

	EXDATE.propName = 'EXDATE';
	exports.default = EXDATE;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Property2 = __webpack_require__(1);

	var _Property3 = _interopRequireDefault(_Property2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GEO = function (_Property) {
	  _inherits(GEO, _Property);

	  function GEO() {
	    _classCallCheck(this, GEO);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(GEO).apply(this, arguments));
	  }

	  _createClass(GEO, [{
	    key: 'shortTransformer',
	    value: function shortTransformer() {
	      return typeof this.value === 'string';
	    }
	  }, {
	    key: 'transformer',
	    value: function transformer() {
	      return this.value.join(';');
	    }
	  }]);

	  return GEO;
	}(_Property3.default);

	GEO.propName = 'GEO';
	exports.default = GEO;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _DTSTAMP2 = __webpack_require__(3);

	var _DTSTAMP3 = _interopRequireDefault(_DTSTAMP2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LAST_MODIFIED = function (_DTSTAMP) {
	  _inherits(LAST_MODIFIED, _DTSTAMP);

	  function LAST_MODIFIED() {
	    _classCallCheck(this, LAST_MODIFIED);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(LAST_MODIFIED).apply(this, arguments));
	  }

	  return LAST_MODIFIED;
	}(_DTSTAMP3.default);

	LAST_MODIFIED.propName = 'LAST-MODIFIED';
	exports.default = LAST_MODIFIED;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _DTSTAMP2 = __webpack_require__(3);

	var _DTSTAMP3 = _interopRequireDefault(_DTSTAMP2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RDATE = function (_DTSTAMP) {
	  _inherits(RDATE, _DTSTAMP);

	  function RDATE() {
	    _classCallCheck(this, RDATE);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(RDATE).apply(this, arguments));
	  }

	  return RDATE;
	}(_DTSTAMP3.default);

	RDATE.propName = 'RDATE';
	exports.default = RDATE;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Property2 = __webpack_require__(1);

	var _Property3 = _interopRequireDefault(_Property2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TRANSP = function (_Property) {
	  _inherits(TRANSP, _Property);

	  function TRANSP() {
	    _classCallCheck(this, TRANSP);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TRANSP).apply(this, arguments));
	  }

	  _createClass(TRANSP, [{
	    key: 'shortTransformer',
	    value: function shortTransformer() {
	      return typeof this.value === 'string';
	    }
	  }, {
	    key: 'transformer',
	    value: function transformer() {
	      return this.value ? 'TRANSPARENT' : 'OPAQUE';
	    }
	  }]);

	  return TRANSP;
	}(_Property3.default);

	TRANSP.propName = 'TRANSP';
	exports.default = TRANSP;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _simpleGuid = __webpack_require__(40);

	var _simpleGuid2 = _interopRequireDefault(_simpleGuid);

	var _Property2 = __webpack_require__(1);

	var _Property3 = _interopRequireDefault(_Property2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UID = function (_Property) {
	  _inherits(UID, _Property);

	  function UID() {
	    _classCallCheck(this, UID);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(UID).apply(this, arguments));
	  }

	  _createClass(UID, [{
	    key: 'shortTransformer',
	    value: function shortTransformer() {
	      return !!this.value;
	    }
	  }, {
	    key: 'transformer',
	    value: function transformer() {
	      return (0, _simpleGuid2.default)();
	    }
	  }]);

	  return UID;
	}(_Property3.default);

	UID.propName = 'UID';
	exports.default = UID;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Property2 = __webpack_require__(1);

	var _Property3 = _interopRequireDefault(_Property2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var VERSION = function (_Property) {
	  _inherits(VERSION, _Property);

	  function VERSION() {
	    _classCallCheck(this, VERSION);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(VERSION).apply(this, arguments));
	  }

	  _createClass(VERSION, [{
	    key: 'shortTransformer',
	    value: function shortTransformer() {
	      return (/[0-9].[0-9]/.test(this.value)
	      );
	    }
	  }, {
	    key: 'transformer',
	    value: function transformer() {
	      return parseFloat(this.value).toFixed(1);
	    }
	  }]);

	  return VERSION;
	}(_Property3.default);

	VERSION.propName = 'VERSION';
	exports.default = VERSION;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (name) {
	  var _class, _temp;

	  return _temp = _class = function (_Property) {
	    _inherits(_default, _Property);

	    function _default() {
	      _classCallCheck(this, _default);

	      return _possibleConstructorReturn(this, Object.getPrototypeOf(_default).apply(this, arguments));
	    }

	    return _default;
	  }(_Property3.default), _class.propName = name, _temp;
	};

	var _Property2 = __webpack_require__(1);

	var _Property3 = _interopRequireDefault(_Property2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.VERSION = exports.UID = exports.TRANSP = exports.RDATE = exports.LAST_MODIFIED = exports.GEO = exports.EXDATE = exports.DUE = exports.DTSTART = exports.DTSTAMP = exports.DTEND = exports.CREATED = exports.CATEGORIES = exports._default = undefined;

	var _default2 = __webpack_require__(33);

	var _default3 = _interopRequireDefault(_default2);

	var _CATEGORIES2 = __webpack_require__(21);

	var _CATEGORIES3 = _interopRequireDefault(_CATEGORIES2);

	var _CREATED2 = __webpack_require__(22);

	var _CREATED3 = _interopRequireDefault(_CREATED2);

	var _DTEND2 = __webpack_require__(23);

	var _DTEND3 = _interopRequireDefault(_DTEND2);

	var _DTSTAMP2 = __webpack_require__(3);

	var _DTSTAMP3 = _interopRequireDefault(_DTSTAMP2);

	var _DTSTART2 = __webpack_require__(24);

	var _DTSTART3 = _interopRequireDefault(_DTSTART2);

	var _DUE2 = __webpack_require__(25);

	var _DUE3 = _interopRequireDefault(_DUE2);

	var _EXDATE2 = __webpack_require__(26);

	var _EXDATE3 = _interopRequireDefault(_EXDATE2);

	var _GEO2 = __webpack_require__(27);

	var _GEO3 = _interopRequireDefault(_GEO2);

	var _LAST_MODIFIED2 = __webpack_require__(28);

	var _LAST_MODIFIED3 = _interopRequireDefault(_LAST_MODIFIED2);

	var _RDATE2 = __webpack_require__(29);

	var _RDATE3 = _interopRequireDefault(_RDATE2);

	var _TRANSP2 = __webpack_require__(30);

	var _TRANSP3 = _interopRequireDefault(_TRANSP2);

	var _UID2 = __webpack_require__(31);

	var _UID3 = _interopRequireDefault(_UID2);

	var _VERSION2 = __webpack_require__(32);

	var _VERSION3 = _interopRequireDefault(_VERSION2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports._default = _default3.default;
	exports.CATEGORIES = _CATEGORIES3.default;
	exports.CREATED = _CREATED3.default;
	exports.DTEND = _DTEND3.default;
	exports.DTSTAMP = _DTSTAMP3.default;
	exports.DTSTART = _DTSTART3.default;
	exports.DUE = _DUE3.default;
	exports.EXDATE = _EXDATE3.default;
	exports.GEO = _GEO3.default;
	exports.LAST_MODIFIED = _LAST_MODIFIED3.default;
	exports.RDATE = _RDATE3.default;
	exports.TRANSP = _TRANSP3.default;
	exports.UID = _UID3.default;
	exports.VERSION = _VERSION3.default;

/***/ },
/* 35 */
/***/ function(module, exports) {

	/*!
	 * days <https://github.com/jonschlinkert/days>
	 *
	 * Copyright (c) 2014 Jon Schlinkert, contributors.
	 * Licensed under the MIT license.
	 */

	module.exports = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	module.exports.abbr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
	module.exports.short = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];


/***/ },
/* 36 */
/***/ function(module, exports) {

	/**
	 * fillo
	 * Fill additional characters at the beginning of the string.
	 *
	 * @name fillo
	 * @function
	 * @param {String|Number} what The input snippet (number, string or anything that can be stringified).
	 * @param {Number} size The width of the final string (default: `2`).
	 * @param {String} ch The character to repeat (default: `"0"`).
	 * @return {String} The input value with filled characters.
	 */
	module.exports = function fillo (what, size, ch) {
	    size = size || 2;
	    ch = ch || "0";
	    what = what.toString();
	    return ch.repeat(size - what.length) + what;
	};


/***/ },
/* 37 */
/***/ function(module, exports) {

	/*!
	 * months <https://github.com/jonschlinkert/months>
	 *
	 * Copyright (c) 2014 Jon Schlinkert, contributors.
	 * Licensed under the MIT license.
	 */

	module.exports = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	module.exports.abbr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	const regexEscape = __webpack_require__(39);

	class ParseIt {
	    /**
	     * ParseIt
	     * The `ParseIt` class. It can be used to use the same data object but with different formats/arguments.
	     *
	     * @name ParseIt
	     * @function
	     * @param {Object} obj An object containing the fields to replace.
	     */
	    constructor (obj) {
	        this.obj = obj || {};
	        this.re = new RegExp("^(" + Object.keys(obj).map(regexEscape).join("|") + ")");
	    }

	    /**
	     * run
	     * Replaces the fields in the format string with data coming from the data object.
	     *
	     *
	     * @name parseIt
	     * @function
	     * @param {String} format The format input.
	     * @param {Array} args An array of arguments to be passed to the replace function (stored in the `obj` object).
	     * @return {String} The result as string.
	     */
	    run (format, args) {
	        var result = "";
	        args = args || [];
	        do {
	            let arr = format.match(this.re)
	              , field = arr && arr[1]
	              , c = field || format.charAt(0)
	              ;

	            if (field) {
	                let value = this.obj[field];
	                if (typeof value === "function") {
	                    value = value.apply(this, args);
	                }
	                result += value;
	            } else {
	                result += c;
	            }
	            format = format.substring(c.length);
	        } while (format);
	        return result;
	    }
	}

	/**
	 * parseIt
	 * A wrapper around the `ParseIt` class. The `ParseIt` constructor is accessible using `parseIt.Parser`.
	 *
	 * @name parseIt
	 * @function
	 * @param {String} format The format input.
	 * @param {Object} obj An object containing the fields to replace.
	 * @param {Array} args An array of arguments to be passed to the replace function (stored in the `obj` object).
	 * @return {String} The result as string.
	 */
	function parseIt(format, obj, args) {
	    return new ParseIt(obj).run(format, args);
	}

	parseIt.Parser = ParseIt;

	module.exports = parseIt;


/***/ },
/* 39 */
/***/ function(module, exports) {

	/**
	 * RegexEscape
	 * Escapes a string for using it in a regular expression.
	 *
	 * @name RegexEscape
	 * @function
	 * @param {String} input The string that must be escaped.
	 * @return {String} The escaped string.
	 */
	function RegexEscape(input) {
	    return input.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
	}

	/**
	 * proto
	 * Adds the `RegexEscape` function to `RegExp` class.
	 *
	 * @name proto
	 * @function
	 * @return {Function} The `RegexEscape` function.
	 */
	RegexEscape.proto = function () {
	    RegExp.escape = RegexEscape;
	    return RegexEscape;
	};

	module.exports = RegexEscape;


/***/ },
/* 40 */
/***/ function(module, exports) {

	
	var guid = function() {
	  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	    var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
	    return v.toString(16);
	  }).toUpperCase();
	}

	module.exports = guid;


/***/ }
/******/ ])
});
;