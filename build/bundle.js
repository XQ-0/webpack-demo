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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

var _addImage = __webpack_require__(2);

var _addImage2 = _interopRequireDefault(_addImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log((0, _sum2.default)(1, 2));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (a, b) {
    return a + b;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

var smallImg = document.createElement('img'); // let smallImg = document.createElement('img')
// // 必须 require 进来
// smallImg.src = require('../images/small.png')
// document.body.appendChild(smallImg)

// let bigImg = document.createElement('img')
// bigImg.src = require('../images/big.jpg')
// document.body.appendChild(bigImg)

smallImg.src = __webpack_require__(4);
document.body.appendChild(smallImg);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"test":"_2-AxcSaQBPXGeJRLE8Ocue"};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAQlBMVEUAAAAxlu08m+75/P+OxvWBv/TY6/zs9v252/mx1/it1fh6u/NXqfBGoe/i8PxpsvKk0ffk8f3M5fuazPZutfI1mO19br+2AAAAAXRSTlMAQObYZgAAAKlJREFUKM+F09sOgjAQhOGZaWsrVMHT+7+qiVFYqF3+249NE7KLpVBSFamaSsC+HMUlxbzVQdykwWAY2TSGRSf+afr5Ont5ysx/3+XSHTPXPu9nM3DC2bAygMgeMwJBfVZAYZ9ZkDxOqB5XyGOBHnPPt8uWRdMDuFoXKm1x6xWJjicUOl4Q1Hpafyoid6X5tX6JLHZSNuvQNphlahuPV9FfZP8Mjo/IP8E3q2AGV6KQLmoAAAAASUVORK5CYII="

/***/ })
/******/ ]);