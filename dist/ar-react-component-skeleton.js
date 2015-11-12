(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*!
  Copyright (c) 2015 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes += ' ' + arg;
			} else if (Array.isArray(arg)) {
				classes += ' ' + classNames.apply(null, arg);
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes += ' ' + key;
					}
				}
			}
		}

		return classes.substr(1);
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());

},{}],2:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var _react = typeof window !== 'undefined' ? window.React : typeof global !== 'undefined' ? global.React : null;

var _react2 = _interopRequireDefault(_react);

var _lodash = typeof window !== 'undefined' ? window._ : typeof global !== 'undefined' ? global._ : null;

var _lodash2 = _interopRequireDefault(_lodash);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

typeof window !== 'undefined' ? window.ReactBootstrap : typeof global !== 'undefined' ? global.ReactBootstrap : null;

var ReactComponentSkeleton = _react2['default'].createClass({
  displayName: 'ReactComponentSkeleton',

  /**************************************************
   * Component Specs and lifecycle                  *
   **************************************************/

  propTypes: {
    i18n: _react2['default'].PropTypes.object.isRequired
  },

  /**************************************************
   * Rendering                                      *
   **************************************************/

  render: function render() {
    return _react2['default'].createElement('div', null, 'Component goes here');
  }

  /**************************************************
   * Event handlers && children component callbacks *
   **************************************************/

  /**************************************************
   * Helper methods                                 *
   **************************************************/

});

exports['default'] = ReactComponentSkeleton;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"classnames":1}],3:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ = require('../.');

var _2 = _interopRequireDefault(_);

window.Rollup = window.Rollup || {};
window.Rollup.ReactComponentSkeleton = _2['default'];

},{"../.":2}]},{},[3]);
