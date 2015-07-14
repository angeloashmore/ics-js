/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _event = __webpack_require__(1);
	
	var _event2 = _interopRequireDefault(_event);
	
	var _errorsNoEventsError = __webpack_require__(3);
	
	var _errorsNoEventsError2 = _interopRequireDefault(_errorsNoEventsError);
	
	var ICS = (function () {
	  _createClass(ICS, null, [{
	    key: "MIME_TYPE",
	    value: "text/calendar",
	    enumerable: true
	  }, {
	    key: "SEPARATOR",
	    value: "\n",
	    enumerable: true
	  }, {
	    key: "Event",
	    value: _event2["default"],
	    enumerable: true
	  }]);
	
	  function ICS() {
	    _classCallCheck(this, ICS);
	
	    this.events = [];
	  }
	
	  _createClass(ICS, [{
	    key: "addEvent",
	    value: function addEvent(event) {
	      if (!(event instanceof _event2["default"])) {
	        throw new TypeError("Argument `event` must be an instance of ICSEvent.");
	      } else if (!event.isValid()) {
	        throw new InvalidEventError();
	      }
	
	      this._events.push(event);
	    }
	  }, {
	    key: "toString",
	    value: function toString() {
	      if (this.events.length < 1) throw new _errorsNoEventsError2["default"]();
	
	      var events = this.events.map(function (event) {
	        return event.toString();
	      });
	
	      return ["BEGIN:VCALENDAR", "VERSION:2.0", events.join(ICS.SEPARATOR), "END:VCALENDAR"].join(ICS.SEPARATOR);
	    }
	  }, {
	    key: "toBlob",
	    value: function toBlob() {
	      return new Blob([this.toString()], { type: ICS.MIME_TYPE });
	    }
	  }, {
	    key: "toBase64",
	    value: function toBase64(callback) {
	      var reader = new window.FileReader();
	      reader.readAsDataURL(this.toBlob());
	      reader.onloadend = function () {
	        return callback(reader.result);
	      };
	    }
	  }]);
	
	  return ICS;
	})();
	
	exports["default"] = ICS;
	module.exports = exports["default"];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _errorsInvalidEventError = __webpack_require__(2);
	
	var _errorsInvalidEventError2 = _interopRequireDefault(_errorsInvalidEventError);
	
	var Event = (function () {
	  _createClass(Event, null, [{
	    key: "SEPARATOR",
	    value: "\n",
	    enumerable: true
	  }]);
	
	  function Event() {
	    _classCallCheck(this, Event);
	
	    // Required props.
	    this.subject = null;
	    this.start = null;
	    this.end = null;
	
	    // Optional props.
	    this.description = null;
	    this.location = null;
	  }
	
	  _createClass(Event, [{
	    key: "isValid",
	    value: function isValid() {
	      if (this.subject == undefined || this.start == undefined || this.end == undefined) {
	        return false;
	      }
	    }
	  }, {
	    key: "toString",
	    value: function toString() {
	      if (!this.isValid()) throw new _errorsInvalidEventError2["default"]();
	
	      var optionals = [];
	      if (this.description != undefined) optionals.push("DESCRIPTION:" + this.description);
	      if (this.location != undefined) optionals.push("LOCATION:" + this.location);
	
	      return ["BEGIN:VEVENT", "CLASS:PUBLIC", "DTSTART;VALUE=DATE:" + ICSEvent.dateToICSFormat(this.start), "DTEND;VALUE=DATE:" + ICSEvent.dateToICSFormat(this.end), "SUMMARY;LANGUAGE=en-us:" + this.subject, optionals.join(Event.SEPARATOR), "TRANSP:TRANSPARENT", "END:VEVENT"].join(Event.SEPARATOR);
	    }
	  }], [{
	    key: "dateToICSFormat",
	    value: function dateToICSFormat(date) {
	      if (!(date instanceof Date)) throw new TypeError("Argument `date` must be an instance of Date.");
	
	      var year = ("0000" + date.getFullYear().toString()).slice(-4);
	      var month = ("00" + (date.getMonth() + 1).toString()).slice(-2);
	      var day = ("00" + date.getDate().toString()).slice(-2);
	      var hours = ("00" + date.getHours().toString()).slice(-2);
	      var minutes = ("00" + date.getMinutes().toString()).slice(-2);
	      var seconds = ("00" + date.getMinutes().toString()).slice(-2);
	
	      var time = "T" + hours + minutes + seconds;
	
	      return year + month + day + time;
	    }
	  }]);
	
	  return Event;
	})();
	
	exports["default"] = Event;
	module.exports = exports["default"];

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = InvalidEventError;
	
	function InvalidEventError(message) {
	  this.name = "InvalidEventError";
	  this.message = message || "Event is not configured correctly.";
	}
	
	InvalidEventError.prototype = Object.create(Error.prototype);
	InvalidEventError.prototype.constructor = InvalidEventError;
	module.exports = exports["default"];

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = NoEventsError;
	
	function NoEventsError(message) {
	  this.name = "NoEventsError";
	  this.message = message || "No events added.";
	}
	
	NoEventsError.prototype = Object.create(Error.prototype);
	NoEventsError.prototype.constructor = NoEventsError;
	module.exports = exports["default"];

/***/ }
/******/ ]);
//# sourceMappingURL=ics.js.map