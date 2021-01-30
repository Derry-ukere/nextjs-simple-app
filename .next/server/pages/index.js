module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/data.json":
/*!************************!*\
  !*** ./data/data.json ***!
  \************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":0,\"animation\":\"card\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra.\"},{\"id\":1,\"animation\":\"card\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra.\"},{\"id\":2,\"animation\":\"card\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra.\"},{\"id\":3,\"animation\":\"card\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra.\"},{\"id\":4,\"animation\":\"card\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra.\"},{\"id\":5,\"animation\":\"card\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra.\"},{\"id\":6,\"animation\":\"card\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra.\"},{\"id\":7,\"animation\":\"card\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra.\"},{\"id\":8,\"animation\":\"card\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra.\"},{\"id\":9,\"animation\":\"card\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra.\"},{\"id\":10,\"animation\":\"card\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra.\"},{\"id\":11,\"animation\":\"card\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra.\"},{\"id\":12,\"animation\":\"card\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra.\"},{\"id\":13,\"animation\":\"card\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra.\"},{\"id\":14,\"animation\":\"card\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra.\"},{\"id\":15,\"animation\":\"card\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra.\"},{\"id\":16,\"animation\":\"card\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra.\"},{\"id\":17,\"animation\":\"card\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra.\"}]");

/***/ }),

/***/ "./pages/Card.css":
/*!************************!*\
  !*** ./pages/Card.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/Card.js":
/*!***********************!*\
  !*** ./pages/Card.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.css */ "./pages/Card.css");
/* harmony import */ var _Card_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Derry-uk\\Desktop\\work space\\projects\\Web Apps\\00 practise\\nextjs practise\\nextJS\\pages\\Card.js";


const Card = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  className: "card",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "front",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "/static/juice.jpg",
      alt: "Avatar",
      className: "card-image"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: ["Vitamin Juice ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "price",
          children: "$24.99"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 29
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Need a jump on your vitamins while drinking? Tired of popping the pills? Drink our vitamin enhanced juice, available in several flavours."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 7
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./pages/index.css":
/*!*************************!*\
  !*** ./pages/index.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ "./store.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.css */ "./pages/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Card */ "./pages/Card.js");

var _jsxFileName = "C:\\Users\\Derry-uk\\Desktop\\work space\\projects\\Web Apps\\00 practise\\nextjs practise\\nextJS\\pages\\index.js";







class Index extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  static async getInitialProps({
    store
  }) {
    return store.dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_3__["initialCards"])());
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
        className: "App-header",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/static/logo.png",
          className: "static-logo",
          alt: "logo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "Grid",
        children: this.props.cards.map(card => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {}, card.id, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this);
  }

}

const mapDispatchToProps = dispatch => {
  return {
    initialCards: Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(_store__WEBPACK_IMPORTED_MODULE_3__["initialCards"], dispatch),
    addItem: Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(_store__WEBPACK_IMPORTED_MODULE_3__["addItem"], dispatch)
  };
};

const mapstateToProps = state => {
  return {
    cards: state.cards
  };
};

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default()(_store__WEBPACK_IMPORTED_MODULE_3__["initStore"], mapstateToProps, mapDispatchToProps)(Index));

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: initialCards, addItem, reducer, initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialCards", function() { return initialCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItem", function() { return addItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/data.json */ "./data/data.json");
var _data_data_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/data.json */ "./data/data.json", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // initial states

const startState = {
  cards: []
}; // redux actions

const initialCards = () => {
  return {
    type: 'INITIALCARDS',
    cards: _data_data_json__WEBPACK_IMPORTED_MODULE_3__
  };
};
const addItem = item => {
  return {
    types: 'ADDS',
    item
  };
}; // redux reucers

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIALCARDS':
      return {
        cards: action.cards
      };

    case 'ADD':
      return _objectSpread(_objectSpread({}, state), {}, {
        cards: [...state.cards, action.item]
      });

    default:
      return state;
  }
}; // create store

