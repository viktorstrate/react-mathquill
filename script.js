/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(4);
} else {}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(5);
} else {}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var l=__webpack_require__(2),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,z=n?Symbol.for("react.memo"):60115,A=n?Symbol.for("react.lazy"):
60116,B="function"===typeof Symbol&&Symbol.iterator;function C(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E={};function F(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(C(85));this.updater.enqueueSetState(this,a,b,"setState")};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function G(){}G.prototype=F.prototype;function H(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}var I=H.prototype=new G;I.constructor=H;l(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,c){var e,d={},g=null,k=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var h=Array(f),m=0;m<f;m++)h[m]=arguments[m+2];d.children=h}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return{$$typeof:p,type:a,key:g,ref:k,props:d,_owner:J.current}}
function N(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g,Q=[];function R(a,b,c,e){if(Q.length){var d=Q.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return{result:a,keyPrefix:b,func:c,context:e,count:0}}
function S(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q.length&&Q.push(a)}
function T(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return c(e,a,""===b?"."+U(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){d=a[k];var f=b+U(d,k);g+=T(d,f,c,e)}else if(null===a||"object"!==typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=
0;!(d=a.next()).done;)d=d.value,f=b+U(d,k++),g+=T(d,f,c,e);else if("object"===d)throw c=""+a,Error(C(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function V(a,b,c){return null==a?0:T(a,"",b,c)}function U(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function W(a,b){a.func.call(a.context,b,a.count++)}
function aa(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?X(a,e,c,function(a){return a}):null!=a&&(O(a)&&(a=N(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+c)),e.push(a))}function X(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(P,"$&/")+"/");b=R(b,g,e,d);V(a,aa,b);S(b)}var Y={current:null};function Z(){var a=Y.current;if(null===a)throw Error(C(321));return a}
var ba={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:l};exports.Children={map:function(a,b,c){if(null==a)return a;var e=[];X(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=R(null,null,b,c);V(a,W,b);S(b)},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];X(a,b,null,function(a){return a});return b},only:function(a){if(!O(a))throw Error(C(143));return a}};
exports.Component=F;exports.Fragment=r;exports.Profiler=u;exports.PureComponent=H;exports.StrictMode=t;exports.Suspense=y;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ba;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(C(267,a));var e=l({},a.props),d=a.key,g=a.ref,k=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,k=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(h in b)K.call(b,h)&&!L.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==f?f[h]:b[h])}var h=arguments.length-2;if(1===h)e.children=c;else if(1<h){f=Array(h);for(var m=0;m<h;m++)f[m]=arguments[m+2];e.children=f}return{$$typeof:p,type:a.type,
key:d,ref:g,props:e,_owner:k}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:x,render:a}};exports.isValidElement=O;
exports.lazy=function(a){return{$$typeof:A,_ctor:a,_status:-1,_result:null}};exports.memo=function(a,b){return{$$typeof:z,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return Z().useCallback(a,b)};exports.useContext=function(a,b){return Z().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return Z().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return Z().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return Z().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return Z().useMemo(a,b)};exports.useReducer=function(a,b,c){return Z().useReducer(a,b,c)};exports.useRef=function(a){return Z().useRef(a)};exports.useState=function(a){return Z().useState(a)};exports.version="16.13.1";


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(0),n=__webpack_require__(2),r=__webpack_require__(6);function u(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(u(227));
function ba(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var da=!1,ea=null,fa=!1,ha=null,ia={onError:function(a){da=!0;ea=a}};function ja(a,b,c,d,e,f,g,h,k){da=!1;ea=null;ba.apply(ia,arguments)}function ka(a,b,c,d,e,f,g,h,k){ja.apply(this,arguments);if(da){if(da){var l=ea;da=!1;ea=null}else throw Error(u(198));fa||(fa=!0,ha=l)}}var la=null,ma=null,na=null;
function oa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=na(c);ka(d,b,void 0,a);a.currentTarget=null}var pa=null,qa={};
function ra(){if(pa)for(var a in qa){var b=qa[a],c=pa.indexOf(a);if(!(-1<c))throw Error(u(96,a));if(!sa[c]){if(!b.extractEvents)throw Error(u(97,a));sa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;if(ta.hasOwnProperty(h))throw Error(u(99,h));ta[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ua(k[e],g,h);e=!0}else f.registrationName?(ua(f.registrationName,g,h),e=!0):e=!1;if(!e)throw Error(u(98,d,a));}}}}
function ua(a,b,c){if(va[a])throw Error(u(100,a));va[a]=b;wa[a]=b.eventTypes[c].dependencies}var sa=[],ta={},va={},wa={};function xa(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!qa.hasOwnProperty(c)||qa[c]!==d){if(qa[c])throw Error(u(102,c));qa[c]=d;b=!0}}b&&ra()}var ya=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),za=null,Aa=null,Ba=null;
function Ca(a){if(a=ma(a)){if("function"!==typeof za)throw Error(u(280));var b=a.stateNode;b&&(b=la(b),za(a.stateNode,a.type,b))}}function Da(a){Aa?Ba?Ba.push(a):Ba=[a]:Aa=a}function Ea(){if(Aa){var a=Aa,b=Ba;Ba=Aa=null;Ca(a);if(b)for(a=0;a<b.length;a++)Ca(b[a])}}function Fa(a,b){return a(b)}function Ga(a,b,c,d,e){return a(b,c,d,e)}function Ha(){}var Ia=Fa,Ja=!1,Ka=!1;function La(){if(null!==Aa||null!==Ba)Ha(),Ea()}
function Ma(a,b,c){if(Ka)return a(b,c);Ka=!0;try{return Ia(a,b,c)}finally{Ka=!1,La()}}var Na=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oa=Object.prototype.hasOwnProperty,Pa={},Qa={};
function Ra(a){if(Oa.call(Qa,a))return!0;if(Oa.call(Pa,a))return!1;if(Na.test(a))return Qa[a]=!0;Pa[a]=!0;return!1}function Sa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function Ta(a,b,c,d){if(null===b||"undefined"===typeof b||Sa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f}var C={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){C[a]=new v(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];C[b]=new v(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){C[a]=new v(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){C[a]=new v(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){C[a]=new v(a,3,!1,a.toLowerCase(),null,!1)});
["checked","multiple","muted","selected"].forEach(function(a){C[a]=new v(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){C[a]=new v(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){C[a]=new v(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){C[a]=new v(a,5,!1,a.toLowerCase(),null,!1)});var Ua=/[\-:]([a-z])/g;function Va(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(Ua,
Va);C[b]=new v(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(Ua,Va);C[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(Ua,Va);C[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){C[a]=new v(a,1,!1,a.toLowerCase(),null,!1)});
C.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){C[a]=new v(a,1,!1,a.toLowerCase(),null,!0)});var Wa=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Wa.hasOwnProperty("ReactCurrentDispatcher")||(Wa.ReactCurrentDispatcher={current:null});Wa.hasOwnProperty("ReactCurrentBatchConfig")||(Wa.ReactCurrentBatchConfig={suspense:null});
function Xa(a,b,c,d){var e=C.hasOwnProperty(b)?C[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(Ta(b,c,e,d)&&(c=null),d||null===e?Ra(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
var Ya=/^(.*)[\\\/]/,E="function"===typeof Symbol&&Symbol.for,Za=E?Symbol.for("react.element"):60103,$a=E?Symbol.for("react.portal"):60106,ab=E?Symbol.for("react.fragment"):60107,bb=E?Symbol.for("react.strict_mode"):60108,cb=E?Symbol.for("react.profiler"):60114,db=E?Symbol.for("react.provider"):60109,eb=E?Symbol.for("react.context"):60110,fb=E?Symbol.for("react.concurrent_mode"):60111,gb=E?Symbol.for("react.forward_ref"):60112,hb=E?Symbol.for("react.suspense"):60113,ib=E?Symbol.for("react.suspense_list"):
60120,jb=E?Symbol.for("react.memo"):60115,kb=E?Symbol.for("react.lazy"):60116,lb=E?Symbol.for("react.block"):60121,mb="function"===typeof Symbol&&Symbol.iterator;function nb(a){if(null===a||"object"!==typeof a)return null;a=mb&&a[mb]||a["@@iterator"];return"function"===typeof a?a:null}function ob(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}}
function pb(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ab:return"Fragment";case $a:return"Portal";case cb:return"Profiler";case bb:return"StrictMode";case hb:return"Suspense";case ib:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case eb:return"Context.Consumer";case db:return"Context.Provider";case gb:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":
"ForwardRef");case jb:return pb(a.type);case lb:return pb(a.render);case kb:if(a=1===a._status?a._result:null)return pb(a)}return null}function qb(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=pb(a.type);c=null;d&&(c=pb(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Ya,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
function rb(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function sb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function tb(a){var b=sb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function xb(a){a._valueTracker||(a._valueTracker=tb(a))}function yb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=sb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function zb(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Ab(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=rb(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Bb(a,b){b=b.checked;null!=b&&Xa(a,"checked",b,!1)}
function Cb(a,b){Bb(a,b);var c=rb(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Db(a,b.type,c):b.hasOwnProperty("defaultValue")&&Db(a,b.type,rb(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Eb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Db(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function Fb(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function Gb(a,b){a=n({children:void 0},b);if(b=Fb(b.children))a.children=b;return a}
function Hb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+rb(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function Ib(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(u(91));return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Jb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(u(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(u(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:rb(c)}}
function Kb(a,b){var c=rb(b.value),d=rb(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function Lb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var Mb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Nb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ob(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Nb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var Pb,Qb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==Mb.svg||"innerHTML"in a)a.innerHTML=b;else{Pb=Pb||document.createElement("div");Pb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=Pb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function Rb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}function Sb(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Tb={animationend:Sb("Animation","AnimationEnd"),animationiteration:Sb("Animation","AnimationIteration"),animationstart:Sb("Animation","AnimationStart"),transitionend:Sb("Transition","TransitionEnd")},Ub={},Vb={};
ya&&(Vb=document.createElement("div").style,"AnimationEvent"in window||(delete Tb.animationend.animation,delete Tb.animationiteration.animation,delete Tb.animationstart.animation),"TransitionEvent"in window||delete Tb.transitionend.transition);function Wb(a){if(Ub[a])return Ub[a];if(!Tb[a])return a;var b=Tb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Vb)return Ub[a]=b[c];return a}
var Xb=Wb("animationend"),Yb=Wb("animationiteration"),Zb=Wb("animationstart"),$b=Wb("transitionend"),ac="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bc=new ("function"===typeof WeakMap?WeakMap:Map);function cc(a){var b=bc.get(a);void 0===b&&(b=new Map,bc.set(a,b));return b}
function dc(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.effectTag&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function ec(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function fc(a){if(dc(a)!==a)throw Error(u(188));}
function gc(a){var b=a.alternate;if(!b){b=dc(a);if(null===b)throw Error(u(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return fc(e),a;if(f===d)return fc(e),b;f=f.sibling}throw Error(u(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(u(189));}}if(c.alternate!==d)throw Error(u(190));}if(3!==c.tag)throw Error(u(188));return c.stateNode.current===c?a:b}function hc(a){a=gc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function ic(a,b){if(null==b)throw Error(u(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}function jc(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var kc=null;
function lc(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)oa(a,b[d],c[d]);else b&&oa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function mc(a){null!==a&&(kc=ic(kc,a));a=kc;kc=null;if(a){jc(a,lc);if(kc)throw Error(u(95));if(fa)throw a=ha,fa=!1,ha=null,a;}}
function nc(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function oc(a){if(!ya)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}var pc=[];function qc(a){a.topLevelType=null;a.nativeEvent=null;a.targetInst=null;a.ancestors.length=0;10>pc.length&&pc.push(a)}
function rc(a,b,c,d){if(pc.length){var e=pc.pop();e.topLevelType=a;e.eventSystemFlags=d;e.nativeEvent=b;e.targetInst=c;return e}return{topLevelType:a,eventSystemFlags:d,nativeEvent:b,targetInst:c,ancestors:[]}}
function sc(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d=c;if(3===d.tag)d=d.stateNode.containerInfo;else{for(;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo}if(!d)break;b=c.tag;5!==b&&6!==b||a.ancestors.push(c);c=tc(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=nc(a.nativeEvent);d=a.topLevelType;var f=a.nativeEvent,g=a.eventSystemFlags;0===c&&(g|=64);for(var h=null,k=0;k<sa.length;k++){var l=sa[k];l&&(l=l.extractEvents(d,b,f,e,g))&&(h=
ic(h,l))}mc(h)}}function uc(a,b,c){if(!c.has(a)){switch(a){case "scroll":vc(b,"scroll",!0);break;case "focus":case "blur":vc(b,"focus",!0);vc(b,"blur",!0);c.set("blur",null);c.set("focus",null);break;case "cancel":case "close":oc(a)&&vc(b,a,!0);break;case "invalid":case "submit":case "reset":break;default:-1===ac.indexOf(a)&&F(a,b)}c.set(a,null)}}
var wc,xc,yc,zc=!1,Ac=[],Bc=null,Cc=null,Dc=null,Ec=new Map,Fc=new Map,Gc=[],Hc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),Ic="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
function Jc(a,b){var c=cc(b);Hc.forEach(function(a){uc(a,b,c)});Ic.forEach(function(a){uc(a,b,c)})}function Kc(a,b,c,d,e){return{blockedOn:a,topLevelType:b,eventSystemFlags:c|32,nativeEvent:e,container:d}}
function Lc(a,b){switch(a){case "focus":case "blur":Bc=null;break;case "dragenter":case "dragleave":Cc=null;break;case "mouseover":case "mouseout":Dc=null;break;case "pointerover":case "pointerout":Ec.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Fc.delete(b.pointerId)}}function Mc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=Kc(b,c,d,e,f),null!==b&&(b=Nc(b),null!==b&&xc(b)),a;a.eventSystemFlags|=d;return a}
function Oc(a,b,c,d,e){switch(b){case "focus":return Bc=Mc(Bc,a,b,c,d,e),!0;case "dragenter":return Cc=Mc(Cc,a,b,c,d,e),!0;case "mouseover":return Dc=Mc(Dc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Ec.set(f,Mc(Ec.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Fc.set(f,Mc(Fc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Pc(a){var b=tc(a.target);if(null!==b){var c=dc(b);if(null!==c)if(b=c.tag,13===b){if(b=ec(c),null!==b){a.blockedOn=b;r.unstable_runWithPriority(a.priority,function(){yc(c)});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}function Qc(a){if(null!==a.blockedOn)return!1;var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);if(null!==b){var c=Nc(b);null!==c&&xc(c);a.blockedOn=b;return!1}return!0}
function Sc(a,b,c){Qc(a)&&c.delete(b)}function Tc(){for(zc=!1;0<Ac.length;){var a=Ac[0];if(null!==a.blockedOn){a=Nc(a.blockedOn);null!==a&&wc(a);break}var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);null!==b?a.blockedOn=b:Ac.shift()}null!==Bc&&Qc(Bc)&&(Bc=null);null!==Cc&&Qc(Cc)&&(Cc=null);null!==Dc&&Qc(Dc)&&(Dc=null);Ec.forEach(Sc);Fc.forEach(Sc)}function Uc(a,b){a.blockedOn===b&&(a.blockedOn=null,zc||(zc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Tc)))}
function Vc(a){function b(b){return Uc(b,a)}if(0<Ac.length){Uc(Ac[0],a);for(var c=1;c<Ac.length;c++){var d=Ac[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Bc&&Uc(Bc,a);null!==Cc&&Uc(Cc,a);null!==Dc&&Uc(Dc,a);Ec.forEach(b);Fc.forEach(b);for(c=0;c<Gc.length;c++)d=Gc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Gc.length&&(c=Gc[0],null===c.blockedOn);)Pc(c),null===c.blockedOn&&Gc.shift()}
var Wc={},Yc=new Map,Zc=new Map,$c=["abort","abort",Xb,"animationEnd",Yb,"animationIteration",Zb,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking",
"seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",$b,"transitionEnd","waiting","waiting"];function ad(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1],f="on"+(e[0].toUpperCase()+e.slice(1));f={phasedRegistrationNames:{bubbled:f,captured:f+"Capture"},dependencies:[d],eventPriority:b};Zc.set(d,b);Yc.set(d,f);Wc[e]=f}}
ad("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);
ad("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);ad($c,2);for(var bd="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),cd=0;cd<bd.length;cd++)Zc.set(bd[cd],0);
var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function F(a,b){vc(b,a,!1)}function vc(a,b,c){var d=Zc.get(b);switch(void 0===d?2:d){case 0:d=gd.bind(null,b,1,a);break;case 1:d=hd.bind(null,b,1,a);break;default:d=id.bind(null,b,1,a)}c?a.addEventListener(b,d,!0):a.addEventListener(b,d,!1)}function gd(a,b,c,d){Ja||Ha();var e=id,f=Ja;Ja=!0;try{Ga(e,a,b,c,d)}finally{(Ja=f)||La()}}function hd(a,b,c,d){ed(dd,id.bind(null,a,b,c,d))}
function id(a,b,c,d){if(fd)if(0<Ac.length&&-1<Hc.indexOf(a))a=Kc(null,a,b,c,d),Ac.push(a);else{var e=Rc(a,b,c,d);if(null===e)Lc(a,d);else if(-1<Hc.indexOf(a))a=Kc(e,a,b,c,d),Ac.push(a);else if(!Oc(e,a,b,c,d)){Lc(a,d);a=rc(a,d,null,b);try{Ma(sc,a)}finally{qc(a)}}}}
function Rc(a,b,c,d){c=nc(d);c=tc(c);if(null!==c){var e=dc(c);if(null===e)c=null;else{var f=e.tag;if(13===f){c=ec(e);if(null!==c)return c;c=null}else if(3===f){if(e.stateNode.hydrate)return 3===e.tag?e.stateNode.containerInfo:null;c=null}else e!==c&&(c=null)}}a=rc(a,d,c,b);try{Ma(sc,a)}finally{qc(a)}return null}
var jd={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kd=["Webkit","ms","Moz","O"];Object.keys(jd).forEach(function(a){kd.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);jd[b]=jd[a]})});function ld(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||jd.hasOwnProperty(a)&&jd[a]?(""+b).trim():b+"px"}
function md(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ld(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var nd=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function od(a,b){if(b){if(nd[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(u(137,a,""));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(u(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(u(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(u(62,""));}}
function pd(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var qd=Mb.html;function rd(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=cc(a);b=wa[b];for(var d=0;d<b.length;d++)uc(b[d],a,c)}function sd(){}
function td(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function ud(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function vd(a,b){var c=ud(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=ud(c)}}
function wd(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?wd(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function xd(){for(var a=window,b=td();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=td(a.document)}return b}
function yd(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}var zd="$",Ad="/$",Bd="$?",Cd="$!",Dd=null,Ed=null;function Fd(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function Gd(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var Hd="function"===typeof setTimeout?setTimeout:void 0,Id="function"===typeof clearTimeout?clearTimeout:void 0;function Jd(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}
function Kd(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if(c===zd||c===Cd||c===Bd){if(0===b)return a;b--}else c===Ad&&b++}a=a.previousSibling}return null}var Ld=Math.random().toString(36).slice(2),Md="__reactInternalInstance$"+Ld,Nd="__reactEventHandlers$"+Ld,Od="__reactContainere$"+Ld;
function tc(a){var b=a[Md];if(b)return b;for(var c=a.parentNode;c;){if(b=c[Od]||c[Md]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Kd(a);null!==a;){if(c=a[Md])return c;a=Kd(a)}return b}a=c;c=a.parentNode}return null}function Nc(a){a=a[Md]||a[Od];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function Pd(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(u(33));}function Qd(a){return a[Nd]||null}
function Rd(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}
function Sd(a,b){var c=a.stateNode;if(!c)return null;var d=la(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==typeof c)throw Error(u(231,
b,typeof c));return c}function Td(a,b,c){if(b=Sd(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a)}function Ud(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Rd(b);for(b=c.length;0<b--;)Td(c[b],"captured",a);for(b=0;b<c.length;b++)Td(c[b],"bubbled",a)}}
function Vd(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Sd(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a))}function Wd(a){a&&a.dispatchConfig.registrationName&&Vd(a._targetInst,null,a)}function Xd(a){jc(a,Ud)}var Yd=null,Zd=null,$d=null;
function ae(){if($d)return $d;var a,b=Zd,c=b.length,d,e="value"in Yd?Yd.value:Yd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return $d=e.slice(a,1<d?1-d:void 0)}function be(){return!0}function ce(){return!1}
function G(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?be:ce;this.isPropagationStopped=ce;return this}
n(G.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=be)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=be)},persist:function(){this.isPersistent=be},isPersistent:ce,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=ce;this._dispatchInstances=this._dispatchListeners=null}});G.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
G.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;de(c);return c};de(G);function ee(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}
function fe(a){if(!(a instanceof this))throw Error(u(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function de(a){a.eventPool=[];a.getPooled=ee;a.release=fe}var ge=G.extend({data:null}),he=G.extend({data:null}),ie=[9,13,27,32],je=ya&&"CompositionEvent"in window,ke=null;ya&&"documentMode"in document&&(ke=document.documentMode);
var le=ya&&"TextEvent"in window&&!ke,me=ya&&(!je||ke&&8<ke&&11>=ke),ne=String.fromCharCode(32),oe={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},pe=!1;
function qe(a,b){switch(a){case "keyup":return-1!==ie.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function re(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var se=!1;function te(a,b){switch(a){case "compositionend":return re(b);case "keypress":if(32!==b.which)return null;pe=!0;return ne;case "textInput":return a=b.data,a===ne&&pe?null:a;default:return null}}
function ue(a,b){if(se)return"compositionend"===a||!je&&qe(a,b)?(a=ae(),$d=Zd=Yd=null,se=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return me&&"ko"!==b.locale?null:b.data;default:return null}}
var ve={eventTypes:oe,extractEvents:function(a,b,c,d){var e;if(je)b:{switch(a){case "compositionstart":var f=oe.compositionStart;break b;case "compositionend":f=oe.compositionEnd;break b;case "compositionupdate":f=oe.compositionUpdate;break b}f=void 0}else se?qe(a,c)&&(f=oe.compositionEnd):"keydown"===a&&229===c.keyCode&&(f=oe.compositionStart);f?(me&&"ko"!==c.locale&&(se||f!==oe.compositionStart?f===oe.compositionEnd&&se&&(e=ae()):(Yd=d,Zd="value"in Yd?Yd.value:Yd.textContent,se=!0)),f=ge.getPooled(f,
b,c,d),e?f.data=e:(e=re(c),null!==e&&(f.data=e)),Xd(f),e=f):e=null;(a=le?te(a,c):ue(a,c))?(b=he.getPooled(oe.beforeInput,b,c,d),b.data=a,Xd(b)):b=null;return null===e?b:null===b?e:[e,b]}},we={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!we[a.type]:"textarea"===b?!0:!1}
var ye={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function ze(a,b,c){a=G.getPooled(ye.change,a,b,c);a.type="change";Da(c);Xd(a);return a}var Ae=null,Be=null;function Ce(a){mc(a)}function De(a){var b=Pd(a);if(yb(b))return a}function Ee(a,b){if("change"===a)return b}var Fe=!1;ya&&(Fe=oc("input")&&(!document.documentMode||9<document.documentMode));
function Ge(){Ae&&(Ae.detachEvent("onpropertychange",He),Be=Ae=null)}function He(a){if("value"===a.propertyName&&De(Be))if(a=ze(Be,a,nc(a)),Ja)mc(a);else{Ja=!0;try{Fa(Ce,a)}finally{Ja=!1,La()}}}function Ie(a,b,c){"focus"===a?(Ge(),Ae=b,Be=c,Ae.attachEvent("onpropertychange",He)):"blur"===a&&Ge()}function Je(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return De(Be)}function Ke(a,b){if("click"===a)return De(b)}function Le(a,b){if("input"===a||"change"===a)return De(b)}
var Me={eventTypes:ye,_isInputEventSupported:Fe,extractEvents:function(a,b,c,d){var e=b?Pd(b):window,f=e.nodeName&&e.nodeName.toLowerCase();if("select"===f||"input"===f&&"file"===e.type)var g=Ee;else if(xe(e))if(Fe)g=Le;else{g=Je;var h=Ie}else(f=e.nodeName)&&"input"===f.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(g=Ke);if(g&&(g=g(a,b)))return ze(g,c,d);h&&h(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Db(e,"number",e.value)}},Ne=G.extend({view:null,detail:null}),
Oe={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pe(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Oe[a])?!!b[a]:!1}function Qe(){return Pe}
var Re=0,Se=0,Te=!1,Ue=!1,Ve=Ne.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Qe,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Re;Re=a.screenX;return Te?"mousemove"===a.type?a.screenX-b:0:(Te=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=Se;Se=a.screenY;return Ue?"mousemove"===a.type?a.screenY-b:0:(Ue=!0,0)}}),We=Ve.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Xe={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},Ye={eventTypes:Xe,extractEvents:function(a,b,c,d,e){var f="mouseover"===a||"pointerover"===a,g="mouseout"===a||"pointerout"===a;if(f&&0===(e&32)&&(c.relatedTarget||c.fromElement)||!g&&!f)return null;f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window;if(g){if(g=b,b=(b=c.relatedTarget||c.toElement)?tc(b):null,null!==b){var h=dc(b);if(b!==h||5!==b.tag&&6!==b.tag)b=null}}else g=null;if(g===b)return null;if("mouseout"===a||"mouseover"===
a){var k=Ve;var l=Xe.mouseLeave;var m=Xe.mouseEnter;var p="mouse"}else if("pointerout"===a||"pointerover"===a)k=We,l=Xe.pointerLeave,m=Xe.pointerEnter,p="pointer";a=null==g?f:Pd(g);f=null==b?f:Pd(b);l=k.getPooled(l,g,c,d);l.type=p+"leave";l.target=a;l.relatedTarget=f;c=k.getPooled(m,b,c,d);c.type=p+"enter";c.target=f;c.relatedTarget=a;d=g;p=b;if(d&&p)a:{k=d;m=p;g=0;for(a=k;a;a=Rd(a))g++;a=0;for(b=m;b;b=Rd(b))a++;for(;0<g-a;)k=Rd(k),g--;for(;0<a-g;)m=Rd(m),a--;for(;g--;){if(k===m||k===m.alternate)break a;
k=Rd(k);m=Rd(m)}k=null}else k=null;m=k;for(k=[];d&&d!==m;){g=d.alternate;if(null!==g&&g===m)break;k.push(d);d=Rd(d)}for(d=[];p&&p!==m;){g=p.alternate;if(null!==g&&g===m)break;d.push(p);p=Rd(p)}for(p=0;p<k.length;p++)Vd(k[p],"bubbled",l);for(p=d.length;0<p--;)Vd(d[p],"captured",c);return 0===(e&64)?[l]:[l,c]}};function Ze(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var $e="function"===typeof Object.is?Object.is:Ze,af=Object.prototype.hasOwnProperty;
function bf(a,b){if($e(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!af.call(b,c[d])||!$e(a[c[d]],b[c[d]]))return!1;return!0}
var cf=ya&&"documentMode"in document&&11>=document.documentMode,df={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},ef=null,ff=null,gf=null,hf=!1;
function jf(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(hf||null==ef||ef!==td(c))return null;c=ef;"selectionStart"in c&&yd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return gf&&bf(gf,c)?null:(gf=c,a=G.getPooled(df.select,ff,a,b),a.type="select",a.target=ef,Xd(a),a)}
var kf={eventTypes:df,extractEvents:function(a,b,c,d,e,f){e=f||(d.window===d?d.document:9===d.nodeType?d:d.ownerDocument);if(!(f=!e)){a:{e=cc(e);f=wa.onSelect;for(var g=0;g<f.length;g++)if(!e.has(f[g])){e=!1;break a}e=!0}f=!e}if(f)return null;e=b?Pd(b):window;switch(a){case "focus":if(xe(e)||"true"===e.contentEditable)ef=e,ff=b,gf=null;break;case "blur":gf=ff=ef=null;break;case "mousedown":hf=!0;break;case "contextmenu":case "mouseup":case "dragend":return hf=!1,jf(c,d);case "selectionchange":if(cf)break;
case "keydown":case "keyup":return jf(c,d)}return null}},lf=G.extend({animationName:null,elapsedTime:null,pseudoElement:null}),mf=G.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),nf=Ne.extend({relatedTarget:null});function of(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rf=Ne.extend({key:function(a){if(a.key){var b=pf[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=of(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?qf[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Qe,charCode:function(a){return"keypress"===
a.type?of(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?of(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),sf=Ve.extend({dataTransfer:null}),tf=Ne.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Qe}),uf=G.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),vf=Ve.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),wf={eventTypes:Wc,extractEvents:function(a,b,c,d){var e=Yc.get(a);if(!e)return null;switch(a){case "keypress":if(0===of(c))return null;case "keydown":case "keyup":a=rf;break;case "blur":case "focus":a=nf;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=
Ve;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=sf;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=tf;break;case Xb:case Yb:case Zb:a=lf;break;case $b:a=uf;break;case "scroll":a=Ne;break;case "wheel":a=vf;break;case "copy":case "cut":case "paste":a=mf;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=
We;break;default:a=G}b=a.getPooled(e,b,c,d);Xd(b);return b}};if(pa)throw Error(u(101));pa=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ra();var xf=Nc;la=Qd;ma=xf;na=Pd;xa({SimpleEventPlugin:wf,EnterLeaveEventPlugin:Ye,ChangeEventPlugin:Me,SelectEventPlugin:kf,BeforeInputEventPlugin:ve});var yf=[],zf=-1;function H(a){0>zf||(a.current=yf[zf],yf[zf]=null,zf--)}
function I(a,b){zf++;yf[zf]=a.current;a.current=b}var Af={},J={current:Af},K={current:!1},Bf=Af;function Cf(a,b){var c=a.type.contextTypes;if(!c)return Af;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function L(a){a=a.childContextTypes;return null!==a&&void 0!==a}
function Df(){H(K);H(J)}function Ef(a,b,c){if(J.current!==Af)throw Error(u(168));I(J,b);I(K,c)}function Ff(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(u(108,pb(b)||"Unknown",e));return n({},c,{},d)}function Gf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Af;Bf=J.current;I(J,a);I(K,K.current);return!0}
function Hf(a,b,c){var d=a.stateNode;if(!d)throw Error(u(169));c?(a=Ff(a,b,Bf),d.__reactInternalMemoizedMergedChildContext=a,H(K),H(J),I(J,a)):H(K);I(K,c)}
var If=r.unstable_runWithPriority,Jf=r.unstable_scheduleCallback,Kf=r.unstable_cancelCallback,Lf=r.unstable_requestPaint,Mf=r.unstable_now,Nf=r.unstable_getCurrentPriorityLevel,Of=r.unstable_ImmediatePriority,Pf=r.unstable_UserBlockingPriority,Qf=r.unstable_NormalPriority,Rf=r.unstable_LowPriority,Sf=r.unstable_IdlePriority,Tf={},Uf=r.unstable_shouldYield,Vf=void 0!==Lf?Lf:function(){},Wf=null,Xf=null,Yf=!1,Zf=Mf(),$f=1E4>Zf?Mf:function(){return Mf()-Zf};
function ag(){switch(Nf()){case Of:return 99;case Pf:return 98;case Qf:return 97;case Rf:return 96;case Sf:return 95;default:throw Error(u(332));}}function bg(a){switch(a){case 99:return Of;case 98:return Pf;case 97:return Qf;case 96:return Rf;case 95:return Sf;default:throw Error(u(332));}}function cg(a,b){a=bg(a);return If(a,b)}function dg(a,b,c){a=bg(a);return Jf(a,b,c)}function eg(a){null===Wf?(Wf=[a],Xf=Jf(Of,fg)):Wf.push(a);return Tf}function gg(){if(null!==Xf){var a=Xf;Xf=null;Kf(a)}fg()}
function fg(){if(!Yf&&null!==Wf){Yf=!0;var a=0;try{var b=Wf;cg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});Wf=null}catch(c){throw null!==Wf&&(Wf=Wf.slice(a+1)),Jf(Of,gg),c;}finally{Yf=!1}}}function hg(a,b,c){c/=10;return 1073741821-(((1073741821-a+b/10)/c|0)+1)*c}function ig(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}var jg={current:null},kg=null,lg=null,mg=null;function ng(){mg=lg=kg=null}
function og(a){var b=jg.current;H(jg);a.type._context._currentValue=b}function pg(a,b){for(;null!==a;){var c=a.alternate;if(a.childExpirationTime<b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return}}function qg(a,b){kg=a;mg=lg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(rg=!0),a.firstContext=null)}
function sg(a,b){if(mg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)mg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===lg){if(null===kg)throw Error(u(308));lg=b;kg.dependencies={expirationTime:0,firstContext:b,responders:null}}else lg=lg.next=b}return a._currentValue}var tg=!1;function ug(a){a.updateQueue={baseState:a.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}
function vg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,baseQueue:a.baseQueue,shared:a.shared,effects:a.effects})}function wg(a,b){a={expirationTime:a,suspenseConfig:b,tag:0,payload:null,callback:null,next:null};return a.next=a}function xg(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
function yg(a,b){var c=a.alternate;null!==c&&vg(c,a);a=a.updateQueue;c=a.baseQueue;null===c?(a.baseQueue=b.next=b,b.next=b):(b.next=c.next,c.next=b)}
function zg(a,b,c,d){var e=a.updateQueue;tg=!1;var f=e.baseQueue,g=e.shared.pending;if(null!==g){if(null!==f){var h=f.next;f.next=g.next;g.next=h}f=g;e.shared.pending=null;h=a.alternate;null!==h&&(h=h.updateQueue,null!==h&&(h.baseQueue=g))}if(null!==f){h=f.next;var k=e.baseState,l=0,m=null,p=null,x=null;if(null!==h){var z=h;do{g=z.expirationTime;if(g<d){var ca={expirationTime:z.expirationTime,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null};null===x?(p=x=
ca,m=k):x=x.next=ca;g>l&&(l=g)}else{null!==x&&(x=x.next={expirationTime:1073741823,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null});Ag(g,z.suspenseConfig);a:{var D=a,t=z;g=b;ca=c;switch(t.tag){case 1:D=t.payload;if("function"===typeof D){k=D.call(ca,k,g);break a}k=D;break a;case 3:D.effectTag=D.effectTag&-4097|64;case 0:D=t.payload;g="function"===typeof D?D.call(ca,k,g):D;if(null===g||void 0===g)break a;k=n({},k,g);break a;case 2:tg=!0}}null!==z.callback&&
(a.effectTag|=32,g=e.effects,null===g?e.effects=[z]:g.push(z))}z=z.next;if(null===z||z===h)if(g=e.shared.pending,null===g)break;else z=f.next=g.next,g.next=h,e.baseQueue=f=g,e.shared.pending=null}while(1)}null===x?m=k:x.next=p;e.baseState=m;e.baseQueue=x;Bg(l);a.expirationTime=l;a.memoizedState=k}}
function Cg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=e;e=c;if("function"!==typeof d)throw Error(u(191,d));d.call(e)}}}var Dg=Wa.ReactCurrentBatchConfig,Eg=(new aa.Component).refs;function Fg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;0===a.expirationTime&&(a.updateQueue.baseState=c)}
var Jg={isMounted:function(a){return(a=a._reactInternalFiber)?dc(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=Gg(),d=Dg.suspense;
c=Hg(c,a,d);d=wg(c,d);d.tag=2;void 0!==b&&null!==b&&(d.callback=b);xg(a,d);Ig(a,c)}};function Kg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!bf(c,d)||!bf(e,f):!0}
function Lg(a,b,c){var d=!1,e=Af;var f=b.contextType;"object"===typeof f&&null!==f?f=sg(f):(e=L(b)?Bf:J.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Cf(a,e):Af);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Jg;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Mg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Jg.enqueueReplaceState(b,b.state,null)}
function Ng(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Eg;ug(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=sg(f):(f=L(b)?Bf:J.current,e.context=Cf(a,f));zg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Fg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Jg.enqueueReplaceState(e,e.state,null),zg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var Og=Array.isArray;
function Pg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(u(309));var d=c.stateNode}if(!d)throw Error(u(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Eg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(u(284));if(!c._owner)throw Error(u(290,a));}return a}
function Qg(a,b){if("textarea"!==a.type)throw Error(u(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,""));}
function Rg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Sg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Tg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Pg(a,b,c),d.return=a,d;d=Ug(c.type,c.key,c.props,null,a.mode,d);d.ref=Pg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=Vg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Wg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function p(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Tg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Za:return c=Ug(b.type,b.key,b.props,null,a.mode,c),c.ref=Pg(a,null,b),c.return=a,c;case $a:return b=Vg(b,a.mode,c),b.return=a,b}if(Og(b)||
nb(b))return b=Wg(b,a.mode,c,null),b.return=a,b;Qg(a,b)}return null}function x(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Za:return c.key===e?c.type===ab?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case $a:return c.key===e?l(a,b,c,d):null}if(Og(c)||nb(c))return null!==e?null:m(a,b,c,d,null);Qg(a,c)}return null}function z(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Za:return a=a.get(null===d.key?c:d.key)||null,d.type===ab?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case $a:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Og(d)||nb(d))return a=a.get(c)||null,m(b,a,d,e,null);Qg(b,d)}return null}function ca(e,g,h,k){for(var l=null,t=null,m=g,y=g=0,A=null;null!==m&&y<h.length;y++){m.index>y?(A=m,m=null):A=m.sibling;var q=x(e,m,h[y],k);if(null===q){null===m&&(m=A);break}a&&
m&&null===q.alternate&&b(e,m);g=f(q,g,y);null===t?l=q:t.sibling=q;t=q;m=A}if(y===h.length)return c(e,m),l;if(null===m){for(;y<h.length;y++)m=p(e,h[y],k),null!==m&&(g=f(m,g,y),null===t?l=m:t.sibling=m,t=m);return l}for(m=d(e,m);y<h.length;y++)A=z(m,e,y,h[y],k),null!==A&&(a&&null!==A.alternate&&m.delete(null===A.key?y:A.key),g=f(A,g,y),null===t?l=A:t.sibling=A,t=A);a&&m.forEach(function(a){return b(e,a)});return l}function D(e,g,h,l){var k=nb(h);if("function"!==typeof k)throw Error(u(150));h=k.call(h);
if(null==h)throw Error(u(151));for(var m=k=null,t=g,y=g=0,A=null,q=h.next();null!==t&&!q.done;y++,q=h.next()){t.index>y?(A=t,t=null):A=t.sibling;var D=x(e,t,q.value,l);if(null===D){null===t&&(t=A);break}a&&t&&null===D.alternate&&b(e,t);g=f(D,g,y);null===m?k=D:m.sibling=D;m=D;t=A}if(q.done)return c(e,t),k;if(null===t){for(;!q.done;y++,q=h.next())q=p(e,q.value,l),null!==q&&(g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);return k}for(t=d(e,t);!q.done;y++,q=h.next())q=z(t,e,y,q.value,l),null!==q&&(a&&null!==
q.alternate&&t.delete(null===q.key?y:q.key),g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);a&&t.forEach(function(a){return b(e,a)});return k}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ab&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Za:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ab){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,
k.sibling);d=e(k,f.props);d.ref=Pg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===ab?(d=Wg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Ug(f.type,f.key,f.props,null,a.mode,h),h.ref=Pg(a,d,f),h.return=a,a=h)}return g(a);case $a:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=
d.sibling}d=Vg(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Tg(f,a.mode,h),d.return=a,a=d),g(a);if(Og(f))return ca(a,d,f,h);if(nb(f))return D(a,d,f,h);l&&Qg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:throw a=a.type,Error(u(152,a.displayName||a.name||"Component"));}return c(a,d)}}var Xg=Rg(!0),Yg=Rg(!1),Zg={},$g={current:Zg},ah={current:Zg},bh={current:Zg};
function ch(a){if(a===Zg)throw Error(u(174));return a}function dh(a,b){I(bh,b);I(ah,a);I($g,Zg);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Ob(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=Ob(b,a)}H($g);I($g,b)}function eh(){H($g);H(ah);H(bh)}function fh(a){ch(bh.current);var b=ch($g.current);var c=Ob(b,a.type);b!==c&&(I(ah,a),I($g,c))}function gh(a){ah.current===a&&(H($g),H(ah))}var M={current:0};
function hh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||c.data===Bd||c.data===Cd))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}function ih(a,b){return{responder:a,props:b}}
var jh=Wa.ReactCurrentDispatcher,kh=Wa.ReactCurrentBatchConfig,lh=0,N=null,O=null,P=null,mh=!1;function Q(){throw Error(u(321));}function nh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!$e(a[c],b[c]))return!1;return!0}
function oh(a,b,c,d,e,f){lh=f;N=b;b.memoizedState=null;b.updateQueue=null;b.expirationTime=0;jh.current=null===a||null===a.memoizedState?ph:qh;a=c(d,e);if(b.expirationTime===lh){f=0;do{b.expirationTime=0;if(!(25>f))throw Error(u(301));f+=1;P=O=null;b.updateQueue=null;jh.current=rh;a=c(d,e)}while(b.expirationTime===lh)}jh.current=sh;b=null!==O&&null!==O.next;lh=0;P=O=N=null;mh=!1;if(b)throw Error(u(300));return a}
function th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===P?N.memoizedState=P=a:P=P.next=a;return P}function uh(){if(null===O){var a=N.alternate;a=null!==a?a.memoizedState:null}else a=O.next;var b=null===P?N.memoizedState:P.next;if(null!==b)P=b,O=a;else{if(null===a)throw Error(u(310));O=a;a={memoizedState:O.memoizedState,baseState:O.baseState,baseQueue:O.baseQueue,queue:O.queue,next:null};null===P?N.memoizedState=P=a:P=P.next=a}return P}
function vh(a,b){return"function"===typeof b?b(a):b}
function wh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;var d=O,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.expirationTime;if(l<lh){var m={expirationTime:k.expirationTime,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null};null===h?(g=h=m,f=d):h=h.next=m;l>N.expirationTime&&
(N.expirationTime=l,Bg(l))}else null!==h&&(h=h.next={expirationTime:1073741823,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),Ag(l,k.suspenseConfig),d=k.eagerReducer===a?k.eagerState:a(d,k.action);k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;$e(d,b.memoizedState)||(rg=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
function xh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);$e(f,b.memoizedState)||(rg=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function yh(a){var b=th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:vh,lastRenderedState:a};a=a.dispatch=zh.bind(null,N,a);return[b.memoizedState,a]}function Ah(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=N.updateQueue;null===b?(b={lastEffect:null},N.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}
function Bh(){return uh().memoizedState}function Ch(a,b,c,d){var e=th();N.effectTag|=a;e.memoizedState=Ah(1|b,c,void 0,void 0===d?null:d)}function Dh(a,b,c,d){var e=uh();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&nh(d,g.deps)){Ah(b,c,f,d);return}}N.effectTag|=a;e.memoizedState=Ah(1|b,c,f,d)}function Eh(a,b){return Ch(516,4,a,b)}function Fh(a,b){return Dh(516,4,a,b)}function Gh(a,b){return Dh(4,2,a,b)}
function Hh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function Ih(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Dh(4,2,Hh.bind(null,b,a),c)}function Jh(){}function Kh(a,b){th().memoizedState=[a,void 0===b?null:b];return a}function Lh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function Mh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Nh(a,b,c){var d=ag();cg(98>d?98:d,function(){a(!0)});cg(97<d?97:d,function(){var d=kh.suspense;kh.suspense=void 0===b?null:b;try{a(!1),c()}finally{kh.suspense=d}})}
function zh(a,b,c){var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e={expirationTime:d,suspenseConfig:e,action:c,eagerReducer:null,eagerState:null,next:null};var f=b.pending;null===f?e.next=e:(e.next=f.next,f.next=e);b.pending=e;f=a.alternate;if(a===N||null!==f&&f===N)mh=!0,e.expirationTime=lh,N.expirationTime=lh;else{if(0===a.expirationTime&&(null===f||0===f.expirationTime)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.eagerReducer=f;e.eagerState=h;if($e(h,g))return}catch(k){}finally{}Ig(a,
d)}}
var sh={readContext:sg,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useResponder:Q,useDeferredValue:Q,useTransition:Q},ph={readContext:sg,useCallback:Kh,useContext:sg,useEffect:Eh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Ch(4,2,Hh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Ch(4,2,a,b)},useMemo:function(a,b){var c=th();b=void 0===b?null:b;a=a();c.memoizedState=[a,
b];return a},useReducer:function(a,b,c){var d=th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=zh.bind(null,N,a);return[d.memoizedState,a]},useRef:function(a){var b=th();a={current:a};return b.memoizedState=a},useState:yh,useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=yh(a),d=c[0],e=c[1];Eh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=
c}},[a,b]);return d},useTransition:function(a){var b=yh(!1),c=b[0];b=b[1];return[Kh(Nh.bind(null,b,a),[b,a]),c]}},qh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:wh,useRef:Bh,useState:function(){return wh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=wh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=c}},[a,b]);return d},useTransition:function(a){var b=
wh(vh),c=b[0];b=b[1];return[Lh(Nh.bind(null,b,a),[b,a]),c]}},rh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:xh,useRef:Bh,useState:function(){return xh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=xh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=c}},[a,b]);return d},useTransition:function(a){var b=xh(vh),c=b[0];b=b[1];return[Lh(Nh.bind(null,
b,a),[b,a]),c]}},Oh=null,Ph=null,Qh=!1;function Rh(a,b){var c=Sh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}
function Th(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function Uh(a){if(Qh){var b=Ph;if(b){var c=b;if(!Th(a,b)){b=Jd(c.nextSibling);if(!b||!Th(a,b)){a.effectTag=a.effectTag&-1025|2;Qh=!1;Oh=a;return}Rh(Oh,c)}Oh=a;Ph=Jd(b.firstChild)}else a.effectTag=a.effectTag&-1025|2,Qh=!1,Oh=a}}function Vh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;Oh=a}
function Wh(a){if(a!==Oh)return!1;if(!Qh)return Vh(a),Qh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Gd(b,a.memoizedProps))for(b=Ph;b;)Rh(a,b),b=Jd(b.nextSibling);Vh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(u(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if(c===Ad){if(0===b){Ph=Jd(a.nextSibling);break a}b--}else c!==zd&&c!==Cd&&c!==Bd||b++}a=a.nextSibling}Ph=null}}else Ph=Oh?Jd(a.stateNode.nextSibling):null;return!0}
function Xh(){Ph=Oh=null;Qh=!1}var Yh=Wa.ReactCurrentOwner,rg=!1;function R(a,b,c,d){b.child=null===a?Yg(b,null,c,d):Xg(b,a.child,c,d)}function Zh(a,b,c,d,e){c=c.render;var f=b.ref;qg(b,e);d=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R(a,b,d,e);return b.child}
function ai(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!bi(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ci(a,b,g,d,e,f);a=Ug(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:bf,c(e,d)&&a.ref===b.ref))return $h(a,b,f);b.effectTag|=1;a=Sg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ci(a,b,c,d,e,f){return null!==a&&bf(a.memoizedProps,d)&&a.ref===b.ref&&(rg=!1,e<f)?(b.expirationTime=a.expirationTime,$h(a,b,f)):di(a,b,c,d,f)}function ei(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function di(a,b,c,d,e){var f=L(c)?Bf:J.current;f=Cf(b,f);qg(b,e);c=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R(a,b,c,e);return b.child}
function fi(a,b,c,d,e){if(L(c)){var f=!0;Gf(b)}else f=!1;qg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Lg(b,c,d),Ng(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=sg(l):(l=L(c)?Bf:J.current,l=Cf(b,l));var m=c.getDerivedStateFromProps,p="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;p||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l);tg=!1;var x=b.memoizedState;g.state=x;zg(b,d,g,e);k=b.memoizedState;h!==d||x!==k||K.current||tg?("function"===typeof m&&(Fg(b,c,m,d),k=b.memoizedState),(h=tg||Kg(b,c,h,d,x,k,l))?(p||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,vg(a,b),h=b.memoizedProps,g.props=b.type===b.elementType?h:ig(b.type,h),k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=sg(l):(l=L(c)?Bf:J.current,l=Cf(b,l)),m=c.getDerivedStateFromProps,(p="function"===typeof m||"function"===
typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l),tg=!1,k=b.memoizedState,g.state=k,zg(b,d,g,e),x=b.memoizedState,h!==d||k!==x||K.current||tg?("function"===typeof m&&(Fg(b,c,m,d),x=b.memoizedState),(m=tg||Kg(b,c,h,d,k,x,l))?(p||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
x,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=l,d=m):
("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return gi(a,b,c,d,f,e)}
function gi(a,b,c,d,e,f){ei(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Hf(b,c,!1),$h(a,b,f);d=b.stateNode;Yh.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Xg(b,a.child,null,f),b.child=Xg(b,null,h,f)):R(a,b,h,f);b.memoizedState=d.state;e&&Hf(b,c,!0);return b.child}function hi(a){var b=a.stateNode;b.pendingContext?Ef(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Ef(a,b.context,!1);dh(a,b.containerInfo)}
var ii={dehydrated:null,retryTime:0};
function ji(a,b,c){var d=b.mode,e=b.pendingProps,f=M.current,g=!1,h;(h=0!==(b.effectTag&64))||(h=0!==(f&2)&&(null===a||null!==a.memoizedState));h?(g=!0,b.effectTag&=-65):null!==a&&null===a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||(f|=1);I(M,f&1);if(null===a){void 0!==e.fallback&&Uh(b);if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=
b;e.sibling=c;b.memoizedState=ii;b.child=e;return c}d=e.children;b.memoizedState=null;return b.child=Yg(b,null,d,c)}if(null!==a.memoizedState){a=a.child;d=a.sibling;if(g){e=e.fallback;c=Sg(a,a.pendingProps);c.return=b;if(0===(b.mode&2)&&(g=null!==b.memoizedState?b.child.child:b.child,g!==a.child))for(c.child=g;null!==g;)g.return=c,g=g.sibling;d=Sg(d,e);d.return=b;c.sibling=d;c.childExpirationTime=0;b.memoizedState=ii;b.child=c;return d}c=Xg(b,a.child,e.children,c);b.memoizedState=null;return b.child=
c}a=a.child;if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;e.child=a;null!==a&&(a.return=e);if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=b;e.sibling=c;c.effectTag|=2;e.childExpirationTime=0;b.memoizedState=ii;b.child=e;return c}b.memoizedState=null;return b.child=Xg(b,a,e.children,c)}
function ki(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);pg(a.return,b)}function li(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailExpiration:0,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailExpiration=0,g.tailMode=e,g.lastEffect=f)}
function mi(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;R(a,b,d.children,c);d=M.current;if(0!==(d&2))d=d&1|2,b.effectTag|=64;else{if(null!==a&&0!==(a.effectTag&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&ki(a,c);else if(19===a.tag)ki(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(M,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===hh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);li(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===hh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}li(b,!0,c,null,f,b.lastEffect);break;case "together":li(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function $h(a,b,c){null!==a&&(b.dependencies=a.dependencies);var d=b.expirationTime;0!==d&&Bg(d);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw Error(u(153));if(null!==b.child){a=b.child;c=Sg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Sg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}var ni,oi,pi,qi;
ni=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};oi=function(){};
pi=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;ch($g.current);a=null;switch(c){case "input":f=zb(g,f);d=zb(g,d);a=[];break;case "option":f=Gb(g,f);d=Gb(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=Ib(g,f);d=Ib(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=sd)}od(c,d);var h,k;c=null;for(h in f)if(!d.hasOwnProperty(h)&&f.hasOwnProperty(h)&&null!=f[h])if("style"===
h)for(k in g=f[h],g)g.hasOwnProperty(k)&&(c||(c={}),c[k]="");else"dangerouslySetInnerHTML"!==h&&"children"!==h&&"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(va.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in d){var l=d[h];g=null!=f?f[h]:void 0;if(d.hasOwnProperty(h)&&l!==g&&(null!=l||null!=g))if("style"===h)if(g){for(k in g)!g.hasOwnProperty(k)||l&&l.hasOwnProperty(k)||(c||(c={}),c[k]="");for(k in l)l.hasOwnProperty(k)&&g[k]!==l[k]&&(c||(c={}),
c[k]=l[k])}else c||(a||(a=[]),a.push(h,c)),c=l;else"dangerouslySetInnerHTML"===h?(l=l?l.__html:void 0,g=g?g.__html:void 0,null!=l&&g!==l&&(a=a||[]).push(h,l)):"children"===h?g===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(h,""+l):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&(va.hasOwnProperty(h)?(null!=l&&rd(e,h),a||g===l||(a=[])):(a=a||[]).push(h,l))}c&&(a=a||[]).push("style",c);e=a;if(b.updateQueue=e)b.effectTag|=4}};
qi=function(a,b,c,d){c!==d&&(b.effectTag|=4)};function ri(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function si(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return L(b.type)&&Df(),null;case 3:return eh(),H(K),H(J),c=b.stateNode,c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),null!==a&&null!==a.child||!Wh(b)||(b.effectTag|=4),oi(b),null;case 5:gh(b);c=ch(bh.current);var e=b.type;if(null!==a&&null!=b.stateNode)pi(a,b,e,d,c),a.ref!==b.ref&&(b.effectTag|=128);else{if(!d){if(null===b.stateNode)throw Error(u(166));
return null}a=ch($g.current);if(Wh(b)){d=b.stateNode;e=b.type;var f=b.memoizedProps;d[Md]=b;d[Nd]=f;switch(e){case "iframe":case "object":case "embed":F("load",d);break;case "video":case "audio":for(a=0;a<ac.length;a++)F(ac[a],d);break;case "source":F("error",d);break;case "img":case "image":case "link":F("error",d);F("load",d);break;case "form":F("reset",d);F("submit",d);break;case "details":F("toggle",d);break;case "input":Ab(d,f);F("invalid",d);rd(c,"onChange");break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};F("invalid",d);rd(c,"onChange");break;case "textarea":Jb(d,f),F("invalid",d),rd(c,"onChange")}od(e,f);a=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(a=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(a=["children",""+h]):va.hasOwnProperty(g)&&null!=h&&rd(c,g)}switch(e){case "input":xb(d);Eb(d,f,!0);break;case "textarea":xb(d);Lb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&
(d.onclick=sd)}c=a;b.updateQueue=c;null!==c&&(b.effectTag|=4)}else{g=9===c.nodeType?c:c.ownerDocument;a===qd&&(a=Nb(e));a===qd?"script"===e?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(e,{is:d.is}):(a=g.createElement(e),"select"===e&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,e);a[Md]=b;a[Nd]=d;ni(a,b,!1,!1);b.stateNode=a;g=pd(e,d);switch(e){case "iframe":case "object":case "embed":F("load",
a);h=d;break;case "video":case "audio":for(h=0;h<ac.length;h++)F(ac[h],a);h=d;break;case "source":F("error",a);h=d;break;case "img":case "image":case "link":F("error",a);F("load",a);h=d;break;case "form":F("reset",a);F("submit",a);h=d;break;case "details":F("toggle",a);h=d;break;case "input":Ab(a,d);h=zb(a,d);F("invalid",a);rd(c,"onChange");break;case "option":h=Gb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};h=n({},d,{value:void 0});F("invalid",a);rd(c,"onChange");break;case "textarea":Jb(a,
d);h=Ib(a,d);F("invalid",a);rd(c,"onChange");break;default:h=d}od(e,h);var k=h;for(f in k)if(k.hasOwnProperty(f)){var l=k[f];"style"===f?md(a,l):"dangerouslySetInnerHTML"===f?(l=l?l.__html:void 0,null!=l&&Qb(a,l)):"children"===f?"string"===typeof l?("textarea"!==e||""!==l)&&Rb(a,l):"number"===typeof l&&Rb(a,""+l):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(va.hasOwnProperty(f)?null!=l&&rd(c,f):null!=l&&Xa(a,f,l,g))}switch(e){case "input":xb(a);Eb(a,d,!1);
break;case "textarea":xb(a);Lb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+rb(d.value));break;case "select":a.multiple=!!d.multiple;c=d.value;null!=c?Hb(a,!!d.multiple,c,!1):null!=d.defaultValue&&Hb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof h.onClick&&(a.onclick=sd)}Fd(e,d)&&(b.effectTag|=4)}null!==b.ref&&(b.effectTag|=128)}return null;case 6:if(a&&null!=b.stateNode)qi(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(u(166));
c=ch(bh.current);ch($g.current);Wh(b)?(c=b.stateNode,d=b.memoizedProps,c[Md]=b,c.nodeValue!==d&&(b.effectTag|=4)):(c=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),c[Md]=b,b.stateNode=c)}return null;case 13:H(M);d=b.memoizedState;if(0!==(b.effectTag&64))return b.expirationTime=c,b;c=null!==d;d=!1;null===a?void 0!==b.memoizedProps.fallback&&Wh(b):(e=a.memoizedState,d=null!==e,c||null===e||(e=a.child.sibling,null!==e&&(f=b.firstEffect,null!==f?(b.firstEffect=e,e.nextEffect=f):(b.firstEffect=b.lastEffect=
e,e.nextEffect=null),e.effectTag=8)));if(c&&!d&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(M.current&1))S===ti&&(S=ui);else{if(S===ti||S===ui)S=vi;0!==wi&&null!==T&&(xi(T,U),yi(T,wi))}if(c||d)b.effectTag|=4;return null;case 4:return eh(),oi(b),null;case 10:return og(b),null;case 17:return L(b.type)&&Df(),null;case 19:H(M);d=b.memoizedState;if(null===d)return null;e=0!==(b.effectTag&64);f=d.rendering;if(null===f)if(e)ri(d,!1);else{if(S!==ti||null!==a&&0!==(a.effectTag&
64))for(f=b.child;null!==f;){a=hh(f);if(null!==a){b.effectTag|=64;ri(d,!1);e=a.updateQueue;null!==e&&(b.updateQueue=e,b.effectTag|=4);null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;for(d=b.child;null!==d;)e=d,f=c,e.effectTag&=2,e.nextEffect=null,e.firstEffect=null,e.lastEffect=null,a=e.alternate,null===a?(e.childExpirationTime=0,e.expirationTime=f,e.child=null,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null):(e.childExpirationTime=a.childExpirationTime,
e.expirationTime=a.expirationTime,e.child=a.child,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,f=a.dependencies,e.dependencies=null===f?null:{expirationTime:f.expirationTime,firstContext:f.firstContext,responders:f.responders}),d=d.sibling;I(M,M.current&1|2);return b.child}f=f.sibling}}else{if(!e)if(a=hh(f),null!==a){if(b.effectTag|=64,e=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.effectTag|=4),ri(d,!0),null===d.tail&&"hidden"===d.tailMode&&!f.alternate)return b=
b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*$f()-d.renderingStartTime>d.tailExpiration&&1<c&&(b.effectTag|=64,e=!0,ri(d,!1),b.expirationTime=b.childExpirationTime=c-1);d.isBackwards?(f.sibling=b.child,b.child=f):(c=d.last,null!==c?c.sibling=f:b.child=f,d.last=f)}return null!==d.tail?(0===d.tailExpiration&&(d.tailExpiration=$f()+500),c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=$f(),c.sibling=null,b=M.current,I(M,e?b&1|2:b&1),c):null}throw Error(u(156,
b.tag));}function zi(a){switch(a.tag){case 1:L(a.type)&&Df();var b=a.effectTag;return b&4096?(a.effectTag=b&-4097|64,a):null;case 3:eh();H(K);H(J);b=a.effectTag;if(0!==(b&64))throw Error(u(285));a.effectTag=b&-4097|64;return a;case 5:return gh(a),null;case 13:return H(M),b=a.effectTag,b&4096?(a.effectTag=b&-4097|64,a):null;case 19:return H(M),null;case 4:return eh(),null;case 10:return og(a),null;default:return null}}function Ai(a,b){return{value:a,source:b,stack:qb(b)}}
var Bi="function"===typeof WeakSet?WeakSet:Set;function Ci(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=qb(c));null!==c&&pb(c.type);b=b.value;null!==a&&1===a.tag&&pb(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function Di(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){Ei(a,c)}}function Fi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Ei(a,c)}else b.current=null}
function Gi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:ig(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(u(163));}
function Hi(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.destroy;c.destroy=void 0;void 0!==d&&d()}c=c.next}while(c!==b)}}function Ii(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}
function Ji(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:Ii(3,c);return;case 1:a=c.stateNode;if(c.effectTag&4)if(null===b)a.componentDidMount();else{var d=c.elementType===c.type?b.memoizedProps:ig(c.type,b.memoizedProps);a.componentDidUpdate(d,b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}b=c.updateQueue;null!==b&&Cg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Cg(c,b,a)}return;
case 5:a=c.stateNode;null===b&&c.effectTag&4&&Fd(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Vc(c))));return;case 19:case 17:case 20:case 21:return}throw Error(u(163));}
function Ki(a,b,c){"function"===typeof Li&&Li(b);switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var d=a.next;cg(97<c?97:c,function(){var a=d;do{var c=a.destroy;if(void 0!==c){var g=b;try{c()}catch(h){Ei(g,h)}}a=a.next}while(a!==d)})}break;case 1:Fi(b);c=b.stateNode;"function"===typeof c.componentWillUnmount&&Di(b,c);break;case 5:Fi(b);break;case 4:Mi(a,b,c)}}
function Ni(a){var b=a.alternate;a.return=null;a.child=null;a.memoizedState=null;a.updateQueue=null;a.dependencies=null;a.alternate=null;a.firstEffect=null;a.lastEffect=null;a.pendingProps=null;a.memoizedProps=null;a.stateNode=null;null!==b&&Ni(b)}function Oi(a){return 5===a.tag||3===a.tag||4===a.tag}
function Pi(a){a:{for(var b=a.return;null!==b;){if(Oi(b)){var c=b;break a}b=b.return}throw Error(u(160));}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(u(161));}c.effectTag&16&&(Rb(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Oi(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}d?Qi(a,c,b):Ri(a,c,b)}
function Qi(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=sd));else if(4!==d&&(a=a.child,null!==a))for(Qi(a,b,c),a=a.sibling;null!==a;)Qi(a,b,c),a=a.sibling}
function Ri(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Ri(a,b,c),a=a.sibling;null!==a;)Ri(a,b,c),a=a.sibling}
function Mi(a,b,c){for(var d=b,e=!1,f,g;;){if(!e){e=d.return;a:for(;;){if(null===e)throw Error(u(160));f=e.stateNode;switch(e.tag){case 5:g=!1;break a;case 3:f=f.containerInfo;g=!0;break a;case 4:f=f.containerInfo;g=!0;break a}e=e.return}e=!0}if(5===d.tag||6===d.tag){a:for(var h=a,k=d,l=c,m=k;;)if(Ki(h,m,l),null!==m.child&&4!==m.tag)m.child.return=m,m=m.child;else{if(m===k)break a;for(;null===m.sibling;){if(null===m.return||m.return===k)break a;m=m.return}m.sibling.return=m.return;m=m.sibling}g?(h=
f,k=d.stateNode,8===h.nodeType?h.parentNode.removeChild(k):h.removeChild(k)):f.removeChild(d.stateNode)}else if(4===d.tag){if(null!==d.child){f=d.stateNode.containerInfo;g=!0;d.child.return=d;d=d.child;continue}}else if(Ki(a,d,c),null!==d.child){d.child.return=d;d=d.child;continue}if(d===b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return;4===d.tag&&(e=!1)}d.sibling.return=d.return;d=d.sibling}}
function Si(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:Hi(3,b);return;case 1:return;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Nd]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Bb(c,d);pd(a,e);b=pd(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?md(c,h):"dangerouslySetInnerHTML"===g?Qb(c,h):"children"===g?Rb(c,h):Xa(c,g,h,b)}switch(a){case "input":Cb(c,d);break;
case "textarea":Kb(c,d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?Hb(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?Hb(c,!!d.multiple,d.defaultValue,!0):Hb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(u(162));b.stateNode.nodeValue=b.memoizedProps;return;case 3:b=b.stateNode;b.hydrate&&(b.hydrate=!1,Vc(b.containerInfo));return;case 12:return;case 13:c=b;null===b.memoizedState?
d=!1:(d=!0,c=b.child,Ti=$f());if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=ld("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?"":a.memoizedProps;else if(13===a.tag&&null!==a.memoizedState&&null===a.memoizedState.dehydrated){f=a.child.sibling;f.return=a;a=
f;continue}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===c)break;for(;null===a.sibling;){if(null===a.return||a.return===c)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}Ui(b);return;case 19:Ui(b);return;case 17:return}throw Error(u(163));}function Ui(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Bi);b.forEach(function(b){var d=Vi.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
var Wi="function"===typeof WeakMap?WeakMap:Map;function Xi(a,b,c){c=wg(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Yi||(Yi=!0,Zi=d);Ci(a,b)};return c}
function $i(a,b,c){c=wg(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ci(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===aj?aj=new Set([this]):aj.add(this),Ci(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
var bj=Math.ceil,cj=Wa.ReactCurrentDispatcher,dj=Wa.ReactCurrentOwner,V=0,ej=8,fj=16,gj=32,ti=0,hj=1,ij=2,ui=3,vi=4,jj=5,W=V,T=null,X=null,U=0,S=ti,kj=null,lj=1073741823,mj=1073741823,nj=null,wi=0,oj=!1,Ti=0,pj=500,Y=null,Yi=!1,Zi=null,aj=null,qj=!1,rj=null,sj=90,tj=null,uj=0,vj=null,wj=0;function Gg(){return(W&(fj|gj))!==V?1073741821-($f()/10|0):0!==wj?wj:wj=1073741821-($f()/10|0)}
function Hg(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=ag();if(0===(b&4))return 99===d?1073741823:1073741822;if((W&fj)!==V)return U;if(null!==c)a=hg(a,c.timeoutMs|0||5E3,250);else switch(d){case 99:a=1073741823;break;case 98:a=hg(a,150,100);break;case 97:case 96:a=hg(a,5E3,250);break;case 95:a=2;break;default:throw Error(u(326));}null!==T&&a===U&&--a;return a}
function Ig(a,b){if(50<uj)throw uj=0,vj=null,Error(u(185));a=xj(a,b);if(null!==a){var c=ag();1073741823===b?(W&ej)!==V&&(W&(fj|gj))===V?yj(a):(Z(a),W===V&&gg()):Z(a);(W&4)===V||98!==c&&99!==c||(null===tj?tj=new Map([[a,b]]):(c=tj.get(a),(void 0===c||c>b)&&tj.set(a,b)))}}
function xj(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}null!==e&&(T===e&&(Bg(b),S===vi&&xi(e,U)),yi(e,b));return e}
function zj(a){var b=a.lastExpiredTime;if(0!==b)return b;b=a.firstPendingTime;if(!Aj(a,b))return b;var c=a.lastPingedTime;a=a.nextKnownPendingLevel;a=c>a?c:a;return 2>=a&&b!==a?0:a}
function Z(a){if(0!==a.lastExpiredTime)a.callbackExpirationTime=1073741823,a.callbackPriority=99,a.callbackNode=eg(yj.bind(null,a));else{var b=zj(a),c=a.callbackNode;if(0===b)null!==c&&(a.callbackNode=null,a.callbackExpirationTime=0,a.callbackPriority=90);else{var d=Gg();1073741823===b?d=99:1===b||2===b?d=95:(d=10*(1073741821-b)-10*(1073741821-d),d=0>=d?99:250>=d?98:5250>=d?97:95);if(null!==c){var e=a.callbackPriority;if(a.callbackExpirationTime===b&&e>=d)return;c!==Tf&&Kf(c)}a.callbackExpirationTime=
b;a.callbackPriority=d;b=1073741823===b?eg(yj.bind(null,a)):dg(d,Bj.bind(null,a),{timeout:10*(1073741821-b)-$f()});a.callbackNode=b}}}
function Bj(a,b){wj=0;if(b)return b=Gg(),Cj(a,b),Z(a),null;var c=zj(a);if(0!==c){b=a.callbackNode;if((W&(fj|gj))!==V)throw Error(u(327));Dj();a===T&&c===U||Ej(a,c);if(null!==X){var d=W;W|=fj;var e=Fj();do try{Gj();break}catch(h){Hj(a,h)}while(1);ng();W=d;cj.current=e;if(S===hj)throw b=kj,Ej(a,c),xi(a,c),Z(a),b;if(null===X)switch(e=a.finishedWork=a.current.alternate,a.finishedExpirationTime=c,d=S,T=null,d){case ti:case hj:throw Error(u(345));case ij:Cj(a,2<c?2:c);break;case ui:xi(a,c);d=a.lastSuspendedTime;
c===d&&(a.nextKnownPendingLevel=Ij(e));if(1073741823===lj&&(e=Ti+pj-$f(),10<e)){if(oj){var f=a.lastPingedTime;if(0===f||f>=c){a.lastPingedTime=c;Ej(a,c);break}}f=zj(a);if(0!==f&&f!==c)break;if(0!==d&&d!==c){a.lastPingedTime=d;break}a.timeoutHandle=Hd(Jj.bind(null,a),e);break}Jj(a);break;case vi:xi(a,c);d=a.lastSuspendedTime;c===d&&(a.nextKnownPendingLevel=Ij(e));if(oj&&(e=a.lastPingedTime,0===e||e>=c)){a.lastPingedTime=c;Ej(a,c);break}e=zj(a);if(0!==e&&e!==c)break;if(0!==d&&d!==c){a.lastPingedTime=
d;break}1073741823!==mj?d=10*(1073741821-mj)-$f():1073741823===lj?d=0:(d=10*(1073741821-lj)-5E3,e=$f(),c=10*(1073741821-c)-e,d=e-d,0>d&&(d=0),d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*bj(d/1960))-d,c<d&&(d=c));if(10<d){a.timeoutHandle=Hd(Jj.bind(null,a),d);break}Jj(a);break;case jj:if(1073741823!==lj&&null!==nj){f=lj;var g=nj;d=g.busyMinDurationMs|0;0>=d?d=0:(e=g.busyDelayMs|0,f=$f()-(10*(1073741821-f)-(g.timeoutMs|0||5E3)),d=f<=e?0:e+d-f);if(10<d){xi(a,c);a.timeoutHandle=
Hd(Jj.bind(null,a),d);break}}Jj(a);break;default:throw Error(u(329));}Z(a);if(a.callbackNode===b)return Bj.bind(null,a)}}return null}
function yj(a){var b=a.lastExpiredTime;b=0!==b?b:1073741823;if((W&(fj|gj))!==V)throw Error(u(327));Dj();a===T&&b===U||Ej(a,b);if(null!==X){var c=W;W|=fj;var d=Fj();do try{Kj();break}catch(e){Hj(a,e)}while(1);ng();W=c;cj.current=d;if(S===hj)throw c=kj,Ej(a,b),xi(a,b),Z(a),c;if(null!==X)throw Error(u(261));a.finishedWork=a.current.alternate;a.finishedExpirationTime=b;T=null;Jj(a);Z(a)}return null}function Lj(){if(null!==tj){var a=tj;tj=null;a.forEach(function(a,c){Cj(c,a);Z(c)});gg()}}
function Mj(a,b){var c=W;W|=1;try{return a(b)}finally{W=c,W===V&&gg()}}function Nj(a,b){var c=W;W&=-2;W|=ej;try{return a(b)}finally{W=c,W===V&&gg()}}
function Ej(a,b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Id(c));if(null!==X)for(c=X.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Df();break;case 3:eh();H(K);H(J);break;case 5:gh(d);break;case 4:eh();break;case 13:H(M);break;case 19:H(M);break;case 10:og(d)}c=c.return}T=a;X=Sg(a.current,null);U=b;S=ti;kj=null;mj=lj=1073741823;nj=null;wi=0;oj=!1}
function Hj(a,b){do{try{ng();jh.current=sh;if(mh)for(var c=N.memoizedState;null!==c;){var d=c.queue;null!==d&&(d.pending=null);c=c.next}lh=0;P=O=N=null;mh=!1;if(null===X||null===X.return)return S=hj,kj=b,X=null;a:{var e=a,f=X.return,g=X,h=b;b=U;g.effectTag|=2048;g.firstEffect=g.lastEffect=null;if(null!==h&&"object"===typeof h&&"function"===typeof h.then){var k=h;if(0===(g.mode&2)){var l=g.alternate;l?(g.updateQueue=l.updateQueue,g.memoizedState=l.memoizedState,g.expirationTime=l.expirationTime):(g.updateQueue=
null,g.memoizedState=null)}var m=0!==(M.current&1),p=f;do{var x;if(x=13===p.tag){var z=p.memoizedState;if(null!==z)x=null!==z.dehydrated?!0:!1;else{var ca=p.memoizedProps;x=void 0===ca.fallback?!1:!0!==ca.unstable_avoidThisFallback?!0:m?!1:!0}}if(x){var D=p.updateQueue;if(null===D){var t=new Set;t.add(k);p.updateQueue=t}else D.add(k);if(0===(p.mode&2)){p.effectTag|=64;g.effectTag&=-2981;if(1===g.tag)if(null===g.alternate)g.tag=17;else{var y=wg(1073741823,null);y.tag=2;xg(g,y)}g.expirationTime=1073741823;
break a}h=void 0;g=b;var A=e.pingCache;null===A?(A=e.pingCache=new Wi,h=new Set,A.set(k,h)):(h=A.get(k),void 0===h&&(h=new Set,A.set(k,h)));if(!h.has(g)){h.add(g);var q=Oj.bind(null,e,k,g);k.then(q,q)}p.effectTag|=4096;p.expirationTime=b;break a}p=p.return}while(null!==p);h=Error((pb(g.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+qb(g))}S!==
jj&&(S=ij);h=Ai(h,g);p=f;do{switch(p.tag){case 3:k=h;p.effectTag|=4096;p.expirationTime=b;var B=Xi(p,k,b);yg(p,B);break a;case 1:k=h;var w=p.type,ub=p.stateNode;if(0===(p.effectTag&64)&&("function"===typeof w.getDerivedStateFromError||null!==ub&&"function"===typeof ub.componentDidCatch&&(null===aj||!aj.has(ub)))){p.effectTag|=4096;p.expirationTime=b;var vb=$i(p,k,b);yg(p,vb);break a}}p=p.return}while(null!==p)}X=Pj(X)}catch(Xc){b=Xc;continue}break}while(1)}
function Fj(){var a=cj.current;cj.current=sh;return null===a?sh:a}function Ag(a,b){a<lj&&2<a&&(lj=a);null!==b&&a<mj&&2<a&&(mj=a,nj=b)}function Bg(a){a>wi&&(wi=a)}function Kj(){for(;null!==X;)X=Qj(X)}function Gj(){for(;null!==X&&!Uf();)X=Qj(X)}function Qj(a){var b=Rj(a.alternate,a,U);a.memoizedProps=a.pendingProps;null===b&&(b=Pj(a));dj.current=null;return b}
function Pj(a){X=a;do{var b=X.alternate;a=X.return;if(0===(X.effectTag&2048)){b=si(b,X,U);if(1===U||1!==X.childExpirationTime){for(var c=0,d=X.child;null!==d;){var e=d.expirationTime,f=d.childExpirationTime;e>c&&(c=e);f>c&&(c=f);d=d.sibling}X.childExpirationTime=c}if(null!==b)return b;null!==a&&0===(a.effectTag&2048)&&(null===a.firstEffect&&(a.firstEffect=X.firstEffect),null!==X.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=X.firstEffect),a.lastEffect=X.lastEffect),1<X.effectTag&&(null!==
a.lastEffect?a.lastEffect.nextEffect=X:a.firstEffect=X,a.lastEffect=X))}else{b=zi(X);if(null!==b)return b.effectTag&=2047,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=2048)}b=X.sibling;if(null!==b)return b;X=a}while(null!==X);S===ti&&(S=jj);return null}function Ij(a){var b=a.expirationTime;a=a.childExpirationTime;return b>a?b:a}function Jj(a){var b=ag();cg(99,Sj.bind(null,a,b));return null}
function Sj(a,b){do Dj();while(null!==rj);if((W&(fj|gj))!==V)throw Error(u(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw Error(u(177));a.callbackNode=null;a.callbackExpirationTime=0;a.callbackPriority=90;a.nextKnownPendingLevel=0;var e=Ij(c);a.firstPendingTime=e;d<=a.lastSuspendedTime?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:d<=a.firstSuspendedTime&&(a.firstSuspendedTime=
d-1);d<=a.lastPingedTime&&(a.lastPingedTime=0);d<=a.lastExpiredTime&&(a.lastExpiredTime=0);a===T&&(X=T=null,U=0);1<c.effectTag?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;if(null!==e){var f=W;W|=gj;dj.current=null;Dd=fd;var g=xd();if(yd(g)){if("selectionStart"in g)var h={start:g.selectionStart,end:g.selectionEnd};else a:{h=(h=g.ownerDocument)&&h.defaultView||window;var k=h.getSelection&&h.getSelection();if(k&&0!==k.rangeCount){h=k.anchorNode;var l=k.anchorOffset,
m=k.focusNode;k=k.focusOffset;try{h.nodeType,m.nodeType}catch(wb){h=null;break a}var p=0,x=-1,z=-1,ca=0,D=0,t=g,y=null;b:for(;;){for(var A;;){t!==h||0!==l&&3!==t.nodeType||(x=p+l);t!==m||0!==k&&3!==t.nodeType||(z=p+k);3===t.nodeType&&(p+=t.nodeValue.length);if(null===(A=t.firstChild))break;y=t;t=A}for(;;){if(t===g)break b;y===h&&++ca===l&&(x=p);y===m&&++D===k&&(z=p);if(null!==(A=t.nextSibling))break;t=y;y=t.parentNode}t=A}h=-1===x||-1===z?null:{start:x,end:z}}else h=null}h=h||{start:0,end:0}}else h=
null;Ed={activeElementDetached:null,focusedElem:g,selectionRange:h};fd=!1;Y=e;do try{Tj()}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);Y=e;do try{for(g=a,h=b;null!==Y;){var q=Y.effectTag;q&16&&Rb(Y.stateNode,"");if(q&128){var B=Y.alternate;if(null!==B){var w=B.ref;null!==w&&("function"===typeof w?w(null):w.current=null)}}switch(q&1038){case 2:Pi(Y);Y.effectTag&=-3;break;case 6:Pi(Y);Y.effectTag&=-3;Si(Y.alternate,Y);break;case 1024:Y.effectTag&=-1025;break;case 1028:Y.effectTag&=
-1025;Si(Y.alternate,Y);break;case 4:Si(Y.alternate,Y);break;case 8:l=Y,Mi(g,l,h),Ni(l)}Y=Y.nextEffect}}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);w=Ed;B=xd();q=w.focusedElem;h=w.selectionRange;if(B!==q&&q&&q.ownerDocument&&wd(q.ownerDocument.documentElement,q)){null!==h&&yd(q)&&(B=h.start,w=h.end,void 0===w&&(w=B),"selectionStart"in q?(q.selectionStart=B,q.selectionEnd=Math.min(w,q.value.length)):(w=(B=q.ownerDocument||document)&&B.defaultView||window,w.getSelection&&
(w=w.getSelection(),l=q.textContent.length,g=Math.min(h.start,l),h=void 0===h.end?g:Math.min(h.end,l),!w.extend&&g>h&&(l=h,h=g,g=l),l=vd(q,g),m=vd(q,h),l&&m&&(1!==w.rangeCount||w.anchorNode!==l.node||w.anchorOffset!==l.offset||w.focusNode!==m.node||w.focusOffset!==m.offset)&&(B=B.createRange(),B.setStart(l.node,l.offset),w.removeAllRanges(),g>h?(w.addRange(B),w.extend(m.node,m.offset)):(B.setEnd(m.node,m.offset),w.addRange(B))))));B=[];for(w=q;w=w.parentNode;)1===w.nodeType&&B.push({element:w,left:w.scrollLeft,
top:w.scrollTop});"function"===typeof q.focus&&q.focus();for(q=0;q<B.length;q++)w=B[q],w.element.scrollLeft=w.left,w.element.scrollTop=w.top}fd=!!Dd;Ed=Dd=null;a.current=c;Y=e;do try{for(q=a;null!==Y;){var ub=Y.effectTag;ub&36&&Ji(q,Y.alternate,Y);if(ub&128){B=void 0;var vb=Y.ref;if(null!==vb){var Xc=Y.stateNode;switch(Y.tag){case 5:B=Xc;break;default:B=Xc}"function"===typeof vb?vb(B):vb.current=B}}Y=Y.nextEffect}}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);Y=
null;Vf();W=f}else a.current=c;if(qj)qj=!1,rj=a,sj=b;else for(Y=e;null!==Y;)b=Y.nextEffect,Y.nextEffect=null,Y=b;b=a.firstPendingTime;0===b&&(aj=null);1073741823===b?a===vj?uj++:(uj=0,vj=a):uj=0;"function"===typeof Uj&&Uj(c.stateNode,d);Z(a);if(Yi)throw Yi=!1,a=Zi,Zi=null,a;if((W&ej)!==V)return null;gg();return null}function Tj(){for(;null!==Y;){var a=Y.effectTag;0!==(a&256)&&Gi(Y.alternate,Y);0===(a&512)||qj||(qj=!0,dg(97,function(){Dj();return null}));Y=Y.nextEffect}}
function Dj(){if(90!==sj){var a=97<sj?97:sj;sj=90;return cg(a,Vj)}}function Vj(){if(null===rj)return!1;var a=rj;rj=null;if((W&(fj|gj))!==V)throw Error(u(331));var b=W;W|=gj;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:case 22:Hi(5,c),Ii(5,c)}}catch(d){if(null===a)throw Error(u(330));Ei(a,d)}c=a.nextEffect;a.nextEffect=null;a=c}W=b;gg();return!0}
function Wj(a,b,c){b=Ai(c,b);b=Xi(a,b,1073741823);xg(a,b);a=xj(a,1073741823);null!==a&&Z(a)}function Ei(a,b){if(3===a.tag)Wj(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){Wj(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===aj||!aj.has(d))){a=Ai(b,a);a=$i(c,a,1073741823);xg(c,a);c=xj(c,1073741823);null!==c&&Z(c);break}}c=c.return}}
function Oj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);T===a&&U===c?S===vi||S===ui&&1073741823===lj&&$f()-Ti<pj?Ej(a,U):oj=!0:Aj(a,c)&&(b=a.lastPingedTime,0!==b&&b<c||(a.lastPingedTime=c,Z(a)))}function Vi(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=Gg(),b=Hg(b,a,null));a=xj(a,b);null!==a&&Z(a)}var Rj;
Rj=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||K.current)rg=!0;else{if(d<c){rg=!1;switch(b.tag){case 3:hi(b);Xh();break;case 5:fh(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;case 1:L(b.type)&&Gf(b);break;case 4:dh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;e=b.type._context;I(jg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;
if(0!==d&&d>=c)return ji(a,b,c);I(M,M.current&1);b=$h(a,b,c);return null!==b?b.sibling:null}I(M,M.current&1);break;case 19:d=b.childExpirationTime>=c;if(0!==(a.effectTag&64)){if(d)return mi(a,b,c);b.effectTag|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);I(M,M.current);if(!d)return null}return $h(a,b,c)}rg=!1}}else rg=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Cf(b,J.current);qg(b,c);e=oh(null,
b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(L(d)){var f=!0;Gf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;ug(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Fg(b,d,g,a);e.updater=Jg;b.stateNode=e;e._reactInternalFiber=b;Ng(b,d,a,c);b=gi(null,b,d,!0,f,c)}else b.tag=0,R(null,b,e,c),b=b.child;return b;case 16:a:{e=b.elementType;null!==a&&(a.alternate=
null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;ob(e);if(1!==e._status)throw e._result;e=e._result;b.type=e;f=b.tag=Xj(e);a=ig(e,a);switch(f){case 0:b=di(null,b,e,a,c);break a;case 1:b=fi(null,b,e,a,c);break a;case 11:b=Zh(null,b,e,a,c);break a;case 14:b=ai(null,b,e,ig(e.type,a),d,c);break a}throw Error(u(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),di(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),fi(a,b,d,e,c);
case 3:hi(b);d=b.updateQueue;if(null===a||null===d)throw Error(u(282));d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;vg(a,b);zg(b,d,null,c);d=b.memoizedState.element;if(d===e)Xh(),b=$h(a,b,c);else{if(e=b.stateNode.hydrate)Ph=Jd(b.stateNode.containerInfo.firstChild),Oh=b,e=Qh=!0;if(e)for(c=Yg(b,null,d,c),b.child=c;c;)c.effectTag=c.effectTag&-3|1024,c=c.sibling;else R(a,b,d,c),Xh();b=b.child}return b;case 5:return fh(b),null===a&&Uh(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:
null,g=e.children,Gd(d,e)?g=null:null!==f&&Gd(d,f)&&(b.effectTag|=16),ei(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(R(a,b,g,c),b=b.child),b;case 6:return null===a&&Uh(b),null;case 13:return ji(a,b,c);case 4:return dh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Xg(b,null,d,c):R(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),Zh(a,b,d,e,c);case 7:return R(a,b,b.pendingProps,c),b.child;case 8:return R(a,
b,b.pendingProps.children,c),b.child;case 12:return R(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(jg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=$e(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!K.current){b=$h(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==
k){g=h.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=wg(c,null),l.tag=2,xg(h,l));h.expirationTime<c&&(h.expirationTime=c);l=h.alternate;null!==l&&l.expirationTime<c&&(l.expirationTime=c);pg(h.return,c);k.expirationTime<c&&(k.expirationTime=c);break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=
g}R(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,qg(b,c),e=sg(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,R(a,b,d,c),b.child;case 14:return e=b.type,f=ig(e,b.pendingProps),f=ig(e.type,f),ai(a,b,e,f,d,c);case 15:return ci(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,L(d)?(a=!0,Gf(b)):a=!1,qg(b,c),Lg(b,d,e),Ng(b,d,e,c),gi(null,
b,d,!0,a,c);case 19:return mi(a,b,c)}throw Error(u(156,b.tag));};var Uj=null,Li=null;function Yj(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Uj=function(a){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64))}catch(e){}};Li=function(a){try{b.onCommitFiberUnmount(c,a)}catch(e){}}}catch(d){}return!0}
function Zj(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function Sh(a,b,c,d){return new Zj(a,b,c,d)}
function bi(a){a=a.prototype;return!(!a||!a.isReactComponent)}function Xj(a){if("function"===typeof a)return bi(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===gb)return 11;if(a===jb)return 14}return 2}
function Sg(a,b){var c=a.alternate;null===c?(c=Sh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,
firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Ug(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)bi(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ab:return Wg(c.children,e,f,b);case fb:g=8;e|=7;break;case bb:g=8;e|=1;break;case cb:return a=Sh(12,c,b,e|8),a.elementType=cb,a.type=cb,a.expirationTime=f,a;case hb:return a=Sh(13,c,b,e),a.type=hb,a.elementType=hb,a.expirationTime=f,a;case ib:return a=Sh(19,c,b,e),a.elementType=ib,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case db:g=
10;break a;case eb:g=9;break a;case gb:g=11;break a;case jb:g=14;break a;case kb:g=16;d=null;break a;case lb:g=22;break a}throw Error(u(130,null==a?a:typeof a,""));}b=Sh(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Wg(a,b,c,d){a=Sh(7,a,d,b);a.expirationTime=c;return a}function Tg(a,b,c){a=Sh(6,a,null,b);a.expirationTime=c;return a}
function Vg(a,b,c){b=Sh(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function ak(a,b,c){this.tag=b;this.current=null;this.containerInfo=a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=90;this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}
function Aj(a,b){var c=a.firstSuspendedTime;a=a.lastSuspendedTime;return 0!==c&&c>=b&&a<=b}function xi(a,b){var c=a.firstSuspendedTime,d=a.lastSuspendedTime;c<b&&(a.firstSuspendedTime=b);if(d>b||0===c)a.lastSuspendedTime=b;b<=a.lastPingedTime&&(a.lastPingedTime=0);b<=a.lastExpiredTime&&(a.lastExpiredTime=0)}
function yi(a,b){b>a.firstPendingTime&&(a.firstPendingTime=b);var c=a.firstSuspendedTime;0!==c&&(b>=c?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:b>=a.lastSuspendedTime&&(a.lastSuspendedTime=b+1),b>a.nextKnownPendingLevel&&(a.nextKnownPendingLevel=b))}function Cj(a,b){var c=a.lastExpiredTime;if(0===c||c>b)a.lastExpiredTime=b}
function bk(a,b,c,d){var e=b.current,f=Gg(),g=Dg.suspense;f=Hg(f,e,g);a:if(c){c=c._reactInternalFiber;b:{if(dc(c)!==c||1!==c.tag)throw Error(u(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(L(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(u(171));}if(1===c.tag){var k=c.type;if(L(k)){c=Ff(c,k,h);break a}}c=h}else c=Af;null===b.context?b.context=c:b.pendingContext=c;b=wg(f,g);b.payload={element:a};d=void 0===
d?null:d;null!==d&&(b.callback=d);xg(e,b);Ig(e,f);return f}function ck(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function dk(a,b){a=a.memoizedState;null!==a&&null!==a.dehydrated&&a.retryTime<b&&(a.retryTime=b)}function ek(a,b){dk(a,b);(a=a.alternate)&&dk(a,b)}
function fk(a,b,c){c=null!=c&&!0===c.hydrate;var d=new ak(a,b,c),e=Sh(3,null,null,2===b?7:1===b?3:0);d.current=e;e.stateNode=d;ug(e);a[Od]=d.current;c&&0!==b&&Jc(a,9===a.nodeType?a:a.ownerDocument);this._internalRoot=d}fk.prototype.render=function(a){bk(a,this._internalRoot,null,null)};fk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;bk(null,a,null,function(){b[Od]=null})};
function gk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function hk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new fk(a,0,b?{hydrate:!0}:void 0)}
function ik(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=ck(g);h.call(a)}}bk(b,g,a,e)}else{f=c._reactRootContainer=hk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=ck(g);k.call(a)}}Nj(function(){bk(b,g,a,e)})}return ck(g)}function jk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:$a,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
wc=function(a){if(13===a.tag){var b=hg(Gg(),150,100);Ig(a,b);ek(a,b)}};xc=function(a){13===a.tag&&(Ig(a,3),ek(a,3))};yc=function(a){if(13===a.tag){var b=Gg();b=Hg(b,a,null);Ig(a,b);ek(a,b)}};
za=function(a,b,c){switch(b){case "input":Cb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Qd(d);if(!e)throw Error(u(90));yb(d);Cb(d,e)}}}break;case "textarea":Kb(a,c);break;case "select":b=c.value,null!=b&&Hb(a,!!c.multiple,b,!1)}};Fa=Mj;
Ga=function(a,b,c,d,e){var f=W;W|=4;try{return cg(98,a.bind(null,b,c,d,e))}finally{W=f,W===V&&gg()}};Ha=function(){(W&(1|fj|gj))===V&&(Lj(),Dj())};Ia=function(a,b){var c=W;W|=2;try{return a(b)}finally{W=c,W===V&&gg()}};function kk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!gk(b))throw Error(u(200));return jk(a,b,null,c)}var lk={Events:[Nc,Pd,Qd,xa,ta,Xd,function(a){jc(a,Wd)},Da,Ea,id,mc,Dj,{current:!1}]};
(function(a){var b=a.findFiberByHostInstance;return Yj(n({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wa.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=hc(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:tc,bundleType:0,version:"16.13.1",
rendererPackageName:"react-dom"});exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lk;exports.createPortal=kk;exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw Error(u(188));throw Error(u(268,Object.keys(a)));}a=hc(b);a=null===a?null:a.stateNode;return a};
exports.flushSync=function(a,b){if((W&(fj|gj))!==V)throw Error(u(187));var c=W;W|=1;try{return cg(99,a.bind(null,b))}finally{W=c,gg()}};exports.hydrate=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!0,c)};exports.render=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!1,c)};
exports.unmountComponentAtNode=function(a){if(!gk(a))throw Error(u(40));return a._reactRootContainer?(Nj(function(){ik(null,null,a,!1,function(){a._reactRootContainer=null;a[Od]=null})}),!0):!1};exports.unstable_batchedUpdates=Mj;exports.unstable_createPortal=function(a,b){return kk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!gk(c))throw Error(u(200));if(null==a||void 0===a._reactInternalFiber)throw Error(u(38));return ik(a,b,c,!1,d)};exports.version="16.13.1";


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(7);
} else {}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var f,g,h,k,l;
if("undefined"===typeof window||"function"!==typeof MessageChannel){var p=null,q=null,t=function(){if(null!==p)try{var a=exports.unstable_now();p(!0,a);p=null}catch(b){throw setTimeout(t,0),b;}},u=Date.now();exports.unstable_now=function(){return Date.now()-u};f=function(a){null!==p?setTimeout(f,0,a):(p=a,setTimeout(t,0))};g=function(a,b){q=setTimeout(a,b)};h=function(){clearTimeout(q)};k=function(){return!1};l=exports.unstable_forceFrameRate=function(){}}else{var w=window.performance,x=window.Date,
y=window.setTimeout,z=window.clearTimeout;if("undefined"!==typeof console){var A=window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");"function"!==typeof A&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"===
typeof w&&"function"===typeof w.now)exports.unstable_now=function(){return w.now()};else{var B=x.now();exports.unstable_now=function(){return x.now()-B}}var C=!1,D=null,E=-1,F=5,G=0;k=function(){return exports.unstable_now()>=G};l=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):F=0<a?Math.floor(1E3/a):5};var H=new MessageChannel,I=H.port2;H.port1.onmessage=
function(){if(null!==D){var a=exports.unstable_now();G=a+F;try{D(!0,a)?I.postMessage(null):(C=!1,D=null)}catch(b){throw I.postMessage(null),b;}}else C=!1};f=function(a){D=a;C||(C=!0,I.postMessage(null))};g=function(a,b){E=y(function(){a(exports.unstable_now())},b)};h=function(){z(E);E=-1}}function J(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<K(e,b))a[d]=b,a[c]=e,c=d;else break a}}function L(a){a=a[0];return void 0===a?null:a}
function M(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>K(n,c))void 0!==r&&0>K(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>K(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function K(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var N=[],O=[],P=1,Q=null,R=3,S=!1,T=!1,U=!1;
function V(a){for(var b=L(O);null!==b;){if(null===b.callback)M(O);else if(b.startTime<=a)M(O),b.sortIndex=b.expirationTime,J(N,b);else break;b=L(O)}}function W(a){U=!1;V(a);if(!T)if(null!==L(N))T=!0,f(X);else{var b=L(O);null!==b&&g(W,b.startTime-a)}}
function X(a,b){T=!1;U&&(U=!1,h());S=!0;var c=R;try{V(b);for(Q=L(N);null!==Q&&(!(Q.expirationTime>b)||a&&!k());){var d=Q.callback;if(null!==d){Q.callback=null;R=Q.priorityLevel;var e=d(Q.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?Q.callback=e:Q===L(N)&&M(N);V(b)}else M(N);Q=L(N)}if(null!==Q)var m=!0;else{var n=L(O);null!==n&&g(W,n.startTime-b);m=!1}return m}finally{Q=null,R=c,S=!1}}
function Y(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}var Z=l;exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){T||S||(T=!0,f(X))};
exports.unstable_getCurrentPriorityLevel=function(){return R};exports.unstable_getFirstCallbackNode=function(){return L(N)};exports.unstable_next=function(a){switch(R){case 1:case 2:case 3:var b=3;break;default:b=R}var c=R;R=b;try{return a()}finally{R=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=Z;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=R;R=a;try{return b()}finally{R=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();if("object"===typeof c&&null!==c){var e=c.delay;e="number"===typeof e&&0<e?d+e:d;c="number"===typeof c.timeout?c.timeout:Y(a)}else c=Y(a),e=d;c=e+c;a={id:P++,callback:b,priorityLevel:a,startTime:e,expirationTime:c,sortIndex:-1};e>d?(a.sortIndex=e,J(O,a),null===L(N)&&a===L(O)&&(U?h():U=!0,g(W,e-d))):(a.sortIndex=c,J(N,a),T||S||(T=!0,f(X)));return a};
exports.unstable_shouldYield=function(){var a=exports.unstable_now();V(a);var b=L(N);return b!==Q&&null!==Q&&null!==b&&null!==b.callback&&b.startTime<=a&&b.expirationTime<Q.expirationTime||k()};exports.unstable_wrapCallback=function(a){var b=R;return function(){var c=R;R=b;try{return a.apply(this,arguments)}finally{R=c}}};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = t(__webpack_require__(0)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(global, function (e) {
  return function (e) {
    var t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var i = t[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: r
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var i in e) {
        n.d(r, i, function (t) {
          return e[t];
        }.bind(null, i));
      }
      return r;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 5);
  }([function (t, n) {
    t.exports = e;
  }, function (e, t, n) {
    e.exports = n(7)();
  }, function (e, t, n) {
    "use strict";

    var r = n(9).getInterface(2);
    t.a = r;
  }, function (e, t, n) {
    "use strict";

    var r = n(4),
        i = n.n(r)()(!1);
    i.push([e.i, "/*\n * MathQuill v0.11.0, by Han, Jeanine, and Mary\n * http://mathquill.com | maintainers@mathquill.com\n *\n * This Source Code Form is subject to the terms of the\n * Mozilla Public License, v. 2.0. If a copy of the MPL\n * was not distributed with this file, You can obtain\n * one at http://mozilla.org/MPL/2.0/.\n */\n@font-face {\n  /* Heavy fonts have been removed */\n  font-family: Symbola;\n}\n.mq-editable-field {\n  display: -moz-inline-box;\n  display: inline-block;\n}\n.mq-editable-field .mq-cursor {\n  border-left: 1px solid black;\n  margin-left: -1px;\n  position: relative;\n  z-index: 1;\n  padding: 0;\n  display: -moz-inline-box;\n  display: inline-block;\n}\n.mq-editable-field .mq-cursor.mq-blink {\n  visibility: hidden;\n}\n.mq-editable-field,\n.mq-math-mode .mq-editable-field {\n  border: 1px solid gray;\n}\n.mq-editable-field.mq-focused,\n.mq-math-mode .mq-editable-field.mq-focused {\n  -webkit-box-shadow: #8bd 0 0 1px 2px, inset #6ae 0 0 2px 0;\n  -moz-box-shadow: #8bd 0 0 1px 2px, inset #6ae 0 0 2px 0;\n  box-shadow: #8bd 0 0 1px 2px, inset #6ae 0 0 2px 0;\n  border-color: #709AC0;\n  border-radius: 1px;\n}\n.mq-math-mode .mq-editable-field {\n  margin: 1px;\n}\n.mq-editable-field .mq-latex-command-input {\n  color: inherit;\n  font-family: \"Courier New\", monospace;\n  border: 1px solid gray;\n  padding-right: 1px;\n  margin-right: 1px;\n  margin-left: 2px;\n}\n.mq-editable-field .mq-latex-command-input.mq-empty {\n  background: transparent;\n}\n.mq-editable-field .mq-latex-command-input.mq-hasCursor {\n  border-color: ActiveBorder;\n}\n.mq-editable-field.mq-empty:after,\n.mq-editable-field.mq-text-mode:after,\n.mq-math-mode .mq-empty:after {\n  visibility: hidden;\n  content: 'c';\n}\n.mq-editable-field .mq-cursor:only-child:after,\n.mq-editable-field .mq-textarea + .mq-cursor:last-child:after {\n  visibility: hidden;\n  content: 'c';\n}\n.mq-editable-field .mq-text-mode .mq-cursor:only-child:after {\n  content: '';\n}\n.mq-editable-field.mq-text-mode {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.mq-root-block,\n.mq-math-mode .mq-root-block {\n  display: -moz-inline-box;\n  display: inline-block;\n  width: 100%;\n  padding: 2px;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  white-space: nowrap;\n  overflow: hidden;\n  vertical-align: middle;\n}\n.mq-math-mode {\n  font-variant: normal;\n  font-weight: normal;\n  font-style: normal;\n  font-size: 115%;\n  line-height: 1;\n  display: -moz-inline-box;\n  display: inline-block;\n}\n.mq-math-mode .mq-non-leaf,\n.mq-math-mode .mq-scaled {\n  display: -moz-inline-box;\n  display: inline-block;\n}\n.mq-math-mode var,\n.mq-math-mode .mq-text-mode,\n.mq-math-mode .mq-nonSymbola {\n  font-family: \"Times New Roman\", Symbola, serif;\n  line-height: 0.9;\n}\n.mq-math-mode * {\n  font-size: inherit;\n  line-height: inherit;\n  margin: 0;\n  padding: 0;\n  border-color: black;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  box-sizing: border-box;\n}\n.mq-math-mode .mq-empty {\n  background: #ccc;\n}\n.mq-math-mode .mq-empty.mq-root-block {\n  background: transparent;\n}\n.mq-math-mode.mq-empty {\n  background: transparent;\n}\n.mq-math-mode .mq-text-mode {\n  display: inline-block;\n  white-space: pre;\n}\n.mq-math-mode .mq-text-mode.mq-hasCursor {\n  box-shadow: inset darkgray 0 0.1em 0.2em;\n  padding: 0 0.1em;\n  margin: 0 -0.1em;\n  min-width: 1ex;\n}\n.mq-math-mode .mq-font {\n  font: 1em \"Times New Roman\", Symbola, serif;\n}\n.mq-math-mode .mq-font * {\n  font-family: inherit;\n  font-style: inherit;\n}\n.mq-math-mode b,\n.mq-math-mode b.mq-font {\n  font-weight: bolder;\n}\n.mq-math-mode var,\n.mq-math-mode i,\n.mq-math-mode i.mq-font {\n  font-style: italic;\n}\n.mq-math-mode var.mq-f {\n  margin-right: 0.2em;\n  margin-left: 0.1em;\n}\n.mq-math-mode .mq-roman var.mq-f {\n  margin: 0;\n}\n.mq-math-mode big {\n  font-size: 200%;\n}\n.mq-math-mode .mq-int > big {\n  display: inline-block;\n  -webkit-transform: scaleX(0.7);\n  -moz-transform: scaleX(0.7);\n  -ms-transform: scaleX(0.7);\n  -o-transform: scaleX(0.7);\n  transform: scaleX(0.7);\n  vertical-align: -0.16em;\n}\n.mq-math-mode .mq-int > .mq-supsub {\n  font-size: 80%;\n  vertical-align: -1.1em;\n  padding-right: 0.2em;\n}\n.mq-math-mode .mq-int > .mq-supsub > .mq-sup > .mq-sup-inner {\n  vertical-align: 1.3em;\n}\n.mq-math-mode .mq-int > .mq-supsub > .mq-sub {\n  margin-left: -0.35em;\n}\n.mq-math-mode .mq-roman {\n  font-style: normal;\n}\n.mq-math-mode .mq-sans-serif {\n  font-family: sans-serif, Symbola, serif;\n}\n.mq-math-mode .mq-monospace {\n  font-family: monospace, Symbola, serif;\n}\n.mq-math-mode .mq-overline {\n  border-top: 1px solid black;\n  margin-top: 1px;\n}\n.mq-math-mode .mq-underline {\n  border-bottom: 1px solid black;\n  margin-bottom: 1px;\n}\n.mq-math-mode .mq-binary-operator {\n  padding: 0 0.2em;\n  display: -moz-inline-box;\n  display: inline-block;\n}\n.mq-math-mode .mq-supsub {\n  text-align: left;\n  font-size: 90%;\n  vertical-align: -0.5em;\n}\n.mq-math-mode .mq-supsub.mq-sup-only {\n  vertical-align: 0.5em;\n}\n.mq-math-mode .mq-supsub.mq-sup-only .mq-sup {\n  display: inline-block;\n  vertical-align: text-bottom;\n}\n.mq-math-mode .mq-supsub .mq-sup {\n  display: block;\n}\n.mq-math-mode .mq-supsub .mq-sub {\n  display: block;\n  float: left;\n}\n.mq-math-mode .mq-supsub .mq-binary-operator {\n  padding: 0 0.1em;\n}\n.mq-math-mode .mq-supsub .mq-fraction {\n  font-size: 70%;\n}\n.mq-math-mode sup.mq-nthroot {\n  font-size: 80%;\n  vertical-align: 0.8em;\n  margin-right: -0.6em;\n  margin-left: 0.2em;\n  min-width: 0.5em;\n}\n.mq-math-mode .mq-paren {\n  padding: 0 0.1em;\n  vertical-align: top;\n  -webkit-transform-origin: center 0.06em;\n  -moz-transform-origin: center 0.06em;\n  -ms-transform-origin: center 0.06em;\n  -o-transform-origin: center 0.06em;\n  transform-origin: center 0.06em;\n}\n.mq-math-mode .mq-paren.mq-ghost {\n  color: silver;\n}\n.mq-math-mode .mq-paren + span {\n  margin-top: 0.1em;\n  margin-bottom: 0.1em;\n}\n.mq-math-mode .mq-array {\n  vertical-align: middle;\n  text-align: center;\n}\n.mq-math-mode .mq-array > span {\n  display: block;\n}\n.mq-math-mode .mq-operator-name {\n  font-family: Symbola, \"Times New Roman\", serif;\n  line-height: 0.9;\n  font-style: normal;\n}\n.mq-math-mode var.mq-operator-name.mq-first {\n  padding-left: 0.2em;\n}\n.mq-math-mode var.mq-operator-name.mq-last,\n.mq-math-mode .mq-supsub.mq-after-operator-name {\n  padding-right: 0.2em;\n}\n.mq-math-mode .mq-fraction {\n  font-size: 90%;\n  text-align: center;\n  vertical-align: -0.4em;\n  padding: 0 0.2em;\n}\n.mq-math-mode .mq-fraction,\n.mq-math-mode .mq-large-operator,\n.mq-math-mode x:-moz-any-link {\n  display: -moz-groupbox;\n}\n.mq-math-mode .mq-fraction,\n.mq-math-mode .mq-large-operator,\n.mq-math-mode x:-moz-any-link,\n.mq-math-mode x:default {\n  display: inline-block;\n}\n.mq-math-mode .mq-numerator,\n.mq-math-mode .mq-denominator,\n.mq-math-mode .mq-dot-recurring {\n  display: block;\n}\n.mq-math-mode .mq-numerator {\n  padding: 0 0.1em;\n}\n.mq-math-mode .mq-denominator {\n  border-top: 1px solid;\n  float: right;\n  width: 100%;\n  padding: 0.1em;\n}\n.mq-math-mode .mq-dot-recurring {\n  text-align: center;\n  height: 0.3em;\n}\n.mq-math-mode .mq-sqrt-prefix {\n  padding-top: 0;\n  position: relative;\n  top: 0.1em;\n  vertical-align: top;\n  -webkit-transform-origin: top;\n  -moz-transform-origin: top;\n  -ms-transform-origin: top;\n  -o-transform-origin: top;\n  transform-origin: top;\n}\n.mq-math-mode .mq-sqrt-stem {\n  border-top: 1px solid;\n  margin-top: 1px;\n  padding-left: 0.15em;\n  padding-right: 0.2em;\n  margin-right: 0.1em;\n  padding-top: 1px;\n}\n.mq-math-mode .mq-diacritic-above {\n  display: block;\n  text-align: center;\n  line-height: 0.4em;\n}\n.mq-math-mode .mq-diacritic-stem {\n  display: block;\n  text-align: center;\n}\n.mq-math-mode .mq-hat-prefix {\n  display: block;\n  text-align: center;\n  line-height: 0.95em;\n  margin-bottom: -0.7em;\n  transform: scaleX(1.5);\n  -moz-transform: scaleX(1.5);\n  -o-transform: scaleX(1.5);\n  -webkit-transform: scaleX(1.5);\n}\n.mq-math-mode .mq-hat-stem {\n  display: block;\n}\n.mq-math-mode .mq-large-operator {\n  vertical-align: -0.2em;\n  padding: 0.2em;\n  text-align: center;\n}\n.mq-math-mode .mq-large-operator .mq-from,\n.mq-math-mode .mq-large-operator big,\n.mq-math-mode .mq-large-operator .mq-to {\n  display: block;\n}\n.mq-math-mode .mq-large-operator .mq-from,\n.mq-math-mode .mq-large-operator .mq-to {\n  font-size: 80%;\n}\n.mq-math-mode .mq-large-operator .mq-from {\n  float: right;\n  /* take out of normal flow to manipulate baseline */\n  width: 100%;\n}\n.mq-math-mode,\n.mq-math-mode .mq-editable-field {\n  cursor: text;\n  font-family: Symbola, \"Times New Roman\", serif;\n}\n.mq-math-mode .mq-overarc {\n  border-top: 1px solid black;\n  -webkit-border-top-right-radius: 50% 0.3em;\n  -moz-border-radius-topright: 50% 0.3em;\n  border-top-right-radius: 50% 0.3em;\n  -webkit-border-top-left-radius: 50% 0.3em;\n  -moz-border-radius-topleft: 50% 0.3em;\n  border-top-left-radius: 50% 0.3em;\n  margin-top: 1px;\n  padding-top: 0.15em;\n}\n.mq-math-mode .mq-overarrow {\n  min-width: 0.5em;\n  border-top: 1px solid black;\n  margin-top: 1px;\n  padding-top: 0.2em;\n  text-align: center;\n}\n.mq-math-mode .mq-overarrow:before {\n  display: block;\n  position: relative;\n  top: -0.34em;\n  font-size: 0.5em;\n  line-height: 0em;\n  content: '\\27A4';\n  text-align: right;\n}\n.mq-math-mode .mq-overarrow.mq-arrow-left:before {\n  -moz-transform: scaleX(-1);\n  -o-transform: scaleX(-1);\n  -webkit-transform: scaleX(-1);\n  transform: scaleX(-1);\n  filter: FlipH;\n  -ms-filter: \"FlipH\";\n}\n.mq-math-mode .mq-overarrow.mq-arrow-both {\n  vertical-align: text-bottom;\n}\n.mq-math-mode .mq-overarrow.mq-arrow-both.mq-empty {\n  min-height: 1.23em;\n}\n.mq-math-mode .mq-overarrow.mq-arrow-both.mq-empty:after {\n  top: -0.34em;\n}\n.mq-math-mode .mq-overarrow.mq-arrow-both:before {\n  -moz-transform: scaleX(-1);\n  -o-transform: scaleX(-1);\n  -webkit-transform: scaleX(-1);\n  transform: scaleX(-1);\n  filter: FlipH;\n  -ms-filter: \"FlipH\";\n}\n.mq-math-mode .mq-overarrow.mq-arrow-both:after {\n  display: block;\n  position: relative;\n  top: -2.3em;\n  font-size: 0.5em;\n  line-height: 0em;\n  content: '\\27A4';\n  visibility: visible;\n  text-align: right;\n}\n.mq-math-mode .mq-selection,\n.mq-editable-field .mq-selection,\n.mq-math-mode .mq-selection .mq-non-leaf,\n.mq-editable-field .mq-selection .mq-non-leaf,\n.mq-math-mode .mq-selection .mq-scaled,\n.mq-editable-field .mq-selection .mq-scaled {\n  background: #B4D5FE !important;\n  background: Highlight !important;\n  color: HighlightText;\n  border-color: HighlightText;\n}\n.mq-math-mode .mq-selection .mq-matrixed,\n.mq-editable-field .mq-selection .mq-matrixed {\n  background: #39F !important;\n}\n.mq-math-mode .mq-selection .mq-matrixed-container,\n.mq-editable-field .mq-selection .mq-matrixed-container {\n  filter: progid:DXImageTransform.Microsoft.Chroma(color='#3399FF') !important;\n}\n.mq-math-mode .mq-selection.mq-blur,\n.mq-editable-field .mq-selection.mq-blur,\n.mq-math-mode .mq-selection.mq-blur .mq-non-leaf,\n.mq-editable-field .mq-selection.mq-blur .mq-non-leaf,\n.mq-math-mode .mq-selection.mq-blur .mq-scaled,\n.mq-editable-field .mq-selection.mq-blur .mq-scaled,\n.mq-math-mode .mq-selection.mq-blur .mq-matrixed,\n.mq-editable-field .mq-selection.mq-blur .mq-matrixed {\n  background: #D4D4D4 !important;\n  color: black;\n  border-color: black;\n}\n.mq-math-mode .mq-selection.mq-blur .mq-matrixed-container,\n.mq-editable-field .mq-selection.mq-blur .mq-matrixed-container {\n  filter: progid:DXImageTransform.Microsoft.Chroma(color='#D4D4D4') !important;\n}\n.mq-editable-field .mq-textarea,\n.mq-math-mode .mq-textarea {\n  position: relative;\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  user-select: text;\n}\n.mq-editable-field .mq-textarea *,\n.mq-math-mode .mq-textarea *,\n.mq-editable-field .mq-selectable,\n.mq-math-mode .mq-selectable {\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  user-select: text;\n  position: absolute;\n  clip: rect(1em 1em 1em 1em);\n  -webkit-transform: scale(0);\n  -moz-transform: scale(0);\n  -ms-transform: scale(0);\n  -o-transform: scale(0);\n  transform: scale(0);\n  resize: none;\n  width: 1px;\n  height: 1px;\n  box-sizing: content-box;\n}\n.mq-math-mode .mq-matrixed {\n  background: white;\n  display: -moz-inline-box;\n  display: inline-block;\n}\n.mq-math-mode .mq-matrixed-container {\n  filter: progid:DXImageTransform.Microsoft.Chroma(color='white');\n  margin-top: -0.1em;\n}\n", ""]), t.a = i;
  }, function (e, t, n) {
    "use strict";

    e.exports = function (e) {
      var t = [];
      return t.toString = function () {
        return this.map(function (t) {
          var n = function (e, t) {
            var n = e[1] || "",
                r = e[3];
            if (!r) return n;

            if (t && "function" == typeof btoa) {
              var i = (s = r, a = btoa(unescape(encodeURIComponent(JSON.stringify(s)))), l = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a), "/*# ".concat(l, " */")),
                  o = r.sources.map(function (e) {
                return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */");
              });
              return [n].concat(o).concat([i]).join("\n");
            }

            var s, a, l;
            return [n].join("\n");
          }(t, e);

          return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
        }).join("");
      }, t.i = function (e, n, r) {
        "string" == typeof e && (e = [[null, e, ""]]);
        var i = {};
        if (r) for (var o = 0; o < this.length; o++) {
          var s = this[o][0];
          null != s && (i[s] = !0);
        }

        for (var a = 0; a < e.length; a++) {
          var l = [].concat(e[a]);
          r && i[l[0]] || (n && (l[2] ? l[2] = "".concat(n, " and ").concat(l[2]) : l[2] = n), t.push(l));
        }
      }, t;
    };
  }, function (e, t, n) {
    "use strict";

    n.r(t), n.d(t, "addStyles", function () {
      return i;
    }), n.d(t, "EditableMathField", function () {
      return o;
    }), n.d(t, "StaticMathField", function () {
      return s;
    });
    var r = n(3);

    function i() {
      if (null == document.getElementById("react-mathquill-styles")) {
        var e = document.createElement("style");
        e.setAttribute("id", "react-mathquill-styles"), e.innerHTML = r.a[0][1], document.getElementsByTagName("head")[0].appendChild(e);
      }
    }

    var o = n(6)["default"],
        s = n(11)["default"];
    t["default"] = o;
  }, function (e, t, n) {
    "use strict";

    n.r(t);
    var r = n(0),
        i = n.n(r),
        o = n(1),
        s = n.n(o),
        a = n(2);

    function l() {
      return (l = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];

          for (var r in n) {
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
        }

        return e;
      }).apply(this, arguments);
    }

    function c(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    function u(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? c(Object(n), !0).forEach(function (t) {
          f(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }

      return e;
    }

    function f(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }

    function p(e, t) {
      if (null == e) return {};

      var n,
          r,
          i = function (e, t) {
        if (null == e) return {};
        var n,
            r,
            i = {},
            o = Object.keys(e);

        for (r = 0; r < o.length; r++) {
          n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        }

        return i;
      }(e, t);

      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);

        for (r = 0; r < o.length; r++) {
          n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        }
      }

      return i;
    }

    var h = function h(e) {
      var t = e.latex,
          n = e.onChange,
          o = e.config,
          s = e.mathquillDidMount,
          c = p(e, ["latex", "onChange", "config", "mathquillDidMount"]),
          f = Object(r.useRef)(2),
          h = Object(r.useRef)(null),
          d = Object(r.useRef)(null);
      return Object(r.useEffect)(function () {
        if (d.current) {
          var e = {
            restrictMismatchedBrackets: !0,
            handlers: {}
          };
          o && (e = u(u({}, e), o));
          var r = e.handlers.edit;
          e.handlers.edit = function (e) {
            r && r(), f.current > 0 ? f.current -= 1 : n && n(e);
          }, h.current = a.a.MathField(d.current, e), h.current.latex(t || ""), s && s(h.current);
        }
      }, [d]), Object(r.useEffect)(function () {
        h.current && h.current.latex() !== t && h.current.latex(t);
      }, [t]), i.a.createElement("span", l({}, c, {
        ref: d
      }));
    };

    h.propTypes = {
      latex: s.a.string,
      onChange: s.a.func,
      config: s.a.object,
      mathquillDidMount: s.a.func
    }, t["default"] = h;
  }, function (e, t, n) {
    "use strict";

    var r = n(8);

    function i() {}

    function o() {}

    o.resetWarningCache = i, e.exports = function () {
      function e(e, t, n, i, o, s) {
        if (s !== r) {
          var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw a.name = "Invariant Violation", a;
        }
      }

      function t() {
        return e;
      }

      e.isRequired = e;
      var n = {
        array: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: o,
        resetWarningCache: i
      };
      return n.PropTypes = n, n;
    };
  }, function (e, t, n) {
    "use strict";

    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  }, function (e, t, n) {
    var r = n(10);
    window.jQuery = r, function () {
      var e = window.jQuery,
          t = "mathquill-block-id",
          n = Math.min,
          r = Math.max;
      if (!e) throw "MathQuill requires jQuery 1.5.2+ to be loaded first";

      function i() {}

      var o = [].slice;

      function s(e) {
        var t = e.length - 1;
        return function () {
          var n = o.call(arguments, 0, t),
              r = o.call(arguments, t);
          return e.apply(this, n.concat([r]));
        };
      }

      var a = s(function (e, t) {
        return s(function (n, r) {
          if (e in n) return n[e].apply(n, t.concat(r));
        });
      });

      function l(e) {
        return s(function (t, n) {
          "function" != typeof t && (t = a(t));
          return e.call(this, function (e) {
            return t.apply(e, [e].concat(n));
          });
        });
      }

      function c(e) {
        var t = o.call(arguments, 1);
        return function () {
          return e.apply(this, t);
        };
      }

      function u(e, t) {
        if (!t) throw new Error("prayer failed: " + e);
      }

      var f = function (e, t, n) {
        function r(e) {
          return "object" == _typeof(e);
        }

        function i(e) {
          return "function" == typeof e;
        }

        function o() {}

        return function e(n, s) {
          function a() {
            var e = new l();
            return i(e.init) && e.init.apply(e, arguments), e;
          }

          function l() {}

          void 0 === s && (s = n, n = Object), a.Bare = l;
          var c,
              u = o.prototype = n.prototype,
              f = l.prototype = a.prototype = a.p = new o();
          return f.constructor = a, a.extend = function (t) {
            return e(a, t);
          }, (a.open = function (e) {
            if (c = {}, i(e) ? c = e.call(a, f, u, a, n) : r(e) && (c = e), r(c)) for (var o in c) {
              t.call(c, o) && (f[o] = c[o]);
            }
            return i(f.init) || (f.init = n), a;
          })(s);
        };
      }(0, {}.hasOwnProperty),
          p = -1;

      function h(e) {
        u("a direction was passed", e === p || 1 === e);
      }

      var d = f(e, function (e) {
        e.insDirOf = function (e, t) {
          return e === p ? this.insertBefore(t.first()) : this.insertAfter(t.last());
        }, e.insAtDirEnd = function (e, t) {
          return e === p ? this.prependTo(t) : this.appendTo(t);
        };
      }),
          m = f(function (e) {
        e.parent = 0, e[p] = 0, e[1] = 0, e.init = function (e, t, n) {
          this.parent = e, this[p] = t, this[1] = n;
        }, this.copy = function (e) {
          return m(e.parent, e[p], e[1]);
        };
      }),
          g = f(function (e) {
        e[p] = 0, e[1] = 0, e.parent = 0;
        var t = 0;
        this.byId = {}, e.init = function () {
          this.id = t += 1, g.byId[this.id] = this, this.ends = {}, this.ends[p] = 0, this.ends[1] = 0;
        }, e.dispose = function () {
          delete g.byId[this.id];
        }, e.toString = function () {
          return "{{ MathQuill Node #" + this.id + " }}";
        }, e.jQ = d(), e.jQadd = function (e) {
          return this.jQ = this.jQ.add(e);
        }, e.jQize = function (e) {
          e = d(e || this.html());

          function t(e) {
            if (e.getAttribute) {
              var n = e.getAttribute("mathquill-command-id"),
                  r = e.getAttribute("mathquill-block-id");
              n && g.byId[n].jQadd(e), r && g.byId[r].jQadd(e);
            }

            for (e = e.firstChild; e; e = e.nextSibling) {
              t(e);
            }
          }

          for (var n = 0; n < e.length; n += 1) {
            t(e[n]);
          }

          return e;
        }, e.createDir = function (e, t) {
          h(e);
          return this.jQize(), this.jQ.insDirOf(e, t.jQ), t[e] = this.adopt(t.parent, t[p], t[1]), this;
        }, e.createLeftOf = function (e) {
          return this.createDir(p, e);
        }, e.selectChildren = function (e, t) {
          return w(e, t);
        }, e.bubble = l(function (e) {
          for (var t = this; t; t = t.parent) {
            if (!1 === e(t)) break;
          }

          return this;
        }), e.postOrder = l(function (e) {
          return function t(n) {
            n.eachChild(t), e(n);
          }(this), this;
        }), e.isEmpty = function () {
          return 0 === this.ends[p] && 0 === this.ends[1];
        }, e.isStyleBlock = function () {
          return !1;
        }, e.children = function () {
          return b(this.ends[p], this.ends[1]);
        }, e.eachChild = function () {
          var e = this.children();
          return e.each.apply(e, arguments), this;
        }, e.foldChildren = function (e, t) {
          return this.children().fold(e, t);
        }, e.withDirAdopt = function (e, t, n, r) {
          return b(this, this).withDirAdopt(e, t, n, r), this;
        }, e.adopt = function (e, t, n) {
          return b(this, this).adopt(e, t, n), this;
        }, e.disown = function () {
          return b(this, this).disown(), this;
        }, e.remove = function () {
          return this.jQ.remove(), this.postOrder("dispose"), this.disown();
        };
      });

      function v(e, t, n) {
        u("a parent is always present", e), u("leftward is properly set up", t ? t[1] === n && t.parent === e : e.ends[p] === n), u("rightward is properly set up", n ? n[p] === t && n.parent === e : e.ends[1] === t);
      }

      var b = f(function (e) {
        e.init = function (e, t, n) {
          if (void 0 === n && (n = p), h(n), u("no half-empty fragments", !e == !t), this.ends = {}, e) {
            u("withDir is passed to Fragment", e instanceof g), u("oppDir is passed to Fragment", t instanceof g), u("withDir and oppDir have the same parent", e.parent === t.parent), this.ends[n] = e, this.ends[-n] = t;
            var r = this.fold([], function (e, t) {
              return e.push.apply(e, t.jQ.get()), e;
            });
            this.jQ = this.jQ.add(r);
          }
        }, e.jQ = d(), e.withDirAdopt = function (e, t, n, r) {
          return e === p ? this.adopt(t, n, r) : this.adopt(t, r, n);
        }, e.adopt = function (e, t, n) {
          v(e, t, n);
          this.disowned = !1;
          var r = this.ends[p];
          if (!r) return this;
          var i = this.ends[1];
          return t || (e.ends[p] = r), n ? n[p] = i : e.ends[1] = i, this.ends[1][1] = n, this.each(function (n) {
            n[p] = t, n.parent = e, t && (t[1] = n), t = n;
          }), this;
        }, e.disown = function () {
          var e = this.ends[p];
          if (!e || this.disowned) return this;
          this.disowned = !0;
          var t = this.ends[1],
              n = e.parent;
          return v(n, e[p], e), v(n, t, t[1]), e[p] ? e[p][1] = t[1] : n.ends[p] = t[1], t[1] ? t[1][p] = e[p] : n.ends[1] = e[p], this;
        }, e.remove = function () {
          return this.jQ.remove(), this.each("postOrder", "dispose"), this.disown();
        }, e.each = l(function (e) {
          var t = this.ends[p];
          if (!t) return this;

          for (; t !== this.ends[1][1]; t = t[1]) {
            if (!1 === e(t)) break;
          }

          return this;
        }), e.fold = function (e, t) {
          return this.each(function (n) {
            e = t.call(this, e, n);
          }), e;
        };
      }),
          y = {},
          x = {},
          q = f(m, function (e) {
        e.init = function (e, t) {
          this.parent = e, this.options = t;
          var n = this.jQ = this._jQ = d('<span class="mq-cursor">&#8203;</span>');
          this.blink = function () {
            n.toggleClass("mq-blink");
          }, this.upDownCache = {};
        }, e.show = function () {
          return this.jQ = this._jQ.removeClass("mq-blink"), "intervalId" in this ? clearInterval(this.intervalId) : (this[1] ? this.selection && this.selection.ends[p][p] === this[p] ? this.jQ.insertBefore(this.selection.jQ) : this.jQ.insertBefore(this[1].jQ.first()) : this.jQ.appendTo(this.parent.jQ), this.parent.focus()), this.intervalId = setInterval(this.blink, 500), this;
        }, e.hide = function () {
          return "intervalId" in this && clearInterval(this.intervalId), delete this.intervalId, this.jQ.detach(), this.jQ = d(), this;
        }, e.withDirInsertAt = function (e, t, n, r) {
          var i = this.parent;
          this.parent = t, this[e] = n, this[-e] = r, i !== t && i.blur && i.blur(this);
        }, e.insDirOf = function (e, t) {
          return h(e), this.jQ.insDirOf(e, t.jQ), this.withDirInsertAt(e, t.parent, t[e], t), this.parent.jQ.addClass("mq-hasCursor"), this;
        }, e.insLeftOf = function (e) {
          return this.insDirOf(p, e);
        }, e.insRightOf = function (e) {
          return this.insDirOf(1, e);
        }, e.insAtDirEnd = function (e, t) {
          return h(e), this.jQ.insAtDirEnd(e, t.jQ), this.withDirInsertAt(e, t, 0, t.ends[e]), t.focus(), this;
        }, e.insAtLeftEnd = function (e) {
          return this.insAtDirEnd(p, e);
        }, e.insAtRightEnd = function (e) {
          return this.insAtDirEnd(1, e);
        }, e.jumpUpDown = function (e, t) {
          this.upDownCache[e.id] = m.copy(this);
          var n = this.upDownCache[t.id];
          if (n) n[1] ? this.insLeftOf(n[1]) : this.insAtRightEnd(n.parent);else {
            var r = this.offset().left;
            t.seek(r, this);
          }
        }, e.offset = function () {
          var e = this.jQ.removeClass("mq-cursor").offset();
          return this.jQ.addClass("mq-cursor"), e;
        }, e.unwrapGramp = function () {
          var e = this.parent.parent,
              t = e.parent,
              n = e[1],
              r = e[p];
          if (e.disown().eachChild(function (i) {
            i.isEmpty() || (i.children().adopt(t, r, n).each(function (t) {
              t.jQ.insertBefore(e.jQ.first());
            }), r = i.ends[1]);
          }), !this[1]) if (this[p]) this[1] = this[p][1];else for (; !this[1];) {
            if (this.parent = this.parent[1], !this.parent) {
              this[1] = e[1], this.parent = t;
              break;
            }

            this[1] = this.parent.ends[p];
          }
          this[1] ? this.insLeftOf(this[1]) : this.insAtRightEnd(t), e.jQ.remove(), e[p].siblingDeleted && e[p].siblingDeleted(this.options, 1), e[1].siblingDeleted && e[1].siblingDeleted(this.options, p);
        }, e.startSelection = function () {
          for (var e = this.anticursor = m.copy(this), t = e.ancestors = {}, n = e; n.parent; n = n.parent) {
            t[n.parent.id] = n;
          }
        }, e.endSelection = function () {
          delete this.anticursor;
        }, e.select = function () {
          var e = this.anticursor;
          if (this[p] === e[p] && this.parent === e.parent) return !1;

          for (var t = this; t.parent; t = t.parent) {
            if (t.parent.id in e.ancestors) {
              var n = t.parent;
              break;
            }
          }

          u("cursor and anticursor in the same tree", n);
          var r,
              i,
              o = e.ancestors[n.id],
              s = 1;
          if (t[p] !== o) for (var a = t; a; a = a[1]) {
            if (a[1] === o[1]) {
              s = p, r = t, i = o;
              break;
            }
          }
          return 1 === s && (r = o, i = t), r instanceof m && (r = r[1]), i instanceof m && (i = i[p]), this.hide().selection = n.selectChildren(r, i), this.insDirOf(s, this.selection.ends[s]), this.selectionChanged(), !0;
        }, e.clearSelection = function () {
          return this.selection && (this.selection.clear(), delete this.selection, this.selectionChanged()), this;
        }, e.deleteSelection = function () {
          this.selection && (this[p] = this.selection.ends[p][p], this[1] = this.selection.ends[1][1], this.selection.remove(), this.selectionChanged(), delete this.selection);
        }, e.replaceSelection = function () {
          var e = this.selection;
          return e && (this[p] = e.ends[p][p], this[1] = e.ends[1][1], delete this.selection), e;
        }, e.depth = function () {
          for (var e = this, t = 0; e = e.parent;) {
            t += e instanceof W ? 1 : 0;
          }

          return t;
        }, e.isTooDeep = function (e) {
          if (void 0 !== this.options.maxDepth) return this.depth() + (e || 0) > this.options.maxDepth;
        };
      }),
          w = f(b, function (e, t) {
        e.init = function () {
          t.init.apply(this, arguments), this.jQ = this.jQ.wrapAll('<span class="mq-selection"></span>').parent();
        }, e.adopt = function () {
          return this.jQ.replaceWith(this.jQ = this.jQ.children()), t.adopt.apply(this, arguments);
        }, e.clear = function () {
          return this.jQ.replaceWith(this.jQ[0].childNodes), this;
        }, e.join = function (e) {
          return this.fold("", function (t, n) {
            return t + n[e]();
          });
        };
      }),
          T = f(function (e) {
        e.init = function (e, t, n) {
          this.id = e.id, this.data = {}, this.root = e, this.container = t, this.options = n, e.controller = this, this.cursor = e.cursor = q(e, n);
        }, e.handle = function (e, t) {
          var n = this.options.handlers;

          if (n && n.fns[e]) {
            var r = n.APIClasses[this.KIND_OF_MQ](this);
            t === p || 1 === t ? n.fns[e](t, r) : n.fns[e](r);
          }
        };
        var t = [];
        this.onNotify = function (e) {
          t.push(e);
        }, e.notify = function () {
          for (var e = 0; e < t.length; e += 1) {
            t[e].apply(this.cursor, arguments);
          }

          return this;
        };
      }),
          k = {},
          C = f(),
          O = {},
          j = f(),
          S = {};

      function D() {
        window.console && console.warn('You are using the MathQuill API without specifying an interface version, which will fail in v1.0.0. Easiest fix is to do the following before doing anything else:\n\n    MathQuill = MathQuill.getInterface(1);\n    // now MathQuill.MathField() works like it used to\n\nSee also the "`dev` branch (2014–2015) → v0.10.0 Migration Guide" at\n  https://github.com/mathquill/mathquill/wiki/%60dev%60-branch-(2014%E2%80%932015)-%E2%86%92-v0.10.0-Migration-Guide');
      }

      function E(e) {
        return D(), _e(e);
      }

      E.prototype = j.p, E.VERSION = "v0.11.0", E.interfaceVersion = function (e) {
        if (1 !== e) throw "Only interface version 1 supported. You specified: " + e;
        return (D = function D() {
          window.console && console.warn('You called MathQuill.interfaceVersion(1); to specify the interface version, which will fail in v1.0.0. You can fix this easily by doing this before doing anything else:\n\n    MathQuill = MathQuill.getInterface(1);\n    // now MathQuill.MathField() works like it used to\n\nSee also the "`dev` branch (2014–2015) → v0.10.0 Migration Guide" at\n  https://github.com/mathquill/mathquill/wiki/%60dev%60-branch-(2014%E2%80%932015)-%E2%86%92-v0.10.0-Migration-Guide');
        })(), E;
      }, E.getInterface = _;
      var A = _.MIN = 1,
          L = _.MAX = 2;

      function _(n) {
        if (!(A <= n && n <= L)) throw "Only interface versions between " + A + " and " + L + " supported. You specified: " + n;

        function r(e) {
          if (!e || !e.nodeType) return null;
          var n = d(e).children(".mq-root-block").attr(t),
              r = n && g.byId[n].controller;
          return r ? o[r.KIND_OF_MQ](r) : null;
        }

        var o = {};

        function s(e, t) {
          for (var n in t && t.handlers && (t.handlers = {
            fns: t.handlers,
            APIClasses: o
          }), t) {
            if (t.hasOwnProperty(n)) {
              var r = t[n],
                  i = O[n];
              e[n] = i ? i(r) : r;
            }
          }
        }

        r.L = p, r.R = 1, r.saneKeyboardEvents = M, r.config = function (e) {
          return s(C.p, e), this;
        }, r.registerEmbed = function (e, t) {
          if (!/^[a-z][a-z0-9]*$/i.test(e)) throw "Embed name must start with letter and be only letters and digits";
          S[e] = t;
        };
        var a = o.AbstractMathQuill = f(j, function (e) {
          e.init = function (e) {
            this.__controller = e, this.__options = e.options, this.id = e.id, this.data = e.data;
          }, e.__mathquillify = function (e) {
            var n = this.__controller,
                r = n.root,
                i = n.container;
            n.createTextarea();
            var o = i.addClass(e).contents().detach();
            r.jQ = d('<span class="mq-root-block"/>').attr(t, r.id).appendTo(i), this.latex(o.text()), this.revert = function () {
              return i.empty().unbind(".mathquill").removeClass("mq-editable-field mq-math-mode mq-text-mode").append(o);
            };
          }, e.config = function (e) {
            return s(this.__options, e), this;
          }, e.el = function () {
            return this.__controller.container[0];
          }, e.text = function () {
            return this.__controller.exportText();
          }, e.latex = function (e) {
            return arguments.length > 0 ? (this.__controller.renderLatexMath(e), this.__controller.blurred && this.__controller.cursor.hide().parent.blur(), this) : this.__controller.exportLatex();
          }, e.html = function () {
            return this.__controller.root.jQ.html().replace(/ mathquill-(?:command|block)-id="?\d+"?/g, "").replace(/<span class="?mq-cursor( mq-blink)?"?>.?<\/span>/i, "").replace(/ mq-hasCursor|mq-hasCursor ?/, "").replace(/ class=(""|(?= |>))/g, "");
          }, e.reflow = function () {
            return this.__controller.root.postOrder("reflow"), this;
          };
        });

        for (var l in r.prototype = a.prototype, o.EditableField = f(a, function (t, n) {
          t.__mathquillify = function () {
            return n.__mathquillify.apply(this, arguments), this.__controller.editable = !0, this.__controller.delegateMouseEvents(), this.__controller.editablesTextareaEvents(), this;
          }, t.focus = function () {
            return this.__controller.textarea.focus(), this;
          }, t.blur = function () {
            return this.__controller.textarea.blur(), this;
          }, t.write = function (e) {
            return this.__controller.writeLatex(e), this.__controller.scrollHoriz(), this.__controller.blurred && this.__controller.cursor.hide().parent.blur(), this;
          }, t.empty = function () {
            var e = this.__controller.root,
                t = this.__controller.cursor;
            return e.eachChild("postOrder", "dispose"), e.ends[p] = e.ends[1] = 0, e.jQ.empty(), delete t.selection, t.insAtRightEnd(e), this;
          }, t.cmd = function (e) {
            var t = this.__controller.notify(),
                n = t.cursor;

            if (/^\\[a-z]+$/i.test(e) && !n.isTooDeep()) {
              e = e.slice(1);
              var r = y[e];
              r && (e = r(e), n.selection && e.replaces(n.replaceSelection()), e.createLeftOf(n.show()), this.__controller.scrollHoriz());
            } else n.parent.write(n, e);

            return t.blurred && n.hide().parent.blur(), this;
          }, t.select = function () {
            var e = this.__controller;

            for (e.notify("move").cursor.insAtRightEnd(e.root); e.cursor[p];) {
              e.selectLeft();
            }

            return this;
          }, t.clearSelection = function () {
            return this.__controller.cursor.clearSelection(), this;
          }, t.moveToDirEnd = function (e) {
            return this.__controller.notify("move").cursor.insAtDirEnd(e, this.__controller.root), this;
          }, t.moveToLeftEnd = function () {
            return this.moveToDirEnd(p);
          }, t.moveToRightEnd = function () {
            return this.moveToDirEnd(1);
          }, t.keystroke = function (e) {
            e = e.replace(/^\s+|\s+$/g, "").split(/\s+/);

            for (var t = 0; t < e.length; t += 1) {
              this.__controller.keystroke(e[t], {
                preventDefault: i
              });
            }

            return this;
          }, t.typedText = function (e) {
            for (var t = 0; t < e.length; t += 1) {
              this.__controller.typedText(e.charAt(t));
            }

            return this;
          }, t.dropEmbedded = function (e, t, n) {
            var r = e - d(window).scrollLeft(),
                i = t - d(window).scrollTop(),
                o = document.elementFromPoint(r, i);
            this.__controller.seek(d(o), e, t), ve().setOptions(n).createLeftOf(this.__controller.cursor);
          }, t.clickAt = function (t, n, r) {
            r = r || document.elementFromPoint(t, n);
            var i = this.__controller,
                o = i.root;
            return e.contains(o.jQ[0], r) || (r = o.jQ[0]), i.seek(d(r), t + pageXOffset, n + pageYOffset), i.blurred && this.focus(), this;
          }, t.ignoreNextMousedown = function (e) {
            return this.__controller.cursor.options.ignoreNextMousedown = e, this;
          };
        }), r.EditableField = function () {
          throw "wtf don't call me, I'm 'abstract'";
        }, r.EditableField.prototype = o.EditableField.prototype, k) {
          !function (e, t) {
            var i = o[e] = t(o);
            r[e] = function (t, o) {
              var s = r(t);
              if (s instanceof i || !t || !t.nodeType) return s;
              var a = T(i.RootBlock(), d(t), C());
              return a.KIND_OF_MQ = e, i(a).__mathquillify(o, n);
            }, r[e].prototype = i.prototype;
          }(l, k[l]);
        }

        return r;
      }

      E.noConflict = function () {
        return window.MathQuill = N, E;
      };

      var N = window.MathQuill;

      function Q(e) {
        for (var t = "moveOutOf deleteOutOf selectOutOf upOutOf downOutOf".split(" "), n = 0; n < t.length; n += 1) {
          !function (t) {
            e[t] = function (e) {
              this.controller.handle(t, e);
            };
          }(t[n]);
        }

        e.reflow = function () {
          this.controller.handle("reflow"), this.controller.handle("edited"), this.controller.handle("edit");
        };
      }

      window.MathQuill = E;
      var R,
          M = (R = {
        8: "Backspace",
        9: "Tab",
        10: "Enter",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        20: "CapsLock",
        27: "Esc",
        32: "Spacebar",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "Left",
        38: "Up",
        39: "Right",
        40: "Down",
        45: "Insert",
        46: "Del",
        144: "NumLock"
      }, function (t, n) {
        var r,
            o = null,
            s = null,
            a = e(t),
            l = e(n.container || a),
            c = i;

        function u(e) {
          c = e, clearTimeout(r), r = setTimeout(e);
        }

        function f(e) {
          u(function (t) {
            c = i, clearTimeout(r), e(t);
          });
        }

        l.bind("keydown keypress input keyup focusout paste", function (e) {
          c(e);
        });
        var p = !1;

        function h() {
          n.keystroke(function (e) {
            var t,
                n = e.which || e.keyCode,
                r = R[n],
                i = [];
            return e.ctrlKey && i.push("Ctrl"), e.originalEvent && e.originalEvent.metaKey && i.push("Meta"), e.altKey && i.push("Alt"), e.shiftKey && i.push("Shift"), t = r || String.fromCharCode(n), i.length || r ? (i.push(t), i.join("-")) : t;
          }(o), o);
        }

        function d() {
          if (!("selectionStart" in (e = a[0])) || e.selectionStart === e.selectionEnd) {
            var e,
                t = a.val();
            1 === t.length ? (a.val(""), n.typedText(t)) : t && a[0].select && a[0].select();
          }
        }

        function m() {
          var e = a.val();
          a.val(""), e && n.paste(e);
        }

        return l.bind({
          keydown: function keydown(e) {
            o = e, s = null, p && f(function (e) {
              e && "focusout" === e.type || !a[0].select || a[0].select();
            }), h();
          },
          keypress: function keypress(e) {
            o && s && h(), s = e, u(d);
          },
          keyup: function keyup(e) {
            o && !s && u(d);
          },
          focusout: function focusout() {
            o = s = null;
          },
          cut: function cut() {
            f(function () {
              n.cut();
            });
          },
          copy: function copy() {
            f(function () {
              n.copy();
            });
          },
          paste: function paste(e) {
            a.focus(), u(m);
          }
        }), {
          select: function select(e) {
            c(), c = i, clearTimeout(r), a.val(e), e && a[0].select && a[0].select(), p = !!e;
          }
        };
      }),
          I = f(function (e, t, n) {
        function r(e, t) {
          throw "Parse Error: " + t + " at " + (e = e ? "'" + e + "'" : "EOF");
        }

        e.init = function (e) {
          this._ = e;
        }, e.parse = function (e) {
          return this.skip(s)._("" + e, function (e, t) {
            return t;
          }, r);
        }, e.or = function (e) {
          u("or is passed a parser", e instanceof n);
          var t = this;
          return n(function (n, r, i) {
            return t._(n, r, function (t) {
              return e._(n, r, i);
            });
          });
        }, e.then = function (e) {
          var t = this;
          return n(function (r, i, o) {
            return t._(r, function (t, r) {
              var s = e instanceof n ? e : e(r);
              return u("a parser is returned", s instanceof n), s._(t, i, o);
            }, o);
          });
        }, e.many = function () {
          var e = this;
          return n(function (t, n, r) {
            for (var i = []; e._(t, o, s);) {
              ;
            }

            return n(t, i);

            function o(e, n) {
              return t = e, i.push(n), !0;
            }

            function s() {
              return !1;
            }
          });
        }, e.times = function (e, t) {
          arguments.length < 2 && (t = e);
          var r = this;
          return n(function (n, i, o) {
            for (var s, a = [], l = !0, c = 0; c < e; c += 1) {
              if (!(l = r._(n, u, f))) return o(n, s);
            }

            for (; c < t && l; c += 1) {
              l = r._(n, u, p);
            }

            return i(n, a);

            function u(e, t) {
              return a.push(t), n = e, !0;
            }

            function f(e, t) {
              return s = t, n = e, !1;
            }

            function p(e, t) {
              return !1;
            }
          });
        }, e.result = function (e) {
          return this.then(o(e));
        }, e.atMost = function (e) {
          return this.times(0, e);
        }, e.atLeast = function (e) {
          var t = this;
          return t.times(e).then(function (e) {
            return t.many().map(function (t) {
              return e.concat(t);
            });
          });
        }, e.map = function (e) {
          return this.then(function (t) {
            return o(e(t));
          });
        }, e.skip = function (e) {
          return this.then(function (t) {
            return e.result(t);
          });
        };

        this.string = function (e) {
          var t = e.length,
              r = "expected '" + e + "'";
          return n(function (n, i, o) {
            var s = n.slice(0, t);
            return s === e ? i(n.slice(t), s) : o(n, r);
          });
        };

        var i = this.regex = function (e) {
          u("regexp parser is anchored", "^" === e.toString().charAt(1));
          var t = "expected " + e;
          return n(function (n, r, i) {
            var o = e.exec(n);

            if (o) {
              var s = o[0];
              return r(n.slice(s.length), s);
            }

            return i(n, t);
          });
        },
            o = n.succeed = function (e) {
          return n(function (t, n) {
            return n(t, e);
          });
        },
            s = (n.fail = function (e) {
          return n(function (t, n, r) {
            return r(t, e);
          });
        }, n.letter = i(/^[a-z]/i), n.letters = i(/^[a-z]*/i), n.digit = i(/^[0-9]/), n.digits = i(/^[0-9]*/), n.whitespace = i(/^\s+/), n.optWhitespace = i(/^\s*/), n.any = n(function (e, t, n) {
          return e ? t(e.slice(1), e.charAt(0)) : n(e, "expected any character");
        }), n.all = n(function (e, t, n) {
          return t("", e);
        }), n.eof = n(function (e, t, n) {
          return e ? n(e, "expected EOF") : t(e, e);
        }));
      });
      T.open(function (e) {
        e.focusBlurEvents = function () {
          var e,
              t = this,
              n = t.root,
              r = t.cursor;

          function i() {
            clearTimeout(e), r.selection && r.selection.jQ.addClass("mq-blur"), o();
          }

          function o() {
            r.hide().parent.blur(), t.container.removeClass("mq-focused"), d(window).unbind("blur", i);
          }

          t.textarea.focus(function () {
            t.blurred = !1, clearTimeout(e), t.container.addClass("mq-focused"), r.parent || r.insAtRightEnd(n), r.selection ? (r.selection.jQ.removeClass("mq-blur"), t.selectionChanged()) : r.show();
          }).blur(function () {
            t.blurred = !0, e = setTimeout(function () {
              n.postOrder("intentionalBlur"), r.clearSelection().endSelection(), o();
            }), d(window).bind("blur", i);
          }), t.blurred = !0, r.hide().parent.blur();
        };
      }), T.open(function (e, t) {
        e.exportText = function () {
          return this.root.foldChildren("", function (e, t) {
            return e + t.text();
          });
        };
      }), T.open(function (e) {
        C.p.ignoreNextMousedown = i, e.delegateMouseEvents = function () {
          var e = this.root.jQ;
          this.container.bind("mousedown.mathquill", function (n) {
            var r,
                o = d(n.target).closest(".mq-root-block"),
                s = g.byId[o.attr(t) || e.attr(t)].controller,
                a = s.cursor,
                l = a.blink,
                c = s.textareaSpan,
                u = s.textarea;
            (n.preventDefault(), n.target.unselectable = !0, a.options.ignoreNextMousedown(n)) || (a.options.ignoreNextMousedown = i, s.blurred && (s.editable || o.prepend(c), u.focus()), a.blink = i, s.seek(d(n.target), n.pageX, n.pageY).cursor.startSelection(), o.mousemove(f), d(n.target.ownerDocument).mousemove(p).mouseup(function e(t) {
              a.blink = l, a.selection || (s.editable ? a.show() : c.detach()), o.unbind("mousemove", f), d(t.target.ownerDocument).unbind("mousemove", p).unbind("mouseup", e);
            }));

            function f(e) {
              r = d(e.target);
            }

            function p(e) {
              a.anticursor || a.startSelection(), s.seek(r, e.pageX, e.pageY).cursor.select(), r = void 0;
            }
          });
        };
      }), T.open(function (e) {
        e.seek = function (e, n, r) {
          var i = this.notify("select").cursor;

          if (e) {
            var o = e.attr(t) || e.attr("mathquill-command-id");

            if (!o) {
              var s = e.parent();
              o = s.attr(t) || s.attr("mathquill-command-id");
            }
          }

          var a = o ? g.byId[o] : this.root;
          return u("nodeId is the id of some Node that exists", a), i.clearSelection().show(), a.seek(n, i), this.scrollHoriz(), this;
        };
      }), T.open(function (e) {
        e.keystroke = function (e, t) {
          this.cursor.parent.keystroke(e, t, this);
        };
      }), g.open(function (e) {
        e.keystroke = function (e, t, n) {
          var r = n.cursor;

          switch (e) {
            case "Ctrl-Shift-Backspace":
            case "Ctrl-Backspace":
              n.ctrlDeleteDir(p);
              break;

            case "Shift-Backspace":
            case "Backspace":
              n.backspace();
              break;

            case "Esc":
            case "Tab":
              return void n.escapeDir(1, e, t);

            case "Shift-Tab":
            case "Shift-Esc":
              return void n.escapeDir(p, e, t);

            case "End":
              n.notify("move").cursor.insAtRightEnd(r.parent);
              break;

            case "Ctrl-End":
              n.notify("move").cursor.insAtRightEnd(n.root);
              break;

            case "Shift-End":
              for (; r[1];) {
                n.selectRight();
              }

              break;

            case "Ctrl-Shift-End":
              for (; r[1] || r.parent !== n.root;) {
                n.selectRight();
              }

              break;

            case "Home":
              n.notify("move").cursor.insAtLeftEnd(r.parent);
              break;

            case "Ctrl-Home":
              n.notify("move").cursor.insAtLeftEnd(n.root);
              break;

            case "Shift-Home":
              for (; r[p];) {
                n.selectLeft();
              }

              break;

            case "Ctrl-Shift-Home":
              for (; r[p] || r.parent !== n.root;) {
                n.selectLeft();
              }

              break;

            case "Left":
              n.moveLeft();
              break;

            case "Shift-Left":
              n.selectLeft();
              break;

            case "Ctrl-Left":
              break;

            case "Right":
              n.moveRight();
              break;

            case "Shift-Right":
              n.selectRight();
              break;

            case "Ctrl-Right":
              break;

            case "Up":
              n.moveUp();
              break;

            case "Down":
              n.moveDown();
              break;

            case "Shift-Up":
              if (r[p]) for (; r[p];) {
                n.selectLeft();
              } else n.selectLeft();

            case "Shift-Down":
              if (r[1]) for (; r[1];) {
                n.selectRight();
              } else n.selectRight();

            case "Ctrl-Up":
            case "Ctrl-Down":
              break;

            case "Ctrl-Shift-Del":
            case "Ctrl-Del":
              n.ctrlDeleteDir(1);
              break;

            case "Shift-Del":
            case "Del":
              n.deleteForward();
              break;

            case "Meta-A":
            case "Ctrl-A":
              for (n.notify("move").cursor.insAtRightEnd(n.root); r[p];) {
                n.selectLeft();
              }

              break;

            default:
              return;
          }

          t.preventDefault(), n.scrollHoriz();
        }, e.moveOutOf = e.moveTowards = e.deleteOutOf = e.deleteTowards = e.unselectInto = e.selectOutOf = e.selectTowards = function () {
          u("overridden or never called on this node");
        };
      }), T.open(function (e) {
        function t(e, t) {
          var n = e.notify("upDown").cursor,
              r = t + "Into",
              i = t + "OutOf";
          return n[1][r] ? n.insAtLeftEnd(n[1][r]) : n[p][r] ? n.insAtRightEnd(n[p][r]) : n.parent.bubble(function (e) {
            var t = e[i];
            if (t && ("function" == typeof t && (t = e[i](n)), t instanceof g && n.jumpUpDown(e, t), !0 !== t)) return !1;
          }), e;
        }

        this.onNotify(function (e) {
          "move" !== e && "upDown" !== e || this.show().clearSelection();
        }), e.escapeDir = function (e, t, n) {
          h(e);
          var r = this.cursor;
          if (r.parent !== this.root && n.preventDefault(), r.parent !== this.root) return r.parent.moveOutOf(e, r), this.notify("move");
        }, O.leftRightIntoCmdGoes = function (e) {
          if (e && "up" !== e && "down" !== e) throw '"up" or "down" required for leftRightIntoCmdGoes option, got "' + e + '"';
          return e;
        }, e.moveDir = function (e) {
          h(e);
          var t = this.cursor,
              n = t.options.leftRightIntoCmdGoes;
          return t.selection ? t.insDirOf(e, t.selection.ends[e]) : t[e] ? t[e].moveTowards(e, t, n) : t.parent.moveOutOf(e, t, n), this.notify("move");
        }, e.moveLeft = function () {
          return this.moveDir(p);
        }, e.moveRight = function () {
          return this.moveDir(1);
        }, e.moveUp = function () {
          return t(this, "up");
        }, e.moveDown = function () {
          return t(this, "down");
        }, this.onNotify(function (e) {
          "upDown" !== e && (this.upDownCache = {});
        }), this.onNotify(function (e) {
          "edit" === e && this.show().deleteSelection();
        }), e.deleteDir = function (e) {
          h(e);
          var t = this.cursor,
              n = t.selection;
          return this.notify("edit"), n || (t[e] ? t[e].deleteTowards(e, t) : t.parent.deleteOutOf(e, t)), t[p].siblingDeleted && t[p].siblingDeleted(t.options, 1), t[1].siblingDeleted && t[1].siblingDeleted(t.options, p), t.parent.bubble("reflow"), this;
        }, e.ctrlDeleteDir = function (e) {
          h(e);
          var t = this.cursor;
          return !t[e] || t.selection ? this.deleteDir(e) : (this.notify("edit"), e === p ? b(t.parent.ends[p], t[p]).remove() : b(t[1], t.parent.ends[1]).remove(), t.insAtDirEnd(e, t.parent), t[p].siblingDeleted && t[p].siblingDeleted(t.options, 1), t[1].siblingDeleted && t[1].siblingDeleted(t.options, p), t.parent.bubble("reflow"), this);
        }, e.backspace = function () {
          return this.deleteDir(p);
        }, e.deleteForward = function () {
          return this.deleteDir(1);
        }, this.onNotify(function (e) {
          "select" !== e && this.endSelection();
        }), e.selectDir = function (e) {
          var t = this.notify("select").cursor,
              n = t.selection;
          h(e), t.anticursor || t.startSelection();
          var r = t[e];
          r ? n && n.ends[e] === r && t.anticursor[-e] !== r ? r.unselectInto(e, t) : r.selectTowards(e, t) : t.parent.selectOutOf(e, t), t.clearSelection(), t.select() || t.show();
        }, e.selectLeft = function () {
          return this.selectDir(p);
        }, e.selectRight = function () {
          return this.selectDir(1);
        };
      }), T.open(function (t) {
        C.p.substituteTextarea = function () {
          return d("<textarea autocapitalize=off autocomplete=off autocorrect=off spellcheck=false x-palm-disable-ste-all=true />")[0];
        }, t.createTextarea = function () {
          var e = this.textareaSpan = d('<span class="mq-textarea"></span>'),
              t = this.options.substituteTextarea();
          if (!t.nodeType) throw "substituteTextarea() must return a DOM element, got " + t;
          t = this.textarea = d(t).appendTo(e);
          var n = this;

          n.cursor.selectionChanged = function () {
            n.selectionChanged();
          };
        }, t.selectionChanged = function () {
          var e = this;
          ee(e.container[0]), void 0 === e.textareaSelectionTimeout && (e.textareaSelectionTimeout = setTimeout(function () {
            e.setTextareaSelection();
          }));
        }, t.setTextareaSelection = function () {
          this.textareaSelectionTimeout = void 0;
          var e = "";
          this.cursor.selection && (e = this.cursor.selection.join("latex"), this.options.statelessClipboard && (e = "$" + e + "$")), this.selectFn(e);
        }, t.staticMathTextareaEvents = function () {
          var t = this,
              n = (t.root, t.cursor),
              r = t.textarea,
              i = t.textareaSpan;

          function o() {
            i.detach(), t.blurred = !0;
          }

          this.container.prepend(e('<span class="mq-selectable">').text("$" + t.exportLatex() + "$")), t.blurred = !0, r.bind("cut paste", !1).bind("copy", function () {
            t.setTextareaSelection();
          }).focus(function () {
            t.blurred = !1;
          }).blur(function () {
            n.selection && n.selection.clear(), setTimeout(o);
          }), t.selectFn = function (e) {
            r.val(e), e && r.select();
          };
        }, C.p.substituteKeyboardEvents = M, t.editablesTextareaEvents = function () {
          var e = this.textarea,
              t = this.textareaSpan,
              n = this.options.substituteKeyboardEvents(e, this);
          this.selectFn = function (e) {
            n.select(e);
          }, this.container.prepend(t), this.focusBlurEvents();
        }, t.typedText = function (e) {
          if ("\n" === e) return this.handle("enter");
          var t = this.notify().cursor;
          t.parent.write(t, e), this.scrollHoriz();
        }, t.cut = function () {
          var e = this,
              t = e.cursor;
          t.selection && setTimeout(function () {
            e.notify("edit"), t.parent.bubble("reflow");
          });
        }, t.copy = function () {
          this.setTextareaSelection();
        }, t.paste = function (e) {
          this.options.statelessClipboard && (e = "$" === e.slice(0, 1) && "$" === e.slice(-1) ? e.slice(1, -1) : "\\text{" + e + "}"), this.writeLatex(e).cursor.show();
        };
      });

      var z = function () {
        function e(e) {
          for (var t = e[0] || W(), n = 1; n < e.length; n += 1) {
            e[n].children().adopt(t, t.ends[1], 0);
          }

          return t;
        }

        var t = I.string,
            n = I.regex,
            r = I.letter,
            i = I.any,
            o = I.optWhitespace,
            s = I.succeed,
            a = I.fail,
            l = r.map(function (e) {
          return xe(e);
        }),
            c = n(/^[^${}\\_^]/).map(function (e) {
          return B(e);
        }),
            u = n(/^[^\\a-eg-zA-Z]/).or(t("\\").then(n(/^[a-z]+/i).or(n(/^\s+/).result(" ")).or(i))).then(function (e) {
          var t = y[e];
          return t ? t(e).parser() : a("unknown command: \\" + e);
        }).or(l).or(c),
            f = t("{").then(function () {
          return h;
        }).skip(t("}")),
            p = o.then(f.or(u.map(function (e) {
          var t = W();
          return e.adopt(t, 0, 0), t;
        }))),
            h = p.many().map(e).skip(o),
            d = t("[").then(p.then(function (e) {
          return "]" !== e.join("latex") ? s(e) : a();
        }).many().map(e).skip(o)).skip(t("]")),
            m = h;
        return m.block = p, m.optBlock = d, m;
      }();

      T.open(function (e, t) {
        e.exportLatex = function () {
          return this.root.latex().replace(/(\\[a-z]+) (?![a-z])/gi, "$1");
        }, O.maxDepth = function (e) {
          return "number" == typeof e ? e : void 0;
        }, e.writeLatex = function (e) {
          var t = this.notify("edit").cursor,
              n = I.all,
              r = I.eof,
              i = z.skip(r).or(n.result(!1)).parse(e);
          i && !i.isEmpty() && i.prepareInsertionAt(t) && (i.children().adopt(t.parent, t[p], t[1]), i.jQize().insertBefore(t.jQ), t[p] = i.ends[1], i.finalizeInsert(t.options, t), i.ends[1][1].siblingCreated && i.ends[1][1].siblingCreated(t.options, p), i.ends[p][p].siblingCreated && i.ends[p][p].siblingCreated(t.options, 1), t.parent.bubble("reflow"));
          return this;
        }, e.renderLatexMath = function (e) {
          var t = this.root,
              n = this.cursor,
              r = (n.options, t.jQ),
              i = I.all,
              o = I.eof,
              s = z.skip(o).or(i.result(!1)).parse(e);

          if (t.eachChild("postOrder", "dispose"), t.ends[p] = t.ends[1] = 0, s && s.prepareInsertionAt(n)) {
            s.children().adopt(t, 0, 0);
            var a = s.join("html");
            r.html(a), t.jQize(r.children()), t.finalizeInsert(n.options);
          } else r.empty();

          delete n.selection, n.insAtRightEnd(t);
        }, e.renderLatexText = function (e) {
          var t = this.root,
              n = this.cursor;
          t.jQ.children().slice(1).remove(), t.eachChild("postOrder", "dispose"), t.ends[p] = t.ends[1] = 0, delete n.selection, n.show().insAtRightEnd(t);
          var r = I.regex,
              i = I.string,
              o = I.eof,
              s = I.all,
              a = i("$").then(z).skip(i("$").or(o)).map(function (e) {
            var t = Y(n);
            t.createBlocks();
            var r = t.ends[p];
            return e.children().adopt(r, 0, 0), t;
          }),
              l = i("\\$").result("$").or(r(/^[^$]/)).map(B),
              c = a.or(l).many().skip(o).or(s.result(!1)).parse(e);

          if (c) {
            for (var u = 0; u < c.length; u += 1) {
              c[u].adopt(t, t.ends[1], 0);
            }

            t.jQize().appendTo(t.jQ), t.finalizeInsert(n.options);
          }
        };
      }), T.open(function (e) {
        e.scrollHoriz = function () {
          var e = this.cursor,
              t = e.selection,
              n = this.root.jQ[0].getBoundingClientRect();

          if (t) {
            var r = t.jQ[0].getBoundingClientRect(),
                i = r.left - (n.left + 20),
                o = r.right - (n.right - 20);
            if (t.ends[p] === e[1]) {
              if (i < 0) a = i;else {
                if (!(o > 0)) return;
                if (r.left - o < n.left + 20) a = i;else a = o;
              }
            } else if (o > 0) a = o;else {
              if (!(i < 0)) return;
              if (r.right - i > n.right - 20) a = o;else a = i;
            }
          } else {
            var s = e.jQ[0].getBoundingClientRect().left;
            if (s > n.right - 20) var a = s - (n.right - 20);else {
              if (!(s < n.left + 20)) return;
              var a = s - (n.left + 20);
            }
          }

          this.root.jQ.stop().animate({
            scrollLeft: "+=" + a
          }, 100);
        };
      });
      var P = f(g, function (e, t) {
        e.finalizeInsert = function (e, t) {
          this.postOrder("finalizeTree", e), this.postOrder("contactWeld", t), this.postOrder("blur"), this.postOrder("reflow"), this[1].siblingCreated && this[1].siblingCreated(e, p), this[p].siblingCreated && this[p].siblingCreated(e, 1), this.bubble("reflow");
        }, e.prepareInsertionAt = function (e) {
          var t = e.options.maxDepth;

          if (void 0 !== t) {
            var n = e.depth();
            if (n > t) return !1;
            this.removeNodesDeeperThan(t - n);
          }

          return !0;
        }, e.removeNodesDeeperThan = function (e) {
          for (var t, n = 0, r = [[this, n]]; r.length;) {
            (t = r.shift())[0].children().each(function (i) {
              var o = i instanceof W ? 1 : 0;
              (n = t[1] + o) <= e ? r.push([i, n]) : (o ? i.children() : i).remove();
            });
          }
        };
      }),
          H = f(P, function (e, t) {
        e.init = function (e, n, r) {
          t.init.call(this), this.ctrlSeq || (this.ctrlSeq = e), n && (this.htmlTemplate = n), r && (this.textTemplate = r);
        }, e.replaces = function (e) {
          e.disown(), this.replacedFragment = e;
        }, e.isEmpty = function () {
          return this.foldChildren(!0, function (e, t) {
            return e && t.isEmpty();
          });
        }, e.parser = function () {
          var e = z.block,
              t = this;
          return e.times(t.numBlocks()).map(function (e) {
            t.blocks = e;

            for (var n = 0; n < e.length; n += 1) {
              e[n].adopt(t, t.ends[1], 0);
            }

            return t;
          });
        }, e.createLeftOf = function (e) {
          var n = this.replacedFragment;
          this.createBlocks(), t.createLeftOf.call(this, e), n && (n.adopt(this.ends[p], 0, 0), n.jQ.appendTo(this.ends[p].jQ), this.placeCursor(e), this.prepareInsertionAt(e)), this.finalizeInsert(e.options), this.placeCursor(e);
        }, e.createBlocks = function () {
          for (var e = this.numBlocks(), t = this.blocks = Array(e), n = 0; n < e; n += 1) {
            (t[n] = W()).adopt(this, this.ends[1], 0);
          }
        }, e.placeCursor = function (e) {
          e.insAtRightEnd(this.foldChildren(this.ends[p], function (e, t) {
            return e.isEmpty() ? e : t;
          }));
        }, e.moveTowards = function (e, t, n) {
          var r = n && this[n + "Into"];
          t.insAtDirEnd(-e, r || this.ends[-e]);
        }, e.deleteTowards = function (e, t) {
          this.isEmpty() ? t[e] = this.remove()[e] : this.moveTowards(e, t, null);
        }, e.selectTowards = function (e, t) {
          t[-e] = this, t[e] = this[e];
        }, e.selectChildren = function () {
          return w(this, this);
        }, e.unselectInto = function (e, t) {
          t.insAtDirEnd(-e, t.anticursor.ancestors[this.id]);
        }, e.seek = function (e, t) {
          function n(e) {
            var t = {};
            return t[p] = e.jQ.offset().left, t[1] = t[p] + e.jQ.outerWidth(), t;
          }

          var r = this,
              i = n(r);
          if (e < i[p]) return t.insLeftOf(r);
          if (e > i[1]) return t.insRightOf(r);
          var o = i[p];
          r.eachChild(function (s) {
            var a = n(s);
            return e < a[p] ? (e - o < a[p] - e ? s[p] ? t.insAtRightEnd(s[p]) : t.insLeftOf(r) : t.insAtLeftEnd(s), !1) : e > a[1] ? void (s[1] ? o = a[1] : i[1] - e < e - a[1] ? t.insRightOf(r) : t.insAtRightEnd(s)) : (s.seek(e, t), !1);
          });
        }, e.numBlocks = function () {
          var e = this.htmlTemplate.match(/&\d+/g);
          return e ? e.length : 0;
        }, e.html = function () {
          var e = this.blocks,
              t = " mathquill-command-id=" + this.id,
              n = this.htmlTemplate.match(/<[^<>]+>|[^<>]+/g);
          u("no unmatched angle brackets", n.join("") === this.htmlTemplate);

          for (var r = 0, i = n[0]; i; i = n[r += 1]) {
            if ("/>" === i.slice(-2)) n[r] = i.slice(0, -2) + t + "/>";else if ("<" === i.charAt(0)) {
              u("not an unmatched top-level close tag", "/" !== i.charAt(1)), n[r] = i.slice(0, -1) + t + ">";
              var o = 1;

              do {
                u("no missing close tags", i = n[r += 1]), "</" === i.slice(0, 2) ? o -= 1 : "<" === i.charAt(0) && "/>" !== i.slice(-2) && (o += 1);
              } while (o > 0);
            }
          }

          return n.join("").replace(/>&(\d+)/g, function (t, n) {
            return " mathquill-block-id=" + e[n].id + ">" + e[n].join("html");
          });
        }, e.latex = function () {
          return this.foldChildren(this.ctrlSeq, function (e, t) {
            return e + "{" + (t.latex() || " ") + "}";
          });
        }, e.textTemplate = [""], e.text = function () {
          var e = this,
              t = 0;
          return e.foldChildren(e.textTemplate[t], function (n, r) {
            t += 1;
            var i = r.text();
            return n && "(" === e.textTemplate[t] && "(" === i[0] && ")" === i.slice(-1) ? n + i.slice(1, -1) + e.textTemplate[t] : n + i + (e.textTemplate[t] || "");
          });
        };
      }),
          F = f(H, function (e, t) {
        e.init = function (e, n, r) {
          r || (r = e && e.length > 1 ? e.slice(1) : e), t.init.call(this, e, n, [r]);
        }, e.parser = function () {
          return I.succeed(this);
        }, e.numBlocks = function () {
          return 0;
        }, e.replaces = function (e) {
          e.remove();
        }, e.createBlocks = i, e.moveTowards = function (e, t) {
          t.jQ.insDirOf(e, this.jQ), t[-e] = this, t[e] = this[e];
        }, e.deleteTowards = function (e, t) {
          t[e] = this.remove()[e];
        }, e.seek = function (e, t) {
          e - this.jQ.offset().left < this.jQ.outerWidth() / 2 ? t.insLeftOf(this) : t.insRightOf(this);
        }, e.latex = function () {
          return this.ctrlSeq;
        }, e.text = function () {
          return this.textTemplate;
        }, e.placeCursor = i, e.isEmpty = function () {
          return !0;
        };
      }),
          B = f(F, function (e, t) {
        e.init = function (e, n) {
          t.init.call(this, e, "<span>" + (n || e) + "</span>");
        };
      }),
          $ = f(F, function (e, t) {
        e.init = function (e, n, r) {
          t.init.call(this, e, '<span class="mq-binary-operator">' + n + "</span>", r);
        };
      }),
          W = f(P, function (e, t) {
        e.join = function (e) {
          return this.foldChildren("", function (t, n) {
            return t + n[e]();
          });
        }, e.html = function () {
          return this.join("html");
        }, e.latex = function () {
          return this.join("latex");
        }, e.text = function () {
          return this.ends[p] === this.ends[1] && 0 !== this.ends[p] ? this.ends[p].text() : this.join("text");
        }, e.keystroke = function (e, n, r) {
          return !r.options.spaceBehavesLikeTab || "Spacebar" !== e && "Shift-Spacebar" !== e ? t.keystroke.apply(this, arguments) : (n.preventDefault(), void r.escapeDir("Shift-Spacebar" === e ? p : 1, e, n));
        }, e.moveOutOf = function (e, t, n) {
          !(n && this.parent[n + "Into"]) && this[e] ? t.insAtDirEnd(-e, this[e]) : t.insDirOf(e, this.parent);
        }, e.selectOutOf = function (e, t) {
          t.insDirOf(e, this.parent);
        }, e.deleteOutOf = function (e, t) {
          t.unwrapGramp();
        }, e.seek = function (e, t) {
          var n = this.ends[1];
          if (!n || n.jQ.offset().left + n.jQ.outerWidth() < e) return t.insAtRightEnd(this);
          if (e < this.ends[p].jQ.offset().left) return t.insAtLeftEnd(this);

          for (; e < n.jQ.offset().left;) {
            n = n[p];
          }

          return n.seek(e, t);
        }, e.chToCmd = function (e, t) {
          var n;
          return e.match(/^[a-eg-zA-Z]$/) ? xe(e) : /^\d$/.test(e) ? be(e) : t && t.typingSlashWritesDivisionSymbol && "/" === e ? y["÷"](e) : t && t.typingAsteriskWritesTimesSymbol && "*" === e ? y["×"](e) : (n = x[e] || y[e]) ? n(e) : B(e);
        }, e.write = function (e, t) {
          var n = this.chToCmd(t, e.options);
          e.selection && n.replaces(e.replaceSelection()), e.isTooDeep() || n.createLeftOf(e.show());
        }, e.focus = function () {
          return this.jQ.addClass("mq-hasCursor"), this.jQ.removeClass("mq-empty"), this;
        }, e.blur = function () {
          return this.jQ.removeClass("mq-hasCursor"), this.isEmpty() && this.jQ.addClass("mq-empty"), this;
        };
      });
      C.p.mouseEvents = !0, k.StaticMath = function (e) {
        return f(e.AbstractMathQuill, function (t, n) {
          this.RootBlock = W, t.__mathquillify = function (e, t) {
            return this.config(e), n.__mathquillify.call(this, "mq-math-mode"), this.__options.mouseEvents && (this.__controller.delegateMouseEvents(), this.__controller.staticMathTextareaEvents()), this;
          }, t.init = function () {
            n.init.apply(this, arguments), this.__controller.root.postOrder("registerInnerField", this.innerFields = [], e.MathField);
          }, t.latex = function () {
            var t = n.latex.apply(this, arguments);
            return arguments.length > 0 && this.__controller.root.postOrder("registerInnerField", this.innerFields = [], e.MathField), t;
          };
        });
      };
      var X = f(W, Q);

      k.MathField = function (e) {
        return f(e.EditableField, function (e, t) {
          this.RootBlock = X, e.__mathquillify = function (e, n) {
            return this.config(e), n > 1 && (this.__controller.root.reflow = i), t.__mathquillify.call(this, "mq-editable-field mq-math-mode"), delete this.__controller.root.reflow, this;
          };
        });
      };

      var U = f(g, function (e, t) {
        function n(e) {
          e.jQ[0].normalize();
          var t = e.jQ[0].firstChild;

          if (t) {
            u("only node in TextBlock span is Text node", 3 === t.nodeType);
            var n = V(t.data);
            return n.jQadd(t), e.children().disown(), n.adopt(e, 0, 0);
          }
        }

        e.ctrlSeq = "\\text", e.replaces = function (e) {
          e instanceof b ? this.replacedText = e.remove().jQ.text() : "string" == typeof e && (this.replacedText = e);
        }, e.jQadd = function (e) {
          t.jQadd.call(this, e), this.ends[p] && this.ends[p].jQadd(this.jQ[0].firstChild);
        }, e.createLeftOf = function (e) {
          if (t.createLeftOf.call(this, e), this[1].siblingCreated && this[1].siblingCreated(e.options, p), this[p].siblingCreated && this[p].siblingCreated(e.options, 1), this.bubble("reflow"), e.insAtRightEnd(this), this.replacedText) for (var n = 0; n < this.replacedText.length; n += 1) {
            this.write(e, this.replacedText.charAt(n));
          }
        }, e.parser = function () {
          var e = this,
              t = I.string,
              n = I.regex;
          return I.optWhitespace.then(t("{")).then(n(/^[^}]*/)).skip(t("}")).map(function (t) {
            return 0 === t.length ? b() : (V(t).adopt(e, 0, 0), e);
          });
        }, e.textContents = function () {
          return this.foldChildren("", function (e, t) {
            return e + t.text;
          });
        }, e.text = function () {
          return '"' + this.textContents() + '"';
        }, e.latex = function () {
          var e = this.textContents();
          return 0 === e.length ? "" : "\\text{" + e.replace(/\\/g, "\\backslash ").replace(/[{}]/g, "\\$&") + "}";
        }, e.html = function () {
          return '<span class="mq-text-mode" mathquill-command-id=' + this.id + ">" + this.textContents() + "</span>";
        }, e.moveTowards = function (e, t) {
          t.insAtDirEnd(-e, this);
        }, e.moveOutOf = function (e, t) {
          t.insDirOf(e, this);
        }, e.unselectInto = e.moveTowards, e.selectTowards = H.prototype.selectTowards, e.deleteTowards = H.prototype.deleteTowards, e.selectOutOf = function (e, t) {
          t.insDirOf(e, this);
        }, e.deleteOutOf = function (e, t) {
          this.isEmpty() && t.insRightOf(this);
        }, e.write = function (e, n) {
          if (e.show().deleteSelection(), "$" !== n) e[p] ? e[p].appendText(n) : V(n).createLeftOf(e);else if (this.isEmpty()) e.insRightOf(this), B("\\$", "$").createLeftOf(e);else if (e[1]) {
            if (e[p]) {
              var r = U(),
                  i = this.ends[p];
              i.disown().jQ.detach(), i.adopt(r, 0, 0), e.insLeftOf(this), t.createLeftOf.call(r, e);
            } else e.insLeftOf(this);
          } else e.insRightOf(this);
        }, e.seek = function (e, t) {
          t.hide();
          var r = n(this),
              i = this.jQ.width() / this.text.length,
              o = Math.round((e - this.jQ.offset().left) / i);
          o <= 0 ? t.insAtLeftEnd(this) : o >= r.text.length ? t.insAtRightEnd(this) : t.insLeftOf(r.splitRight(o));

          for (var s = e - t.show().offset().left, a = s && s < 0 ? p : 1, l = a; t[a] && s * l > 0;) {
            t[a].moveTowards(a, t), l = s, s = e - t.offset().left;
          }

          if (a * s < -a * l && t[-a].moveTowards(-a, t), t.anticursor) {
            if (t.anticursor.parent === this) {
              var c = t[p] && t[p].text.length;
              if (this.anticursorPosition === c) t.anticursor = m.copy(t);else {
                if (this.anticursorPosition < c) {
                  var u = t[p].splitRight(this.anticursorPosition);
                  t[p] = u;
                } else u = t[1].splitRight(this.anticursorPosition - c);

                t.anticursor = m(this, u[p], u);
              }
            }
          } else this.anticursorPosition = t[p] && t[p].text.length;
        }, e.blur = function (e) {
          W.prototype.blur.call(this), e && ("" === this.textContents() ? (this.remove(), e[p] === this ? e[p] = this[p] : e[1] === this && (e[1] = this[1])) : n(this));
        }, e.focus = W.prototype.focus;
      }),
          V = f(g, function (e, t) {
        function n(e, t) {
          return t.charAt(e === p ? 0 : -1 + t.length);
        }

        e.init = function (e) {
          t.init.call(this), this.text = e;
        }, e.jQadd = function (e) {
          this.dom = e, this.jQ = d(e);
        }, e.jQize = function () {
          return this.jQadd(document.createTextNode(this.text));
        }, e.appendText = function (e) {
          this.text += e, this.dom.appendData(e);
        }, e.prependText = function (e) {
          this.text = e + this.text, this.dom.insertData(0, e);
        }, e.insTextAtDirEnd = function (e, t) {
          h(t), 1 === t ? this.appendText(e) : this.prependText(e);
        }, e.splitRight = function (e) {
          var t = V(this.text.slice(e)).adopt(this.parent, this, this[1]);
          return t.jQadd(this.dom.splitText(e)), this.text = this.text.slice(0, e), t;
        }, e.moveTowards = function (e, t) {
          h(e);
          var r = n(-e, this.text),
              i = this[-e];
          return i ? i.insTextAtDirEnd(r, e) : V(r).createDir(-e, t), this.deleteTowards(e, t);
        }, e.latex = function () {
          return this.text;
        }, e.deleteTowards = function (e, t) {
          this.text.length > 1 ? 1 === e ? (this.dom.deleteData(0, 1), this.text = this.text.slice(1)) : (this.dom.deleteData(-1 + this.text.length, 1), this.text = this.text.slice(0, -1)) : (this.remove(), this.jQ.remove(), t[e] = this[e]);
        }, e.selectTowards = function (e, t) {
          h(e);
          var r = t.anticursor,
              i = n(-e, this.text);

          if (r[e] === this) {
            var o = V(i).createDir(e, t);
            r[e] = o, t.insDirOf(e, o);
          } else {
            var s = this[-e];
            if (s) s.insTextAtDirEnd(i, e);else (o = V(i).createDir(-e, t)).jQ.insDirOf(-e, t.selection.jQ);
            1 === this.text.length && r[-e] === this && (r[-e] = this[-e]);
          }

          return this.deleteTowards(e, t);
        };
      });

      function G(e, t, n) {
        return f(U, {
          ctrlSeq: e,
          htmlTemplate: "<" + t + " " + n + ">&0</" + t + ">"
        });
      }

      y.text = y.textnormal = y.textrm = y.textup = y.textmd = U, y.em = y.italic = y.italics = y.emph = y.textit = y.textsl = G("\\textit", "i", 'class="mq-text-mode"'), y.strong = y.bold = y.textbf = G("\\textbf", "b", 'class="mq-text-mode"'), y.sf = y.textsf = G("\\textsf", "span", 'class="mq-sans-serif mq-text-mode"'), y.tt = y.texttt = G("\\texttt", "span", 'class="mq-monospace mq-text-mode"'), y.textsc = G("\\textsc", "span", 'style="font-variant:small-caps" class="mq-text-mode"'), y.uppercase = G("\\uppercase", "span", 'style="text-transform:uppercase" class="mq-text-mode"'), y.lowercase = G("\\lowercase", "span", 'style="text-transform:lowercase" class="mq-text-mode"');
      var Y = f(H, function (e, t) {
        e.init = function (e) {
          t.init.call(this, "$"), this.cursor = e;
        }, e.htmlTemplate = '<span class="mq-math-mode">&0</span>', e.createBlocks = function () {
          t.createBlocks.call(this), this.ends[p].cursor = this.cursor, this.ends[p].write = function (e, t) {
            "$" !== t ? W.prototype.write.call(this, e, t) : this.isEmpty() ? (e.insRightOf(this.parent), this.parent.deleteTowards(dir, e), B("\\$", "$").createLeftOf(e.show())) : e[1] ? e[p] ? W.prototype.write.call(this, e, t) : e.insLeftOf(this.parent) : e.insRightOf(this.parent);
          };
        }, e.latex = function () {
          return "$" + this.ends[p].latex() + "$";
        };
      }),
          K = f(X, function (e, t) {
        e.keystroke = function (e) {
          if ("Spacebar" !== e && "Shift-Spacebar" !== e) return t.keystroke.apply(this, arguments);
        }, e.write = function (e, t) {
          var n;
          (e.show().deleteSelection(), "$" === t) ? Y(e).createLeftOf(e) : ("<" === t ? n = "&lt;" : ">" === t && (n = "&gt;"), B(t, n).createLeftOf(e));
        };
      });

      k.TextField = function (e) {
        return f(e.EditableField, function (e, t) {
          this.RootBlock = K, e.__mathquillify = function () {
            return t.__mathquillify.call(this, "mq-editable-field mq-text-mode");
          }, e.latex = function (e) {
            return arguments.length > 0 ? (this.__controller.renderLatexText(e), this.__controller.blurred && this.__controller.cursor.hide().parent.blur(), this) : this.__controller.exportLatex();
          };
        });
      };

      x["\\"] = f(H, function (e, t) {
        e.ctrlSeq = "\\", e.replaces = function (e) {
          this._replacedFragment = e.disown(), this.isEmpty = function () {
            return !1;
          };
        }, e.htmlTemplate = '<span class="mq-latex-command-input mq-non-leaf">\\<span>&0</span></span>', e.textTemplate = ["\\"], e.createBlocks = function () {
          t.createBlocks.call(this), this.ends[p].focus = function () {
            return this.parent.jQ.addClass("mq-hasCursor"), this.isEmpty() && this.parent.jQ.removeClass("mq-empty"), this;
          }, this.ends[p].blur = function () {
            return this.parent.jQ.removeClass("mq-hasCursor"), this.isEmpty() && this.parent.jQ.addClass("mq-empty"), this;
          }, this.ends[p].write = function (e, t) {
            e.show().deleteSelection(), t.match(/[a-z]/i) ? B(t).createLeftOf(e) : (this.parent.renderCommand(e), "\\" === t && this.isEmpty() || e.parent.write(e, t));
          }, this.ends[p].keystroke = function (e, n, r) {
            return "Tab" === e || "Enter" === e || "Spacebar" === e ? (this.parent.renderCommand(r.cursor), void n.preventDefault()) : t.keystroke.apply(this, arguments);
          };
        }, e.createLeftOf = function (e) {
          if (t.createLeftOf.call(this, e), this._replacedFragment) {
            var n = this.jQ[0];
            this.jQ = this._replacedFragment.jQ.addClass("mq-blur").bind("mousedown mousemove", function (e) {
              return d(e.target = n).trigger(e), !1;
            }).insertBefore(this.jQ).add(this.jQ);
          }
        }, e.latex = function () {
          return "\\" + this.ends[p].latex() + " ";
        }, e.renderCommand = function (e) {
          this.jQ = this.jQ.last(), this.remove(), this[1] ? e.insLeftOf(this[1]) : e.insAtRightEnd(this.parent);
          var t = this.ends[p].latex();
          t || (t = " ");
          var n = y[t];
          n ? (n = n(t), this._replacedFragment && n.replaces(this._replacedFragment), n.createLeftOf(e)) : ((n = U()).replaces(t), n.createLeftOf(e), e.insRightOf(n), this._replacedFragment && this._replacedFragment.remove());
        };
      });
      var Z,
          J,
          ee = i,
          te = document.createElement("div").style;

      for (var ne in {
        transform: 1,
        WebkitTransform: 1,
        MozTransform: 1,
        OTransform: 1,
        msTransform: 1
      }) {
        if (ne in te) {
          J = ne;
          break;
        }
      }

      J ? Z = function Z(e, t, n) {
        e.css(J, "scale(" + t + "," + n + ")");
      } : "filter" in te ? (ee = function ee(e) {
        e.className = e.className;
      }, Z = function Z(e, t, n) {
        t /= 1 + (n - 1) / 2, e.css("fontSize", n + "em"), e.hasClass("mq-matrixed-container") || e.addClass("mq-matrixed-container").wrapInner('<span class="mq-matrixed"></span>');
        var r = e.children().css("filter", "progid:DXImageTransform.Microsoft.Matrix(M11=" + t + ",SizingMethod='auto expand')");

        function i() {
          e.css("marginRight", (r.width() - 1) * (t - 1) / t + "px");
        }

        i();
        var o = setInterval(i);
        d(window).load(function () {
          clearTimeout(o), i();
        });
      }) : Z = function Z(e, t, n) {
        e.css("fontSize", n + "em");
      };
      var re = f(H, function (e, t) {
        e.init = function (e, n, r) {
          t.init.call(this, e, "<" + n + " " + r + ">&0</" + n + ">");
        };
      });
      y.mathrm = c(re, "\\mathrm", "span", 'class="mq-roman mq-font"'), y.mathit = c(re, "\\mathit", "i", 'class="mq-font"'), y.mathbf = c(re, "\\mathbf", "b", 'class="mq-font"'), y.mathsf = c(re, "\\mathsf", "span", 'class="mq-sans-serif mq-font"'), y.mathtt = c(re, "\\mathtt", "span", 'class="mq-monospace mq-font"'), y.underline = c(re, "\\underline", "span", 'class="mq-non-leaf mq-underline"'), y.overline = y.bar = c(re, "\\overline", "span", 'class="mq-non-leaf mq-overline"'), y.overrightarrow = c(re, "\\overrightarrow", "span", 'class="mq-non-leaf mq-overarrow mq-arrow-right"'), y.overleftarrow = c(re, "\\overleftarrow", "span", 'class="mq-non-leaf mq-overarrow mq-arrow-left"'), y.overleftrightarrow = c(re, "\\overleftrightarrow", "span", 'class="mq-non-leaf mq-overarrow mq-arrow-both"'), y.overarc = c(re, "\\overarc", "span", 'class="mq-non-leaf mq-overarc"'), y.dot = f(H, function (e, t) {
        e.init = function () {
          t.init.call(this, "\\dot", '<span class="mq-non-leaf"><span class="mq-dot-recurring-inner"><span class="mq-dot-recurring">&#x2d9;</span><span class="mq-empty-box">&0</span></span></span>');
        };
      });
      y.textcolor = f(H, function (e, t) {
        e.setColor = function (e) {
          this.color = e, this.htmlTemplate = '<span class="mq-textcolor" style="color:' + e + '">&0</span>';
        }, e.latex = function () {
          return "\\textcolor{" + this.color + "}{" + this.blocks[0].latex() + "}";
        }, e.parser = function () {
          var e = this,
              n = I.optWhitespace,
              r = I.string,
              i = I.regex;
          return n.then(r("{")).then(i(/^[#\w\s.,()%-]*/)).skip(r("}")).then(function (n) {
            return e.setColor(n), t.parser.call(e);
          });
        }, e.isStyleBlock = function () {
          return !0;
        };
      }), y["class"] = f(H, function (e, t) {
        e.parser = function () {
          var e = this,
              n = I.string,
              r = I.regex;
          return I.optWhitespace.then(n("{")).then(r(/^[-\w\s\\\xA0-\xFF]*/)).skip(n("}")).then(function (n) {
            return e.cls = n || "", e.htmlTemplate = '<span class="mq-class ' + n + '">&0</span>', t.parser.call(e);
          });
        }, e.latex = function () {
          return "\\class{" + this.cls + "}{" + this.blocks[0].latex() + "}";
        }, e.isStyleBlock = function () {
          return !0;
        };
      });
      var ie = f(H, function (e, n) {
        e.ctrlSeq = "_{...}^{...}", e.createLeftOf = function (e) {
          if (this.replacedFragment || e[p] || !e.options.supSubsRequireOperand) return n.createLeftOf.apply(this, arguments);
        }, e.contactWeld = function (e) {
          for (var t = p; t; t = t === p && 1) {
            if (this[t] instanceof ie) {
              for (var n = "sub"; n; n = "sub" === n && "sup") {
                var r = this[n],
                    i = this[t][n];

                if (r) {
                  if (i) {
                    if (r.isEmpty()) s = m(i, 0, i.ends[p]);else {
                      r.jQ.children().insAtDirEnd(-t, i.jQ);
                      var o = r.children().disown(),
                          s = m(i, o.ends[1], i.ends[p]);
                      t === p ? o.adopt(i, i.ends[1], 0) : o.adopt(i, 0, i.ends[p]);
                    }
                  } else this[t].addBlock(r.disown());

                  this.placeCursor = function (e, n) {
                    return function (r) {
                      r.insAtDirEnd(-t, e || n);
                    };
                  }(i, r);
                }
              }

              this.remove(), e && e[p] === this && (1 === t && s ? s[p] ? e.insRightOf(s[p]) : e.insAtLeftEnd(s.parent) : e.insRightOf(this[t]));
              break;
            }
          }
        }, C.p.charsThatBreakOutOfSupSub = "", e.finalizeTree = function () {
          this.ends[p].write = function (e, t) {
            if (e.options.autoSubscriptNumerals && this === this.parent.sub) {
              if ("_" === t) return;
              var n = this.chToCmd(t, e.options);
              return n instanceof F ? e.deleteSelection() : e.clearSelection().insRightOf(this.parent), n.createLeftOf(e.show());
            }

            e[p] && !e[1] && !e.selection && e.options.charsThatBreakOutOfSupSub.indexOf(t) > -1 && e.insRightOf(this.parent), W.p.write.apply(this, arguments);
          };
        }, e.moveTowards = function (e, t, r) {
          t.options.autoSubscriptNumerals && !this.sup ? t.insDirOf(e, this) : n.moveTowards.apply(this, arguments);
        }, e.deleteTowards = function (e, t) {
          if (t.options.autoSubscriptNumerals && this.sub) {
            var r = this.sub.ends[-e];
            r instanceof F ? r.remove() : r && r.deleteTowards(e, t.insAtDirEnd(-e, this.sub)), this.sub.isEmpty() && (this.sub.deleteOutOf(p, t.insAtLeftEnd(this.sub)), this.sup && t.insDirOf(-e, this));
          } else n.deleteTowards.apply(this, arguments);
        }, e.latex = function () {
          function e(e, t) {
            var n = t && t.latex();
            return t ? e + (1 === n.length ? n : "{" + (n || " ") + "}") : "";
          }

          return e("_", this.sub) + e("^", this.sup);
        }, e.addBlock = function (e) {
          "sub" === this.supsub ? (this.sup = this.upInto = this.sub.upOutOf = e, e.adopt(this, this.sub, 0).downOutOf = this.sub, e.jQ = d('<span class="mq-sup"/>').append(e.jQ.children()).attr(t, e.id).prependTo(this.jQ)) : (this.sub = this.downInto = this.sup.downOutOf = e, e.adopt(this, 0, this.sup).upOutOf = this.sup, e.jQ = d('<span class="mq-sub"></span>').append(e.jQ.children()).attr(t, e.id).appendTo(this.jQ.removeClass("mq-sup-only")), this.jQ.append('<span style="display:inline-block;width:0">&#8203;</span>'));

          for (var n = 0; n < 2; n += 1) {
            !function (e, t, n, r) {
              e[t].deleteOutOf = function (i, o) {
                if (o.insDirOf(this[i] ? -i : i, this.parent), !this.isEmpty()) {
                  var s = this.ends[i];
                  this.children().disown().withDirAdopt(i, o.parent, o[i], o[-i]).jQ.insDirOf(-i, o.jQ), o[-i] = s;
                }

                e.supsub = n, delete e[t], delete e[r + "Into"], e[n][r + "OutOf"] = oe, delete e[n].deleteOutOf, "sub" === t && d(e.jQ.addClass("mq-sup-only")[0].lastChild).remove(), this.remove();
              };
            }(this, "sub sup".split(" ")[n], "sup sub".split(" ")[n], "down up".split(" ")[n]);
          }
        }, e.reflow = function () {
          var e = this.jQ,
              t = e.prev();

          if (t.length) {
            var n = e.children(".mq-sup");

            if (n.length) {
              var r = parseInt(n.css("font-size")),
                  i = n.offset().top + n.height() - t.offset().top - .7 * r,
                  o = parseInt(n.css("margin-bottom"));
              n.css("margin-bottom", o + i);
            }
          }
        };
      });

      function oe(e) {
        var t = this.parent,
            n = e;

        do {
          if (n[1]) return e.insLeftOf(t);
          n = n.parent.parent;
        } while (n !== t);

        e.insRightOf(t);
      }

      y.subscript = y._ = f(ie, function (e, t) {
        e.supsub = "sub", e.htmlTemplate = '<span class="mq-supsub mq-non-leaf"><span class="mq-sub">&0</span><span style="display:inline-block;width:0">&#8203;</span></span>', e.textTemplate = ["_"], e.finalizeTree = function () {
          this.downInto = this.sub = this.ends[p], this.sub.upOutOf = oe, t.finalizeTree.call(this);
        };
      }), y.superscript = y.supscript = y["^"] = f(ie, function (e, t) {
        e.supsub = "sup", e.htmlTemplate = '<span class="mq-supsub mq-non-leaf mq-sup-only"><span class="mq-sup">&0</span></span>', e.textTemplate = ["^"], e.finalizeTree = function () {
          this.upInto = this.sup = this.ends[1], this.sup.downOutOf = oe, t.finalizeTree.call(this);
        };
      });
      var se = f(H, function (e, t) {
        e.init = function (e, t) {
          var n = '<span class="mq-large-operator mq-non-leaf"><span class="mq-to"><span>&1</span></span><big>' + t + '</big><span class="mq-from"><span>&0</span></span></span>';
          F.prototype.init.call(this, e, n);
        }, e.createLeftOf = function (e) {
          t.createLeftOf.apply(this, arguments), e.options.sumStartsWithNEquals && (xe("n").createLeftOf(e), Le().createLeftOf(e));
        }, e.latex = function () {
          function e(e) {
            return 1 === e.length ? e : "{" + (e || " ") + "}";
          }

          return this.ctrlSeq + "_" + e(this.ends[p].latex()) + "^" + e(this.ends[1].latex());
        }, e.parser = function () {
          for (var e = I.string, t = I.optWhitespace, n = I.succeed, r = z.block, i = this, o = i.blocks = [W(), W()], s = 0; s < o.length; s += 1) {
            o[s].adopt(i, i.ends[1], 0);
          }

          return t.then(e("_").or(e("^"))).then(function (e) {
            var t = o["_" === e ? 0 : 1];
            return r.then(function (e) {
              return e.children().adopt(t, t.ends[1], 0), n(i);
            });
          }).many().result(i);
        }, e.finalizeTree = function () {
          this.downInto = this.ends[p], this.upInto = this.ends[1], this.ends[p].upOutOf = this.ends[1], this.ends[1].downOutOf = this.ends[p];
        };
      });
      y["∑"] = y.sum = y.summation = c(se, "\\sum ", "&sum;"), y["∏"] = y.prod = y.product = c(se, "\\prod ", "&prod;"), y.coprod = y.coproduct = c(se, "\\coprod ", "&#8720;"), y["∫"] = y["int"] = y.integral = f(se, function (e, t) {
        e.init = function () {
          F.prototype.init.call(this, "\\int ", '<span class="mq-int mq-non-leaf"><big>&int;</big><span class="mq-supsub mq-non-leaf"><span class="mq-sup"><span class="mq-sup-inner">&1</span></span><span class="mq-sub">&0</span><span style="display:inline-block;width:0">&#8203</span></span></span>');
        }, e.createLeftOf = H.p.createLeftOf;
      });
      var ae = y.frac = y.dfrac = y.cfrac = y.fraction = f(H, function (e, t) {
        e.ctrlSeq = "\\frac", e.htmlTemplate = '<span class="mq-fraction mq-non-leaf"><span class="mq-numerator">&0</span><span class="mq-denominator">&1</span><span style="display:inline-block;width:0">&#8203;</span></span>', e.textTemplate = ["(", ")/(", ")"], e.finalizeTree = function () {
          this.upInto = this.ends[1].upOutOf = this.ends[p], this.downInto = this.ends[p].downOutOf = this.ends[1];
        };
      }),
          le = y.over = x["/"] = f(ae, function (e, t) {
        e.createLeftOf = function (e) {
          if (!this.replacedFragment) {
            for (var n = e[p]; n && !(n instanceof $ || n instanceof (y.text || i) || n instanceof se || "\\ " === n.ctrlSeq || /^[,;:]$/.test(n.ctrlSeq));) {
              n = n[p];
            }

            n instanceof se && n[1] instanceof ie && (n = n[1])[1] instanceof ie && n[1].ctrlSeq != n.ctrlSeq && (n = n[1]), n === e[p] || e.isTooDeep(1) || (this.replaces(b(n[1] || e.parent.ends[p], e[p])), e[p] = n);
          }

          t.createLeftOf.call(this, e);
        };
      }),
          ce = y.sqrt = y["√"] = f(H, function (e, t) {
        e.ctrlSeq = "\\sqrt", e.htmlTemplate = '<span class="mq-non-leaf"><span class="mq-scaled mq-sqrt-prefix">&radic;</span><span class="mq-non-leaf mq-sqrt-stem">&0</span></span>', e.textTemplate = ["sqrt(", ")"], e.parser = function () {
          return z.optBlock.then(function (e) {
            return z.block.map(function (t) {
              var n = ue();
              return n.blocks = [e, t], e.adopt(n, 0, 0), t.adopt(n, e, 0), n;
            });
          }).or(t.parser.call(this));
        }, e.reflow = function () {
          var e = this.ends[1].jQ;
          Z(e.prev(), 1, e.innerHeight() / +e.css("fontSize").slice(0, -2) - .1);
        };
      }),
          ue = (y.hat = f(H, function (e, t) {
        e.ctrlSeq = "\\hat", e.htmlTemplate = '<span class="mq-non-leaf"><span class="mq-hat-prefix">^</span><span class="mq-hat-stem">&0</span></span>', e.textTemplate = ["hat(", ")"];
      }), y.nthroot = f(ce, function (e, t) {
        e.htmlTemplate = '<sup class="mq-nthroot mq-non-leaf">&0</sup><span class="mq-scaled"><span class="mq-sqrt-prefix mq-scaled">&radic;</span><span class="mq-sqrt-stem mq-non-leaf">&1</span></span>', e.textTemplate = ["sqrt[", "](", ")"], e.latex = function () {
          return "\\sqrt[" + this.ends[p].latex() + "]{" + this.ends[1].latex() + "}";
        };
      })),
          fe = f(H, function (e, t) {
        e.init = function (e, n, r) {
          var i = '<span class="mq-non-leaf"><span class="mq-diacritic-above">' + n + '</span><span class="mq-diacritic-stem">&0</span></span>';
          t.init.call(this, e, i, r);
        };
      });

      function pe(e, t) {
        e.jQadd = function () {
          t.jQadd.apply(this, arguments), this.delimjQs = this.jQ.children(":first").add(this.jQ.children(":last")), this.contentjQ = this.jQ.children(":eq(1)");
        }, e.reflow = function () {
          var e = this.contentjQ.outerHeight() / parseFloat(this.contentjQ.css("fontSize"));
          Z(this.delimjQs, n(1 + .2 * (e - 1), 1.2), 1.2 * e);
        };
      }

      y.vec = c(fe, "\\vec", "&rarr;", ["vec(", ")"]), y.tilde = c(fe, "\\tilde", "~", ["tilde(", ")"]);
      var he = f(f(H, pe), function (e, t) {
        e.init = function (e, n, r, i, o) {
          t.init.call(this, "\\left" + i, void 0, [n, r]), this.side = e, this.sides = {}, this.sides[p] = {
            ch: n,
            ctrlSeq: i
          }, this.sides[1] = {
            ch: r,
            ctrlSeq: o
          };
        }, e.numBlocks = function () {
          return 1;
        }, e.html = function () {
          return this.htmlTemplate = '<span class="mq-non-leaf"><span class="mq-scaled mq-paren' + (1 === this.side ? " mq-ghost" : "") + '">' + this.sides[p].ch + '</span><span class="mq-non-leaf">&0</span><span class="mq-scaled mq-paren' + (this.side === p ? " mq-ghost" : "") + '">' + this.sides[1].ch + "</span></span>", t.html.call(this);
        }, e.latex = function () {
          return "\\left" + this.sides[p].ctrlSeq + this.ends[p].latex() + "\\right" + this.sides[1].ctrlSeq;
        }, e.matchBrack = function (e, t, n) {
          return n instanceof he && n.side && n.side !== -t && (!e.restrictMismatchedBrackets || de[this.sides[this.side].ch] === n.sides[n.side].ch || {
            "(": "]",
            "[": ")"
          }[this.sides[p].ch] === n.sides[1].ch) && n;
        }, e.closeOpposing = function (e) {
          e.side = 0, e.sides[this.side] = this.sides[this.side], e.delimjQs.eq(this.side === p ? 0 : 1).removeClass("mq-ghost").html(this.sides[this.side].ch);
        }, e.createLeftOf = function (e) {
          if (!this.replacedFragment) {
            var n = e.options;
            if ("|" === this.sides[p].ch) var r = this.matchBrack(n, 1, e[1]) || this.matchBrack(n, p, e[p]) || this.matchBrack(n, 0, e.parent.parent);else r = this.matchBrack(n, -this.side, e[-this.side]) || this.matchBrack(n, -this.side, e.parent.parent);
          }

          if (r) {
            var i = this.side = -r.side;
            this.closeOpposing(r), r === e.parent.parent && e[i] && b(e[i], e.parent.ends[i], -i).disown().withDirAdopt(-i, r.parent, r, r[i]).jQ.insDirOf(i, r.jQ), r.bubble("reflow");
          } else i = (r = this).side, r.replacedFragment ? r.side = 0 : e[-i] && (r.replaces(b(e[-i], e.parent.ends[-i], i)), e[-i] = 0), t.createLeftOf.call(r, e);

          i === p ? e.insAtLeftEnd(r.ends[p]) : e.insRightOf(r);
        }, e.placeCursor = i, e.unwrap = function () {
          this.ends[p].children().disown().adopt(this.parent, this, this[1]).jQ.insertAfter(this.jQ), this.remove();
        }, e.deleteSide = function (e, t, n) {
          var r = this.parent,
              i = this[e],
              o = r.ends[e];
          if (e === this.side) return this.unwrap(), void (i ? n.insDirOf(-e, i) : n.insAtDirEnd(e, r));
          var s = n.options,
              a = !this.side;

          if (this.side = -e, this.matchBrack(s, e, this.ends[p].ends[this.side])) {
            this.closeOpposing(this.ends[p].ends[this.side]);
            var l = this.ends[p].ends[e];
            this.unwrap(), l.siblingCreated && l.siblingCreated(n.options, e), i ? n.insDirOf(-e, i) : n.insAtDirEnd(e, r);
          } else {
            if (this.matchBrack(s, e, this.parent.parent)) this.parent.parent.closeOpposing(this), this.parent.parent.unwrap();else {
              if (t && a) return this.unwrap(), void (i ? n.insDirOf(-e, i) : n.insAtDirEnd(e, r));
              this.sides[e] = {
                ch: de[this.sides[this.side].ch],
                ctrlSeq: de[this.sides[this.side].ctrlSeq]
              }, this.delimjQs.removeClass("mq-ghost").eq(e === p ? 0 : 1).addClass("mq-ghost").html(this.sides[e].ch);
            }

            if (i) {
              l = this.ends[p].ends[e];
              b(i, o, -e).disown().withDirAdopt(-e, this.ends[p], l, 0).jQ.insAtDirEnd(e, this.ends[p].jQ.removeClass("mq-empty")), l.siblingCreated && l.siblingCreated(n.options, e), n.insDirOf(-e, i);
            } else t ? n.insDirOf(e, this) : n.insAtDirEnd(e, this.ends[p]);
          }
        }, e.deleteTowards = function (e, t) {
          this.deleteSide(-e, !1, t);
        }, e.finalizeTree = function () {
          this.ends[p].deleteOutOf = function (e, t) {
            this.parent.deleteSide(e, !0, t);
          }, this.finalizeTree = this.intentionalBlur = function () {
            this.delimjQs.eq(this.side === p ? 1 : 0).removeClass("mq-ghost"), this.side = 0;
          };
        }, e.siblingCreated = function (e, t) {
          t === -this.side && this.finalizeTree();
        };
      }),
          de = {
        "(": ")",
        ")": "(",
        "[": "]",
        "]": "[",
        "{": "}",
        "}": "{",
        "\\{": "\\}",
        "\\}": "\\{",
        "&lang;": "&rang;",
        "&rang;": "&lang;",
        "\\langle ": "\\rangle ",
        "\\rangle ": "\\langle ",
        "|": "|",
        "\\lVert ": "\\rVert ",
        "\\rVert ": "\\lVert "
      };

      function me(e, t) {
        t = t || e;
        var n = de[e],
            r = de[t];
        x[e] = c(he, p, e, n, t, r), x[n] = c(he, 1, e, n, t, r);
      }

      me("("), me("["), me("{", "\\{"), y.langle = c(he, p, "&lang;", "&rang;", "\\langle ", "\\rangle "), y.rangle = c(he, 1, "&lang;", "&rang;", "\\langle ", "\\rangle "), x["|"] = c(he, p, "|", "|", "|", "|"), y.lVert = c(he, p, "&#8741;", "&#8741;", "\\lVert ", "\\rVert "), y.rVert = c(he, 1, "&#8741;", "&#8741;", "\\lVert ", "\\rVert "), y.left = f(H, function (e) {
        e.parser = function () {
          var e = I.regex,
              t = I.string,
              n = (I.succeed, I.optWhitespace);
          return n.then(e(/^(?:[([|]|\\\{|\\langle(?![a-zA-Z])|\\lVert(?![a-zA-Z]))/)).then(function (r) {
            var i = "\\" === r.charAt(0) ? r.slice(1) : r;
            return "\\langle" == r && (i = "&lang;", r += " "), "\\lVert" == r && (i = "&#8741;", r += " "), z.then(function (o) {
              return t("\\right").skip(n).then(e(/^(?:[\])|]|\\\}|\\rangle(?![a-zA-Z])|\\rVert(?![a-zA-Z]))/)).map(function (e) {
                var t = "\\" === e.charAt(0) ? e.slice(1) : e;
                "\\rangle" == e && (t = "&rang;", e += " "), "\\rVert" == e && (t = "&#8741;", e += " ");
                var n = he(0, i, t, r, e);
                return n.blocks = [o], o.adopt(n, 0, 0), n;
              });
            });
          });
        };
      }), y.right = f(H, function (e) {
        e.parser = function () {
          return I.fail("unmatched \\right");
        };
      });
      var ge = y.binom = y.binomial = f(f(H, pe), function (e, t) {
        e.ctrlSeq = "\\binom", e.htmlTemplate = '<span class="mq-non-leaf"><span class="mq-paren mq-scaled">(</span><span class="mq-non-leaf"><span class="mq-array mq-non-leaf"><span>&0</span><span>&1</span></span></span><span class="mq-paren mq-scaled">)</span></span>', e.textTemplate = ["choose(", ",", ")"];
      });
      y.choose = f(ge, function (e) {
        e.createLeftOf = le.prototype.createLeftOf;
      });
      y.editable = y.MathQuillMathField = f(H, function (e, t) {
        e.ctrlSeq = "\\MathQuillMathField", e.htmlTemplate = '<span class="mq-editable-field"><span class="mq-root-block">&0</span></span>', e.parser = function () {
          var e = this,
              n = I.string,
              r = I.regex,
              i = I.succeed;
          return n("[").then(r(/^[a-z][a-z0-9]*/i)).skip(n("]")).map(function (t) {
            e.name = t;
          }).or(i()).then(t.parser.call(e));
        }, e.finalizeTree = function (e) {
          var t = T(this.ends[p], this.jQ, e);
          t.KIND_OF_MQ = "MathField", t.editable = !0, t.createTextarea(), t.editablesTextareaEvents(), t.cursor.insAtRightEnd(t.root), Q(t.root);
        }, e.registerInnerField = function (e, t) {
          e.push(e[this.name] = t(this.ends[p].controller));
        }, e.latex = function () {
          return this.ends[p].latex();
        }, e.text = function () {
          return this.ends[p].text();
        };
      });
      var ve = y.embed = f(F, function (e, t) {
        e.setOptions = function (e) {
          function t() {
            return "";
          }

          return this.text = e.text || t, this.htmlTemplate = e.htmlString || "", this.latex = e.latex || t, this;
        }, e.parser = function () {
          var e = this,
              t = I.string,
              n = I.regex,
              r = I.succeed;
          return t("{").then(n(/^[a-z][a-z0-9]*/i)).skip(t("}")).then(function (i) {
            return t("[").then(n(/^[-\w\s]*/)).skip(t("]")).or(r()).map(function (t) {
              return e.setOptions(S[i](t));
            });
          });
        };
      });
      y.notin = y.cong = y.equiv = y.oplus = y.otimes = f($, function (e, t) {
        e.init = function (e) {
          t.init.call(this, "\\" + e + " ", "&" + e + ";");
        };
      }), y["≠"] = y.ne = y.neq = c($, "\\ne ", "&ne;"), y["∗"] = y.ast = y.star = y.loast = y.lowast = c($, "\\ast ", "&lowast;"), y.therefor = y.therefore = c($, "\\therefore ", "&there4;"), y.cuz = y.because = c($, "\\because ", "&#8757;"), y.prop = y.propto = c($, "\\propto ", "&prop;"), y["≈"] = y.asymp = y.approx = c($, "\\approx ", "&asymp;"), y.isin = y["in"] = c($, "\\in ", "&isin;"), y.ni = y.contains = c($, "\\ni ", "&ni;"), y.notni = y.niton = y.notcontains = y.doesnotcontain = c($, "\\not\\ni ", "&#8716;"), y.sub = y.subset = c($, "\\subset ", "&sub;"), y.sup = y.supset = y.superset = c($, "\\supset ", "&sup;"), y.nsub = y.notsub = y.nsubset = y.notsubset = c($, "\\not\\subset ", "&#8836;"), y.nsup = y.notsup = y.nsupset = y.notsupset = y.nsuperset = y.notsuperset = c($, "\\not\\supset ", "&#8837;"), y.sube = y.subeq = y.subsete = y.subseteq = c($, "\\subseteq ", "&sube;"), y.supe = y.supeq = y.supsete = y.supseteq = y.supersete = y.superseteq = c($, "\\supseteq ", "&supe;"), y.nsube = y.nsubeq = y.notsube = y.notsubeq = y.nsubsete = y.nsubseteq = y.notsubsete = y.notsubseteq = c($, "\\not\\subseteq ", "&#8840;"), y.nsupe = y.nsupeq = y.notsupe = y.notsupeq = y.nsupsete = y.nsupseteq = y.notsupsete = y.notsupseteq = y.nsupersete = y.nsuperseteq = y.notsupersete = y.notsuperseteq = c($, "\\not\\supseteq ", "&#8841;"), y.N = y.naturals = y.Naturals = c(B, "\\mathbb{N}", "&#8469;"), y.P = y.primes = y.Primes = y.projective = y.Projective = y.probability = y.Probability = c(B, "\\mathbb{P}", "&#8473;"), y.Z = y.integers = y.Integers = c(B, "\\mathbb{Z}", "&#8484;"), y.Q = y.rationals = y.Rationals = c(B, "\\mathbb{Q}", "&#8474;"), y.R = y.reals = y.Reals = c(B, "\\mathbb{R}", "&#8477;"), y.C = y.complex = y.Complex = y.complexes = y.Complexes = y.complexplane = y.Complexplane = y.ComplexPlane = c(B, "\\mathbb{C}", "&#8450;"), y.H = y.Hamiltonian = y.quaternions = y.Quaternions = c(B, "\\mathbb{H}", "&#8461;"), y.quad = y.emsp = c(B, "\\quad ", "    "), y.qquad = c(B, "\\qquad ", "        "), y.diamond = c(B, "\\diamond ", "&#9671;"), y.bigtriangleup = c(B, "\\bigtriangleup ", "&#9651;"), y.ominus = c(B, "\\ominus ", "&#8854;"), y.uplus = c(B, "\\uplus ", "&#8846;"), y.bigtriangledown = c(B, "\\bigtriangledown ", "&#9661;"), y.sqcap = c(B, "\\sqcap ", "&#8851;"), y.triangleleft = c(B, "\\triangleleft ", "&#8882;"), y.sqcup = c(B, "\\sqcup ", "&#8852;"), y.triangleright = c(B, "\\triangleright ", "&#8883;"), y.odot = y.circledot = c(B, "\\odot ", "&#8857;"), y.bigcirc = c(B, "\\bigcirc ", "&#9711;"), y.dagger = c(B, "\\dagger ", "&#0134;"), y.ddagger = c(B, "\\ddagger ", "&#135;"), y.wr = c(B, "\\wr ", "&#8768;"), y.amalg = c(B, "\\amalg ", "&#8720;"), y.models = c(B, "\\models ", "&#8872;"), y.prec = c(B, "\\prec ", "&#8826;"), y.succ = c(B, "\\succ ", "&#8827;"), y.preceq = c(B, "\\preceq ", "&#8828;"), y.succeq = c(B, "\\succeq ", "&#8829;"), y.simeq = c(B, "\\simeq ", "&#8771;"), y.mid = c(B, "\\mid ", "&#8739;"), y.ll = c(B, "\\ll ", "&#8810;"), y.gg = c(B, "\\gg ", "&#8811;"), y.parallel = c(B, "\\parallel ", "&#8741;"), y.nparallel = c(B, "\\nparallel ", "&#8742;"), y.bowtie = c(B, "\\bowtie ", "&#8904;"), y.sqsubset = c(B, "\\sqsubset ", "&#8847;"), y.sqsupset = c(B, "\\sqsupset ", "&#8848;"), y.smile = c(B, "\\smile ", "&#8995;"), y.sqsubseteq = c(B, "\\sqsubseteq ", "&#8849;"), y.sqsupseteq = c(B, "\\sqsupseteq ", "&#8850;"), y.doteq = c(B, "\\doteq ", "&#8784;"), y.frown = c(B, "\\frown ", "&#8994;"), y.vdash = c(B, "\\vdash ", "&#8870;"), y.dashv = c(B, "\\dashv ", "&#8867;"), y.nless = c(B, "\\nless ", "&#8814;"), y.ngtr = c(B, "\\ngtr ", "&#8815;"), y.longleftarrow = c(B, "\\longleftarrow ", "&#8592;"), y.longrightarrow = c(B, "\\longrightarrow ", "&#8594;"), y.Longleftarrow = c(B, "\\Longleftarrow ", "&#8656;"), y.Longrightarrow = c(B, "\\Longrightarrow ", "&#8658;"), y.longleftrightarrow = c(B, "\\longleftrightarrow ", "&#8596;"), y.updownarrow = c(B, "\\updownarrow ", "&#8597;"), y.Longleftrightarrow = c(B, "\\Longleftrightarrow ", "&#8660;"), y.Updownarrow = c(B, "\\Updownarrow ", "&#8661;"), y.mapsto = c(B, "\\mapsto ", "&#8614;"), y.nearrow = c(B, "\\nearrow ", "&#8599;"), y.hookleftarrow = c(B, "\\hookleftarrow ", "&#8617;"), y.hookrightarrow = c(B, "\\hookrightarrow ", "&#8618;"), y.searrow = c(B, "\\searrow ", "&#8600;"), y.leftharpoonup = c(B, "\\leftharpoonup ", "&#8636;"), y.rightharpoonup = c(B, "\\rightharpoonup ", "&#8640;"), y.swarrow = c(B, "\\swarrow ", "&#8601;"), y.leftharpoondown = c(B, "\\leftharpoondown ", "&#8637;"), y.rightharpoondown = c(B, "\\rightharpoondown ", "&#8641;"), y.nwarrow = c(B, "\\nwarrow ", "&#8598;"), y.ldots = c(B, "\\ldots ", "&#8230;"), y.cdots = c(B, "\\cdots ", "&#8943;"), y.vdots = c(B, "\\vdots ", "&#8942;"), y.ddots = c(B, "\\ddots ", "&#8945;"), y.surd = c(B, "\\surd ", "&#8730;"), y.triangle = c(B, "\\triangle ", "&#9651;"), y.ell = c(B, "\\ell ", "&#8467;"), y.top = c(B, "\\top ", "&#8868;"), y.flat = c(B, "\\flat ", "&#9837;"), y.natural = c(B, "\\natural ", "&#9838;"), y.sharp = c(B, "\\sharp ", "&#9839;"), y.wp = c(B, "\\wp ", "&#8472;"), y.bot = c(B, "\\bot ", "&#8869;"), y.clubsuit = c(B, "\\clubsuit ", "&#9827;"), y.diamondsuit = c(B, "\\diamondsuit ", "&#9826;"), y.heartsuit = c(B, "\\heartsuit ", "&#9825;"), y.spadesuit = c(B, "\\spadesuit ", "&#9824;"), y.parallelogram = c(B, "\\parallelogram ", "&#9649;"), y.square = c(B, "\\square ", "&#11036;"), y.oint = c(B, "\\oint ", "&#8750;"), y.bigcap = c(B, "\\bigcap ", "&#8745;"), y.bigcup = c(B, "\\bigcup ", "&#8746;"), y.bigsqcup = c(B, "\\bigsqcup ", "&#8852;"), y.bigvee = c(B, "\\bigvee ", "&#8744;"), y.bigwedge = c(B, "\\bigwedge ", "&#8743;"), y.bigodot = c(B, "\\bigodot ", "&#8857;"), y.bigotimes = c(B, "\\bigotimes ", "&#8855;"), y.bigoplus = c(B, "\\bigoplus ", "&#8853;"), y.biguplus = c(B, "\\biguplus ", "&#8846;"), y.lfloor = c(B, "\\lfloor ", "&#8970;"), y.rfloor = c(B, "\\rfloor ", "&#8971;"), y.lceil = c(B, "\\lceil ", "&#8968;"), y.rceil = c(B, "\\rceil ", "&#8969;"), y.opencurlybrace = y.lbrace = c(B, "\\lbrace ", "{"), y.closecurlybrace = y.rbrace = c(B, "\\rbrace ", "}"), y.lbrack = c(B, "["), y.rbrack = c(B, "]"), y.slash = c(B, "/"), y.vert = c(B, "|"), y.perp = y.perpendicular = c(B, "\\perp ", "&perp;"), y.nabla = y.del = c(B, "\\nabla ", "&nabla;"), y.hbar = c(B, "\\hbar ", "&#8463;"), y.AA = y.Angstrom = y.angstrom = c(B, "\\text\\AA ", "&#8491;"), y.ring = y.circ = y.circle = c(B, "\\circ ", "&#8728;"), y.bull = y.bullet = c(B, "\\bullet ", "&bull;"), y.setminus = y.smallsetminus = c(B, "\\setminus ", "&#8726;"), y.not = y["¬"] = y.neg = c(B, "\\neg ", "&not;"), y["…"] = y.dots = y.ellip = y.hellip = y.ellipsis = y.hellipsis = c(B, "\\dots ", "&hellip;"), y.converges = y.darr = y.dnarr = y.dnarrow = y.downarrow = c(B, "\\downarrow ", "&darr;"), y.dArr = y.dnArr = y.dnArrow = y.Downarrow = c(B, "\\Downarrow ", "&dArr;"), y.diverges = y.uarr = y.uparrow = c(B, "\\uparrow ", "&uarr;"), y.uArr = y.Uparrow = c(B, "\\Uparrow ", "&uArr;"), y.to = c($, "\\to ", "&rarr;"), y.rarr = y.rightarrow = c(B, "\\rightarrow ", "&rarr;"), y.implies = c($, "\\Rightarrow ", "&rArr;"), y.rArr = y.Rightarrow = c(B, "\\Rightarrow ", "&rArr;"), y.gets = c($, "\\gets ", "&larr;"), y.larr = y.leftarrow = c(B, "\\leftarrow ", "&larr;"), y.impliedby = c($, "\\Leftarrow ", "&lArr;"), y.lArr = y.Leftarrow = c(B, "\\Leftarrow ", "&lArr;"), y.harr = y.lrarr = y.leftrightarrow = c(B, "\\leftrightarrow ", "&harr;"), y.iff = c($, "\\Leftrightarrow ", "&hArr;"), y.hArr = y.lrArr = y.Leftrightarrow = c(B, "\\Leftrightarrow ", "&hArr;"), y.Re = y.Real = y.real = c(B, "\\Re ", "&real;"), y.Im = y.imag = y.image = y.imagin = y.imaginary = y.Imaginary = c(B, "\\Im ", "&image;"), y.part = y.partial = c(B, "\\partial ", "&part;"), y.infty = y.infin = y.infinity = c(B, "\\infty ", "&infin;"), y.pounds = c(B, "\\pounds ", "&pound;"), y.alef = y.alefsym = y.aleph = y.alephsym = c(B, "\\aleph ", "&alefsym;"), y.xist = y.xists = y.exist = y.exists = c(B, "\\exists ", "&exist;"), y.nexists = y.nexist = c(B, "\\nexists ", "&#8708;"), y.and = y.land = y.wedge = c($, "\\wedge ", "&and;"), y.or = y.lor = y.vee = c($, "\\vee ", "&or;"), y.o = y.O = y.empty = y.emptyset = y.oslash = y.Oslash = y.nothing = y.varnothing = c($, "\\varnothing ", "&empty;"), y.cup = y.union = c($, "\\cup ", "&cup;"), y.cap = y.intersect = y.intersection = c($, "\\cap ", "&cap;"), y.deg = y.degree = c(B, "\\degree ", "&deg;"), y.ang = y.angle = c(B, "\\angle ", "&ang;"), y.measuredangle = c(B, "\\measuredangle ", "&#8737;");
      var be = f(B, function (e, t) {
        e.createLeftOf = function (e) {
          e.options.autoSubscriptNumerals && e.parent !== e.parent.parent.sub && (e[p] instanceof ye && !1 !== e[p].isItalic || e[p] instanceof ie && e[p][p] instanceof ye && !1 !== e[p][p].isItalic) ? (y._().createLeftOf(e), t.createLeftOf.call(this, e), e.insRightOf(e.parent.parent)) : t.createLeftOf.call(this, e);
        };
      }),
          ye = f(F, function (e, t) {
        e.init = function (e, n) {
          t.init.call(this, e, "<var>" + (n || e) + "</var>");
        }, e.text = function () {
          var e = this.ctrlSeq;
          return this.isPartOfOperator ? "\\" == e[0] ? e = e.slice(1, e.length) : " " == e[e.length - 1] && (e = e.slice(0, -1)) : (!this[p] || this[p] instanceof ye || this[p] instanceof $ || "\\ " === this[p].ctrlSeq || (e = "*" + e), !this[1] || this[1] instanceof $ || this[1] instanceof ie || (e += "*")), e;
        };
      });
      C.p.autoCommands = {
        _maxLength: 0
      }, O.autoCommands = function (e) {
        if (!/^[a-z]+(?: [a-z]+)*$/i.test(e)) throw '"' + e + '" not a space-delimited list of only letters';

        for (var t = e.split(" "), n = {}, i = 0, o = 0; o < t.length; o += 1) {
          var s = t[o];
          if (s.length < 2) throw 'autocommand "' + s + '" not minimum length of 2';
          if (y[s] === ke) throw '"' + s + '" is a built-in operator name';
          n[s] = 1, i = r(i, s.length);
        }

        return n._maxLength = i, n;
      };
      var xe = f(ye, function (e, t) {
        function r(e) {
          return !e || e instanceof $ || e instanceof se;
        }

        e.init = function (e) {
          return t.init.call(this, this.letter = e);
        }, e.createLeftOf = function (e) {
          t.createLeftOf.apply(this, arguments);
          var n = e.options.autoCommands,
              r = n._maxLength;

          if (r > 0) {
            for (var i = "", o = this, s = 0; o instanceof xe && o.ctrlSeq === o.letter && s < r;) {
              i = o.letter + i, o = o[p], s += 1;
            }

            for (; i.length;) {
              if (n.hasOwnProperty(i)) {
                for (s = 1, o = this; s < i.length; s += 1, o = o[p]) {
                  ;
                }

                return b(o, this).remove(), e[p] = o[p], y[i](i).createLeftOf(e);
              }

              i = i.slice(1);
            }
          }
        }, e.italicize = function (e) {
          return this.isItalic = e, this.isPartOfOperator = !e, this.jQ.toggleClass("mq-operator-name", !e), this;
        }, e.finalizeTree = e.siblingDeleted = e.siblingCreated = function (e, t) {
          t !== p && this[1] instanceof xe || this.autoUnItalicize(e);
        }, e.autoUnItalicize = function (e) {
          var t = e.autoOperatorNames;

          if (0 !== t._maxLength) {
            for (var i = this.letter, o = this[p]; o instanceof xe; o = o[p]) {
              i = o.letter + i;
            }

            for (var s = this[1]; s instanceof xe; s = s[1]) {
              i += s.letter;
            }

            b(o[1] || this.parent.ends[p], s[p] || this.parent.ends[1]).each(function (e) {
              e.italicize(!0).jQ.removeClass("mq-first mq-last mq-followed-by-supsub"), e.ctrlSeq = e.letter;
            });

            e: for (var a = 0, l = o[1] || this.parent.ends[p]; a < i.length; a += 1, l = l[1]) {
              for (var c = n(t._maxLength, i.length - a); c > 0; c -= 1) {
                var u = i.slice(a, a + c);

                if (t.hasOwnProperty(u)) {
                  for (var f = 0, h = l; f < c; f += 1, h = h[1]) {
                    h.italicize(!1);
                    var d = h;
                  }

                  var m = qe.hasOwnProperty(u);
                  if (l.ctrlSeq = (m ? "\\" : "\\operatorname{") + l.ctrlSeq, d.ctrlSeq += m ? " " : "}", Te.hasOwnProperty(u) && d[p][p][p].jQ.addClass("mq-last"), r(l[p]) || l.jQ.addClass("mq-first"), !r(d[1])) if (d[1] instanceof ie) {
                    var g = d[1];
                    (g.siblingCreated = g.siblingDeleted = function () {
                      g.jQ.toggleClass("mq-after-operator-name", !(g[1] instanceof he));
                    })();
                  } else d.jQ.toggleClass("mq-last", !(d[1] instanceof he));
                  a += c - 1, l = d;
                  continue e;
                }
              }
            }
          }
        };
      }),
          qe = {},
          we = C.p.autoOperatorNames = {
        _maxLength: 9
      },
          Te = {
        limsup: 1,
        liminf: 1,
        projlim: 1,
        injlim: 1
      };
      !function () {
        for (var e = "arg deg det dim exp gcd hom inf ker lg lim ln log max min sup limsup liminf injlim projlim Pr".split(" "), t = 0; t < e.length; t += 1) {
          qe[e[t]] = we[e[t]] = 1;
        }

        var n = "sin cos tan arcsin arccos arctan sinh cosh tanh sec csc cot coth".split(" ");

        for (t = 0; t < n.length; t += 1) {
          qe[n[t]] = 1;
        }

        var r = "sin cos tan sec cosec csc cotan cot ctg".split(" ");

        for (t = 0; t < r.length; t += 1) {
          we[r[t]] = we["arc" + r[t]] = we[r[t] + "h"] = we["ar" + r[t] + "h"] = we["arc" + r[t] + "h"] = 1;
        }

        var i = "gcf hcf lcm proj span".split(" ");

        for (t = 0; t < i.length; t += 1) {
          we[i[t]] = 1;
        }
      }(), O.autoOperatorNames = function (e) {
        if (!/^[a-z]+(?: [a-z]+)*$/i.test(e)) throw '"' + e + '" not a space-delimited list of only letters';

        for (var t = e.split(" "), n = {}, i = 0, o = 0; o < t.length; o += 1) {
          var s = t[o];
          if (s.length < 2) throw '"' + s + '" not minimum length of 2';
          n[s] = 1, i = r(i, s.length);
        }

        return n._maxLength = i, n;
      };
      var ke = f(F, function (e, t) {
        e.init = function (e) {
          this.ctrlSeq = e;
        }, e.createLeftOf = function (e) {
          for (var t = this.ctrlSeq, n = 0; n < t.length; n += 1) {
            xe(t.charAt(n)).createLeftOf(e);
          }
        }, e.parser = function () {
          for (var e = this.ctrlSeq, t = W(), n = 0; n < e.length; n += 1) {
            xe(e.charAt(n)).adopt(t, t.ends[1], 0);
          }

          return I.succeed(t.children());
        };
      });

      for (var Ce in we) {
        we.hasOwnProperty(Ce) && (y[Ce] = ke);
      }

      y.operatorname = f(H, function (e) {
        e.createLeftOf = i, e.numBlocks = function () {
          return 1;
        }, e.parser = function () {
          return z.block.map(function (e) {
            return e.children();
          });
        };
      }), y.f = f(xe, function (e, t) {
        e.init = function () {
          F.p.init.call(this, this.letter = "f", '<var class="mq-f">f</var>');
        }, e.italicize = function (e) {
          return this.jQ.html("f").toggleClass("mq-f", e), t.italicize.apply(this, arguments);
        };
      }), y[" "] = y.space = c(B, "\\ ", "&nbsp;"), y["'"] = y.prime = c(B, "'", "&prime;"), y["″"] = y.dprime = c(B, "″", "&Prime;"), y.backslash = c(B, "\\backslash ", "\\"), x["\\"] || (x["\\"] = y.backslash), y.$ = c(B, "\\$", "$");
      var Oe = f(F, function (e, t) {
        e.init = function (e, n) {
          t.init.call(this, e, '<span class="mq-nonSymbola">' + (n || e) + "</span>");
        };
      });
      y["@"] = Oe, y["&"] = c(Oe, "\\&", "&amp;"), y["%"] = c(Oe, "\\%", "%"), y.alpha = y.beta = y.gamma = y.delta = y.zeta = y.eta = y.theta = y.iota = y.kappa = y.mu = y.nu = y.xi = y.rho = y.sigma = y.tau = y.chi = y.psi = y.omega = f(ye, function (e, t) {
        e.init = function (e) {
          t.init.call(this, "\\" + e + " ", "&" + e + ";");
        };
      }), y.phi = c(ye, "\\phi ", "&#981;"), y.phiv = y.varphi = c(ye, "\\varphi ", "&phi;"), y.epsilon = c(ye, "\\epsilon ", "&#1013;"), y.epsiv = y.varepsilon = c(ye, "\\varepsilon ", "&epsilon;"), y.piv = y.varpi = c(ye, "\\varpi ", "&piv;"), y.sigmaf = y.sigmav = y.varsigma = c(ye, "\\varsigma ", "&sigmaf;"), y.thetav = y.vartheta = y.thetasym = c(ye, "\\vartheta ", "&thetasym;"), y.upsilon = y.upsi = c(ye, "\\upsilon ", "&upsilon;"), y.gammad = y.Gammad = y.digamma = c(ye, "\\digamma ", "&#989;"), y.kappav = y.varkappa = c(ye, "\\varkappa ", "&#1008;"), y.rhov = y.varrho = c(ye, "\\varrho ", "&#1009;"), y.pi = y["π"] = c(Oe, "\\pi ", "&pi;"), y.lambda = c(Oe, "\\lambda ", "&lambda;"), y.Upsilon = y.Upsi = y.upsih = y.Upsih = c(F, "\\Upsilon ", '<var style="font-family: serif">&upsih;</var>'), y.Gamma = y.Delta = y.Theta = y.Lambda = y.Xi = y.Pi = y.Sigma = y.Phi = y.Psi = y.Omega = y.forall = f(B, function (e, t) {
        e.init = function (e) {
          t.init.call(this, "\\" + e + " ", "&" + e + ";");
        };
      });
      var je = f(H, function (e) {
        e.init = function (e) {
          this.latex = e;
        }, e.createLeftOf = function (e) {
          var t = z.parse(this.latex);
          t.children().adopt(e.parent, e[p], e[1]), e[p] = t.ends[1], t.jQize().insertBefore(e.jQ), t.finalizeInsert(e.options, e), t.ends[1][1].siblingCreated && t.ends[1][1].siblingCreated(e.options, p), t.ends[p][p].siblingCreated && t.ends[p][p].siblingCreated(e.options, 1), e.parent.bubble("reflow");
        }, e.parser = function () {
          var e = z.parse(this.latex).children();
          return I.succeed(e);
        };
      });
      y["¹"] = c(je, "^1"), y["²"] = c(je, "^2"), y["³"] = c(je, "^3"), y["¼"] = c(je, "\\frac14"), y["½"] = c(je, "\\frac12"), y["¾"] = c(je, "\\frac34");
      var Se = f($, function (e) {
        e.init = B.prototype.init, e.contactWeld = e.siblingCreated = e.siblingDeleted = function (e, t) {
          if (1 !== t) return this.jQ[0].className = function e(t) {
            return t[p] ? t[p] instanceof $ || /^[,;:\(\[]$/.test(t[p].ctrlSeq) ? "" : "mq-binary-operator" : t.parent && t.parent.parent && t.parent.parent.isStyleBlock() ? e(t.parent.parent) : "";
          }(this), this;
        };
      });
      y["+"] = c(Se, "+", "+"), y["–"] = y["-"] = c(Se, "-", "&minus;"), y["±"] = y.pm = y.plusmn = y.plusminus = c(Se, "\\pm ", "&plusmn;"), y.mp = y.mnplus = y.minusplus = c(Se, "\\mp ", "&#8723;"), x["*"] = y.sdot = y.cdot = c($, "\\cdot ", "&middot;", "*");
      var De = f($, function (e, t) {
        e.init = function (e, n) {
          this.data = e, this.strict = n;
          var r = n ? "Strict" : "";
          t.init.call(this, e["ctrlSeq" + r], e["html" + r], e["text" + r]);
        }, e.swap = function (e) {
          this.strict = e;
          var t = e ? "Strict" : "";
          this.ctrlSeq = this.data["ctrlSeq" + t], this.jQ.html(this.data["html" + t]), this.textTemplate = [this.data["text" + t]];
        }, e.deleteTowards = function (e, n) {
          if (e === p && !this.strict) return this.swap(!0), void this.bubble("reflow");
          t.deleteTowards.apply(this, arguments);
        };
      }),
          Ee = {
        ctrlSeq: "\\le ",
        html: "&le;",
        text: "≤",
        ctrlSeqStrict: "<",
        htmlStrict: "&lt;",
        textStrict: "<"
      },
          Ae = {
        ctrlSeq: "\\ge ",
        html: "&ge;",
        text: "≥",
        ctrlSeqStrict: ">",
        htmlStrict: "&gt;",
        textStrict: ">"
      };
      y["<"] = y.lt = c(De, Ee, !0), y[">"] = y.gt = c(De, Ae, !0), y["≤"] = y.le = y.leq = c(De, Ee, !1), y["≥"] = y.ge = y.geq = c(De, Ae, !1);
      var Le = f($, function (e, t) {
        e.init = function () {
          t.init.call(this, "=", "=");
        }, e.createLeftOf = function (e) {
          if (e[p] instanceof De && e[p].strict) return e[p].swap(!1), void e[p].bubble("reflow");
          t.createLeftOf.apply(this, arguments);
        };
      });
      y["="] = Le, y["×"] = y.times = c($, "\\times ", "&times;", "[x]"), y["÷"] = y.div = y.divide = y.divides = c($, "\\div ", "&divide;", "[/]"), x["~"] = y.sim = c($, "\\sim ", "~", "~");

      var _e = _(1);

      for (var Ne in _e) {
        !function (e, t) {
          "function" == typeof t ? (E[e] = function () {
            return D(), t.apply(this, arguments);
          }, E[e].prototype = t.prototype) : E[e] = t;
        }(Ne, _e[Ne]);
      }
    }(), e.exports = window.MathQuill;
  }, function (e, t, n) {
    var r;
    /*!
     * jQuery JavaScript Library v3.5.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2020-05-04T22:49Z
     */

    !function (t, n) {
      "use strict";

      "object" == _typeof(e.exports) ? e.exports = t.document ? n(t, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return n(e);
      } : n(t);
    }("undefined" != typeof window ? window : this, function (n, i) {
      "use strict";

      var o = [],
          s = Object.getPrototypeOf,
          a = o.slice,
          l = o.flat ? function (e) {
        return o.flat.call(e);
      } : function (e) {
        return o.concat.apply([], e);
      },
          c = o.push,
          u = o.indexOf,
          f = {},
          p = f.toString,
          h = f.hasOwnProperty,
          d = h.toString,
          m = d.call(Object),
          g = {},
          v = function v(e) {
        return "function" == typeof e && "number" != typeof e.nodeType;
      },
          b = function b(e) {
        return null != e && e === e.window;
      },
          y = n.document,
          x = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
      };

      function q(e, t, n) {
        var r,
            i,
            o = (n = n || y).createElement("script");
        if (o.text = e, t) for (r in x) {
          (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        }
        n.head.appendChild(o).parentNode.removeChild(o);
      }

      function w(e) {
        return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? f[p.call(e)] || "object" : _typeof(e);
      }

      var T = function T(e, t) {
        return new T.fn.init(e, t);
      };

      function k(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !v(e) && !b(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
      }

      T.fn = T.prototype = {
        jquery: "3.5.1",
        constructor: T,
        length: 0,
        toArray: function toArray() {
          return a.call(this);
        },
        get: function get(e) {
          return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function pushStack(e) {
          var t = T.merge(this.constructor(), e);
          return t.prevObject = this, t;
        },
        each: function each(e) {
          return T.each(this, e);
        },
        map: function map(e) {
          return this.pushStack(T.map(this, function (t, n) {
            return e.call(t, n, t);
          }));
        },
        slice: function slice() {
          return this.pushStack(a.apply(this, arguments));
        },
        first: function first() {
          return this.eq(0);
        },
        last: function last() {
          return this.eq(-1);
        },
        even: function even() {
          return this.pushStack(T.grep(this, function (e, t) {
            return (t + 1) % 2;
          }));
        },
        odd: function odd() {
          return this.pushStack(T.grep(this, function (e, t) {
            return t % 2;
          }));
        },
        eq: function eq(e) {
          var t = this.length,
              n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function end() {
          return this.prevObject || this.constructor();
        },
        push: c,
        sort: o.sort,
        splice: o.splice
      }, T.extend = T.fn.extend = function () {
        var e,
            t,
            n,
            r,
            i,
            o,
            s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;

        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == _typeof(s) || v(s) || (s = {}), a === l && (s = this, a--); a < l; a++) {
          if (null != (e = arguments[a])) for (t in e) {
            r = e[t], "__proto__" !== t && s !== r && (c && r && (T.isPlainObject(r) || (i = Array.isArray(r))) ? (n = s[t], o = i && !Array.isArray(n) ? [] : i || T.isPlainObject(n) ? n : {}, i = !1, s[t] = T.extend(c, o, r)) : void 0 !== r && (s[t] = r));
          }
        }

        return s;
      }, T.extend({
        expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function error(e) {
          throw new Error(e);
        },
        noop: function noop() {},
        isPlainObject: function isPlainObject(e) {
          var t, n;
          return !(!e || "[object Object]" !== p.call(e)) && (!(t = s(e)) || "function" == typeof (n = h.call(t, "constructor") && t.constructor) && d.call(n) === m);
        },
        isEmptyObject: function isEmptyObject(e) {
          var t;

          for (t in e) {
            return !1;
          }

          return !0;
        },
        globalEval: function globalEval(e, t, n) {
          q(e, {
            nonce: t && t.nonce
          }, n);
        },
        each: function each(e, t) {
          var n,
              r = 0;
          if (k(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) {
            ;
          } else for (r in e) {
            if (!1 === t.call(e[r], r, e[r])) break;
          }
          return e;
        },
        makeArray: function makeArray(e, t) {
          var n = t || [];
          return null != e && (k(Object(e)) ? T.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n;
        },
        inArray: function inArray(e, t, n) {
          return null == t ? -1 : u.call(t, e, n);
        },
        merge: function merge(e, t) {
          for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
            e[i++] = t[r];
          }

          return e.length = i, e;
        },
        grep: function grep(e, t, n) {
          for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) {
            !t(e[i], i) !== s && r.push(e[i]);
          }

          return r;
        },
        map: function map(e, t, n) {
          var r,
              i,
              o = 0,
              s = [];
          if (k(e)) for (r = e.length; o < r; o++) {
            null != (i = t(e[o], o, n)) && s.push(i);
          } else for (o in e) {
            null != (i = t(e[o], o, n)) && s.push(i);
          }
          return l(s);
        },
        guid: 1,
        support: g
      }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = o[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        f["[object " + t + "]"] = t.toLowerCase();
      });

      var C =
      /*!
       * Sizzle CSS Selector Engine v2.3.5
       * https://sizzlejs.com/
       *
       * Copyright JS Foundation and other contributors
       * Released under the MIT license
       * https://js.foundation/
       *
       * Date: 2020-03-14
       */
      function (e) {
        var t,
            n,
            r,
            i,
            o,
            s,
            a,
            l,
            c,
            u,
            f,
            p,
            h,
            d,
            m,
            g,
            v,
            b,
            y,
            x = "sizzle" + 1 * new Date(),
            q = e.document,
            w = 0,
            T = 0,
            k = le(),
            C = le(),
            O = le(),
            j = le(),
            S = function S(e, t) {
          return e === t && (f = !0), 0;
        },
            D = {}.hasOwnProperty,
            E = [],
            A = E.pop,
            L = E.push,
            _ = E.push,
            N = E.slice,
            Q = function Q(e, t) {
          for (var n = 0, r = e.length; n < r; n++) {
            if (e[n] === t) return n;
          }

          return -1;
        },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            z = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            P = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)",
            H = new RegExp(M + "+", "g"),
            F = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            B = new RegExp("^" + M + "*," + M + "*"),
            $ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            W = new RegExp(M + "|>"),
            X = new RegExp(P),
            U = new RegExp("^" + I + "$"),
            V = {
          ID: new RegExp("^#(" + I + ")"),
          CLASS: new RegExp("^\\.(" + I + ")"),
          TAG: new RegExp("^(" + I + "|[*])"),
          ATTR: new RegExp("^" + z),
          PSEUDO: new RegExp("^" + P),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + R + ")$", "i"),
          needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
        },
            G = /HTML$/i,
            Y = /^(?:input|select|textarea|button)$/i,
            K = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function ne(e, t) {
          var n = "0x" + e.slice(1) - 65536;
          return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
        },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function ie(e, t) {
          return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        },
            oe = function oe() {
          p();
        },
            se = xe(function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        }, {
          dir: "parentNode",
          next: "legend"
        });

        try {
          _.apply(E = N.call(q.childNodes), q.childNodes), E[q.childNodes.length].nodeType;
        } catch (e) {
          _ = {
            apply: E.length ? function (e, t) {
              L.apply(e, N.call(t));
            } : function (e, t) {
              for (var n = e.length, r = 0; e[n++] = t[r++];) {
                ;
              }

              e.length = n - 1;
            }
          };
        }

        function ae(e, t, r, i) {
          var o,
              a,
              c,
              u,
              f,
              d,
              v,
              b = t && t.ownerDocument,
              q = t ? t.nodeType : 9;
          if (r = r || [], "string" != typeof e || !e || 1 !== q && 9 !== q && 11 !== q) return r;

          if (!i && (p(t), t = t || h, m)) {
            if (11 !== q && (f = J.exec(e))) if (o = f[1]) {
              if (9 === q) {
                if (!(c = t.getElementById(o))) return r;
                if (c.id === o) return r.push(c), r;
              } else if (b && (c = b.getElementById(o)) && y(t, c) && c.id === o) return r.push(c), r;
            } else {
              if (f[2]) return _.apply(r, t.getElementsByTagName(e)), r;
              if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return _.apply(r, t.getElementsByClassName(o)), r;
            }

            if (n.qsa && !j[e + " "] && (!g || !g.test(e)) && (1 !== q || "object" !== t.nodeName.toLowerCase())) {
              if (v = e, b = t, 1 === q && (W.test(e) || $.test(e))) {
                for ((b = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((u = t.getAttribute("id")) ? u = u.replace(re, ie) : t.setAttribute("id", u = x)), a = (d = s(e)).length; a--;) {
                  d[a] = (u ? "#" + u : ":scope") + " " + ye(d[a]);
                }

                v = d.join(",");
              }

              try {
                return _.apply(r, b.querySelectorAll(v)), r;
              } catch (t) {
                j(e, !0);
              } finally {
                u === x && t.removeAttribute("id");
              }
            }
          }

          return l(e.replace(F, "$1"), t, r, i);
        }

        function le() {
          var e = [];
          return function t(n, i) {
            return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
          };
        }

        function ce(e) {
          return e[x] = !0, e;
        }

        function ue(e) {
          var t = h.createElement("fieldset");

          try {
            return !!e(t);
          } catch (e) {
            return !1;
          } finally {
            t.parentNode && t.parentNode.removeChild(t), t = null;
          }
        }

        function fe(e, t) {
          for (var n = e.split("|"), i = n.length; i--;) {
            r.attrHandle[n[i]] = t;
          }
        }

        function pe(e, t) {
          var n = t && e,
              r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
          if (r) return r;
          if (n) for (; n = n.nextSibling;) {
            if (n === t) return -1;
          }
          return e ? 1 : -1;
        }

        function he(e) {
          return function (t) {
            return "input" === t.nodeName.toLowerCase() && t.type === e;
          };
        }

        function de(e) {
          return function (t) {
            var n = t.nodeName.toLowerCase();
            return ("input" === n || "button" === n) && t.type === e;
          };
        }

        function me(e) {
          return function (t) {
            return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e;
          };
        }

        function ge(e) {
          return ce(function (t) {
            return t = +t, ce(function (n, r) {
              for (var i, o = e([], n.length, t), s = o.length; s--;) {
                n[i = o[s]] && (n[i] = !(r[i] = n[i]));
              }
            });
          });
        }

        function ve(e) {
          return e && void 0 !== e.getElementsByTagName && e;
        }

        for (t in n = ae.support = {}, o = ae.isXML = function (e) {
          var t = e.namespaceURI,
              n = (e.ownerDocument || e).documentElement;
          return !G.test(t || n && n.nodeName || "HTML");
        }, p = ae.setDocument = function (e) {
          var t,
              i,
              s = e ? e.ownerDocument || e : q;
          return s != h && 9 === s.nodeType && s.documentElement ? (d = (h = s).documentElement, m = !o(h), q != h && (i = h.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), n.scope = ue(function (e) {
            return d.appendChild(e).appendChild(h.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
          }), n.attributes = ue(function (e) {
            return e.className = "i", !e.getAttribute("className");
          }), n.getElementsByTagName = ue(function (e) {
            return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length;
          }), n.getElementsByClassName = Z.test(h.getElementsByClassName), n.getById = ue(function (e) {
            return d.appendChild(e).id = x, !h.getElementsByName || !h.getElementsByName(x).length;
          }), n.getById ? (r.filter.ID = function (e) {
            var t = e.replace(te, ne);
            return function (e) {
              return e.getAttribute("id") === t;
            };
          }, r.find.ID = function (e, t) {
            if (void 0 !== t.getElementById && m) {
              var n = t.getElementById(e);
              return n ? [n] : [];
            }
          }) : (r.filter.ID = function (e) {
            var t = e.replace(te, ne);
            return function (e) {
              var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
              return n && n.value === t;
            };
          }, r.find.ID = function (e, t) {
            if (void 0 !== t.getElementById && m) {
              var n,
                  r,
                  i,
                  o = t.getElementById(e);

              if (o) {
                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];

                for (i = t.getElementsByName(e), r = 0; o = i[r++];) {
                  if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                }
              }

              return [];
            }
          }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
          } : function (e, t) {
            var n,
                r = [],
                i = 0,
                o = t.getElementsByTagName(e);

            if ("*" === e) {
              for (; n = o[i++];) {
                1 === n.nodeType && r.push(n);
              }

              return r;
            }

            return o;
          }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
            if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e);
          }, v = [], g = [], (n.qsa = Z.test(h.querySelectorAll)) && (ue(function (e) {
            var t;
            d.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + x + "-]").length || g.push("~="), (t = h.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || g.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || g.push(".#.+[+~]"), e.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]");
          }), ue(function (e) {
            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
            var t = h.createElement("input");
            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), d.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:");
          })), (n.matchesSelector = Z.test(b = d.matches || d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ue(function (e) {
            n.disconnectedMatch = b.call(e, "*"), b.call(e, "[s!='']:x"), v.push("!=", P);
          }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = Z.test(d.compareDocumentPosition), y = t || Z.test(d.contains) ? function (e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e,
                r = t && t.parentNode;
            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
          } : function (e, t) {
            if (t) for (; t = t.parentNode;) {
              if (t === e) return !0;
            }
            return !1;
          }, S = t ? function (e, t) {
            if (e === t) return f = !0, 0;
            var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == h || e.ownerDocument == q && y(q, e) ? -1 : t == h || t.ownerDocument == q && y(q, t) ? 1 : u ? Q(u, e) - Q(u, t) : 0 : 4 & r ? -1 : 1);
          } : function (e, t) {
            if (e === t) return f = !0, 0;
            var n,
                r = 0,
                i = e.parentNode,
                o = t.parentNode,
                s = [e],
                a = [t];
            if (!i || !o) return e == h ? -1 : t == h ? 1 : i ? -1 : o ? 1 : u ? Q(u, e) - Q(u, t) : 0;
            if (i === o) return pe(e, t);

            for (n = e; n = n.parentNode;) {
              s.unshift(n);
            }

            for (n = t; n = n.parentNode;) {
              a.unshift(n);
            }

            for (; s[r] === a[r];) {
              r++;
            }

            return r ? pe(s[r], a[r]) : s[r] == q ? -1 : a[r] == q ? 1 : 0;
          }, h) : h;
        }, ae.matches = function (e, t) {
          return ae(e, null, null, t);
        }, ae.matchesSelector = function (e, t) {
          if (p(e), n.matchesSelector && m && !j[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
            var r = b.call(e, t);
            if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
          } catch (e) {
            j(t, !0);
          }
          return ae(t, h, null, [e]).length > 0;
        }, ae.contains = function (e, t) {
          return (e.ownerDocument || e) != h && p(e), y(e, t);
        }, ae.attr = function (e, t) {
          (e.ownerDocument || e) != h && p(e);
          var i = r.attrHandle[t.toLowerCase()],
              o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !m) : void 0;
          return void 0 !== o ? o : n.attributes || !m ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
        }, ae.escape = function (e) {
          return (e + "").replace(re, ie);
        }, ae.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e);
        }, ae.uniqueSort = function (e) {
          var t,
              r = [],
              i = 0,
              o = 0;

          if (f = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(S), f) {
            for (; t = e[o++];) {
              t === e[o] && (i = r.push(o));
            }

            for (; i--;) {
              e.splice(r[i], 1);
            }
          }

          return u = null, e;
        }, i = ae.getText = function (e) {
          var t,
              n = "",
              r = 0,
              o = e.nodeType;

          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ("string" == typeof e.textContent) return e.textContent;

              for (e = e.firstChild; e; e = e.nextSibling) {
                n += i(e);
              }
            } else if (3 === o || 4 === o) return e.nodeValue;
          } else for (; t = e[r++];) {
            n += i(t);
          }

          return n;
        }, (r = ae.selectors = {
          cacheLength: 50,
          createPseudo: ce,
          match: V,
          attrHandle: {},
          find: {},
          relative: {
            ">": {
              dir: "parentNode",
              first: !0
            },
            " ": {
              dir: "parentNode"
            },
            "+": {
              dir: "previousSibling",
              first: !0
            },
            "~": {
              dir: "previousSibling"
            }
          },
          preFilter: {
            ATTR: function ATTR(e) {
              return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
            },
            CHILD: function CHILD(e) {
              return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e;
            },
            PSEUDO: function PSEUDO(e) {
              var t,
                  n = !e[6] && e[2];
              return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
            }
          },
          filter: {
            TAG: function TAG(e) {
              var t = e.replace(te, ne).toLowerCase();
              return "*" === e ? function () {
                return !0;
              } : function (e) {
                return e.nodeName && e.nodeName.toLowerCase() === t;
              };
            },
            CLASS: function CLASS(e) {
              var t = k[e + " "];
              return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && k(e, function (e) {
                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
              });
            },
            ATTR: function ATTR(e, t, n) {
              return function (r) {
                var i = ae.attr(r, e);
                return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(H, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
              };
            },
            CHILD: function CHILD(e, t, n, r, i) {
              var o = "nth" !== e.slice(0, 3),
                  s = "last" !== e.slice(-4),
                  a = "of-type" === t;
              return 1 === r && 0 === i ? function (e) {
                return !!e.parentNode;
              } : function (t, n, l) {
                var c,
                    u,
                    f,
                    p,
                    h,
                    d,
                    m = o !== s ? "nextSibling" : "previousSibling",
                    g = t.parentNode,
                    v = a && t.nodeName.toLowerCase(),
                    b = !l && !a,
                    y = !1;

                if (g) {
                  if (o) {
                    for (; m;) {
                      for (p = t; p = p[m];) {
                        if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                      }

                      d = m = "only" === e && !d && "nextSibling";
                    }

                    return !0;
                  }

                  if (d = [s ? g.firstChild : g.lastChild], s && b) {
                    for (y = (h = (c = (u = (f = (p = g)[x] || (p[x] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === w && c[1]) && c[2], p = h && g.childNodes[h]; p = ++h && p && p[m] || (y = h = 0) || d.pop();) {
                      if (1 === p.nodeType && ++y && p === t) {
                        u[e] = [w, h, y];
                        break;
                      }
                    }
                  } else if (b && (y = h = (c = (u = (f = (p = t)[x] || (p[x] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === w && c[1]), !1 === y) for (; (p = ++h && p && p[m] || (y = h = 0) || d.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++y || (b && ((u = (f = p[x] || (p[x] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [w, y]), p !== t));) {
                    ;
                  }

                  return (y -= i) === r || y % r == 0 && y / r >= 0;
                }
              };
            },
            PSEUDO: function PSEUDO(e, t) {
              var n,
                  i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
              return i[x] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ce(function (e, n) {
                for (var r, o = i(e, t), s = o.length; s--;) {
                  e[r = Q(e, o[s])] = !(n[r] = o[s]);
                }
              }) : function (e) {
                return i(e, 0, n);
              }) : i;
            }
          },
          pseudos: {
            not: ce(function (e) {
              var t = [],
                  n = [],
                  r = a(e.replace(F, "$1"));
              return r[x] ? ce(function (e, t, n, i) {
                for (var o, s = r(e, null, i, []), a = e.length; a--;) {
                  (o = s[a]) && (e[a] = !(t[a] = o));
                }
              }) : function (e, i, o) {
                return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
              };
            }),
            has: ce(function (e) {
              return function (t) {
                return ae(e, t).length > 0;
              };
            }),
            contains: ce(function (e) {
              return e = e.replace(te, ne), function (t) {
                return (t.textContent || i(t)).indexOf(e) > -1;
              };
            }),
            lang: ce(function (e) {
              return U.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), function (t) {
                var n;

                do {
                  if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                } while ((t = t.parentNode) && 1 === t.nodeType);

                return !1;
              };
            }),
            target: function target(t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function root(e) {
              return e === d;
            },
            focus: function focus(e) {
              return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
            },
            enabled: me(!1),
            disabled: me(!0),
            checked: function checked(e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && !!e.checked || "option" === t && !!e.selected;
            },
            selected: function selected(e) {
              return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
            },
            empty: function empty(e) {
              for (e = e.firstChild; e; e = e.nextSibling) {
                if (e.nodeType < 6) return !1;
              }

              return !0;
            },
            parent: function parent(e) {
              return !r.pseudos.empty(e);
            },
            header: function header(e) {
              return K.test(e.nodeName);
            },
            input: function input(e) {
              return Y.test(e.nodeName);
            },
            button: function button(e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && "button" === e.type || "button" === t;
            },
            text: function text(e) {
              var t;
              return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
            },
            first: ge(function () {
              return [0];
            }),
            last: ge(function (e, t) {
              return [t - 1];
            }),
            eq: ge(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: ge(function (e, t) {
              for (var n = 0; n < t; n += 2) {
                e.push(n);
              }

              return e;
            }),
            odd: ge(function (e, t) {
              for (var n = 1; n < t; n += 2) {
                e.push(n);
              }

              return e;
            }),
            lt: ge(function (e, t, n) {
              for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) {
                e.push(r);
              }

              return e;
            }),
            gt: ge(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; ++r < t;) {
                e.push(r);
              }

              return e;
            })
          }
        }).pseudos.nth = r.pseudos.eq, {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) {
          r.pseudos[t] = he(t);
        }

        for (t in {
          submit: !0,
          reset: !0
        }) {
          r.pseudos[t] = de(t);
        }

        function be() {}

        function ye(e) {
          for (var t = 0, n = e.length, r = ""; t < n; t++) {
            r += e[t].value;
          }

          return r;
        }

        function xe(e, t, n) {
          var r = t.dir,
              i = t.next,
              o = i || r,
              s = n && "parentNode" === o,
              a = T++;
          return t.first ? function (t, n, i) {
            for (; t = t[r];) {
              if (1 === t.nodeType || s) return e(t, n, i);
            }

            return !1;
          } : function (t, n, l) {
            var c,
                u,
                f,
                p = [w, a];

            if (l) {
              for (; t = t[r];) {
                if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
              }
            } else for (; t = t[r];) {
              if (1 === t.nodeType || s) if (u = (f = t[x] || (t[x] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;else {
                if ((c = u[o]) && c[0] === w && c[1] === a) return p[2] = c[2];
                if (u[o] = p, p[2] = e(t, n, l)) return !0;
              }
            }

            return !1;
          };
        }

        function qe(e) {
          return e.length > 1 ? function (t, n, r) {
            for (var i = e.length; i--;) {
              if (!e[i](t, n, r)) return !1;
            }

            return !0;
          } : e[0];
        }

        function we(e, t, n, r, i) {
          for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++) {
            (o = e[a]) && (n && !n(o, r, i) || (s.push(o), c && t.push(a)));
          }

          return s;
        }

        function Te(e, t, n, r, i, o) {
          return r && !r[x] && (r = Te(r)), i && !i[x] && (i = Te(i, o)), ce(function (o, s, a, l) {
            var c,
                u,
                f,
                p = [],
                h = [],
                d = s.length,
                m = o || function (e, t, n) {
              for (var r = 0, i = t.length; r < i; r++) {
                ae(e, t[r], n);
              }

              return n;
            }(t || "*", a.nodeType ? [a] : a, []),
                g = !e || !o && t ? m : we(m, p, e, a, l),
                v = n ? i || (o ? e : d || r) ? [] : s : g;

            if (n && n(g, v, a, l), r) for (c = we(v, h), r(c, [], a, l), u = c.length; u--;) {
              (f = c[u]) && (v[h[u]] = !(g[h[u]] = f));
            }

            if (o) {
              if (i || e) {
                if (i) {
                  for (c = [], u = v.length; u--;) {
                    (f = v[u]) && c.push(g[u] = f);
                  }

                  i(null, v = [], c, l);
                }

                for (u = v.length; u--;) {
                  (f = v[u]) && (c = i ? Q(o, f) : p[u]) > -1 && (o[c] = !(s[c] = f));
                }
              }
            } else v = we(v === s ? v.splice(d, v.length) : v), i ? i(null, s, v, l) : _.apply(s, v);
          });
        }

        function ke(e) {
          for (var t, n, i, o = e.length, s = r.relative[e[0].type], a = s || r.relative[" "], l = s ? 1 : 0, u = xe(function (e) {
            return e === t;
          }, a, !0), f = xe(function (e) {
            return Q(t, e) > -1;
          }, a, !0), p = [function (e, n, r) {
            var i = !s && (r || n !== c) || ((t = n).nodeType ? u(e, n, r) : f(e, n, r));
            return t = null, i;
          }]; l < o; l++) {
            if (n = r.relative[e[l].type]) p = [xe(qe(p), n)];else {
              if ((n = r.filter[e[l].type].apply(null, e[l].matches))[x]) {
                for (i = ++l; i < o && !r.relative[e[i].type]; i++) {
                  ;
                }

                return Te(l > 1 && qe(p), l > 1 && ye(e.slice(0, l - 1).concat({
                  value: " " === e[l - 2].type ? "*" : ""
                })).replace(F, "$1"), n, l < i && ke(e.slice(l, i)), i < o && ke(e = e.slice(i)), i < o && ye(e));
              }

              p.push(n);
            }
          }

          return qe(p);
        }

        return be.prototype = r.filters = r.pseudos, r.setFilters = new be(), s = ae.tokenize = function (e, t) {
          var n,
              i,
              o,
              s,
              a,
              l,
              c,
              u = C[e + " "];
          if (u) return t ? 0 : u.slice(0);

          for (a = e, l = [], c = r.preFilter; a;) {
            for (s in n && !(i = B.exec(a)) || (i && (a = a.slice(i[0].length) || a), l.push(o = [])), n = !1, (i = $.exec(a)) && (n = i.shift(), o.push({
              value: n,
              type: i[0].replace(F, " ")
            }), a = a.slice(n.length)), r.filter) {
              !(i = V[s].exec(a)) || c[s] && !(i = c[s](i)) || (n = i.shift(), o.push({
                value: n,
                type: s,
                matches: i
              }), a = a.slice(n.length));
            }

            if (!n) break;
          }

          return t ? a.length : a ? ae.error(e) : C(e, l).slice(0);
        }, a = ae.compile = function (e, t) {
          var n,
              i = [],
              o = [],
              a = O[e + " "];

          if (!a) {
            for (t || (t = s(e)), n = t.length; n--;) {
              (a = ke(t[n]))[x] ? i.push(a) : o.push(a);
            }

            (a = O(e, function (e, t) {
              var n = t.length > 0,
                  i = e.length > 0,
                  o = function o(_o, s, a, l, u) {
                var f,
                    d,
                    g,
                    v = 0,
                    b = "0",
                    y = _o && [],
                    x = [],
                    q = c,
                    T = _o || i && r.find.TAG("*", u),
                    k = w += null == q ? 1 : Math.random() || .1,
                    C = T.length;

                for (u && (c = s == h || s || u); b !== C && null != (f = T[b]); b++) {
                  if (i && f) {
                    for (d = 0, s || f.ownerDocument == h || (p(f), a = !m); g = e[d++];) {
                      if (g(f, s || h, a)) {
                        l.push(f);
                        break;
                      }
                    }

                    u && (w = k);
                  }

                  n && ((f = !g && f) && v--, _o && y.push(f));
                }

                if (v += b, n && b !== v) {
                  for (d = 0; g = t[d++];) {
                    g(y, x, s, a);
                  }

                  if (_o) {
                    if (v > 0) for (; b--;) {
                      y[b] || x[b] || (x[b] = A.call(l));
                    }
                    x = we(x);
                  }

                  _.apply(l, x), u && !_o && x.length > 0 && v + t.length > 1 && ae.uniqueSort(l);
                }

                return u && (w = k, c = q), y;
              };

              return n ? ce(o) : o;
            }(o, i))).selector = e;
          }

          return a;
        }, l = ae.select = function (e, t, n, i) {
          var o,
              l,
              c,
              u,
              f,
              p = "function" == typeof e && e,
              h = !i && s(e = p.selector || e);

          if (n = n || [], 1 === h.length) {
            if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && m && r.relative[l[1].type]) {
              if (!(t = (r.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
              p && (t = t.parentNode), e = e.slice(l.shift().value.length);
            }

            for (o = V.needsContext.test(e) ? 0 : l.length; o-- && (c = l[o], !r.relative[u = c.type]);) {
              if ((f = r.find[u]) && (i = f(c.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                if (l.splice(o, 1), !(e = i.length && ye(l))) return _.apply(n, i), n;
                break;
              }
            }
          }

          return (p || a(e, h))(i, t, !m, n, !t || ee.test(e) && ve(t.parentNode) || t), n;
        }, n.sortStable = x.split("").sort(S).join("") === x, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) {
          return 1 & e.compareDocumentPosition(h.createElement("fieldset"));
        }), ue(function (e) {
          return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), n.attributes && ue(function (e) {
          return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }), ue(function (e) {
          return null == e.getAttribute("disabled");
        }) || fe(R, function (e, t, n) {
          var r;
          if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }), ae;
      }(n);

      T.find = C, T.expr = C.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = C.uniqueSort, T.text = C.getText, T.isXMLDoc = C.isXML, T.contains = C.contains, T.escapeSelector = C.escape;

      var O = function O(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
          if (1 === e.nodeType) {
            if (i && T(e).is(n)) break;
            r.push(e);
          }
        }

        return r;
      },
          j = function j(e, t) {
        for (var n = []; e; e = e.nextSibling) {
          1 === e.nodeType && e !== t && n.push(e);
        }

        return n;
      },
          S = T.expr.match.needsContext;

      function D(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }

      var E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

      function A(e, t, n) {
        return v(t) ? T.grep(e, function (e, r) {
          return !!t.call(e, r, e) !== n;
        }) : t.nodeType ? T.grep(e, function (e) {
          return e === t !== n;
        }) : "string" != typeof t ? T.grep(e, function (e) {
          return u.call(t, e) > -1 !== n;
        }) : T.filter(t, e, n);
      }

      T.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? T.find.matchesSelector(r, e) ? [r] : [] : T.find.matches(e, T.grep(t, function (e) {
          return 1 === e.nodeType;
        }));
      }, T.fn.extend({
        find: function find(e) {
          var t,
              n,
              r = this.length,
              i = this;
          if ("string" != typeof e) return this.pushStack(T(e).filter(function () {
            for (t = 0; t < r; t++) {
              if (T.contains(i[t], this)) return !0;
            }
          }));

          for (n = this.pushStack([]), t = 0; t < r; t++) {
            T.find(e, i[t], n);
          }

          return r > 1 ? T.uniqueSort(n) : n;
        },
        filter: function filter(e) {
          return this.pushStack(A(this, e || [], !1));
        },
        not: function not(e) {
          return this.pushStack(A(this, e || [], !0));
        },
        is: function is(e) {
          return !!A(this, "string" == typeof e && S.test(e) ? T(e) : e || [], !1).length;
        }
      });
      var L,
          _ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      (T.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;

        if (n = n || L, "string" == typeof e) {
          if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : _.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

          if (r[1]) {
            if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : y, !0)), E.test(r[1]) && T.isPlainObject(t)) for (r in t) {
              v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            }
            return this;
          }

          return (i = y.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
        }

        return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : T.makeArray(e, this);
      }).prototype = T.fn, L = T(y);
      var N = /^(?:parents|prev(?:Until|All))/,
          Q = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };

      function R(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) {
          ;
        }

        return e;
      }

      T.fn.extend({
        has: function has(e) {
          var t = T(e, this),
              n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) {
              if (T.contains(this, t[e])) return !0;
            }
          });
        },
        closest: function closest(e, t) {
          var n,
              r = 0,
              i = this.length,
              o = [],
              s = "string" != typeof e && T(e);
          if (!S.test(e)) for (; r < i; r++) {
            for (n = this[r]; n && n !== t; n = n.parentNode) {
              if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
                o.push(n);
                break;
              }
            }
          }
          return this.pushStack(o.length > 1 ? T.uniqueSort(o) : o);
        },
        index: function index(e) {
          return e ? "string" == typeof e ? u.call(T(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function add(e, t) {
          return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
        },
        addBack: function addBack(e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
      }), T.each({
        parent: function parent(e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function parents(e) {
          return O(e, "parentNode");
        },
        parentsUntil: function parentsUntil(e, t, n) {
          return O(e, "parentNode", n);
        },
        next: function next(e) {
          return R(e, "nextSibling");
        },
        prev: function prev(e) {
          return R(e, "previousSibling");
        },
        nextAll: function nextAll(e) {
          return O(e, "nextSibling");
        },
        prevAll: function prevAll(e) {
          return O(e, "previousSibling");
        },
        nextUntil: function nextUntil(e, t, n) {
          return O(e, "nextSibling", n);
        },
        prevUntil: function prevUntil(e, t, n) {
          return O(e, "previousSibling", n);
        },
        siblings: function siblings(e) {
          return j((e.parentNode || {}).firstChild, e);
        },
        children: function children(e) {
          return j(e.firstChild);
        },
        contents: function contents(e) {
          return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (D(e, "template") && (e = e.content || e), T.merge([], e.childNodes));
        }
      }, function (e, t) {
        T.fn[e] = function (n, r) {
          var i = T.map(this, t, n);
          return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = T.filter(r, i)), this.length > 1 && (Q[e] || T.uniqueSort(i), N.test(e) && i.reverse()), this.pushStack(i);
        };
      });
      var M = /[^\x20\t\r\n\f]+/g;

      function I(e) {
        return e;
      }

      function z(e) {
        throw e;
      }

      function P(e, t, n, r) {
        var i;

        try {
          e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }

      T.Callbacks = function (e) {
        e = "string" == typeof e ? function (e) {
          var t = {};
          return T.each(e.match(M) || [], function (e, n) {
            t[n] = !0;
          }), t;
        }(e) : T.extend({}, e);

        var t,
            n,
            r,
            i,
            o = [],
            s = [],
            a = -1,
            l = function l() {
          for (i = i || e.once, r = t = !0; s.length; a = -1) {
            for (n = s.shift(); ++a < o.length;) {
              !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length, n = !1);
            }
          }

          e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
        },
            c = {
          add: function add() {
            return o && (n && !t && (a = o.length - 1, s.push(n)), function t(n) {
              T.each(n, function (n, r) {
                v(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && "string" !== w(r) && t(r);
              });
            }(arguments), n && !t && l()), this;
          },
          remove: function remove() {
            return T.each(arguments, function (e, t) {
              for (var n; (n = T.inArray(t, o, n)) > -1;) {
                o.splice(n, 1), n <= a && a--;
              }
            }), this;
          },
          has: function has(e) {
            return e ? T.inArray(e, o) > -1 : o.length > 0;
          },
          empty: function empty() {
            return o && (o = []), this;
          },
          disable: function disable() {
            return i = s = [], o = n = "", this;
          },
          disabled: function disabled() {
            return !o;
          },
          lock: function lock() {
            return i = s = [], n || t || (o = n = ""), this;
          },
          locked: function locked() {
            return !!i;
          },
          fireWith: function fireWith(e, n) {
            return i || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this;
          },
          fire: function fire() {
            return c.fireWith(this, arguments), this;
          },
          fired: function fired() {
            return !!r;
          }
        };

        return c;
      }, T.extend({
        Deferred: function Deferred(e) {
          var t = [["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2], ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]],
              r = "pending",
              i = {
            state: function state() {
              return r;
            },
            always: function always() {
              return o.done(arguments).fail(arguments), this;
            },
            "catch": function _catch(e) {
              return i.then(null, e);
            },
            pipe: function pipe() {
              var e = arguments;
              return T.Deferred(function (n) {
                T.each(t, function (t, r) {
                  var i = v(e[r[4]]) && e[r[4]];
                  o[r[1]](function () {
                    var e = i && i.apply(this, arguments);
                    e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments);
                  });
                }), e = null;
              }).promise();
            },
            then: function then(e, r, i) {
              var o = 0;

              function s(e, t, r, i) {
                return function () {
                  var a = this,
                      l = arguments,
                      c = function c() {
                    var n, c;

                    if (!(e < o)) {
                      if ((n = r.apply(a, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                      c = n && ("object" == _typeof(n) || "function" == typeof n) && n.then, v(c) ? i ? c.call(n, s(o, t, I, i), s(o, t, z, i)) : (o++, c.call(n, s(o, t, I, i), s(o, t, z, i), s(o, t, I, t.notifyWith))) : (r !== I && (a = void 0, l = [n]), (i || t.resolveWith)(a, l));
                    }
                  },
                      u = i ? c : function () {
                    try {
                      c();
                    } catch (n) {
                      T.Deferred.exceptionHook && T.Deferred.exceptionHook(n, u.stackTrace), e + 1 >= o && (r !== z && (a = void 0, l = [n]), t.rejectWith(a, l));
                    }
                  };

                  e ? u() : (T.Deferred.getStackHook && (u.stackTrace = T.Deferred.getStackHook()), n.setTimeout(u));
                };
              }

              return T.Deferred(function (n) {
                t[0][3].add(s(0, n, v(i) ? i : I, n.notifyWith)), t[1][3].add(s(0, n, v(e) ? e : I)), t[2][3].add(s(0, n, v(r) ? r : z));
              }).promise();
            },
            promise: function promise(e) {
              return null != e ? T.extend(e, i) : i;
            }
          },
              o = {};
          return T.each(t, function (e, n) {
            var s = n[2],
                a = n[5];
            i[n[1]] = s.add, a && s.add(function () {
              r = a;
            }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), s.add(n[3].fire), o[n[0]] = function () {
              return o[n[0] + "With"](this === o ? void 0 : this, arguments), this;
            }, o[n[0] + "With"] = s.fireWith;
          }), i.promise(o), e && e.call(o, o), o;
        },
        when: function when(e) {
          var t = arguments.length,
              n = t,
              r = Array(n),
              i = a.call(arguments),
              o = T.Deferred(),
              s = function s(e) {
            return function (n) {
              r[e] = this, i[e] = arguments.length > 1 ? a.call(arguments) : n, --t || o.resolveWith(r, i);
            };
          };

          if (t <= 1 && (P(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || v(i[n] && i[n].then))) return o.then();

          for (; n--;) {
            P(i[n], s(n), o.reject);
          }

          return o.promise();
        }
      });
      var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      T.Deferred.exceptionHook = function (e, t) {
        n.console && n.console.warn && e && H.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }, T.readyException = function (e) {
        n.setTimeout(function () {
          throw e;
        });
      };
      var F = T.Deferred();

      function B() {
        y.removeEventListener("DOMContentLoaded", B), n.removeEventListener("load", B), T.ready();
      }

      T.fn.ready = function (e) {
        return F.then(e)["catch"](function (e) {
          T.readyException(e);
        }), this;
      }, T.extend({
        isReady: !1,
        readyWait: 1,
        ready: function ready(e) {
          (!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0, !0 !== e && --T.readyWait > 0 || F.resolveWith(y, [T]));
        }
      }), T.ready.then = F.then, "complete" === y.readyState || "loading" !== y.readyState && !y.documentElement.doScroll ? n.setTimeout(T.ready) : (y.addEventListener("DOMContentLoaded", B), n.addEventListener("load", B));

      var $ = function $(e, t, n, r, i, o, s) {
        var a = 0,
            l = e.length,
            c = null == n;
        if ("object" === w(n)) for (a in i = !0, n) {
          $(e, t, a, n[a], !0, o, s);
        } else if (void 0 !== r && (i = !0, v(r) || (s = !0), c && (s ? (t.call(e, r), t = null) : (c = t, t = function t(e, _t2, n) {
          return c.call(T(e), n);
        })), t)) for (; a < l; a++) {
          t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        }
        return i ? e : c ? t.call(e) : l ? t(e[0], n) : o;
      },
          W = /^-ms-/,
          X = /-([a-z])/g;

      function U(e, t) {
        return t.toUpperCase();
      }

      function V(e) {
        return e.replace(W, "ms-").replace(X, U);
      }

      var G = function G(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };

      function Y() {
        this.expando = T.expando + Y.uid++;
      }

      Y.uid = 1, Y.prototype = {
        cache: function cache(e) {
          var t = e[this.expando];
          return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
            value: t,
            configurable: !0
          }))), t;
        },
        set: function set(e, t, n) {
          var r,
              i = this.cache(e);
          if ("string" == typeof t) i[V(t)] = n;else for (r in t) {
            i[V(r)] = t[r];
          }
          return i;
        },
        get: function get(e, t) {
          return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
        },
        access: function access(e, t, n) {
          return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function remove(e, t) {
          var n,
              r = e[this.expando];

          if (void 0 !== r) {
            if (void 0 !== t) {
              n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(M) || []).length;

              for (; n--;) {
                delete r[t[n]];
              }
            }

            (void 0 === t || T.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
          }
        },
        hasData: function hasData(e) {
          var t = e[this.expando];
          return void 0 !== t && !T.isEmptyObject(t);
        }
      };
      var K = new Y(),
          Z = new Y(),
          J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          ee = /[A-Z]/g;

      function te(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
          try {
            n = function (e) {
              return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : J.test(e) ? JSON.parse(e) : e);
            }(n);
          } catch (e) {}

          Z.set(e, t, n);
        } else n = void 0;
        return n;
      }

      T.extend({
        hasData: function hasData(e) {
          return Z.hasData(e) || K.hasData(e);
        },
        data: function data(e, t, n) {
          return Z.access(e, t, n);
        },
        removeData: function removeData(e, t) {
          Z.remove(e, t);
        },
        _data: function _data(e, t, n) {
          return K.access(e, t, n);
        },
        _removeData: function _removeData(e, t) {
          K.remove(e, t);
        }
      }), T.fn.extend({
        data: function data(e, t) {
          var n,
              r,
              i,
              o = this[0],
              s = o && o.attributes;

          if (void 0 === e) {
            if (this.length && (i = Z.get(o), 1 === o.nodeType && !K.get(o, "hasDataAttrs"))) {
              for (n = s.length; n--;) {
                s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = V(r.slice(5)), te(o, r, i[r]));
              }

              K.set(o, "hasDataAttrs", !0);
            }

            return i;
          }

          return "object" == _typeof(e) ? this.each(function () {
            Z.set(this, e);
          }) : $(this, function (t) {
            var n;
            if (o && void 0 === t) return void 0 !== (n = Z.get(o, e)) || void 0 !== (n = te(o, e)) ? n : void 0;
            this.each(function () {
              Z.set(this, e, t);
            });
          }, null, t, arguments.length > 1, null, !0);
        },
        removeData: function removeData(e) {
          return this.each(function () {
            Z.remove(this, e);
          });
        }
      }), T.extend({
        queue: function queue(e, t, n) {
          var r;
          if (e) return t = (t || "fx") + "queue", r = K.get(e, t), n && (!r || Array.isArray(n) ? r = K.access(e, t, T.makeArray(n)) : r.push(n)), r || [];
        },
        dequeue: function dequeue(e, t) {
          t = t || "fx";

          var n = T.queue(e, t),
              r = n.length,
              i = n.shift(),
              o = T._queueHooks(e, t);

          "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
            T.dequeue(e, t);
          }, o)), !r && o && o.empty.fire();
        },
        _queueHooks: function _queueHooks(e, t) {
          var n = t + "queueHooks";
          return K.get(e, n) || K.access(e, n, {
            empty: T.Callbacks("once memory").add(function () {
              K.remove(e, [t + "queue", n]);
            })
          });
        }
      }), T.fn.extend({
        queue: function queue(e, t) {
          var n = 2;
          return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? T.queue(this[0], e) : void 0 === t ? this : this.each(function () {
            var n = T.queue(this, e, t);
            T._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && T.dequeue(this, e);
          });
        },
        dequeue: function dequeue(e) {
          return this.each(function () {
            T.dequeue(this, e);
          });
        },
        clearQueue: function clearQueue(e) {
          return this.queue(e || "fx", []);
        },
        promise: function promise(e, t) {
          var n,
              r = 1,
              i = T.Deferred(),
              o = this,
              s = this.length,
              a = function a() {
            --r || i.resolveWith(o, [o]);
          };

          for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) {
            (n = K.get(o[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
          }

          return a(), i.promise(t);
        }
      });

      var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          re = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
          ie = ["Top", "Right", "Bottom", "Left"],
          oe = y.documentElement,
          se = function se(e) {
        return T.contains(e.ownerDocument, e);
      },
          ae = {
        composed: !0
      };

      oe.getRootNode && (se = function se(e) {
        return T.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument;
      });

      var le = function le(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && se(e) && "none" === T.css(e, "display");
      };

      function ce(e, t, n, r) {
        var i,
            o,
            s = 20,
            a = r ? function () {
          return r.cur();
        } : function () {
          return T.css(e, t, "");
        },
            l = a(),
            c = n && n[3] || (T.cssNumber[t] ? "" : "px"),
            u = e.nodeType && (T.cssNumber[t] || "px" !== c && +l) && re.exec(T.css(e, t));

        if (u && u[3] !== c) {
          for (l /= 2, c = c || u[3], u = +l || 1; s--;) {
            T.style(e, t, u + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), u /= o;
          }

          u *= 2, T.style(e, t, u + c), n = n || [];
        }

        return n && (u = +u || +l || 0, i = n[1] ? u + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = u, r.end = i)), i;
      }

      var ue = {};

      function fe(e) {
        var t,
            n = e.ownerDocument,
            r = e.nodeName,
            i = ue[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = T.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), ue[r] = i, i);
      }

      function pe(e, t) {
        for (var n, r, i = [], o = 0, s = e.length; o < s; o++) {
          (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = K.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && le(r) && (i[o] = fe(r))) : "none" !== n && (i[o] = "none", K.set(r, "display", n)));
        }

        for (o = 0; o < s; o++) {
          null != i[o] && (e[o].style.display = i[o]);
        }

        return e;
      }

      T.fn.extend({
        show: function show() {
          return pe(this, !0);
        },
        hide: function hide() {
          return pe(this);
        },
        toggle: function toggle(e) {
          return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
            le(this) ? T(this).show() : T(this).hide();
          });
        }
      });
      var he,
          de,
          me = /^(?:checkbox|radio)$/i,
          ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
          ve = /^$|^module$|\/(?:java|ecma)script/i;
      he = y.createDocumentFragment().appendChild(y.createElement("div")), (de = y.createElement("input")).setAttribute("type", "radio"), de.setAttribute("checked", "checked"), de.setAttribute("name", "t"), he.appendChild(de), g.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked, he.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue, he.innerHTML = "<option></option>", g.option = !!he.lastChild;
      var be = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };

      function ye(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && D(e, t) ? T.merge([e], n) : n;
      }

      function xe(e, t) {
        for (var n = 0, r = e.length; n < r; n++) {
          K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"));
        }
      }

      be.tbody = be.tfoot = be.colgroup = be.caption = be.thead, be.th = be.td, g.option || (be.optgroup = be.option = [1, "<select multiple='multiple'>", "</select>"]);
      var qe = /<|&#?\w+;/;

      function we(e, t, n, r, i) {
        for (var o, s, a, l, c, u, f = t.createDocumentFragment(), p = [], h = 0, d = e.length; h < d; h++) {
          if ((o = e[h]) || 0 === o) if ("object" === w(o)) T.merge(p, o.nodeType ? [o] : o);else if (qe.test(o)) {
            for (s = s || f.appendChild(t.createElement("div")), a = (ge.exec(o) || ["", ""])[1].toLowerCase(), l = be[a] || be._default, s.innerHTML = l[1] + T.htmlPrefilter(o) + l[2], u = l[0]; u--;) {
              s = s.lastChild;
            }

            T.merge(p, s.childNodes), (s = f.firstChild).textContent = "";
          } else p.push(t.createTextNode(o));
        }

        for (f.textContent = "", h = 0; o = p[h++];) {
          if (r && T.inArray(o, r) > -1) i && i.push(o);else if (c = se(o), s = ye(f.appendChild(o), "script"), c && xe(s), n) for (u = 0; o = s[u++];) {
            ve.test(o.type || "") && n.push(o);
          }
        }

        return f;
      }

      var Te = /^key/,
          ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
          Ce = /^([^.]*)(?:\.(.+)|)/;

      function Oe() {
        return !0;
      }

      function je() {
        return !1;
      }

      function Se(e, t) {
        return e === function () {
          try {
            return y.activeElement;
          } catch (e) {}
        }() == ("focus" === t);
      }

      function De(e, t, n, r, i, o) {
        var s, a;

        if ("object" == _typeof(t)) {
          for (a in "string" != typeof n && (r = r || n, n = void 0), t) {
            De(e, a, n, r, t[a], o);
          }

          return e;
        }

        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = je;else if (!i) return e;
        return 1 === o && (s = i, (i = function i(e) {
          return T().off(e), s.apply(this, arguments);
        }).guid = s.guid || (s.guid = T.guid++)), e.each(function () {
          T.event.add(this, t, i, r, n);
        });
      }

      function Ee(e, t, n) {
        n ? (K.set(e, t, !1), T.event.add(e, t, {
          namespace: !1,
          handler: function handler(e) {
            var r,
                i,
                o = K.get(this, t);

            if (1 & e.isTrigger && this[t]) {
              if (o.length) (T.event.special[t] || {}).delegateType && e.stopPropagation();else if (o = a.call(arguments), K.set(this, t, o), r = n(this, t), this[t](), o !== (i = K.get(this, t)) || r ? K.set(this, t, !1) : i = {}, o !== i) return e.stopImmediatePropagation(), e.preventDefault(), i.value;
            } else o.length && (K.set(this, t, {
              value: T.event.trigger(T.extend(o[0], T.Event.prototype), o.slice(1), this)
            }), e.stopImmediatePropagation());
          }
        })) : void 0 === K.get(e, t) && T.event.add(e, t, Oe);
      }

      T.event = {
        global: {},
        add: function add(e, t, n, r, i) {
          var o,
              s,
              a,
              l,
              c,
              u,
              f,
              p,
              h,
              d,
              m,
              g = K.get(e);
          if (G(e)) for (n.handler && (n = (o = n).handler, i = o.selector), i && T.find.matchesSelector(oe, i), n.guid || (n.guid = T.guid++), (l = g.events) || (l = g.events = Object.create(null)), (s = g.handle) || (s = g.handle = function (t) {
            return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0;
          }), c = (t = (t || "").match(M) || [""]).length; c--;) {
            h = m = (a = Ce.exec(t[c]) || [])[1], d = (a[2] || "").split(".").sort(), h && (f = T.event.special[h] || {}, h = (i ? f.delegateType : f.bindType) || h, f = T.event.special[h] || {}, u = T.extend({
              type: h,
              origType: m,
              data: r,
              handler: n,
              guid: n.guid,
              selector: i,
              needsContext: i && T.expr.match.needsContext.test(i),
              namespace: d.join(".")
            }, o), (p = l[h]) || ((p = l[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, d, s) || e.addEventListener && e.addEventListener(h, s)), f.add && (f.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, u) : p.push(u), T.event.global[h] = !0);
          }
        },
        remove: function remove(e, t, n, r, i) {
          var o,
              s,
              a,
              l,
              c,
              u,
              f,
              p,
              h,
              d,
              m,
              g = K.hasData(e) && K.get(e);

          if (g && (l = g.events)) {
            for (c = (t = (t || "").match(M) || [""]).length; c--;) {
              if (h = m = (a = Ce.exec(t[c]) || [])[1], d = (a[2] || "").split(".").sort(), h) {
                for (f = T.event.special[h] || {}, p = l[h = (r ? f.delegateType : f.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) {
                  u = p[o], !i && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (p.splice(o, 1), u.selector && p.delegateCount--, f.remove && f.remove.call(e, u));
                }

                s && !p.length && (f.teardown && !1 !== f.teardown.call(e, d, g.handle) || T.removeEvent(e, h, g.handle), delete l[h]);
              } else for (h in l) {
                T.event.remove(e, h + t[c], n, r, !0);
              }
            }

            T.isEmptyObject(l) && K.remove(e, "handle events");
          }
        },
        dispatch: function dispatch(e) {
          var t,
              n,
              r,
              i,
              o,
              s,
              a = new Array(arguments.length),
              l = T.event.fix(e),
              c = (K.get(this, "events") || Object.create(null))[l.type] || [],
              u = T.event.special[l.type] || {};

          for (a[0] = l, t = 1; t < arguments.length; t++) {
            a[t] = arguments[t];
          }

          if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
            for (s = T.event.handlers.call(this, l, c), t = 0; (i = s[t++]) && !l.isPropagationStopped();) {
              for (l.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !l.isImmediatePropagationStopped();) {
                l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (r = ((T.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) && !1 === (l.result = r) && (l.preventDefault(), l.stopPropagation()));
              }
            }

            return u.postDispatch && u.postDispatch.call(this, l), l.result;
          }
        },
        handlers: function handlers(e, t) {
          var n,
              r,
              i,
              o,
              s,
              a = [],
              l = t.delegateCount,
              c = e.target;
          if (l && c.nodeType && !("click" === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) {
            if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
              for (o = [], s = {}, n = 0; n < l; n++) {
                void 0 === s[i = (r = t[n]).selector + " "] && (s[i] = r.needsContext ? T(i, this).index(c) > -1 : T.find(i, this, null, [c]).length), s[i] && o.push(r);
              }

              o.length && a.push({
                elem: c,
                handlers: o
              });
            }
          }
          return c = this, l < t.length && a.push({
            elem: c,
            handlers: t.slice(l)
          }), a;
        },
        addProp: function addProp(e, t) {
          Object.defineProperty(T.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: v(t) ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            } : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
            set: function set(t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t
              });
            }
          });
        },
        fix: function fix(e) {
          return e[T.expando] ? e : new T.Event(e);
        },
        special: {
          load: {
            noBubble: !0
          },
          click: {
            setup: function setup(e) {
              var t = this || e;
              return me.test(t.type) && t.click && D(t, "input") && Ee(t, "click", Oe), !1;
            },
            trigger: function trigger(e) {
              var t = this || e;
              return me.test(t.type) && t.click && D(t, "input") && Ee(t, "click"), !0;
            },
            _default: function _default(e) {
              var t = e.target;
              return me.test(t.type) && t.click && D(t, "input") && K.get(t, "click") || D(t, "a");
            }
          },
          beforeunload: {
            postDispatch: function postDispatch(e) {
              void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
            }
          }
        }
      }, T.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
      }, T.Event = function (e, t) {
        if (!(this instanceof T.Event)) return new T.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Oe : je, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && T.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[T.expando] = !0;
      }, T.Event.prototype = {
        constructor: T.Event,
        isDefaultPrevented: je,
        isPropagationStopped: je,
        isImmediatePropagationStopped: je,
        isSimulated: !1,
        preventDefault: function preventDefault() {
          var e = this.originalEvent;
          this.isDefaultPrevented = Oe, e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function stopPropagation() {
          var e = this.originalEvent;
          this.isPropagationStopped = Oe, e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function stopImmediatePropagation() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = Oe, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
        }
      }, T.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function which(e) {
          var t = e.button;
          return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
        }
      }, T.event.addProp), T.each({
        focus: "focusin",
        blur: "focusout"
      }, function (e, t) {
        T.event.special[e] = {
          setup: function setup() {
            return Ee(this, e, Se), !1;
          },
          trigger: function trigger() {
            return Ee(this, e), !0;
          },
          delegateType: t
        };
      }), T.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function (e, t) {
        T.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function handle(e) {
            var n,
                r = this,
                i = e.relatedTarget,
                o = e.handleObj;
            return i && (i === r || T.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
          }
        };
      }), T.fn.extend({
        on: function on(e, t, n, r) {
          return De(this, e, t, n, r);
        },
        one: function one(e, t, n, r) {
          return De(this, e, t, n, r, 1);
        },
        off: function off(e, t, n) {
          var r, i;
          if (e && e.preventDefault && e.handleObj) return r = e.handleObj, T(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

          if ("object" == _typeof(e)) {
            for (i in e) {
              this.off(i, t, e[i]);
            }

            return this;
          }

          return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = je), this.each(function () {
            T.event.remove(this, e, n, t);
          });
        }
      });
      var Ae = /<script|<style|<link/i,
          Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
          _e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

      function Ne(e, t) {
        return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0] || e;
      }

      function Qe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
      }

      function Re(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
      }

      function Me(e, t) {
        var n, r, i, o, s, a;

        if (1 === t.nodeType) {
          if (K.hasData(e) && (a = K.get(e).events)) for (i in K.remove(t, "handle events"), a) {
            for (n = 0, r = a[i].length; n < r; n++) {
              T.event.add(t, i, a[i][n]);
            }
          }
          Z.hasData(e) && (o = Z.access(e), s = T.extend({}, o), Z.set(t, s));
        }
      }

      function Ie(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && me.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
      }

      function ze(e, t, n, r) {
        t = l(t);
        var i,
            o,
            s,
            a,
            c,
            u,
            f = 0,
            p = e.length,
            h = p - 1,
            d = t[0],
            m = v(d);
        if (m || p > 1 && "string" == typeof d && !g.checkClone && Le.test(d)) return e.each(function (i) {
          var o = e.eq(i);
          m && (t[0] = d.call(this, i, o.html())), ze(o, t, n, r);
        });

        if (p && (o = (i = we(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
          for (a = (s = T.map(ye(i, "script"), Qe)).length; f < p; f++) {
            c = i, f !== h && (c = T.clone(c, !0, !0), a && T.merge(s, ye(c, "script"))), n.call(e[f], c, f);
          }

          if (a) for (u = s[s.length - 1].ownerDocument, T.map(s, Re), f = 0; f < a; f++) {
            c = s[f], ve.test(c.type || "") && !K.access(c, "globalEval") && T.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? T._evalUrl && !c.noModule && T._evalUrl(c.src, {
              nonce: c.nonce || c.getAttribute("nonce")
            }, u) : q(c.textContent.replace(_e, ""), c, u));
          }
        }

        return e;
      }

      function Pe(e, t, n) {
        for (var r, i = t ? T.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
          n || 1 !== r.nodeType || T.cleanData(ye(r)), r.parentNode && (n && se(r) && xe(ye(r, "script")), r.parentNode.removeChild(r));
        }

        return e;
      }

      T.extend({
        htmlPrefilter: function htmlPrefilter(e) {
          return e;
        },
        clone: function clone(e, t, n) {
          var r,
              i,
              o,
              s,
              a = e.cloneNode(!0),
              l = se(e);
          if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e))) for (s = ye(a), r = 0, i = (o = ye(e)).length; r < i; r++) {
            Ie(o[r], s[r]);
          }
          if (t) if (n) for (o = o || ye(e), s = s || ye(a), r = 0, i = o.length; r < i; r++) {
            Me(o[r], s[r]);
          } else Me(e, a);
          return (s = ye(a, "script")).length > 0 && xe(s, !l && ye(e, "script")), a;
        },
        cleanData: function cleanData(e) {
          for (var t, n, r, i = T.event.special, o = 0; void 0 !== (n = e[o]); o++) {
            if (G(n)) {
              if (t = n[K.expando]) {
                if (t.events) for (r in t.events) {
                  i[r] ? T.event.remove(n, r) : T.removeEvent(n, r, t.handle);
                }
                n[K.expando] = void 0;
              }

              n[Z.expando] && (n[Z.expando] = void 0);
            }
          }
        }
      }), T.fn.extend({
        detach: function detach(e) {
          return Pe(this, e, !0);
        },
        remove: function remove(e) {
          return Pe(this, e);
        },
        text: function text(e) {
          return $(this, function (e) {
            return void 0 === e ? T.text(this) : this.empty().each(function () {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
            });
          }, null, e, arguments.length);
        },
        append: function append() {
          return ze(this, arguments, function (e) {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ne(this, e).appendChild(e);
          });
        },
        prepend: function prepend() {
          return ze(this, arguments, function (e) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var t = Ne(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function before() {
          return ze(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function after() {
          return ze(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function empty() {
          for (var e, t = 0; null != (e = this[t]); t++) {
            1 === e.nodeType && (T.cleanData(ye(e, !1)), e.textContent = "");
          }

          return this;
        },
        clone: function clone(e, t) {
          return e = null != e && e, t = null == t ? e : t, this.map(function () {
            return T.clone(this, e, t);
          });
        },
        html: function html(e) {
          return $(this, function (e) {
            var t = this[0] || {},
                n = 0,
                r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

            if ("string" == typeof e && !Ae.test(e) && !be[(ge.exec(e) || ["", ""])[1].toLowerCase()]) {
              e = T.htmlPrefilter(e);

              try {
                for (; n < r; n++) {
                  1 === (t = this[n] || {}).nodeType && (T.cleanData(ye(t, !1)), t.innerHTML = e);
                }

                t = 0;
              } catch (e) {}
            }

            t && this.empty().append(e);
          }, null, e, arguments.length);
        },
        replaceWith: function replaceWith() {
          var e = [];
          return ze(this, arguments, function (t) {
            var n = this.parentNode;
            T.inArray(this, e) < 0 && (T.cleanData(ye(this)), n && n.replaceChild(t, this));
          }, e);
        }
      }), T.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function (e, t) {
        T.fn[e] = function (e) {
          for (var n, r = [], i = T(e), o = i.length - 1, s = 0; s <= o; s++) {
            n = s === o ? this : this.clone(!0), T(i[s])[t](n), c.apply(r, n.get());
          }

          return this.pushStack(r);
        };
      });

      var He = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
          Fe = function Fe(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = n), t.getComputedStyle(e);
      },
          Be = function Be(e, t, n) {
        var r,
            i,
            o = {};

        for (i in t) {
          o[i] = e.style[i], e.style[i] = t[i];
        }

        for (i in r = n.call(e), t) {
          e.style[i] = o[i];
        }

        return r;
      },
          $e = new RegExp(ie.join("|"), "i");

      function We(e, t, n) {
        var r,
            i,
            o,
            s,
            a = e.style;
        return (n = n || Fe(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || se(e) || (s = T.style(e, t)), !g.pixelBoxStyles() && He.test(s) && $e.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s;
      }

      function Xe(e, t) {
        return {
          get: function get() {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          }
        };
      }

      !function () {
        function e() {
          if (u) {
            c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", oe.appendChild(c).appendChild(u);
            var e = n.getComputedStyle(u);
            r = "1%" !== e.top, l = 12 === t(e.marginLeft), u.style.right = "60%", s = 36 === t(e.right), i = 36 === t(e.width), u.style.position = "absolute", o = 12 === t(u.offsetWidth / 3), oe.removeChild(c), u = null;
          }
        }

        function t(e) {
          return Math.round(parseFloat(e));
        }

        var r,
            i,
            o,
            s,
            a,
            l,
            c = y.createElement("div"),
            u = y.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === u.style.backgroundClip, T.extend(g, {
          boxSizingReliable: function boxSizingReliable() {
            return e(), i;
          },
          pixelBoxStyles: function pixelBoxStyles() {
            return e(), s;
          },
          pixelPosition: function pixelPosition() {
            return e(), r;
          },
          reliableMarginLeft: function reliableMarginLeft() {
            return e(), l;
          },
          scrollboxSize: function scrollboxSize() {
            return e(), o;
          },
          reliableTrDimensions: function reliableTrDimensions() {
            var e, t, r, i;
            return null == a && (e = y.createElement("table"), t = y.createElement("tr"), r = y.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", r.style.height = "9px", oe.appendChild(e).appendChild(t).appendChild(r), i = n.getComputedStyle(t), a = parseInt(i.height) > 3, oe.removeChild(e)), a;
          }
        }));
      }();
      var Ue = ["Webkit", "Moz", "ms"],
          Ve = y.createElement("div").style,
          Ge = {};

      function Ye(e) {
        var t = T.cssProps[e] || Ge[e];
        return t || (e in Ve ? e : Ge[e] = function (e) {
          for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--;) {
            if ((e = Ue[n] + t) in Ve) return e;
          }
        }(e) || e);
      }

      var Ke = /^(none|table(?!-c[ea]).+)/,
          Ze = /^--/,
          Je = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
          et = {
        letterSpacing: "0",
        fontWeight: "400"
      };

      function tt(e, t, n) {
        var r = re.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
      }

      function nt(e, t, n, r, i, o) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (r ? "border" : "content")) return 0;

        for (; s < 4; s += 2) {
          "margin" === n && (l += T.css(e, n + ie[s], !0, i)), r ? ("content" === n && (l -= T.css(e, "padding" + ie[s], !0, i)), "margin" !== n && (l -= T.css(e, "border" + ie[s] + "Width", !0, i))) : (l += T.css(e, "padding" + ie[s], !0, i), "padding" !== n ? l += T.css(e, "border" + ie[s] + "Width", !0, i) : a += T.css(e, "border" + ie[s] + "Width", !0, i));
        }

        return !r && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5)) || 0), l;
      }

      function rt(e, t, n) {
        var r = Fe(e),
            i = (!g.boxSizingReliable() || n) && "border-box" === T.css(e, "boxSizing", !1, r),
            o = i,
            s = We(e, t, r),
            a = "offset" + t[0].toUpperCase() + t.slice(1);

        if (He.test(s)) {
          if (!n) return s;
          s = "auto";
        }

        return (!g.boxSizingReliable() && i || !g.reliableTrDimensions() && D(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === T.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === T.css(e, "boxSizing", !1, r), (o = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + nt(e, t, n || (i ? "border" : "content"), o, r, s) + "px";
      }

      function it(e, t, n, r, i) {
        return new it.prototype.init(e, t, n, r, i);
      }

      T.extend({
        cssHooks: {
          opacity: {
            get: function get(e, t) {
              if (t) {
                var n = We(e, "opacity");
                return "" === n ? "1" : n;
              }
            }
          }
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
        },
        cssProps: {},
        style: function style(e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var i,
                o,
                s,
                a = V(t),
                l = Ze.test(t),
                c = e.style;
            if (l || (t = Ye(a)), s = T.cssHooks[t] || T.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : c[t];
            "string" === (o = _typeof(n)) && (i = re.exec(n)) && i[1] && (n = ce(e, t, i), o = "number"), null != n && n == n && ("number" !== o || l || (n += i && i[3] || (T.cssNumber[a] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (l ? c.setProperty(t, n) : c[t] = n));
          }
        },
        css: function css(e, t, n, r) {
          var i,
              o,
              s,
              a = V(t);
          return Ze.test(t) || (t = Ye(a)), (s = T.cssHooks[t] || T.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in et && (i = et[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
        }
      }), T.each(["height", "width"], function (e, t) {
        T.cssHooks[t] = {
          get: function get(e, n, r) {
            if (n) return !Ke.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? rt(e, t, r) : Be(e, Je, function () {
              return rt(e, t, r);
            });
          },
          set: function set(e, n, r) {
            var i,
                o = Fe(e),
                s = !g.scrollboxSize() && "absolute" === o.position,
                a = (s || r) && "border-box" === T.css(e, "boxSizing", !1, o),
                l = r ? nt(e, t, r, a, o) : 0;
            return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - nt(e, t, "border", !1, o) - .5)), l && (i = re.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = T.css(e, t)), tt(0, n, l);
          }
        };
      }), T.cssHooks.marginLeft = Xe(g.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, {
          marginLeft: 0
        }, function () {
          return e.getBoundingClientRect().left;
        })) + "px";
      }), T.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function (e, t) {
        T.cssHooks[e + t] = {
          expand: function expand(n) {
            for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) {
              i[e + ie[r] + t] = o[r] || o[r - 2] || o[0];
            }

            return i;
          }
        }, "margin" !== e && (T.cssHooks[e + t].set = tt);
      }), T.fn.extend({
        css: function css(e, t) {
          return $(this, function (e, t, n) {
            var r,
                i,
                o = {},
                s = 0;

            if (Array.isArray(t)) {
              for (r = Fe(e), i = t.length; s < i; s++) {
                o[t[s]] = T.css(e, t[s], !1, r);
              }

              return o;
            }

            return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
          }, e, t, arguments.length > 1);
        }
      }), T.Tween = it, it.prototype = {
        constructor: it,
        init: function init(e, t, n, r, i, o) {
          this.elem = e, this.prop = n, this.easing = i || T.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (T.cssNumber[n] ? "" : "px");
        },
        cur: function cur() {
          var e = it.propHooks[this.prop];
          return e && e.get ? e.get(this) : it.propHooks._default.get(this);
        },
        run: function run(e) {
          var t,
              n = it.propHooks[this.prop];
          return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : it.propHooks._default.set(this), this;
        }
      }, it.prototype.init.prototype = it.prototype, it.propHooks = {
        _default: {
          get: function get(e) {
            var t;
            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
          },
          set: function set(e) {
            T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !T.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit);
          }
        }
      }, it.propHooks.scrollTop = it.propHooks.scrollLeft = {
        set: function set(e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
      }, T.easing = {
        linear: function linear(e) {
          return e;
        },
        swing: function swing(e) {
          return .5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing"
      }, T.fx = it.prototype.init, T.fx.step = {};
      var ot,
          st,
          at = /^(?:toggle|show|hide)$/,
          lt = /queueHooks$/;

      function ct() {
        st && (!1 === y.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ct) : n.setTimeout(ct, T.fx.interval), T.fx.tick());
      }

      function ut() {
        return n.setTimeout(function () {
          ot = void 0;
        }), ot = Date.now();
      }

      function ft(e, t) {
        var n,
            r = 0,
            i = {
          height: e
        };

        for (t = t ? 1 : 0; r < 4; r += 2 - t) {
          i["margin" + (n = ie[r])] = i["padding" + n] = e;
        }

        return t && (i.opacity = i.width = e), i;
      }

      function pt(e, t, n) {
        for (var r, i = (ht.tweeners[t] || []).concat(ht.tweeners["*"]), o = 0, s = i.length; o < s; o++) {
          if (r = i[o].call(n, t, e)) return r;
        }
      }

      function ht(e, t, n) {
        var r,
            i,
            o = 0,
            s = ht.prefilters.length,
            a = T.Deferred().always(function () {
          delete l.elem;
        }),
            l = function l() {
          if (i) return !1;

          for (var t = ot || ut(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) {
            c.tweens[o].run(r);
          }

          return a.notifyWith(e, [c, r, n]), r < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1);
        },
            c = a.promise({
          elem: e,
          props: T.extend({}, t),
          opts: T.extend(!0, {
            specialEasing: {},
            easing: T.easing._default
          }, n),
          originalProperties: t,
          originalOptions: n,
          startTime: ot || ut(),
          duration: n.duration,
          tweens: [],
          createTween: function createTween(t, n) {
            var r = T.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
            return c.tweens.push(r), r;
          },
          stop: function stop(t) {
            var n = 0,
                r = t ? c.tweens.length : 0;
            if (i) return this;

            for (i = !0; n < r; n++) {
              c.tweens[n].run(1);
            }

            return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this;
          }
        }),
            u = c.props;

        for (!function (e, t) {
          var n, r, i, o, s;

          for (n in e) {
            if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (s = T.cssHooks[r]) && ("expand" in s)) for (n in o = s.expand(o), delete e[r], o) {
              (n in e) || (e[n] = o[n], t[n] = i);
            } else t[r] = i;
          }
        }(u, c.opts.specialEasing); o < s; o++) {
          if (r = ht.prefilters[o].call(c, e, u, c.opts)) return v(r.stop) && (T._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)), r;
        }

        return T.map(u, pt, c), v(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), T.fx.timer(T.extend(l, {
          elem: e,
          anim: c,
          queue: c.opts.queue
        })), c;
      }

      T.Animation = T.extend(ht, {
        tweeners: {
          "*": [function (e, t) {
            var n = this.createTween(e, t);
            return ce(n.elem, e, re.exec(t), n), n;
          }]
        },
        tweener: function tweener(e, t) {
          v(e) ? (t = e, e = ["*"]) : e = e.match(M);

          for (var n, r = 0, i = e.length; r < i; r++) {
            n = e[r], ht.tweeners[n] = ht.tweeners[n] || [], ht.tweeners[n].unshift(t);
          }
        },
        prefilters: [function (e, t, n) {
          var r,
              i,
              o,
              s,
              a,
              l,
              c,
              u,
              f = "width" in t || "height" in t,
              p = this,
              h = {},
              d = e.style,
              m = e.nodeType && le(e),
              g = K.get(e, "fxshow");

          for (r in n.queue || (null == (s = T._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
            s.unqueued || a();
          }), s.unqueued++, p.always(function () {
            p.always(function () {
              s.unqueued--, T.queue(e, "fx").length || s.empty.fire();
            });
          })), t) {
            if (i = t[r], at.test(i)) {
              if (delete t[r], o = o || "toggle" === i, i === (m ? "hide" : "show")) {
                if ("show" !== i || !g || void 0 === g[r]) continue;
                m = !0;
              }

              h[r] = g && g[r] || T.style(e, r);
            }
          }

          if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(h)) for (r in f && 1 === e.nodeType && (n.overflow = [d.overflow, d.overflowX, d.overflowY], null == (c = g && g.display) && (c = K.get(e, "display")), "none" === (u = T.css(e, "display")) && (c ? u = c : (pe([e], !0), c = e.style.display || c, u = T.css(e, "display"), pe([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === T.css(e, "float") && (l || (p.done(function () {
            d.display = c;
          }), null == c && (u = d.display, c = "none" === u ? "" : u)), d.display = "inline-block")), n.overflow && (d.overflow = "hidden", p.always(function () {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2];
          })), l = !1, h) {
            l || (g ? "hidden" in g && (m = g.hidden) : g = K.access(e, "fxshow", {
              display: c
            }), o && (g.hidden = !m), m && pe([e], !0), p.done(function () {
              for (r in m || pe([e]), K.remove(e, "fxshow"), h) {
                T.style(e, r, h[r]);
              }
            })), l = pt(m ? g[r] : 0, r, p), r in g || (g[r] = l.start, m && (l.end = l.start, l.start = 0));
          }
        }],
        prefilter: function prefilter(e, t) {
          t ? ht.prefilters.unshift(e) : ht.prefilters.push(e);
        }
      }), T.speed = function (e, t, n) {
        var r = e && "object" == _typeof(e) ? T.extend({}, e) : {
          complete: n || !n && t || v(e) && e,
          duration: e,
          easing: n && t || t && !v(t) && t
        };
        return T.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in T.fx.speeds ? r.duration = T.fx.speeds[r.duration] : r.duration = T.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
          v(r.old) && r.old.call(this), r.queue && T.dequeue(this, r.queue);
        }, r;
      }, T.fn.extend({
        fadeTo: function fadeTo(e, t, n, r) {
          return this.filter(le).css("opacity", 0).show().end().animate({
            opacity: t
          }, e, n, r);
        },
        animate: function animate(e, t, n, r) {
          var i = T.isEmptyObject(e),
              o = T.speed(t, n, r),
              s = function s() {
            var t = ht(this, T.extend({}, e), o);
            (i || K.get(this, "finish")) && t.stop(!0);
          };

          return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
        },
        stop: function stop(e, t, n) {
          var r = function r(e) {
            var t = e.stop;
            delete e.stop, t(n);
          };

          return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function () {
            var t = !0,
                i = null != e && e + "queueHooks",
                o = T.timers,
                s = K.get(this);
            if (i) s[i] && s[i].stop && r(s[i]);else for (i in s) {
              s[i] && s[i].stop && lt.test(i) && r(s[i]);
            }

            for (i = o.length; i--;) {
              o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
            }

            !t && n || T.dequeue(this, e);
          });
        },
        finish: function finish(e) {
          return !1 !== e && (e = e || "fx"), this.each(function () {
            var t,
                n = K.get(this),
                r = n[e + "queue"],
                i = n[e + "queueHooks"],
                o = T.timers,
                s = r ? r.length : 0;

            for (n.finish = !0, T.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
              o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
            }

            for (t = 0; t < s; t++) {
              r[t] && r[t].finish && r[t].finish.call(this);
            }

            delete n.finish;
          });
        }
      }), T.each(["toggle", "show", "hide"], function (e, t) {
        var n = T.fn[t];

        T.fn[t] = function (e, r, i) {
          return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ft(t, !0), e, r, i);
        };
      }), T.each({
        slideDown: ft("show"),
        slideUp: ft("hide"),
        slideToggle: ft("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      }, function (e, t) {
        T.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      }), T.timers = [], T.fx.tick = function () {
        var e,
            t = 0,
            n = T.timers;

        for (ot = Date.now(); t < n.length; t++) {
          (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        }

        n.length || T.fx.stop(), ot = void 0;
      }, T.fx.timer = function (e) {
        T.timers.push(e), T.fx.start();
      }, T.fx.interval = 13, T.fx.start = function () {
        st || (st = !0, ct());
      }, T.fx.stop = function () {
        st = null;
      }, T.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      }, T.fn.delay = function (e, t) {
        return e = T.fx && T.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, r) {
          var i = n.setTimeout(t, e);

          r.stop = function () {
            n.clearTimeout(i);
          };
        });
      }, function () {
        var e = y.createElement("input"),
            t = y.createElement("select").appendChild(y.createElement("option"));
        e.type = "checkbox", g.checkOn = "" !== e.value, g.optSelected = t.selected, (e = y.createElement("input")).value = "t", e.type = "radio", g.radioValue = "t" === e.value;
      }();
      var dt,
          mt = T.expr.attrHandle;
      T.fn.extend({
        attr: function attr(e, t) {
          return $(this, T.attr, e, t, arguments.length > 1);
        },
        removeAttr: function removeAttr(e) {
          return this.each(function () {
            T.removeAttr(this, e);
          });
        }
      }), T.extend({
        attr: function attr(e, t, n) {
          var r,
              i,
              o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? T.prop(e, t, n) : (1 === o && T.isXMLDoc(e) || (i = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void T.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = T.find.attr(e, t)) ? void 0 : r);
        },
        attrHooks: {
          type: {
            set: function set(e, t) {
              if (!g.radioValue && "radio" === t && D(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t;
              }
            }
          }
        },
        removeAttr: function removeAttr(e, t) {
          var n,
              r = 0,
              i = t && t.match(M);
          if (i && 1 === e.nodeType) for (; n = i[r++];) {
            e.removeAttribute(n);
          }
        }
      }), dt = {
        set: function set(e, t, n) {
          return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
      }, T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = mt[t] || T.find.attr;

        mt[t] = function (e, t, r) {
          var i,
              o,
              s = t.toLowerCase();
          return r || (o = mt[s], mt[s] = i, i = null != n(e, t, r) ? s : null, mt[s] = o), i;
        };
      });
      var gt = /^(?:input|select|textarea|button)$/i,
          vt = /^(?:a|area)$/i;

      function bt(e) {
        return (e.match(M) || []).join(" ");
      }

      function yt(e) {
        return e.getAttribute && e.getAttribute("class") || "";
      }

      function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(M) || [];
      }

      T.fn.extend({
        prop: function prop(e, t) {
          return $(this, T.prop, e, t, arguments.length > 1);
        },
        removeProp: function removeProp(e) {
          return this.each(function () {
            delete this[T.propFix[e] || e];
          });
        }
      }), T.extend({
        prop: function prop(e, t, n) {
          var r,
              i,
              o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o) return 1 === o && T.isXMLDoc(e) || (t = T.propFix[t] || t, i = T.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
        },
        propHooks: {
          tabIndex: {
            get: function get(e) {
              var t = T.find.attr(e, "tabindex");
              return t ? parseInt(t, 10) : gt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1;
            }
          }
        },
        propFix: {
          "for": "htmlFor",
          "class": "className"
        }
      }), g.optSelected || (T.propHooks.selected = {
        get: function get(e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function set(e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
      }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        T.propFix[this.toLowerCase()] = this;
      }), T.fn.extend({
        addClass: function addClass(e) {
          var t,
              n,
              r,
              i,
              o,
              s,
              a,
              l = 0;
          if (v(e)) return this.each(function (t) {
            T(this).addClass(e.call(this, t, yt(this)));
          });
          if ((t = xt(e)).length) for (; n = this[l++];) {
            if (i = yt(n), r = 1 === n.nodeType && " " + bt(i) + " ") {
              for (s = 0; o = t[s++];) {
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              }

              i !== (a = bt(r)) && n.setAttribute("class", a);
            }
          }
          return this;
        },
        removeClass: function removeClass(e) {
          var t,
              n,
              r,
              i,
              o,
              s,
              a,
              l = 0;
          if (v(e)) return this.each(function (t) {
            T(this).removeClass(e.call(this, t, yt(this)));
          });
          if (!arguments.length) return this.attr("class", "");
          if ((t = xt(e)).length) for (; n = this[l++];) {
            if (i = yt(n), r = 1 === n.nodeType && " " + bt(i) + " ") {
              for (s = 0; o = t[s++];) {
                for (; r.indexOf(" " + o + " ") > -1;) {
                  r = r.replace(" " + o + " ", " ");
                }
              }

              i !== (a = bt(r)) && n.setAttribute("class", a);
            }
          }
          return this;
        },
        toggleClass: function toggleClass(e, t) {
          var n = _typeof(e),
              r = "string" === n || Array.isArray(e);

          return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each(function (n) {
            T(this).toggleClass(e.call(this, n, yt(this), t), t);
          }) : this.each(function () {
            var t, i, o, s;
            if (r) for (i = 0, o = T(this), s = xt(e); t = s[i++];) {
              o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
            } else void 0 !== e && "boolean" !== n || ((t = yt(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""));
          });
        },
        hasClass: function hasClass(e) {
          var t,
              n,
              r = 0;

          for (t = " " + e + " "; n = this[r++];) {
            if (1 === n.nodeType && (" " + bt(yt(n)) + " ").indexOf(t) > -1) return !0;
          }

          return !1;
        }
      });
      var qt = /\r/g;
      T.fn.extend({
        val: function val(e) {
          var t,
              n,
              r,
              i = this[0];
          return arguments.length ? (r = v(e), this.each(function (n) {
            var i;
            1 === this.nodeType && (null == (i = r ? e.call(this, n, T(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = T.map(i, function (e) {
              return null == e ? "" : e + "";
            })), (t = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
          })) : i ? (t = T.valHooks[i.type] || T.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(qt, "") : null == n ? "" : n : void 0;
        }
      }), T.extend({
        valHooks: {
          option: {
            get: function get(e) {
              var t = T.find.attr(e, "value");
              return null != t ? t : bt(T.text(e));
            }
          },
          select: {
            get: function get(e) {
              var t,
                  n,
                  r,
                  i = e.options,
                  o = e.selectedIndex,
                  s = "select-one" === e.type,
                  a = s ? null : [],
                  l = s ? o + 1 : i.length;

              for (r = o < 0 ? l : s ? o : 0; r < l; r++) {
                if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                  if (t = T(n).val(), s) return t;
                  a.push(t);
                }
              }

              return a;
            },
            set: function set(e, t) {
              for (var n, r, i = e.options, o = T.makeArray(t), s = i.length; s--;) {
                ((r = i[s]).selected = T.inArray(T.valHooks.option.get(r), o) > -1) && (n = !0);
              }

              return n || (e.selectedIndex = -1), o;
            }
          }
        }
      }), T.each(["radio", "checkbox"], function () {
        T.valHooks[this] = {
          set: function set(e, t) {
            if (Array.isArray(t)) return e.checked = T.inArray(T(e).val(), t) > -1;
          }
        }, g.checkOn || (T.valHooks[this].get = function (e) {
          return null === e.getAttribute("value") ? "on" : e.value;
        });
      }), g.focusin = "onfocusin" in n;

      var wt = /^(?:focusinfocus|focusoutblur)$/,
          Tt = function Tt(e) {
        e.stopPropagation();
      };

      T.extend(T.event, {
        trigger: function trigger(e, t, r, i) {
          var o,
              s,
              a,
              l,
              c,
              u,
              f,
              p,
              d = [r || y],
              m = h.call(e, "type") ? e.type : e,
              g = h.call(e, "namespace") ? e.namespace.split(".") : [];

          if (s = p = a = r = r || y, 3 !== r.nodeType && 8 !== r.nodeType && !wt.test(m + T.event.triggered) && (m.indexOf(".") > -1 && (g = m.split("."), m = g.shift(), g.sort()), c = m.indexOf(":") < 0 && "on" + m, (e = e[T.expando] ? e : new T.Event(m, "object" == _typeof(e) && e)).isTrigger = i ? 2 : 3, e.namespace = g.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : T.makeArray(t, [e]), f = T.event.special[m] || {}, i || !f.trigger || !1 !== f.trigger.apply(r, t))) {
            if (!i && !f.noBubble && !b(r)) {
              for (l = f.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) {
                d.push(s), a = s;
              }

              a === (r.ownerDocument || y) && d.push(a.defaultView || a.parentWindow || n);
            }

            for (o = 0; (s = d[o++]) && !e.isPropagationStopped();) {
              p = s, e.type = o > 1 ? l : f.bindType || m, (u = (K.get(s, "events") || Object.create(null))[e.type] && K.get(s, "handle")) && u.apply(s, t), (u = c && s[c]) && u.apply && G(s) && (e.result = u.apply(s, t), !1 === e.result && e.preventDefault());
            }

            return e.type = m, i || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(d.pop(), t) || !G(r) || c && v(r[m]) && !b(r) && ((a = r[c]) && (r[c] = null), T.event.triggered = m, e.isPropagationStopped() && p.addEventListener(m, Tt), r[m](), e.isPropagationStopped() && p.removeEventListener(m, Tt), T.event.triggered = void 0, a && (r[c] = a)), e.result;
          }
        },
        simulate: function simulate(e, t, n) {
          var r = T.extend(new T.Event(), n, {
            type: e,
            isSimulated: !0
          });
          T.event.trigger(r, null, t);
        }
      }), T.fn.extend({
        trigger: function trigger(e, t) {
          return this.each(function () {
            T.event.trigger(e, t, this);
          });
        },
        triggerHandler: function triggerHandler(e, t) {
          var n = this[0];
          if (n) return T.event.trigger(e, t, n, !0);
        }
      }), g.focusin || T.each({
        focus: "focusin",
        blur: "focusout"
      }, function (e, t) {
        var n = function n(e) {
          T.event.simulate(t, e.target, T.event.fix(e));
        };

        T.event.special[t] = {
          setup: function setup() {
            var r = this.ownerDocument || this.document || this,
                i = K.access(r, t);
            i || r.addEventListener(e, n, !0), K.access(r, t, (i || 0) + 1);
          },
          teardown: function teardown() {
            var r = this.ownerDocument || this.document || this,
                i = K.access(r, t) - 1;
            i ? K.access(r, t, i) : (r.removeEventListener(e, n, !0), K.remove(r, t));
          }
        };
      });
      var kt = n.location,
          Ct = {
        guid: Date.now()
      },
          Ot = /\?/;

      T.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;

        try {
          t = new n.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
          t = void 0;
        }

        return t && !t.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + e), t;
      };

      var jt = /\[\]$/,
          St = /\r?\n/g,
          Dt = /^(?:submit|button|image|reset|file)$/i,
          Et = /^(?:input|select|textarea|keygen)/i;

      function At(e, t, n, r) {
        var i;
        if (Array.isArray(t)) T.each(t, function (t, i) {
          n || jt.test(e) ? r(e, i) : At(e + "[" + ("object" == _typeof(i) && null != i ? t : "") + "]", i, n, r);
        });else if (n || "object" !== w(t)) r(e, t);else for (i in t) {
          At(e + "[" + i + "]", t[i], n, r);
        }
      }

      T.param = function (e, t) {
        var n,
            r = [],
            i = function i(e, t) {
          var n = v(t) ? t() : t;
          r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
        };

        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !T.isPlainObject(e)) T.each(e, function () {
          i(this.name, this.value);
        });else for (n in e) {
          At(n, e[n], t, i);
        }
        return r.join("&");
      }, T.fn.extend({
        serialize: function serialize() {
          return T.param(this.serializeArray());
        },
        serializeArray: function serializeArray() {
          return this.map(function () {
            var e = T.prop(this, "elements");
            return e ? T.makeArray(e) : this;
          }).filter(function () {
            var e = this.type;
            return this.name && !T(this).is(":disabled") && Et.test(this.nodeName) && !Dt.test(e) && (this.checked || !me.test(e));
          }).map(function (e, t) {
            var n = T(this).val();
            return null == n ? null : Array.isArray(n) ? T.map(n, function (e) {
              return {
                name: t.name,
                value: e.replace(St, "\r\n")
              };
            }) : {
              name: t.name,
              value: n.replace(St, "\r\n")
            };
          }).get();
        }
      });
      var Lt = /%20/g,
          _t = /#.*$/,
          Nt = /([?&])_=[^&]*/,
          Qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          Rt = /^(?:GET|HEAD)$/,
          Mt = /^\/\//,
          It = {},
          zt = {},
          Pt = "*/".concat("*"),
          Ht = y.createElement("a");

      function Ft(e) {
        return function (t, n) {
          "string" != typeof t && (n = t, t = "*");
          var r,
              i = 0,
              o = t.toLowerCase().match(M) || [];
          if (v(n)) for (; r = o[i++];) {
            "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
          }
        };
      }

      function Bt(e, t, n, r) {
        var i = {},
            o = e === zt;

        function s(a) {
          var l;
          return i[a] = !0, T.each(e[a] || [], function (e, a) {
            var c = a(t, n, r);
            return "string" != typeof c || o || i[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1);
          }), l;
        }

        return s(t.dataTypes[0]) || !i["*"] && s("*");
      }

      function $t(e, t) {
        var n,
            r,
            i = T.ajaxSettings.flatOptions || {};

        for (n in t) {
          void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        }

        return r && T.extend(!0, e, r), e;
      }

      Ht.href = kt.href, T.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: kt.href,
          type: "GET",
          isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(kt.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Pt,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": T.parseXML
          },
          flatOptions: {
            url: !0,
            context: !0
          }
        },
        ajaxSetup: function ajaxSetup(e, t) {
          return t ? $t($t(e, T.ajaxSettings), t) : $t(T.ajaxSettings, e);
        },
        ajaxPrefilter: Ft(It),
        ajaxTransport: Ft(zt),
        ajax: function ajax(e, t) {
          "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
          var r,
              i,
              o,
              s,
              a,
              l,
              c,
              u,
              f,
              p,
              h = T.ajaxSetup({}, t),
              d = h.context || h,
              m = h.context && (d.nodeType || d.jquery) ? T(d) : T.event,
              g = T.Deferred(),
              v = T.Callbacks("once memory"),
              b = h.statusCode || {},
              x = {},
              q = {},
              w = "canceled",
              k = {
            readyState: 0,
            getResponseHeader: function getResponseHeader(e) {
              var t;

              if (c) {
                if (!s) for (s = {}; t = Qt.exec(o);) {
                  s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                }
                t = s[e.toLowerCase() + " "];
              }

              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function getAllResponseHeaders() {
              return c ? o : null;
            },
            setRequestHeader: function setRequestHeader(e, t) {
              return null == c && (e = q[e.toLowerCase()] = q[e.toLowerCase()] || e, x[e] = t), this;
            },
            overrideMimeType: function overrideMimeType(e) {
              return null == c && (h.mimeType = e), this;
            },
            statusCode: function statusCode(e) {
              var t;
              if (e) if (c) k.always(e[k.status]);else for (t in e) {
                b[t] = [b[t], e[t]];
              }
              return this;
            },
            abort: function abort(e) {
              var t = e || w;
              return r && r.abort(t), C(0, t), this;
            }
          };

          if (g.promise(k), h.url = ((e || h.url || kt.href) + "").replace(Mt, kt.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
            l = y.createElement("a");

            try {
              l.href = h.url, l.href = l.href, h.crossDomain = Ht.protocol + "//" + Ht.host != l.protocol + "//" + l.host;
            } catch (e) {
              h.crossDomain = !0;
            }
          }

          if (h.data && h.processData && "string" != typeof h.data && (h.data = T.param(h.data, h.traditional)), Bt(It, h, t, k), c) return k;

          for (f in (u = T.event && h.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Rt.test(h.type), i = h.url.replace(_t, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Lt, "+")) : (p = h.url.slice(i.length), h.data && (h.processData || "string" == typeof h.data) && (i += (Ot.test(i) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (i = i.replace(Nt, "$1"), p = (Ot.test(i) ? "&" : "?") + "_=" + Ct.guid++ + p), h.url = i + p), h.ifModified && (T.lastModified[i] && k.setRequestHeader("If-Modified-Since", T.lastModified[i]), T.etag[i] && k.setRequestHeader("If-None-Match", T.etag[i])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && k.setRequestHeader("Content-Type", h.contentType), k.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Pt + "; q=0.01" : "") : h.accepts["*"]), h.headers) {
            k.setRequestHeader(f, h.headers[f]);
          }

          if (h.beforeSend && (!1 === h.beforeSend.call(d, k, h) || c)) return k.abort();

          if (w = "abort", v.add(h.complete), k.done(h.success), k.fail(h.error), r = Bt(zt, h, t, k)) {
            if (k.readyState = 1, u && m.trigger("ajaxSend", [k, h]), c) return k;
            h.async && h.timeout > 0 && (a = n.setTimeout(function () {
              k.abort("timeout");
            }, h.timeout));

            try {
              c = !1, r.send(x, C);
            } catch (e) {
              if (c) throw e;
              C(-1, e);
            }
          } else C(-1, "No Transport");

          function C(e, t, s, l) {
            var f,
                p,
                y,
                x,
                q,
                w = t;
            c || (c = !0, a && n.clearTimeout(a), r = void 0, o = l || "", k.readyState = e > 0 ? 4 : 0, f = e >= 200 && e < 300 || 304 === e, s && (x = function (e, t, n) {
              for (var r, i, o, s, a = e.contents, l = e.dataTypes; "*" === l[0];) {
                l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
              }

              if (r) for (i in a) {
                if (a[i] && a[i].test(r)) {
                  l.unshift(i);
                  break;
                }
              }
              if (l[0] in n) o = l[0];else {
                for (i in n) {
                  if (!l[0] || e.converters[i + " " + l[0]]) {
                    o = i;
                    break;
                  }

                  s || (s = i);
                }

                o = o || s;
              }
              if (o) return o !== l[0] && l.unshift(o), n[o];
            }(h, k, s)), !f && T.inArray("script", h.dataTypes) > -1 && (h.converters["text script"] = function () {}), x = function (e, t, n, r) {
              var i,
                  o,
                  s,
                  a,
                  l,
                  c = {},
                  u = e.dataTypes.slice();
              if (u[1]) for (s in e.converters) {
                c[s.toLowerCase()] = e.converters[s];
              }

              for (o = u.shift(); o;) {
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift()) if ("*" === o) o = l;else if ("*" !== l && l !== o) {
                  if (!(s = c[l + " " + o] || c["* " + o])) for (i in c) {
                    if ((a = i.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                      !0 === s ? s = c[i] : !0 !== c[i] && (o = a[0], u.unshift(a[1]));
                      break;
                    }
                  }
                  if (!0 !== s) if (s && e["throws"]) t = s(t);else try {
                    t = s(t);
                  } catch (e) {
                    return {
                      state: "parsererror",
                      error: s ? e : "No conversion from " + l + " to " + o
                    };
                  }
                }
              }

              return {
                state: "success",
                data: t
              };
            }(h, x, k, f), f ? (h.ifModified && ((q = k.getResponseHeader("Last-Modified")) && (T.lastModified[i] = q), (q = k.getResponseHeader("etag")) && (T.etag[i] = q)), 204 === e || "HEAD" === h.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = x.state, p = x.data, f = !(y = x.error))) : (y = w, !e && w || (w = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (t || w) + "", f ? g.resolveWith(d, [p, w, k]) : g.rejectWith(d, [k, w, y]), k.statusCode(b), b = void 0, u && m.trigger(f ? "ajaxSuccess" : "ajaxError", [k, h, f ? p : y]), v.fireWith(d, [k, w]), u && (m.trigger("ajaxComplete", [k, h]), --T.active || T.event.trigger("ajaxStop")));
          }

          return k;
        },
        getJSON: function getJSON(e, t, n) {
          return T.get(e, t, n, "json");
        },
        getScript: function getScript(e, t) {
          return T.get(e, void 0, t, "script");
        }
      }), T.each(["get", "post"], function (e, t) {
        T[t] = function (e, n, r, i) {
          return v(n) && (i = i || r, r = n, n = void 0), T.ajax(T.extend({
            url: e,
            type: t,
            dataType: i,
            data: n,
            success: r
          }, T.isPlainObject(e) && e));
        };
      }), T.ajaxPrefilter(function (e) {
        var t;

        for (t in e.headers) {
          "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
        }
      }), T._evalUrl = function (e, t, n) {
        return T.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          converters: {
            "text script": function textScript() {}
          },
          dataFilter: function dataFilter(e) {
            T.globalEval(e, t, n);
          }
        });
      }, T.fn.extend({
        wrapAll: function wrapAll(e) {
          var t;
          return this[0] && (v(e) && (e = e.call(this[0])), t = T(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
            for (var e = this; e.firstElementChild;) {
              e = e.firstElementChild;
            }

            return e;
          }).append(this)), this;
        },
        wrapInner: function wrapInner(e) {
          return v(e) ? this.each(function (t) {
            T(this).wrapInner(e.call(this, t));
          }) : this.each(function () {
            var t = T(this),
                n = t.contents();
            n.length ? n.wrapAll(e) : t.append(e);
          });
        },
        wrap: function wrap(e) {
          var t = v(e);
          return this.each(function (n) {
            T(this).wrapAll(t ? e.call(this, n) : e);
          });
        },
        unwrap: function unwrap(e) {
          return this.parent(e).not("body").each(function () {
            T(this).replaceWith(this.childNodes);
          }), this;
        }
      }), T.expr.pseudos.hidden = function (e) {
        return !T.expr.pseudos.visible(e);
      }, T.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }, T.ajaxSettings.xhr = function () {
        try {
          return new n.XMLHttpRequest();
        } catch (e) {}
      };
      var Wt = {
        0: 200,
        1223: 204
      },
          Xt = T.ajaxSettings.xhr();
      g.cors = !!Xt && "withCredentials" in Xt, g.ajax = Xt = !!Xt, T.ajaxTransport(function (e) {
        var _t3, r;

        if (g.cors || Xt && !e.crossDomain) return {
          send: function send(i, o) {
            var s,
                a = e.xhr();
            if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (s in e.xhrFields) {
              a[s] = e.xhrFields[s];
            }

            for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) {
              a.setRequestHeader(s, i[s]);
            }

            _t3 = function t(e) {
              return function () {
                _t3 && (_t3 = r = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Wt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                  binary: a.response
                } : {
                  text: a.responseText
                }, a.getAllResponseHeaders()));
              };
            }, a.onload = _t3(), r = a.onerror = a.ontimeout = _t3("error"), void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function () {
              4 === a.readyState && n.setTimeout(function () {
                _t3 && r();
              });
            }, _t3 = _t3("abort");

            try {
              a.send(e.hasContent && e.data || null);
            } catch (e) {
              if (_t3) throw e;
            }
          },
          abort: function abort() {
            _t3 && _t3();
          }
        };
      }), T.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
      }), T.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function textScript(e) {
            return T.globalEval(e), e;
          }
        }
      }), T.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }), T.ajaxTransport("script", function (e) {
        var t, _n;

        if (e.crossDomain || e.scriptAttrs) return {
          send: function send(r, i) {
            t = T("<script>").attr(e.scriptAttrs || {}).prop({
              charset: e.scriptCharset,
              src: e.url
            }).on("load error", _n = function n(e) {
              t.remove(), _n = null, e && i("error" === e.type ? 404 : 200, e.type);
            }), y.head.appendChild(t[0]);
          },
          abort: function abort() {
            _n && _n();
          }
        };
      });
      var Ut,
          Vt = [],
          Gt = /(=)\?(?=&|$)|\?\?/;
      T.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function jsonpCallback() {
          var e = Vt.pop() || T.expando + "_" + Ct.guid++;
          return this[e] = !0, e;
        }
      }), T.ajaxPrefilter("json jsonp", function (e, t, r) {
        var i,
            o,
            s,
            a = !1 !== e.jsonp && (Gt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Gt, "$1" + i) : !1 !== e.jsonp && (e.url += (Ot.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
          return s || T.error(i + " was not called"), s[0];
        }, e.dataTypes[0] = "json", o = n[i], n[i] = function () {
          s = arguments;
        }, r.always(function () {
          void 0 === o ? T(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Vt.push(i)), s && v(o) && o(s[0]), s = o = void 0;
        }), "script";
      }), g.createHTMLDocument = ((Ut = y.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), T.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (g.createHTMLDocument ? ((r = (t = y.implementation.createHTMLDocument("")).createElement("base")).href = y.location.href, t.head.appendChild(r)) : t = y), o = !n && [], (i = E.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && T(o).remove(), T.merge([], i.childNodes)));
        var r, i, o;
      }, T.fn.load = function (e, t, n) {
        var r,
            i,
            o,
            s = this,
            a = e.indexOf(" ");
        return a > -1 && (r = bt(e.slice(a)), e = e.slice(0, a)), v(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), s.length > 0 && T.ajax({
          url: e,
          type: i || "GET",
          dataType: "html",
          data: t
        }).done(function (e) {
          o = arguments, s.html(r ? T("<div>").append(T.parseHTML(e)).find(r) : e);
        }).always(n && function (e, t) {
          s.each(function () {
            n.apply(this, o || [e.responseText, t, e]);
          });
        }), this;
      }, T.expr.pseudos.animated = function (e) {
        return T.grep(T.timers, function (t) {
          return e === t.elem;
        }).length;
      }, T.offset = {
        setOffset: function setOffset(e, t, n) {
          var r,
              i,
              o,
              s,
              a,
              l,
              c = T.css(e, "position"),
              u = T(e),
              f = {};
          "static" === c && (e.style.position = "relative"), a = u.offset(), o = T.css(e, "top"), l = T.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (s = (r = u.position()).top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(l) || 0), v(t) && (t = t.call(e, n, T.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), u.css(f));
        }
      }, T.fn.extend({
        offset: function offset(e) {
          if (arguments.length) return void 0 === e ? this : this.each(function (t) {
            T.offset.setOffset(this, e, t);
          });
          var t,
              n,
              r = this[0];
          return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
            top: t.top + n.pageYOffset,
            left: t.left + n.pageXOffset
          }) : {
            top: 0,
            left: 0
          } : void 0;
        },
        position: function position() {
          if (this[0]) {
            var e,
                t,
                n,
                r = this[0],
                i = {
              top: 0,
              left: 0
            };
            if ("fixed" === T.css(r, "position")) t = r.getBoundingClientRect();else {
              for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === T.css(e, "position");) {
                e = e.parentNode;
              }

              e && e !== r && 1 === e.nodeType && ((i = T(e).offset()).top += T.css(e, "borderTopWidth", !0), i.left += T.css(e, "borderLeftWidth", !0));
            }
            return {
              top: t.top - i.top - T.css(r, "marginTop", !0),
              left: t.left - i.left - T.css(r, "marginLeft", !0)
            };
          }
        },
        offsetParent: function offsetParent() {
          return this.map(function () {
            for (var e = this.offsetParent; e && "static" === T.css(e, "position");) {
              e = e.offsetParent;
            }

            return e || oe;
          });
        }
      }), T.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
      }, function (e, t) {
        var n = "pageYOffset" === t;

        T.fn[e] = function (r) {
          return $(this, function (e, r, i) {
            var o;
            if (b(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
            o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
          }, e, r, arguments.length);
        };
      }), T.each(["top", "left"], function (e, t) {
        T.cssHooks[t] = Xe(g.pixelPosition, function (e, n) {
          if (n) return n = We(e, t), He.test(n) ? T(e).position()[t] + "px" : n;
        });
      }), T.each({
        Height: "height",
        Width: "width"
      }, function (e, t) {
        T.each({
          padding: "inner" + e,
          content: t,
          "": "outer" + e
        }, function (n, r) {
          T.fn[r] = function (i, o) {
            var s = arguments.length && (n || "boolean" != typeof i),
                a = n || (!0 === i || !0 === o ? "margin" : "border");
            return $(this, function (t, n, i) {
              var o;
              return b(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? T.css(t, n, a) : T.style(t, n, i, a);
            }, t, s ? i : void 0, s);
          };
        });
      }), T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        T.fn[t] = function (e) {
          return this.on(t, e);
        };
      }), T.fn.extend({
        bind: function bind(e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function unbind(e, t) {
          return this.off(e, null, t);
        },
        delegate: function delegate(e, t, n, r) {
          return this.on(t, e, n, r);
        },
        undelegate: function undelegate(e, t, n) {
          return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        },
        hover: function hover(e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        }
      }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        T.fn[t] = function (e, n) {
          return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
      });
      var Yt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      T.proxy = function (e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = a.call(arguments, 2), (i = function i() {
          return e.apply(t || this, r.concat(a.call(arguments)));
        }).guid = e.guid = e.guid || T.guid++, i;
      }, T.holdReady = function (e) {
        e ? T.readyWait++ : T.ready(!0);
      }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = D, T.isFunction = v, T.isWindow = b, T.camelCase = V, T.type = w, T.now = Date.now, T.isNumeric = function (e) {
        var t = T.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
      }, T.trim = function (e) {
        return null == e ? "" : (e + "").replace(Yt, "");
      }, void 0 === (r = function () {
        return T;
      }.apply(t, [])) || (e.exports = r);
      var Kt = n.jQuery,
          Zt = n.$;
      return T.noConflict = function (e) {
        return n.$ === T && (n.$ = Zt), e && n.jQuery === T && (n.jQuery = Kt), T;
      }, void 0 === i && (n.jQuery = n.$ = T), T;
    });
  }, function (e, t, n) {
    "use strict";

    n.r(t);
    var r = n(0),
        i = n.n(r),
        o = n(1),
        s = n.n(o),
        a = n(2);

    function l() {
      return (l = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];

          for (var r in n) {
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
        }

        return e;
      }).apply(this, arguments);
    }

    function c(e, t) {
      if (null == e) return {};

      var n,
          r,
          i = function (e, t) {
        if (null == e) return {};
        var n,
            r,
            i = {},
            o = Object.keys(e);

        for (r = 0; r < o.length; r++) {
          n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        }

        return i;
      }(e, t);

      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);

        for (r = 0; r < o.length; r++) {
          n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        }
      }

      return i;
    }

    var u = function u(e) {
      var t = e.mathquillDidMount,
          n = e.children,
          o = c(e, ["mathquillDidMount", "children"]),
          s = Object(r.useRef)(null),
          u = Object(r.useRef)(null);
      return Object(r.useEffect)(function () {
        s && (u.current = a.a.StaticMath(s.current), t && t(u.current));
      }, [s]), i.a.createElement("span", l({}, o, {
        ref: s
      }), n);
    };

    u.propTypes = {
      children: s.a.string,
      mathquillDidMount: s.a.func
    }, t["default"] = u;
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9), __webpack_require__(10)(module)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./index.js
var index = __webpack_require__(1);

// CONCATENATED MODULE: ./examples/src/EditableMathExample.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

 // import the library


var initialLatex = '\\cos\\left(A\\right)=\\frac{b^2+c^2-a^2}{2\\cdot b\\cdot c}';

var EditableMathExample_EditableMathExample = /*#__PURE__*/function (_React$Component) {
  _inherits(EditableMathExample, _React$Component);

  var _super = _createSuper(EditableMathExample);

  function EditableMathExample(props) {
    var _this;

    _classCallCheck(this, EditableMathExample);

    _this = _super.call(this, props);
    _this.state = {
      latex: initialLatex,
      text: ''
    };
    _this.mathQuillEl = null;

    _this.resetField = function () {
      _this.mathQuillEl.latex(initialLatex);
    };

    return _this;
  }

  _createClass(EditableMathExample, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react_default.a.createElement("div", null, "Math field:", ' ', /*#__PURE__*/react_default.a.createElement(index["EditableMathField"], {
        className: "mathquill-example-field",
        latex: this.state.latex,
        onChange: function onChange(mathField) {
          var latex = mathField.latex();
          var text = mathField.text();
          console.log('latex changed:', latex);
          console.log('text changed:', text);

          _this2.setState({
            latex: latex,
            text: text
          });
        },
        mathquillDidMount: function mathquillDidMount(el) {
          _this2.mathQuillEl = el;
        }
      }), /*#__PURE__*/react_default.a.createElement("div", {
        className: "result-container"
      }, /*#__PURE__*/react_default.a.createElement("span", null, "Raw latex:"), /*#__PURE__*/react_default.a.createElement("span", {
        className: "result-latex"
      }, this.state.latex)), /*#__PURE__*/react_default.a.createElement("div", {
        className: "result-container"
      }, /*#__PURE__*/react_default.a.createElement("span", null, "Raw text:"), /*#__PURE__*/react_default.a.createElement("span", {
        className: "result-latex"
      }, this.state.text)), /*#__PURE__*/react_default.a.createElement("button", {
        onClick: this.resetField
      }, "Reset field"));
    }
  }]);

  return EditableMathExample;
}(react_default.a.Component);

/* harmony default export */ var src_EditableMathExample = (EditableMathExample_EditableMathExample);
// CONCATENATED MODULE: ./examples/src/StaticMathExample.js
function StaticMathExample_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { StaticMathExample_typeof = function _typeof(obj) { return typeof obj; }; } else { StaticMathExample_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return StaticMathExample_typeof(obj); }

function StaticMathExample_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function StaticMathExample_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function StaticMathExample_createClass(Constructor, protoProps, staticProps) { if (protoProps) StaticMathExample_defineProperties(Constructor.prototype, protoProps); if (staticProps) StaticMathExample_defineProperties(Constructor, staticProps); return Constructor; }

function StaticMathExample_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) StaticMathExample_setPrototypeOf(subClass, superClass); }

function StaticMathExample_setPrototypeOf(o, p) { StaticMathExample_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return StaticMathExample_setPrototypeOf(o, p); }

function StaticMathExample_createSuper(Derived) { var hasNativeReflectConstruct = StaticMathExample_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = StaticMathExample_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = StaticMathExample_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return StaticMathExample_possibleConstructorReturn(this, result); }; }

function StaticMathExample_possibleConstructorReturn(self, call) { if (call && (StaticMathExample_typeof(call) === "object" || typeof call === "function")) { return call; } return StaticMathExample_assertThisInitialized(self); }

function StaticMathExample_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function StaticMathExample_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function StaticMathExample_getPrototypeOf(o) { StaticMathExample_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return StaticMathExample_getPrototypeOf(o); }

 // import the library


var firstLatex = 'e=mc^2';
var secondLatex = '\\frac {\\sqrt{2}} {2\\cdot 2}';

var StaticMathExample_StaticMathExample = /*#__PURE__*/function (_React$Component) {
  StaticMathExample_inherits(StaticMathExample, _React$Component);

  var _super = StaticMathExample_createSuper(StaticMathExample);

  function StaticMathExample(props) {
    var _this;

    StaticMathExample_classCallCheck(this, StaticMathExample);

    _this = _super.call(this, props);
    _this.state = {
      latex: firstLatex
    };
    _this.mathQuillEl = null;

    _this.onChange = function () {
      _this.setState({
        latex: _this.state.latex == firstLatex ? secondLatex : firstLatex
      });
    };

    return _this;
  }

  StaticMathExample_createClass(StaticMathExample, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("h1", null, "Static Math Example"), /*#__PURE__*/react_default.a.createElement(index["StaticMathField"], null, this.state.latex), /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("button", {
        onClick: this.onChange
      }, "Change"));
    }
  }]);

  return StaticMathExample;
}(react_default.a.Component);

/* harmony default export */ var src_StaticMathExample = (StaticMathExample_StaticMathExample);
// CONCATENATED MODULE: ./examples/src/App.js

 // import the styles




Object(index["addStyles"])();

var App_App = function App() {
  return /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement(src_EditableMathExample, null), /*#__PURE__*/react_default.a.createElement(src_StaticMathExample, null));
};

react_dom_default.a.render( /*#__PURE__*/react_default.a.createElement(App_App, null), document.getElementById('app'));

/***/ })
/******/ ]);
//# sourceMappingURL=script.js.map