const initStore = (initialState = startState) => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a)));
};

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiJdLCJuYW1lcyI6WyJDYXJkIiwicHJvcHMiLCJJbmRleCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwic3RvcmUiLCJkaXNwYXRjaCIsImluaXRpYWxDYXJkcyIsInJlbmRlciIsImNhcmRzIiwibWFwIiwiY2FyZCIsImlkIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiYWRkSXRlbSIsIm1hcHN0YXRlVG9Qcm9wcyIsInN0YXRlIiwid2l0aFJlZHV4IiwiaW5pdFN0b3JlIiwic3RhcnRTdGF0ZSIsInR5cGUiLCJkYXRhIiwiaXRlbSIsInR5cGVzIiwicmVkdWNlciIsImluaXRpYWxTdGF0ZSIsImFjdGlvbiIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rTWlkZGxld2FyZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFD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Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL0NhcmQuY3NzJztcblxuY29uc3QgQ2FyZCA9IChwcm9wcykgPT4gIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJvbnRcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2p1aWNlLmpwZ1wiIGFsdD1cIkF2YXRhclwiIGNsYXNzTmFtZT1cImNhcmQtaW1hZ2VcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxoMz5WaXRhbWluIEp1aWNlIDxzcGFuIGNsYXNzTmFtZT1cInByaWNlXCI+JDI0Ljk5PC9zcGFuPjwvaDM+IFxuICAgICAgICAgIDxwPk5lZWQgYSBqdW1wIG9uIHlvdXIgdml0YW1pbnMgd2hpbGUgZHJpbmtpbmc/IFRpcmVkIG9mIHBvcHBpbmcgdGhlIHBpbGxzPyBcbiAgICAgICAgICAgIERyaW5rIG91ciB2aXRhbWluIGVuaGFuY2VkIGp1aWNlLCBhdmFpbGFibGUgaW4gc2V2ZXJhbCBmbGF2b3Vycy48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHsgaW5pdFN0b3JlLCBpbml0aWFsQ2FyZHMsIGFkZEl0ZW0gfSBmcm9tICcuLi9zdG9yZSdcclxuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXHJcbmltcG9ydCAnLi9pbmRleC5jc3MnXHJcbmltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZCdcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgc3RvcmUgfSkge1xyXG4gICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGluaXRpYWxDYXJkcygpKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT0nQXBwLWhlYWRlcic+XHJcbiAgICAgICAgICA8aW1nIHNyYz0nL3N0YXRpYy9sb2dvLnBuZycgY2xhc3NOYW1lPSdzdGF0aWMtbG9nbycgYWx0PSdsb2dvJyAvPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdHcmlkJz5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmNhcmRzLm1hcCgoY2FyZCkgPT4gKFxyXG4gICAgICAgICAgICA8Q2FyZCBrZXk9e2NhcmQuaWR9IC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgaW5pdGlhbENhcmRzOiBiaW5kQWN0aW9uQ3JlYXRvcnMoaW5pdGlhbENhcmRzLCBkaXNwYXRjaCksXHJcbiAgICBhZGRJdGVtOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWRkSXRlbSwgZGlzcGF0Y2gpLFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFwc3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGNhcmRzOiBzdGF0ZS5jYXJkcyxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChpbml0U3RvcmUsIG1hcHN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShJbmRleClcclxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xyXG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJ1xyXG5pbXBvcnQgZGF0YSBmcm9tICcuL2RhdGEvZGF0YS5qc29uJ1xyXG5cclxuLy8gaW5pdGlhbCBzdGF0ZXNcclxuY29uc3Qgc3RhcnRTdGF0ZSA9IHtcclxuICBjYXJkczogW10sXHJcbn1cclxuXHJcbi8vIHJlZHV4IGFjdGlvbnNcclxuZXhwb3J0IGNvbnN0IGluaXRpYWxDYXJkcyA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogJ0lOSVRJQUxDQVJEUycsXHJcbiAgICBjYXJkczogZGF0YSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRJdGVtID0gKGl0ZW0pID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZXM6ICdBRERTJyxcclxuICAgIGl0ZW0sXHJcbiAgfVxyXG59XHJcblxyXG4vLyByZWR1eCByZXVjZXJzXHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSAnSU5JVElBTENBUkRTJzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBjYXJkczogYWN0aW9uLmNhcmRzLFxyXG4gICAgICB9XHJcbiAgICBjYXNlICdBREQnOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNhcmRzOiBbLi4uc3RhdGUuY2FyZHMsIGFjdGlvbi5pdGVtXSxcclxuICAgICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG4vLyBjcmVhdGUgc3RvcmVcclxuZXhwb3J0IGNvbnN0IGluaXRTdG9yZSA9IChpbml0aWFsU3RhdGUgPSBzdGFydFN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxyXG4gICAgcmVkdWNlcixcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpXHJcbiAgKVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=