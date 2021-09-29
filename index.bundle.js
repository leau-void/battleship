/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Gameboard/Gameboard.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Gameboard/Gameboard.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".label {\n  font-size: 2rem;\n}\n\n.label_hidden {\n  display: none;\n}\n\n.board {\n  margin-top: 1rem;\n  width: 40vmin;\n  height: 40vmin;\n  border: 2px solid black;\n  display: grid;\n  grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n  transition: transform 1.2s ease-in-out;\n  transform-origin: bottom left;\n}\n\n.board_size_s {\n  transform: scale(0.85);\n}\n\n.board__cell {\n  border: 1px solid black;\n  box-sizing: border-box;\n  position: relative;\n}\n\n.board__shot {\n  opacity: 1;\n  position: absolute;\n  z-index: 99;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.board__target {\n  width: fit-content;\n  height: fit-content;\n  font-size: 3.5vmin;\n  margin-top: -0.3vmin;\n\n  -webkit-user-select: none; /* Safari */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* IE10+/Edge */\n  user-select: none; /* Standard */\n}\n\n.board__shot::after {\n  position: absolute;\n  display: block;\n  content: '';\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  opacity: 0.4;\n}\n\n.board_hit::after {\n  background: red;\n}\n\n.board_miss::after {\n  background: rgb(0, 0, 94);\n}\n", "",{"version":3,"sources":["webpack://./src/Gameboard/Gameboard.css"],"names":[],"mappings":"AAAA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,cAAc;EACd,uBAAuB;EACvB,aAAa;EACb,gDAAgD;EAChD,sCAAsC;EACtC,6BAA6B;AAC/B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,YAAY;EACZ,MAAM;EACN,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,oBAAoB;;EAEpB,yBAAyB,EAAE,WAAW;EACtC,sBAAsB,EAAE,YAAY;EACpC,qBAAqB,EAAE,eAAe;EACtC,iBAAiB,EAAE,aAAa;AAClC;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,WAAW;EACX,WAAW;EACX,YAAY;EACZ,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B","sourcesContent":[".label {\n  font-size: 2rem;\n}\n\n.label_hidden {\n  display: none;\n}\n\n.board {\n  margin-top: 1rem;\n  width: 40vmin;\n  height: 40vmin;\n  border: 2px solid black;\n  display: grid;\n  grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n  transition: transform 1.2s ease-in-out;\n  transform-origin: bottom left;\n}\n\n.board_size_s {\n  transform: scale(0.85);\n}\n\n.board__cell {\n  border: 1px solid black;\n  box-sizing: border-box;\n  position: relative;\n}\n\n.board__shot {\n  opacity: 1;\n  position: absolute;\n  z-index: 99;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.board__target {\n  width: fit-content;\n  height: fit-content;\n  font-size: 3.5vmin;\n  margin-top: -0.3vmin;\n\n  -webkit-user-select: none; /* Safari */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* IE10+/Edge */\n  user-select: none; /* Standard */\n}\n\n.board__shot::after {\n  position: absolute;\n  display: block;\n  content: '';\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  opacity: 0.4;\n}\n\n.board_hit::after {\n  background: red;\n}\n\n.board_miss::after {\n  background: rgb(0, 0, 94);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Ship/Ship.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Ship/Ship.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ship {\n  --length: 200%;\n  width: 100%;\n  min-width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 99;\n  box-sizing: border-box;\n  opacity: 0.8;\n  background: #e26e01;\n  border-radius: 5px;\n}\n\n.board .ship {\n  border-radius: 0;\n}\n\n.board_player2 .ship {\n  display: none;\n}\n\n.board_player2 .ship.ship_sunk {\n  display: block;\n}\n\n.ship_sunk {\n  opacity: 1;\n}\n\n.ship_is-horizontal_true {\n  width: var(--length);\n  height: 100%;\n}\n\n.ship_is-horizontal_false {\n  height: var(--length);\n  width: 100%;\n  /*\n  transform: translateY(-100%) rotate(90deg);\n  transform-origin: bottom left;\n  */\n}\n\n.ship_length_5 {\n  --length: calc(500% + 8px);\n}\n\n.ship_length_4 {\n  --length: calc(400% + 6px);\n}\n\n.ship_length_3 {\n  --length: calc(300% + 4px);\n}\n\n.ship_length_2 {\n  --length: calc(200% + 2px);\n}\n", "",{"version":3,"sources":["webpack://./src/Ship/Ship.css"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,WAAW;EACX,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,sBAAsB;EACtB,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,oBAAoB;EACpB,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX;;;GAGC;AACH;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,0BAA0B;AAC5B","sourcesContent":[".ship {\n  --length: 200%;\n  width: 100%;\n  min-width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 99;\n  box-sizing: border-box;\n  opacity: 0.8;\n  background: #e26e01;\n  border-radius: 5px;\n}\n\n.board .ship {\n  border-radius: 0;\n}\n\n.board_player2 .ship {\n  display: none;\n}\n\n.board_player2 .ship.ship_sunk {\n  display: block;\n}\n\n.ship_sunk {\n  opacity: 1;\n}\n\n.ship_is-horizontal_true {\n  width: var(--length);\n  height: 100%;\n}\n\n.ship_is-horizontal_false {\n  height: var(--length);\n  width: 100%;\n  /*\n  transform: translateY(-100%) rotate(90deg);\n  transform-origin: bottom left;\n  */\n}\n\n.ship_length_5 {\n  --length: calc(500% + 8px);\n}\n\n.ship_length_4 {\n  --length: calc(400% + 6px);\n}\n\n.ship_length_3 {\n  --length: calc(300% + 4px);\n}\n\n.ship_length_2 {\n  --length: calc(200% + 2px);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./styles/normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_setup_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./styles/setup.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/setup.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_modal_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./styles/modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/modal.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_console_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./styles/console.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/console.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_6__);
// Imports







var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/github-mark.png */ "./src/assets/github-mark.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_normalize_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Text:wght@700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=PT+Mono&display=swap);"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_setup_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_modal_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_console_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_6___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".body {\n  min-height: 100vh;\n  box-sizing: border-box;\n  background: lightgrey;\n  font-family: 'Big Shoulders Stencil Text', cursive;\n  font-weight: 700;\n  letter-spacing: 0.1rem;\n  overflow-y: hidden;\n}\n\n.header {\n  padding-top: 3vh;\n  text-align: center;\n  font-size: max(1.5rem, 5vw);\n  letter-spacing: 1rem;\n  margin: 0;\n  margin-bottom: 2vh;\n  position: relative;\n  z-index: 101;\n}\n\n.h1 {\n  margin: 0;\n}\n\n.main {\n  display: flex;\n  flex-direction: row;\n  gap: 5vw;\n  padding: 2vw;\n  margin: 0 2vw;\n  justify-content: space-evenly;\n}\n\n.github-link {\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  height: fit-content;\n  width: fit-content;\n  z-index: 102;\n}\n\n.github-img {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  height: auto;\n  width: auto;\n  max-width: 40px;\n  max-height: 40px;\n}\n", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"AAOA;EACE,iBAAiB;EACjB,sBAAsB;EACtB,qBAAqB;EACrB,kDAAkD;EAClD,gBAAgB;EAChB,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,2BAA2B;EAC3B,oBAAoB;EACpB,SAAS;EACT,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,eAAe;EACf,SAAS;EACT,WAAW;EACX,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,gDAAwC;EACxC,YAAY;EACZ,WAAW;EACX,eAAe;EACf,gBAAgB;AAClB","sourcesContent":["@import './styles/normalize.css';\n@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Text:wght@700&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=PT+Mono&display=swap');\n@import './styles/setup.css';\n@import './styles/modal.css';\n@import './styles/console.css';\n\n.body {\n  min-height: 100vh;\n  box-sizing: border-box;\n  background: lightgrey;\n  font-family: 'Big Shoulders Stencil Text', cursive;\n  font-weight: 700;\n  letter-spacing: 0.1rem;\n  overflow-y: hidden;\n}\n\n.header {\n  padding-top: 3vh;\n  text-align: center;\n  font-size: max(1.5rem, 5vw);\n  letter-spacing: 1rem;\n  margin: 0;\n  margin-bottom: 2vh;\n  position: relative;\n  z-index: 101;\n}\n\n.h1 {\n  margin: 0;\n}\n\n.main {\n  display: flex;\n  flex-direction: row;\n  gap: 5vw;\n  padding: 2vw;\n  margin: 0 2vw;\n  justify-content: space-evenly;\n}\n\n.github-link {\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  height: fit-content;\n  width: fit-content;\n  z-index: 102;\n}\n\n.github-img {\n  content: url('./assets/github-mark.png');\n  height: auto;\n  width: auto;\n  max-width: 40px;\n  max-height: 40px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/console.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/console.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".background-console {\n  height: 100vh;\n  background: #121212;\n}\n\n.console {\n  box-sizing: border-box;\n  width: 100vw;\n  height: 15vmin;\n  background: #121212;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.console__output {\n  margin-left: 5vw;\n  font-family: 'PT Mono', monospace;\n  border-right: 2px solid rgba(255, 255, 255, 0.75);\n  font-size: min(150%, 2.5vw);\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  transform: translateY(-50%);\n  max-width: fit-content;\n  margin-top: 3vh;\n}\n\n/* Animation */\n.anim-typewriter {\n  animation: typewriter 2.5s steps(44) 0s 1 normal both,\n    blinkTextCursor 500ms steps(44) infinite normal;\n}\n@keyframes typewriter {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n@keyframes blinkTextCursor {\n  from {\n    border-right-color: rgba(255, 255, 255, 0.75);\n  }\n  to {\n    border-right-color: transparent;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/console.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,cAAc;EACd,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,iCAAiC;EACjC,iDAAiD;EACjD,2BAA2B;EAC3B,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,2BAA2B;EAC3B,sBAAsB;EACtB,eAAe;AACjB;;AAEA,cAAc;AACd;EACE;mDACiD;AACnD;AACA;EACE;IACE,QAAQ;EACV;EACA;IACE,WAAW;EACb;AACF;AACA;EACE;IACE,6CAA6C;EAC/C;EACA;IACE,+BAA+B;EACjC;AACF","sourcesContent":[".background-console {\n  height: 100vh;\n  background: #121212;\n}\n\n.console {\n  box-sizing: border-box;\n  width: 100vw;\n  height: 15vmin;\n  background: #121212;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.console__output {\n  margin-left: 5vw;\n  font-family: 'PT Mono', monospace;\n  border-right: 2px solid rgba(255, 255, 255, 0.75);\n  font-size: min(150%, 2.5vw);\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  transform: translateY(-50%);\n  max-width: fit-content;\n  margin-top: 3vh;\n}\n\n/* Animation */\n.anim-typewriter {\n  animation: typewriter 2.5s steps(44) 0s 1 normal both,\n    blinkTextCursor 500ms steps(44) infinite normal;\n}\n@keyframes typewriter {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n@keyframes blinkTextCursor {\n  from {\n    border-right-color: rgba(255, 255, 255, 0.75);\n  }\n  to {\n    border-right-color: transparent;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/modal.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/modal.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  left: 0;\n  z-index: 100;\n  transition: opacity 1.5s linear;\n}\n\n.modal_transparent {\n  opacity: 0;\n}\n\n.modal_hidden {\n  display: none;\n}\n\n.modal__form {\n  position: relative;\n  z-index: 101;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 10vh auto;\n  font-size: 1.5rem;\n  height: 30vh;\n  justify-content: space-evenly;\n}\n\n.modal__input {\n  outline: none;\n  padding: 0.5rem;\n  margin-top: 0.5rem;\n  letter-spacing: 0.1rem;\n  width: 20rem;\n  background: lightgrey;\n  border: 0;\n  border-left: 3px solid transparent;\n}\n\n.modal__input:focus {\n  border-left: 3px solid #121212;\n}\n\n.modal__button {\n}\n\n.modal__background {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: gray;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/modal.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,YAAY;EACZ,WAAW;EACX,OAAO;EACP,YAAY;EACZ,+BAA+B;AACjC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,sBAAsB;EACtB,YAAY;EACZ,qBAAqB;EACrB,SAAS;EACT,kCAAkC;AACpC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;AACA;;AAEA;EACE,eAAe;EACf,MAAM;EACN,WAAW;EACX,YAAY;EACZ,gBAAgB;AAClB","sourcesContent":[".modal {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  left: 0;\n  z-index: 100;\n  transition: opacity 1.5s linear;\n}\n\n.modal_transparent {\n  opacity: 0;\n}\n\n.modal_hidden {\n  display: none;\n}\n\n.modal__form {\n  position: relative;\n  z-index: 101;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 10vh auto;\n  font-size: 1.5rem;\n  height: 30vh;\n  justify-content: space-evenly;\n}\n\n.modal__input {\n  outline: none;\n  padding: 0.5rem;\n  margin-top: 0.5rem;\n  letter-spacing: 0.1rem;\n  width: 20rem;\n  background: lightgrey;\n  border: 0;\n  border-left: 3px solid transparent;\n}\n\n.modal__input:focus {\n  border-left: 3px solid #121212;\n}\n\n.modal__button {\n}\n\n.modal__background {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: gray;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n  \n  /* Sections\n     ========================================================================== */\n  \n  /**\n   * Remove the margin in all browsers.\n   */\n  \n  body {\n    margin: 0;\n  }\n  \n  /**\n   * Render the `main` element consistently in IE.\n   */\n  \n  main {\n    display: block;\n  }\n  \n  /**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n  \n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n  \n  /* Grouping content\n     ========================================================================== */\n  \n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n  \n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /* Text-level semantics\n     ========================================================================== */\n  \n  /**\n   * Remove the gray background on active links in IE 10.\n   */\n  \n  a {\n    background-color: transparent;\n  }\n  \n  /**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n  \n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n  \n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n  \n  b,\n  strong {\n    font-weight: bolder;\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /**\n   * Add the correct font size in all browsers.\n   */\n  \n  small {\n    font-size: 80%;\n  }\n  \n  /**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n  \n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  \n  sub {\n    bottom: -0.25em;\n  }\n  \n  sup {\n    top: -0.5em;\n  }\n  \n  /* Embedded content\n     ========================================================================== */\n  \n  /**\n   * Remove the border on images inside links in IE 10.\n   */\n  \n  img {\n    border-style: none;\n  }\n  \n  /* Forms\n     ========================================================================== */\n  \n  /**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n  \n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n  }\n  \n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n  \n  button,\n  input { /* 1 */\n    overflow: visible;\n  }\n  \n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n  \n  button,\n  select { /* 1 */\n    text-transform: none;\n  }\n  \n  /**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n  \n  button,\n  [type=\"button\"],\n  [type=\"reset\"],\n  [type=\"submit\"] {\n    -webkit-appearance: button;\n  }\n  \n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n  \n  button::-moz-focus-inner,\n  [type=\"button\"]::-moz-focus-inner,\n  [type=\"reset\"]::-moz-focus-inner,\n  [type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n  \n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n  \n  button:-moz-focusring,\n  [type=\"button\"]:-moz-focusring,\n  [type=\"reset\"]:-moz-focusring,\n  [type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n  \n  /**\n   * Correct the padding in Firefox.\n   */\n  \n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n  \n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n  \n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n  \n  /**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n  \n  progress {\n    vertical-align: baseline;\n  }\n  \n  /**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n  \n  textarea {\n    overflow: auto;\n  }\n  \n  /**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n  \n  [type=\"checkbox\"],\n  [type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n  \n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n  \n  [type=\"number\"]::-webkit-inner-spin-button,\n  [type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n  \n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n  \n  [type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n  \n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n  \n  [type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  \n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n  \n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n  \n  /* Interactive\n     ========================================================================== */\n  \n  /*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n  \n  details {\n    display: block;\n  }\n  \n  /*\n   * Add the correct display in all browsers.\n   */\n  \n  summary {\n    display: list-item;\n  }\n  \n  /* Misc\n     ========================================================================== */\n  \n  /**\n   * Add the correct display in IE 10+.\n   */\n  \n  template {\n    display: none;\n  }\n  \n  /**\n   * Add the correct display in IE 10.\n   */\n  \n  [hidden] {\n    display: none;\n  }", "",{"version":3,"sources":["webpack://./src/styles/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;CAED;IACG,iBAAiB,EAAE,MAAM;IACzB,8BAA8B,EAAE,MAAM;EACxC;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,SAAS;EACX;;EAEA;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;;IAGE;;EAEF;IACE,cAAc;IACd,gBAAgB;EAClB;;EAEA;iFAC+E;;EAE/E;;;IAGE;;EAEF;IACE,uBAAuB,EAAE,MAAM;IAC/B,SAAS,EAAE,MAAM;IACjB,iBAAiB,EAAE,MAAM;EAC3B;;EAEA;;;IAGE;;EAEF;IACE,iCAAiC,EAAE,MAAM;IACzC,cAAc,EAAE,MAAM;EACxB;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,6BAA6B;EAC/B;;EAEA;;;IAGE;;EAEF;IACE,mBAAmB,EAAE,MAAM;IAC3B,0BAA0B,EAAE,MAAM;IAClC,iCAAiC,EAAE,MAAM;EAC3C;;EAEA;;IAEE;;EAEF;;IAEE,mBAAmB;EACrB;;EAEA;;;IAGE;;EAEF;;;IAGE,iCAAiC,EAAE,MAAM;IACzC,cAAc,EAAE,MAAM;EACxB;;EAEA;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;;IAGE;;EAEF;;IAEE,cAAc;IACd,cAAc;IACd,kBAAkB;IAClB,wBAAwB;EAC1B;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,WAAW;EACb;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,kBAAkB;EACpB;;EAEA;iFAC+E;;EAE/E;;;IAGE;;EAEF;;;;;IAKE,oBAAoB,EAAE,MAAM;IAC5B,eAAe,EAAE,MAAM;IACvB,iBAAiB,EAAE,MAAM;IACzB,SAAS,EAAE,MAAM;EACnB;;EAEA;;;IAGE;;EAEF;UACQ,MAAM;IACZ,iBAAiB;EACnB;;EAEA;;;IAGE;;EAEF;WACS,MAAM;IACb,oBAAoB;EACtB;;EAEA;;IAEE;;EAEF;;;;IAIE,0BAA0B;EAC5B;;EAEA;;IAEE;;EAEF;;;;IAIE,kBAAkB;IAClB,UAAU;EACZ;;EAEA;;IAEE;;EAEF;;;;IAIE,8BAA8B;EAChC;;EAEA;;IAEE;;EAEF;IACE,8BAA8B;EAChC;;EAEA;;;;;IAKE;;EAEF;IACE,sBAAsB,EAAE,MAAM;IAC9B,cAAc,EAAE,MAAM;IACtB,cAAc,EAAE,MAAM;IACtB,eAAe,EAAE,MAAM;IACvB,UAAU,EAAE,MAAM;IAClB,mBAAmB,EAAE,MAAM;EAC7B;;EAEA;;IAEE;;EAEF;IACE,wBAAwB;EAC1B;;EAEA;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;;IAGE;;EAEF;;IAEE,sBAAsB,EAAE,MAAM;IAC9B,UAAU,EAAE,MAAM;EACpB;;EAEA;;IAEE;;EAEF;;IAEE,YAAY;EACd;;EAEA;;;IAGE;;EAEF;IACE,6BAA6B,EAAE,MAAM;IACrC,oBAAoB,EAAE,MAAM;EAC9B;;EAEA;;IAEE;;EAEF;IACE,wBAAwB;EAC1B;;EAEA;;;IAGE;;EAEF;IACE,0BAA0B,EAAE,MAAM;IAClC,aAAa,EAAE,MAAM;EACvB;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;IAEE;;EAEF;IACE,kBAAkB;EACpB;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,aAAa;EACf;;EAEA;;IAEE;;EAEF;IACE,aAAa;EACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n  \n  /* Sections\n     ========================================================================== */\n  \n  /**\n   * Remove the margin in all browsers.\n   */\n  \n  body {\n    margin: 0;\n  }\n  \n  /**\n   * Render the `main` element consistently in IE.\n   */\n  \n  main {\n    display: block;\n  }\n  \n  /**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n  \n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n  \n  /* Grouping content\n     ========================================================================== */\n  \n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n  \n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /* Text-level semantics\n     ========================================================================== */\n  \n  /**\n   * Remove the gray background on active links in IE 10.\n   */\n  \n  a {\n    background-color: transparent;\n  }\n  \n  /**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n  \n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n  \n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n  \n  b,\n  strong {\n    font-weight: bolder;\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /**\n   * Add the correct font size in all browsers.\n   */\n  \n  small {\n    font-size: 80%;\n  }\n  \n  /**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n  \n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  \n  sub {\n    bottom: -0.25em;\n  }\n  \n  sup {\n    top: -0.5em;\n  }\n  \n  /* Embedded content\n     ========================================================================== */\n  \n  /**\n   * Remove the border on images inside links in IE 10.\n   */\n  \n  img {\n    border-style: none;\n  }\n  \n  /* Forms\n     ========================================================================== */\n  \n  /**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n  \n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n  }\n  \n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n  \n  button,\n  input { /* 1 */\n    overflow: visible;\n  }\n  \n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n  \n  button,\n  select { /* 1 */\n    text-transform: none;\n  }\n  \n  /**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n  \n  button,\n  [type=\"button\"],\n  [type=\"reset\"],\n  [type=\"submit\"] {\n    -webkit-appearance: button;\n  }\n  \n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n  \n  button::-moz-focus-inner,\n  [type=\"button\"]::-moz-focus-inner,\n  [type=\"reset\"]::-moz-focus-inner,\n  [type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n  \n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n  \n  button:-moz-focusring,\n  [type=\"button\"]:-moz-focusring,\n  [type=\"reset\"]:-moz-focusring,\n  [type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n  \n  /**\n   * Correct the padding in Firefox.\n   */\n  \n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n  \n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n  \n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n  \n  /**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n  \n  progress {\n    vertical-align: baseline;\n  }\n  \n  /**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n  \n  textarea {\n    overflow: auto;\n  }\n  \n  /**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n  \n  [type=\"checkbox\"],\n  [type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n  \n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n  \n  [type=\"number\"]::-webkit-inner-spin-button,\n  [type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n  \n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n  \n  [type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n  \n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n  \n  [type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  \n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n  \n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n  \n  /* Interactive\n     ========================================================================== */\n  \n  /*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n  \n  details {\n    display: block;\n  }\n  \n  /*\n   * Add the correct display in all browsers.\n   */\n  \n  summary {\n    display: list-item;\n  }\n  \n  /* Misc\n     ========================================================================== */\n  \n  /**\n   * Add the correct display in IE 10+.\n   */\n  \n  template {\n    display: none;\n  }\n  \n  /**\n   * Add the correct display in IE 10.\n   */\n  \n  [hidden] {\n    display: none;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/setup.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/setup.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".setup {\n  width: 50%;\n  background: rgb(0, 0, 94);\n  display: flex;\n  flex-direction: column;\n}\n\n.ship-port {\n  width: 100%;\n  height: 25vmin;\n  padding: 2vmin 0;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: flex-start;\n}\n\n.ship-port__anchor {\n  width: 3.7vmin;\n  height: 3.7vmin;\n  border-bottom: none;\n}\n\n.button {\n  padding: 20px;\n  background: transparent;\n  border: 2px solid lightgray;\n  color: white;\n  margin: 10px;\n  font-size: 1.4rem;\n  letter-spacing: 0.1rem;\n  background: #121212;\n}\n\n.ship-port_rotated {\n  flex-direction: column;\n  align-items: center;\n  margin-left: -5vmin;\n}\n\n.button:active {\n  background: lightgray;\n  color: #121212;\n  border-color: #121212;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/setup.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,yBAAyB;EACzB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,gBAAgB;EAChB,aAAa;EACb,6BAA6B;EAC7B,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,2BAA2B;EAC3B,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,cAAc;EACd,qBAAqB;AACvB","sourcesContent":[".setup {\n  width: 50%;\n  background: rgb(0, 0, 94);\n  display: flex;\n  flex-direction: column;\n}\n\n.ship-port {\n  width: 100%;\n  height: 25vmin;\n  padding: 2vmin 0;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: flex-start;\n}\n\n.ship-port__anchor {\n  width: 3.7vmin;\n  height: 3.7vmin;\n  border-bottom: none;\n}\n\n.button {\n  padding: 20px;\n  background: transparent;\n  border: 2px solid lightgray;\n  color: white;\n  margin: 10px;\n  font-size: 1.4rem;\n  letter-spacing: 0.1rem;\n  background: #121212;\n}\n\n.ship-port_rotated {\n  flex-direction: column;\n  align-items: center;\n  margin-left: -5vmin;\n}\n\n.button:active {\n  background: lightgray;\n  color: #121212;\n  border-color: #121212;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/Gameboard/Gameboard.css":
/*!*************************************!*\
  !*** ./src/Gameboard/Gameboard.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Gameboard_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./Gameboard.css */ "./node_modules/css-loader/dist/cjs.js!./src/Gameboard/Gameboard.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Gameboard_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Gameboard_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Gameboard_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Gameboard_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/Ship/Ship.css":
/*!***************************!*\
  !*** ./src/Ship/Ship.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Ship_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./Ship.css */ "./node_modules/css-loader/dist/cjs.js!./src/Ship/Ship.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Ship_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Ship_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Ship_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Ship_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DisplayController/DisplayController.js":
/*!****************************************************!*\
  !*** ./src/DisplayController/DisplayController.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _buildElementsTree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buildElementsTree */ "./src/DisplayController/buildElementsTree.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ player1, player2 }) => {
  const populateBoard = ({ board, cacheDOM }) => {
    board.getRows().forEach((row) => {
      board.getColumns().forEach((column) => {
        const elem = {
          tag: 'div',
          classes: ['board__cell'],
          attributes: { 'data-coords': `${column}${row}` },
        };
        cacheDOM.appendChild((0,_buildElementsTree__WEBPACK_IMPORTED_MODULE_0__["default"])(elem));
      });
    });
  };

  const displayShips = ({ board, cacheDOM, shipsArray }) => {
    const ships = shipsArray || board.getShips();
    ships.forEach(({ ship, pos }, index) => {
      const elem = {
        tag: 'div',
        classes: ['ship', `ship_is-horizontal_${ship.isHorizontal}`, `ship_length_${ship.length}`],
      };
      if (shipsArray) elem.attributes = { draggable: 'true', 'data-index': index };
      if (ship.isSunk()) elem.classes.push('ship_sunk');
      const target = cacheDOM.querySelector(`[data-coords=${pos[0]}]`);
      target.appendChild((0,_buildElementsTree__WEBPACK_IMPORTED_MODULE_0__["default"])(elem));
    });
  };

  const displayShots = ({ board, cacheDOM }) => {
    const hits = board.getHits();
    const misses = board.getMisses();
    const elemObj = {
      tag: 'div',
      classes: ['board__target'],
      text: '\u25CE',
    };

    hits.forEach((hit) => {
      const elem = {
        tag: 'div',
        classes: ['board__shot', 'board_hit'],
        children: [elemObj],
      };
      const target = cacheDOM.querySelector(`[data-coords=${hit}]`);
      target.appendChild((0,_buildElementsTree__WEBPACK_IMPORTED_MODULE_0__["default"])(elem));
    });

    misses.forEach((miss) => {
      const elem = {
        tag: 'div',
        classes: ['board__shot', 'board_miss'],
        children: [elemObj],
      };
      const target = cacheDOM.querySelector(`[data-coords=${miss}]`);
      target.appendChild((0,_buildElementsTree__WEBPACK_IMPORTED_MODULE_0__["default"])(elem));
    });
  };

  const updateDisplay = () => {
    [player1, player2].forEach((player) => {
      player.cacheDOM.replaceChildren();
      populateBoard(player);
      displayShips(player);
      displayShots(player);
    });
  };

  return { updateDisplay, displayShips };
});


/***/ }),

/***/ "./src/DisplayController/buildElementsTree.js":
/*!****************************************************!*\
  !*** ./src/DisplayController/buildElementsTree.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildElementsTree)
/* harmony export */ });
function buildElementsTree(obj) {
  const element = document.createElement(obj.tag);

  Object.keys(obj).forEach((prop) => {
    switch (prop) {
      case 'tag':
        break;
      case 'classes':
        obj.classes.forEach((cssClass) => element.classList.add(cssClass));
        break;
      case 'text':
        element.textContent = obj.text;
        break;
      case 'attributes':
        Object.keys(obj[prop]).forEach((attr) => element.setAttribute(attr, obj[prop][attr]));
        //  obj.attributes.forEach((attribute) => element.setAttribute(attribute[0], attribute[1]));
        break;
      case 'children':
        obj.children.forEach((child) => {
          element.appendChild(buildElementsTree(child));
        });
        break;
      default:
    }
  });

  return element;
}


/***/ }),

/***/ "./src/Gameboard/Gameboard.js":
/*!************************************!*\
  !*** ./src/Gameboard/Gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Gameboard_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard.css */ "./src/Gameboard/Gameboard.css");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  const ships = [];
  const hits = [];
  const misses = [];

  const getRows = () => [...rows];
  const getColumns = () => [...columns];
  const getShips = () => [...ships];
  const getHits = () => [...hits];
  const getMisses = () => [...misses];

  const getRelPositions = ({ length, targetArray, start }) => {
    const startIndex = targetArray.findIndex((curr) => curr === start);
    return [...targetArray].splice(startIndex, length);
  };

  const getTargetArrayAndStart = ({ ship, row, column }) => {
    const targetArray = ship.isHorizontal ? columns : rows;
    const start = targetArray === rows ? row : column;
    return { targetArray, start };
  };

  const getAbsPositions = ({ ship, row, column }) => {
    const { targetArray, start } = getTargetArrayAndStart({ ship, row, column });
    return getRelPositions({ length: ship.length, targetArray, start }).map((pos) => {
      if (targetArray === rows) return `${column}${pos}`;
      return `${pos}${row}`;
    });
  };

  const checkOverlap = function checkOverlapWithEveryShip(pos) {
    return pos.every((position) => ships.every((ship) => !ship.pos.includes(position)));
  };

  const checkPlace = function checkCanPlaceThere({ ship, row, column, pos }) {
    const posArray = pos || getAbsPositions({ ship, row, column });
    if (posArray.length !== ship.length) return false;
    return checkOverlap(posArray);
  };

  const placeShip = function placeShipBoard({ ship, row, column }) {
    const pos = getAbsPositions({ ship, row, column });
    const canPlace = checkPlace({ ship, row, column, pos });
    if (!canPlace) return false;

    ships.push({ ship, row, column, pos });
    return true;
  };

  const receiveAttack = function receiveAttack(coords) {
    const target = ships.find((shipObj) => shipObj.pos.includes(coords));
    if (target) {
      target.ship.hit(target.pos.findIndex((curr) => curr === coords));
      hits.push(coords);
    } else misses.push(coords);
    document.dispatchEvent(new Event('receivedAttack'));
  };

  const isAllSunk = () => ships.every((shipObj) => shipObj.ship.isSunk());

  const removeShip = (ship) => {
    const index = ships.findIndex((shipObj) => shipObj.ship === ship);
    if (index > -1) return ships.splice(index, 1)[0];
    return false;
  };

  const randomize = (ship) => ({
    ship,
    row: rows[Math.round(Math.random() * 9)],
    column: columns[Math.round(Math.random() * 9)],
  });

  const placeRandom = (shipsArray) => {
    const newShips = shipsArray.map((ship) => {
      const newShip = { ...ship };
      newShip.isHorizontal = Boolean(Math.round(Math.random()));
      return newShip;
    });
    newShips.forEach((ship) => {
      let shipObj = randomize(ship);
      while (!placeShip(shipObj)) {
        shipObj = randomize(ship);
      }
    });
  };

  return {
    getRows,
    getColumns,
    getShips,
    placeShip,
    checkPlace,
    receiveAttack,
    isAllSunk,
    getHits,
    getMisses,
    removeShip,
    placeRandom,
  };
});


/***/ }),

/***/ "./src/Player/Player.js":
/*!******************************!*\
  !*** ./src/Player/Player.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ name, starts, isHuman, self, enemy }) => {
  const getName = () => name;
  const setName = (string) => {
    name = string;
  };
  const getSelf = () => self;
  const getEnemy = () => enemy;
  const isTurn = starts;

  const posNotUsed = (pos) =>
    [...enemy.getHits(), ...enemy.getMisses()].every((curr) => curr !== pos);

  const randomAttack = () => {
    const row = Math.round(Math.random() * 9 + 1);
    const column = String.fromCharCode(Math.round(Math.random() * 9 + 1) + 96);
    const pos = `${column}${row}`;
    if (posNotUsed(pos)) return pos;
    return randomAttack();
  };

  const attack = (pos) => {
    if (pos && posNotUsed(pos)) enemy.receiveAttack(pos);
    else if (!isHuman) enemy.receiveAttack(randomAttack());
  };

  const switchTurn = function swapTurns() {
    this.isTurn = !this.isTurn;

    if (this.isTurn && !isHuman) attack();
  };

  return { getName, isTurn, switchTurn, getSelf, getEnemy, attack, setName };
});


/***/ }),

/***/ "./src/Ship/Ship.js":
/*!**************************!*\
  !*** ./src/Ship/Ship.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ isHorizontal, name }) => {
  const alreadySunk = false;

  const lengthTable = {
    Carrier: 5,
    Battleship: 4,
    Cruiser: 3,
    Submarine: 3,
    Destroyer: 2,
  };
  const length = lengthTable[name];

  const hits = [];
  const hit = function addHit(pos) {
    if (pos >= length || pos < 0) return;
    hits.push(pos);
  };
  const isSunk = function checkIfSunk() {
    const sunk = hits.length === this.length;
    if (sunk && !this.alreadySunk) {
      const e = new CustomEvent('shipSunk', { detail: name });
      document.dispatchEvent(e);

      this.alreadySunk = true;
    }
    return sunk;
  };

  return { length, isHorizontal, name, isSunk, hit };
});


/***/ }),

/***/ "./src/Ship/wrapCreateShips.js":
/*!*************************************!*\
  !*** ./src/Ship/wrapCreateShips.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/Ship/Ship.js");
/* harmony import */ var _Ship_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship.css */ "./src/Ship/Ship.css");



const wrapCreateShips = () => [
  (0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])({
    isHorizontal: false,
    name: 'Carrier',
  }),

  (0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])({
    isHorizontal: false,
    name: 'Battleship',
  }),

  (0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])({
    isHorizontal: false,
    name: 'Cruiser',
  }),

  (0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])({
    isHorizontal: false,
    name: 'Submarine',
  }),

  (0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])({
    isHorizontal: false,
    name: 'Destroyer',
  }),
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wrapCreateShips);


/***/ }),

/***/ "./src/assets/github-mark.png":
/*!************************************!*\
  !*** ./src/assets/github-mark.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d8c6d6c90bdccf76d860.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ship_wrapCreateShips__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship/wrapCreateShips */ "./src/Ship/wrapCreateShips.js");
/* harmony import */ var _Gameboard_Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard/Gameboard */ "./src/Gameboard/Gameboard.js");
/* harmony import */ var _Player_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player/Player */ "./src/Player/Player.js");
/* harmony import */ var _DisplayController_DisplayController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DisplayController/DisplayController */ "./src/DisplayController/DisplayController.js");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main.css */ "./src/main.css");






// setup
const domPlayer1 = document.querySelector('.board_player1');
const domPlayer2 = document.querySelector('.board_player2');

const textOutput1 = document.querySelector('.console__line-1');
const textOutput2 = document.querySelector('.console__line-2');

const boardPlayer1 = (0,_Gameboard_Gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])();
const boardPlayer2 = (0,_Gameboard_Gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])();

const player = (0,_Player_Player__WEBPACK_IMPORTED_MODULE_2__["default"])({
  name: 'The Human',
  isHuman: true,
  starts: true,
  self: boardPlayer1,
  enemy: boardPlayer2,
});

const cpu = (0,_Player_Player__WEBPACK_IMPORTED_MODULE_2__["default"])({
  name: 'The Computer',
  isHuman: false,
  starts: false,
  self: boardPlayer2,
  enemy: boardPlayer1,
});

const refObj = {
  player1: {
    player,
    board: boardPlayer1,
    cacheDOM: domPlayer1,
  },
  player2: {
    player: cpu,
    board: boardPlayer2,
    cacheDOM: domPlayer2,
  },
};

const displayController = (0,_DisplayController_DisplayController__WEBPACK_IMPORTED_MODULE_3__["default"])(refObj);

boardPlayer2.placeRandom((0,_Ship_wrapCreateShips__WEBPACK_IMPORTED_MODULE_0__["default"])());
displayController.updateDisplay();

const shipsPlayer1 = {
  shipsArray: (0,_Ship_wrapCreateShips__WEBPACK_IMPORTED_MODULE_0__["default"])().map((ship, index) => ({ ship, pos: [`p${index}`] })),
  cacheDOM: document.querySelector('.ship-port'),
};

displayController.displayShips(shipsPlayer1);

// functions
const sendTextOutput = (string1, string2) => {
  textOutput1.classList.remove('anim-typewriter');
  window.setTimeout(() => {
    textOutput1.textContent = string1;
    textOutput2.textContent = '';
    textOutput1.classList.add('anim-typewriter');
  }, 10);

  textOutput2.classList.remove('anim-typewriter');
  window.setTimeout(() => {
    textOutput2.textContent = string2;
    textOutput2.classList.add('anim-typewriter');
  }, 1500);
};

const handleAttack = (e) => {
  const target = e.target.closest('[data-coords]');
  if (player.isTurn && target) player.attack(target.dataset.coords);
};

const checkEnd = ({ player1, player2 }) => {
  const players = [player1, player2];
  const loser = players.find(({ board }) => board.isAllSunk());

  if (loser) return players.find((curr) => curr !== loser);
  return false;
};

const handleEnd = (winner) => {
  sendTextOutput(`${winner.player.getName()} wins!`);
  winner.player.switchTurn();
};

const dragstartHandler = (e) => {
  e.target.style.top = `unset`;
  e.target.style.left = `unset`;
  const {
    target: {
      dataset: { index },
    },
  } = e;
  const horizClass = [...e.target.classList].find((className) => className.includes('horizontal'));
  const isHoriz = horizClass.split('_')[2];
  shipsPlayer1.shipsArray[index].ship.isHorizontal = isHoriz === 'true';

  e.dataTransfer.setData('text/plain', `${index}`);
};

const parseSize = (string) => Math.round(Number(string.replace(/[px]/g, '')));

const mouseDownHandler = (e) => {
  const targetStyles = window.getComputedStyle(e.target);
  const width = parseSize(targetStyles.getPropertyValue('width'));
  const height = parseSize(targetStyles.getPropertyValue('height'));
  const smallest = width < height ? width : height;

  const offsetX = (e.offsetX || e.layerX) - smallest / 2;
  const offsetY = (e.offsetY || e.layerY) - smallest / 2;

  e.target.style.top = `${offsetY}px`;
  e.target.style.left = `${offsetX}px`;
};

const mouseUpHandler = (e) => {
  e.target.style.top = `unset`;
  e.target.style.left = `unset`;
};

const start = () => {
  if (document.querySelectorAll('.ship-port__anchor .ship').length) return;
  document.querySelector('.setup').style.display = 'none';
  domPlayer1.classList.add('board_size_s');
  document.querySelector('.label_player2').classList.remove('label_hidden');
  window.setTimeout(() => domPlayer2.classList.remove('board_size_s'), 0);
  displayController.updateDisplay();
  domPlayer2.addEventListener('click', (e) => handleAttack(e));
  sendTextOutput('You can attack the Enemy Fleet by clicking on a cell.', 'Good luck!');
};

// eventListeners
document.querySelector('.modal__button').addEventListener('click', (e) => {
  const modal = document.querySelector('.modal');
  e.preventDefault();
  player.setName(document.querySelector('.modal__input').value || 'Player One');
  modal.classList.add('modal_transparent');
  window.setTimeout(() => {
    modal.classList.add('modal_hidden');
    sendTextOutput(
      `Welcome ${player.getName()}, please place your Fleet.`,
      'You can Drag and Drop or generate a random placement.'
    );
  }, 500);
});

domPlayer1.addEventListener('dragover', (e) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
});
domPlayer1.addEventListener('drop', (e) => {
  e.preventDefault();
  if (!e.target.classList.contains('board__cell')) return;

  const data = e.dataTransfer.getData('text/plain');
  const pos = e.target.dataset.coords;

  const obj = {
    ship: shipsPlayer1.shipsArray[Number(data)].ship,
    row: Number(pos.slice(1)),
    column: pos.charAt(0),
  };

  const oldShip = boardPlayer1.removeShip(obj.ship);

  const isPlaced = boardPlayer1.placeShip(obj);

  if (isPlaced) e.target.appendChild(document.querySelector(`[data-index="${data}"]`));
  if (!isPlaced) boardPlayer1.placeShip(oldShip);
});

const shipsDiv = document.querySelectorAll('[data-index]');
shipsDiv.forEach((div) => {
  div.addEventListener('dragstart', dragstartHandler);
  div.addEventListener('mousedown', mouseDownHandler);
  div.addEventListener('mouseup', mouseUpHandler);
});

document.querySelector('.setup__rotate').addEventListener('click', (e) => {
  document.querySelector('.ship-port').classList.toggle('ship-port_rotated');
  const shipsInPort = document.querySelectorAll('.ship-port__anchor .ship');
  shipsInPort.forEach((div) => div.classList.toggle('ship_is-horizontal_false'));
  shipsInPort.forEach((div) => div.classList.toggle('ship_is-horizontal_true'));
});

document.querySelector('.setup__random').addEventListener('click', () => {
  const shipsPlaced = boardPlayer1.getShips().map((shipObj) => shipObj.ship.name);
  const notPlacedShips = (0,_Ship_wrapCreateShips__WEBPACK_IMPORTED_MODULE_0__["default"])().filter((ship) => !shipsPlaced.includes(ship.name));
  boardPlayer1.placeRandom(notPlacedShips);
  displayController.updateDisplay();
  document.querySelector('.ship-port').replaceChildren();
  start();
});

document.querySelector('.setup__start').addEventListener('click', start);

document.addEventListener('receivedAttack', () => {
  displayController.updateDisplay();

  const winner = checkEnd(refObj);
  if (!winner) {
    player.switchTurn();
    cpu.switchTurn();
  } else handleEnd(winner);
});

document.addEventListener('shipSunk', (e) => {
  const who = player.isTurn ? player : cpu;
  const other = who === player ? cpu : player;
  const string =
    who === player
      ? `You have sunk ${other.getName()}'s ${e.detail}!`
      : `${other.getName()} has sunk your ${e.detail}!`;
  sendTextOutput(string);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsTUFBTSxLQUFLLHNCQUFzQixxQkFBcUIsdUJBQXVCLE9BQU8sT0FBTyxNQUFNLEtBQUssc0JBQXNCLHFCQUFxQixPQUFPLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssc0JBQXNCLHVCQUF1Qix1QkFBdUIsT0FBTyxNQUFNLE1BQU0sTUFBTSxZQUFZLE9BQU8sT0FBTyxNQUFNLE9BQU8sc0JBQXNCLHFCQUFxQixPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxPQUFPLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFFBQVEsUUFBUSxNQUFNLFNBQVMsc0JBQXNCLHFCQUFxQix1QkFBdUIscUJBQXFCLE9BQU8sT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxNQUFNLFFBQVEsWUFBWSxPQUFPLE1BQU0sTUFBTSxRQUFRLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxRQUFRLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sU0FBUyxNQUFNLEtBQUssc0JBQXNCLHFCQUFxQixxQkFBcUIscUJBQXFCLHFCQUFxQix1QkFBdUIsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLE9BQU8sTUFBTSxNQUFNLHNCQUFzQixxQkFBcUIsT0FBTyxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxNQUFNLEtBQUssc0JBQXNCLHVCQUF1QixPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxzQkFBc0IscUJBQXFCLE9BQU8sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxRQUFRLE9B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QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBLDBDQUEwQyxNQUFNO0FBQ2hEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwQkFBMEIsUUFBUTtBQUNsQywyQkFBMkIsUUFBUTtBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSw0RUFBNEUsS0FBSztBQUNqRjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLHlCQUF5QixpRUFBZTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0JBQWdCLEtBQUssU0FBUztBQUN2RCxXQUFXLGlCQUFpQixnQkFBZ0IsU0FBUztBQUNyRDtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0dhbWVib2FyZC9HYW1lYm9hcmQuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvU2hpcC9TaGlwLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21haW4uY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2NvbnNvbGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL21vZGFsLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9ub3JtYWxpemUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3NldHVwLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9HYW1lYm9hcmQvR2FtZWJvYXJkLmNzcz83NTcyIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvU2hpcC9TaGlwLmNzcz9hYTM1Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbWFpbi5jc3M/ZGRkMyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvRGlzcGxheUNvbnRyb2xsZXIvRGlzcGxheUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9EaXNwbGF5Q29udHJvbGxlci9idWlsZEVsZW1lbnRzVHJlZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0dhbWVib2FyZC9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9QbGF5ZXIvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvU2hpcC9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvU2hpcC93cmFwQ3JlYXRlU2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmxhYmVsX2hpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIHdpZHRoOiA0MHZtaW47XFxuICBoZWlnaHQ6IDQwdm1pbjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMWZyKSAvIHJlcGVhdCgxMCwgMWZyKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxLjJzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxufVxcblxcbi5ib2FyZF9zaXplX3Mge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjg1KTtcXG59XFxuXFxuLmJvYXJkX19jZWxsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmJvYXJkX19zaG90IHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA5OTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkX190YXJnZXQge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGZvbnQtc2l6ZTogMy41dm1pbjtcXG4gIG1hcmdpbi10b3A6IC0wLjN2bWluO1xcblxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBGaXJlZm94ICovXFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFMTArL0VkZ2UgKi9cXG4gIHVzZXItc2VsZWN0OiBub25lOyAvKiBTdGFuZGFyZCAqL1xcbn1cXG5cXG4uYm9hcmRfX3Nob3Q6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29udGVudDogJyc7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAtMTtcXG4gIG9wYWNpdHk6IDAuNDtcXG59XFxuXFxuLmJvYXJkX2hpdDo6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cXG4uYm9hcmRfbWlzczo6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDk0KTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL0dhbWVib2FyZC9HYW1lYm9hcmQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZ0RBQWdEO0VBQ2hELHNDQUFzQztFQUN0Qyw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osTUFBTTtFQUNOLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsb0JBQW9COztFQUVwQix5QkFBeUIsRUFBRSxXQUFXO0VBQ3RDLHNCQUFzQixFQUFFLFlBQVk7RUFDcEMscUJBQXFCLEVBQUUsZUFBZTtFQUN0QyxpQkFBaUIsRUFBRSxhQUFhO0FBQ2xDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5sYWJlbCB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5sYWJlbF9oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICB3aWR0aDogNDB2bWluO1xcbiAgaGVpZ2h0OiA0MHZtaW47XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDFmcikgLyByZXBlYXQoMTAsIDFmcik7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS4ycyBlYXNlLWluLW91dDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcbn1cXG5cXG4uYm9hcmRfc2l6ZV9zIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC44NSk7XFxufVxcblxcbi5ib2FyZF9fY2VsbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ib2FyZF9fc2hvdCB7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogOTk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZF9fdGFyZ2V0IHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBmb250LXNpemU6IDMuNXZtaW47XFxuICBtYXJnaW4tdG9wOiAtMC4zdm1pbjtcXG5cXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogRmlyZWZveCAqL1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRTEwKy9FZGdlICovXFxuICB1c2VyLXNlbGVjdDogbm9uZTsgLyogU3RhbmRhcmQgKi9cXG59XFxuXFxuLmJvYXJkX19zaG90OjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogLTE7XFxuICBvcGFjaXR5OiAwLjQ7XFxufVxcblxcbi5ib2FyZF9oaXQ6OmFmdGVyIHtcXG4gIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuXFxuLmJvYXJkX21pc3M6OmFmdGVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYigwLCAwLCA5NCk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zaGlwIHtcXG4gIC0tbGVuZ3RoOiAyMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiA5OTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBiYWNrZ3JvdW5kOiAjZTI2ZTAxO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uYm9hcmQgLnNoaXAge1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuXFxuLmJvYXJkX3BsYXllcjIgLnNoaXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmJvYXJkX3BsYXllcjIgLnNoaXAuc2hpcF9zdW5rIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uc2hpcF9zdW5rIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zaGlwX2lzLWhvcml6b250YWxfdHJ1ZSB7XFxuICB3aWR0aDogdmFyKC0tbGVuZ3RoKTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnNoaXBfaXMtaG9yaXpvbnRhbF9mYWxzZSB7XFxuICBoZWlnaHQ6IHZhcigtLWxlbmd0aCk7XFxuICB3aWR0aDogMTAwJTtcXG4gIC8qXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpIHJvdGF0ZSg5MGRlZyk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG4gICovXFxufVxcblxcbi5zaGlwX2xlbmd0aF81IHtcXG4gIC0tbGVuZ3RoOiBjYWxjKDUwMCUgKyA4cHgpO1xcbn1cXG5cXG4uc2hpcF9sZW5ndGhfNCB7XFxuICAtLWxlbmd0aDogY2FsYyg0MDAlICsgNnB4KTtcXG59XFxuXFxuLnNoaXBfbGVuZ3RoXzMge1xcbiAgLS1sZW5ndGg6IGNhbGMoMzAwJSArIDRweCk7XFxufVxcblxcbi5zaGlwX2xlbmd0aF8yIHtcXG4gIC0tbGVuZ3RoOiBjYWxjKDIwMCUgKyAycHgpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvU2hpcC9TaGlwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWDs7O0dBR0M7QUFDSDs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2hpcCB7XFxuICAtLWxlbmd0aDogMjAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogOTk7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgb3BhY2l0eTogMC44O1xcbiAgYmFja2dyb3VuZDogI2UyNmUwMTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmJvYXJkIC5zaGlwIHtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxufVxcblxcbi5ib2FyZF9wbGF5ZXIyIC5zaGlwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5ib2FyZF9wbGF5ZXIyIC5zaGlwLnNoaXBfc3VuayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnNoaXBfc3VuayB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2hpcF9pcy1ob3Jpem9udGFsX3RydWUge1xcbiAgd2lkdGg6IHZhcigtLWxlbmd0aCk7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5zaGlwX2lzLWhvcml6b250YWxfZmFsc2Uge1xcbiAgaGVpZ2h0OiB2YXIoLS1sZW5ndGgpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAvKlxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKSByb3RhdGUoOTBkZWcpO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxuICAqL1xcbn1cXG5cXG4uc2hpcF9sZW5ndGhfNSB7XFxuICAtLWxlbmd0aDogY2FsYyg1MDAlICsgOHB4KTtcXG59XFxuXFxuLnNoaXBfbGVuZ3RoXzQge1xcbiAgLS1sZW5ndGg6IGNhbGMoNDAwJSArIDZweCk7XFxufVxcblxcbi5zaGlwX2xlbmd0aF8zIHtcXG4gIC0tbGVuZ3RoOiBjYWxjKDMwMCUgKyA0cHgpO1xcbn1cXG5cXG4uc2hpcF9sZW5ndGhfMiB7XFxuICAtLWxlbmd0aDogY2FsYygyMDAlICsgMnB4KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy9ub3JtYWxpemUuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzL3NldHVwLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy9tb2RhbC5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzNfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMvY29uc29sZS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZ2l0aHViLW1hcmsucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CaWcrU2hvdWxkZXJzK1N0ZW5jaWwrVGV4dDp3Z2h0QDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QVCtNb25vJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XFxuICBmb250LWZhbWlseTogJ0JpZyBTaG91bGRlcnMgU3RlbmNpbCBUZXh0JywgY3Vyc2l2ZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIHBhZGRpbmctdG9wOiAzdmg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IG1heCgxLjVyZW0sIDV2dyk7XFxuICBsZXR0ZXItc3BhY2luZzogMXJlbTtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwMTtcXG59XFxuXFxuLmgxIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDV2dztcXG4gIHBhZGRpbmc6IDJ2dztcXG4gIG1hcmdpbjogMCAydnc7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmdpdGh1Yi1saW5rIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMTBweDtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHotaW5kZXg6IDEwMjtcXG59XFxuXFxuLmdpdGh1Yi1pbWcge1xcbiAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiA0MHB4O1xcbiAgbWF4LWhlaWdodDogNDBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQU9BO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsa0RBQWtEO0VBQ2xELGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0Isb0JBQW9CO0VBQ3BCLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLFlBQVk7RUFDWixhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnREFBd0M7RUFDeEMsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4vc3R5bGVzL25vcm1hbGl6ZS5jc3MnO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJpZytTaG91bGRlcnMrU3RlbmNpbCtUZXh0OndnaHRANzAwJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBUK01vbm8mZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCAnLi9zdHlsZXMvc2V0dXAuY3NzJztcXG5AaW1wb3J0ICcuL3N0eWxlcy9tb2RhbC5jc3MnO1xcbkBpbXBvcnQgJy4vc3R5bGVzL2NvbnNvbGUuY3NzJztcXG5cXG4uYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XFxuICBmb250LWZhbWlseTogJ0JpZyBTaG91bGRlcnMgU3RlbmNpbCBUZXh0JywgY3Vyc2l2ZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIHBhZGRpbmctdG9wOiAzdmg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IG1heCgxLjVyZW0sIDV2dyk7XFxuICBsZXR0ZXItc3BhY2luZzogMXJlbTtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwMTtcXG59XFxuXFxuLmgxIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDV2dztcXG4gIHBhZGRpbmc6IDJ2dztcXG4gIG1hcmdpbjogMCAydnc7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmdpdGh1Yi1saW5rIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMTBweDtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHotaW5kZXg6IDEwMjtcXG59XFxuXFxuLmdpdGh1Yi1pbWcge1xcbiAgY29udGVudDogdXJsKCcuL2Fzc2V0cy9naXRodWItbWFyay5wbmcnKTtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiA0MHB4O1xcbiAgbWF4LWhlaWdodDogNDBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmJhY2tncm91bmQtY29uc29sZSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogIzEyMTIxMjtcXG59XFxuXFxuLmNvbnNvbGUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTV2bWluO1xcbiAgYmFja2dyb3VuZDogIzEyMTIxMjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnNvbGVfX291dHB1dCB7XFxuICBtYXJnaW4tbGVmdDogNXZ3O1xcbiAgZm9udC1mYW1pbHk6ICdQVCBNb25vJywgbW9ub3NwYWNlO1xcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcXG4gIGZvbnQtc2l6ZTogbWluKDE1MCUsIDIuNXZ3KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcXG4gIG1hcmdpbi10b3A6IDN2aDtcXG59XFxuXFxuLyogQW5pbWF0aW9uICovXFxuLmFuaW0tdHlwZXdyaXRlciB7XFxuICBhbmltYXRpb246IHR5cGV3cml0ZXIgMi41cyBzdGVwcyg0NCkgMHMgMSBub3JtYWwgYm90aCxcXG4gICAgYmxpbmtUZXh0Q3Vyc29yIDUwMG1zIHN0ZXBzKDQ0KSBpbmZpbml0ZSBub3JtYWw7XFxufVxcbkBrZXlmcmFtZXMgdHlwZXdyaXRlciB7XFxuICBmcm9tIHtcXG4gICAgd2lkdGg6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGJsaW5rVGV4dEN1cnNvciB7XFxuICBmcm9tIHtcXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbnNvbGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osY0FBYztFQUNkLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUNBQWlDO0VBQ2pDLGlEQUFpRDtFQUNqRCwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBLGNBQWM7QUFDZDtFQUNFO21EQUNpRDtBQUNuRDtBQUNBO0VBQ0U7SUFDRSxRQUFRO0VBQ1Y7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGO0FBQ0E7RUFDRTtJQUNFLDZDQUE2QztFQUMvQztFQUNBO0lBQ0UsK0JBQStCO0VBQ2pDO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJhY2tncm91bmQtY29uc29sZSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogIzEyMTIxMjtcXG59XFxuXFxuLmNvbnNvbGUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTV2bWluO1xcbiAgYmFja2dyb3VuZDogIzEyMTIxMjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnNvbGVfX291dHB1dCB7XFxuICBtYXJnaW4tbGVmdDogNXZ3O1xcbiAgZm9udC1mYW1pbHk6ICdQVCBNb25vJywgbW9ub3NwYWNlO1xcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcXG4gIGZvbnQtc2l6ZTogbWluKDE1MCUsIDIuNXZ3KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcXG4gIG1hcmdpbi10b3A6IDN2aDtcXG59XFxuXFxuLyogQW5pbWF0aW9uICovXFxuLmFuaW0tdHlwZXdyaXRlciB7XFxuICBhbmltYXRpb246IHR5cGV3cml0ZXIgMi41cyBzdGVwcyg0NCkgMHMgMSBub3JtYWwgYm90aCxcXG4gICAgYmxpbmtUZXh0Q3Vyc29yIDUwMG1zIHN0ZXBzKDQ0KSBpbmZpbml0ZSBub3JtYWw7XFxufVxcbkBrZXlmcmFtZXMgdHlwZXdyaXRlciB7XFxuICBmcm9tIHtcXG4gICAgd2lkdGg6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGJsaW5rVGV4dEN1cnNvciB7XFxuICBmcm9tIHtcXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubW9kYWwge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjVzIGxpbmVhcjtcXG59XFxuXFxuLm1vZGFsX3RyYW5zcGFyZW50IHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5tb2RhbF9oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1vZGFsX19mb3JtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMTB2aCBhdXRvO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBoZWlnaHQ6IDMwdmg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLm1vZGFsX19pbnB1dCB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gIHdpZHRoOiAyMHJlbTtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5tb2RhbF9faW5wdXQ6Zm9jdXMge1xcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjMTIxMjEyO1xcbn1cXG5cXG4ubW9kYWxfX2J1dHRvbiB7XFxufVxcblxcbi5tb2RhbF9fYmFja2dyb3VuZCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IGdyYXk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbW9kYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsT0FBTztFQUNQLFlBQVk7RUFDWiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7QUFDQTs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cyBsaW5lYXI7XFxufVxcblxcbi5tb2RhbF90cmFuc3BhcmVudCB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4ubW9kYWxfaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tb2RhbF9fZm9ybSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxMDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwdmggYXV0bztcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgaGVpZ2h0OiAzMHZoO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5tb2RhbF9faW5wdXQge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICB3aWR0aDogMjByZW07XFxuICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ubW9kYWxfX2lucHV0OmZvY3VzIHtcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzEyMTIxMjtcXG59XFxuXFxuLm1vZGFsX19idXR0b24ge1xcbn1cXG5cXG4ubW9kYWxfX2JhY2tncm91bmQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBncmF5O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG4gaHRtbCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgfVxcbiAgXFxuICAvKiBTZWN0aW9uc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG4gIFxcbiAgYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gICAqL1xcbiAgXFxuICBtYWluIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAgICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gICAqL1xcbiAgXFxuICBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xcbiAgfVxcbiAgXFxuICAvKiBHcm91cGluZyBjb250ZW50XFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgXFxuICAvKipcXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICAgKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gICAqL1xcbiAgXFxuICBociB7XFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICAgIGhlaWdodDogMDsgLyogMSAqL1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG4gIFxcbiAgcHJlIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgXFxuICAvKipcXG4gICAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gICAqL1xcbiAgXFxuICBhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gICAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG4gIFxcbiAgYWJiclt0aXRsZV0ge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG4gIFxcbiAgYixcXG4gIHN0cm9uZyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBjb2RlLFxcbiAga2JkLFxcbiAgc2FtcCB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuICBcXG4gIHNtYWxsIHtcXG4gICAgZm9udC1zaXplOiA4MCU7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICAgKiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG4gIFxcbiAgc3ViLFxcbiAgc3VwIHtcXG4gICAgZm9udC1zaXplOiA3NSU7XFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIH1cXG4gIFxcbiAgc3ViIHtcXG4gICAgYm90dG9tOiAtMC4yNWVtO1xcbiAgfVxcbiAgXFxuICBzdXAge1xcbiAgICB0b3A6IC0wLjVlbTtcXG4gIH1cXG4gIFxcbiAgLyogRW1iZWRkZWQgY29udGVudFxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAgICovXFxuICBcXG4gIGltZyB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLyogRm9ybXNcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qKlxcbiAgICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICAgKi9cXG4gIFxcbiAgYnV0dG9uLFxcbiAgaW5wdXQsXFxuICBvcHRncm91cCxcXG4gIHNlbGVjdCxcXG4gIHRleHRhcmVhIHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAgIG1hcmdpbjogMDsgLyogMiAqL1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAgICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gICAqL1xcbiAgXFxuICBidXR0b24sXFxuICBpbnB1dCB7IC8qIDEgKi9cXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICAgKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICAgKi9cXG4gIFxcbiAgYnV0dG9uLFxcbiAgc2VsZWN0IHsgLyogMSAqL1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIGJ1dHRvbixcXG4gIFt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG4gIFt0eXBlPVxcXCJyZXNldFxcXCJdLFxcbiAgW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gICAqL1xcbiAgXFxuICBidXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuICBbdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuICBbdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG4gIFt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICAgKi9cXG4gIFxcbiAgYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcbiAgW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcbiAgW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuICBbdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAgICovXFxuICBcXG4gIGZpZWxkc2V0IHtcXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICAgKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICAgKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBsZWdlbmQge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICAgIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICAgIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICAgIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAgICovXFxuICBcXG4gIHByb2dyZXNzIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAgICovXFxuICBcXG4gIHRleHRhcmVhIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICAgKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICAgKi9cXG4gIFxcbiAgW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuICBbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gICAgcGFkZGluZzogMDsgLyogMiAqL1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gICAqL1xcbiAgXFxuICBbdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuICBbdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gICAqL1xcbiAgXFxuICBbdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gICAqL1xcbiAgXFxuICBbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gICAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gICAqL1xcbiAgXFxuICA6Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gICAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbiAgfVxcbiAgXFxuICAvKiBJbnRlcmFjdGl2ZVxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIFxcbiAgLypcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICAgKi9cXG4gIFxcbiAgZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgXFxuICAvKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuICBcXG4gIHN1bW1hcnkge1xcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxuICB9XFxuICBcXG4gIC8qIE1pc2NcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAgICovXFxuICBcXG4gIHRlbXBsYXRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gICAqL1xcbiAgXFxuICBbaGlkZGVuXSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9ub3JtYWxpemUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJFQUEyRTs7QUFFM0U7K0VBQytFOztBQUUv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RTs7RUFFL0U7O0lBRUU7O0VBRUY7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7O0lBRUU7O0VBRUY7SUFDRSxhQUFhO0VBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuIGh0bWwge1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyogU2VjdGlvbnNcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qKlxcbiAgICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuICBcXG4gIGJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICAgKi9cXG4gIFxcbiAgbWFpbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gICAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG4gIFxcbiAgaDEge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luOiAwLjY3ZW0gMDtcXG4gIH1cXG4gIFxcbiAgLyogR3JvdXBpbmcgY29udGVudFxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAgICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICAgKi9cXG4gIFxcbiAgaHIge1xcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuICBcXG4gIHByZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbiAgfVxcbiAgXFxuICAvKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICAgKi9cXG4gIFxcbiAgYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICAgKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIGFiYnJbdGl0bGVdIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIGIsXFxuICBzdHJvbmcge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG4gIFxcbiAgY29kZSxcXG4gIGtiZCxcXG4gIHNhbXAge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBzbWFsbCB7XFxuICAgIGZvbnQtc2l6ZTogODAlO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAgICogYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuICBcXG4gIHN1YixcXG4gIHN1cCB7XFxuICAgIGZvbnQtc2l6ZTogNzUlO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICB9XFxuICBcXG4gIHN1YiB7XFxuICAgIGJvdHRvbTogLTAuMjVlbTtcXG4gIH1cXG4gIFxcbiAgc3VwIHtcXG4gICAgdG9wOiAtMC41ZW07XFxuICB9XFxuICBcXG4gIC8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qKlxcbiAgICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gICAqL1xcbiAgXFxuICBpbWcge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICB9XFxuICBcXG4gIC8qIEZvcm1zXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgXFxuICAvKipcXG4gICAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIGJ1dHRvbixcXG4gIGlucHV0LFxcbiAgb3B0Z3JvdXAsXFxuICBzZWxlY3QsXFxuICB0ZXh0YXJlYSB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgICBtYXJnaW46IDA7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gICAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICAgKi9cXG4gIFxcbiAgYnV0dG9uLFxcbiAgaW5wdXQgeyAvKiAxICovXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAgICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAgICovXFxuICBcXG4gIGJ1dHRvbixcXG4gIHNlbGVjdCB7IC8qIDEgKi9cXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gICAqL1xcbiAgXFxuICBidXR0b24sXFxuICBbdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuICBbdHlwZT1cXFwicmVzZXRcXFwiXSxcXG4gIFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgKi9cXG4gIFxcbiAgYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcbiAgW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcbiAgW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuICBbdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAgICovXFxuICBcXG4gIGJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG4gIFt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG4gIFt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcbiAgW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gICAqL1xcbiAgXFxuICBmaWVsZHNldCB7XFxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAgICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAgICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG4gIFxcbiAgbGVnZW5kIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gICAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gICAqL1xcbiAgXFxuICBwcm9ncmVzcyB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gICAqL1xcbiAgXFxuICB0ZXh0YXJlYSB7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAgICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAgICovXFxuICBcXG4gIFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcbiAgW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICAgKi9cXG4gIFxcbiAgW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbiAgW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICAgKi9cXG4gIFxcbiAgW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICAgKi9cXG4gIFxcbiAgW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICAgKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICAgKi9cXG4gIFxcbiAgOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICAgIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyogSW50ZXJhY3RpdmVcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAgICovXFxuICBcXG4gIGRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIFxcbiAgLypcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBzdW1tYXJ5IHtcXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xcbiAgfVxcbiAgXFxuICAvKiBNaXNjXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgXFxuICAvKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gICAqL1xcbiAgXFxuICB0ZW1wbGF0ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICAgKi9cXG4gIFxcbiAgW2hpZGRlbl0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zZXR1cCB7XFxuICB3aWR0aDogNTAlO1xcbiAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDk0KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2hpcC1wb3J0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyNXZtaW47XFxuICBwYWRkaW5nOiAydm1pbiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5zaGlwLXBvcnRfX2FuY2hvciB7XFxuICB3aWR0aDogMy43dm1pbjtcXG4gIGhlaWdodDogMy43dm1pbjtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcblxcbi5idXR0b24ge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmF5O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgYmFja2dyb3VuZDogIzEyMTIxMjtcXG59XFxuXFxuLnNoaXAtcG9ydF9yb3RhdGVkIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IC01dm1pbjtcXG59XFxuXFxuLmJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xcbiAgY29sb3I6ICMxMjEyMTI7XFxuICBib3JkZXItY29sb3I6ICMxMjEyMTI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc2V0dXAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zZXR1cCB7XFxuICB3aWR0aDogNTAlO1xcbiAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDk0KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2hpcC1wb3J0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyNXZtaW47XFxuICBwYWRkaW5nOiAydm1pbiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5zaGlwLXBvcnRfX2FuY2hvciB7XFxuICB3aWR0aDogMy43dm1pbjtcXG4gIGhlaWdodDogMy43dm1pbjtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcblxcbi5idXR0b24ge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmF5O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgYmFja2dyb3VuZDogIzEyMTIxMjtcXG59XFxuXFxuLnNoaXAtcG9ydF9yb3RhdGVkIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IC01dm1pbjtcXG59XFxuXFxuLmJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xcbiAgY29sb3I6ICMxMjEyMTI7XFxuICBib3JkZXItY29sb3I6ICMxMjEyMTI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dhbWVib2FyZC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dhbWVib2FyZC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU2hpcC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1NoaXAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgYnVpbGRFbGVtZW50c1RyZWUgZnJvbSAnLi9idWlsZEVsZW1lbnRzVHJlZSc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHBsYXllcjEsIHBsYXllcjIgfSkgPT4ge1xuICBjb25zdCBwb3B1bGF0ZUJvYXJkID0gKHsgYm9hcmQsIGNhY2hlRE9NIH0pID0+IHtcbiAgICBib2FyZC5nZXRSb3dzKCkuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICBib2FyZC5nZXRDb2x1bW5zKCkuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW0gPSB7XG4gICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICBjbGFzc2VzOiBbJ2JvYXJkX19jZWxsJ10sXG4gICAgICAgICAgYXR0cmlidXRlczogeyAnZGF0YS1jb29yZHMnOiBgJHtjb2x1bW59JHtyb3d9YCB9LFxuICAgICAgICB9O1xuICAgICAgICBjYWNoZURPTS5hcHBlbmRDaGlsZChidWlsZEVsZW1lbnRzVHJlZShlbGVtKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5U2hpcHMgPSAoeyBib2FyZCwgY2FjaGVET00sIHNoaXBzQXJyYXkgfSkgPT4ge1xuICAgIGNvbnN0IHNoaXBzID0gc2hpcHNBcnJheSB8fCBib2FyZC5nZXRTaGlwcygpO1xuICAgIHNoaXBzLmZvckVhY2goKHsgc2hpcCwgcG9zIH0sIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBlbGVtID0ge1xuICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICBjbGFzc2VzOiBbJ3NoaXAnLCBgc2hpcF9pcy1ob3Jpem9udGFsXyR7c2hpcC5pc0hvcml6b250YWx9YCwgYHNoaXBfbGVuZ3RoXyR7c2hpcC5sZW5ndGh9YF0sXG4gICAgICB9O1xuICAgICAgaWYgKHNoaXBzQXJyYXkpIGVsZW0uYXR0cmlidXRlcyA9IHsgZHJhZ2dhYmxlOiAndHJ1ZScsICdkYXRhLWluZGV4JzogaW5kZXggfTtcbiAgICAgIGlmIChzaGlwLmlzU3VuaygpKSBlbGVtLmNsYXNzZXMucHVzaCgnc2hpcF9zdW5rJyk7XG4gICAgICBjb25zdCB0YXJnZXQgPSBjYWNoZURPTS5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb29yZHM9JHtwb3NbMF19XWApO1xuICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKGJ1aWxkRWxlbWVudHNUcmVlKGVsZW0pKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5U2hvdHMgPSAoeyBib2FyZCwgY2FjaGVET00gfSkgPT4ge1xuICAgIGNvbnN0IGhpdHMgPSBib2FyZC5nZXRIaXRzKCk7XG4gICAgY29uc3QgbWlzc2VzID0gYm9hcmQuZ2V0TWlzc2VzKCk7XG4gICAgY29uc3QgZWxlbU9iaiA9IHtcbiAgICAgIHRhZzogJ2RpdicsXG4gICAgICBjbGFzc2VzOiBbJ2JvYXJkX190YXJnZXQnXSxcbiAgICAgIHRleHQ6ICdcXHUyNUNFJyxcbiAgICB9O1xuXG4gICAgaGl0cy5mb3JFYWNoKChoaXQpID0+IHtcbiAgICAgIGNvbnN0IGVsZW0gPSB7XG4gICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgIGNsYXNzZXM6IFsnYm9hcmRfX3Nob3QnLCAnYm9hcmRfaGl0J10sXG4gICAgICAgIGNoaWxkcmVuOiBbZWxlbU9ial0sXG4gICAgICB9O1xuICAgICAgY29uc3QgdGFyZ2V0ID0gY2FjaGVET00ucXVlcnlTZWxlY3RvcihgW2RhdGEtY29vcmRzPSR7aGl0fV1gKTtcbiAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChidWlsZEVsZW1lbnRzVHJlZShlbGVtKSk7XG4gICAgfSk7XG5cbiAgICBtaXNzZXMuZm9yRWFjaCgobWlzcykgPT4ge1xuICAgICAgY29uc3QgZWxlbSA9IHtcbiAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgY2xhc3NlczogWydib2FyZF9fc2hvdCcsICdib2FyZF9taXNzJ10sXG4gICAgICAgIGNoaWxkcmVuOiBbZWxlbU9ial0sXG4gICAgICB9O1xuICAgICAgY29uc3QgdGFyZ2V0ID0gY2FjaGVET00ucXVlcnlTZWxlY3RvcihgW2RhdGEtY29vcmRzPSR7bWlzc31dYCk7XG4gICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoYnVpbGRFbGVtZW50c1RyZWUoZWxlbSkpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZURpc3BsYXkgPSAoKSA9PiB7XG4gICAgW3BsYXllcjEsIHBsYXllcjJdLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgICAgcGxheWVyLmNhY2hlRE9NLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgcG9wdWxhdGVCb2FyZChwbGF5ZXIpO1xuICAgICAgZGlzcGxheVNoaXBzKHBsYXllcik7XG4gICAgICBkaXNwbGF5U2hvdHMocGxheWVyKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4geyB1cGRhdGVEaXNwbGF5LCBkaXNwbGF5U2hpcHMgfTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEVsZW1lbnRzVHJlZShvYmopIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob2JqLnRhZyk7XG5cbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKChwcm9wKSA9PiB7XG4gICAgc3dpdGNoIChwcm9wKSB7XG4gICAgICBjYXNlICd0YWcnOlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NsYXNzZXMnOlxuICAgICAgICBvYmouY2xhc3Nlcy5mb3JFYWNoKChjc3NDbGFzcykgPT4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBvYmoudGV4dDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhdHRyaWJ1dGVzJzpcbiAgICAgICAgT2JqZWN0LmtleXMob2JqW3Byb3BdKS5mb3JFYWNoKChhdHRyKSA9PiBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBvYmpbcHJvcF1bYXR0cl0pKTtcbiAgICAgICAgLy8gIG9iai5hdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4gZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlWzBdLCBhdHRyaWJ1dGVbMV0pKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjaGlsZHJlbic6XG4gICAgICAgIG9iai5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnVpbGRFbGVtZW50c1RyZWUoY2hpbGQpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuIiwiaW1wb3J0ICcuL0dhbWVib2FyZC5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHJvd3MgPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTBdO1xuICBjb25zdCBjb2x1bW5zID0gWydhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZicsICdnJywgJ2gnLCAnaScsICdqJ107XG4gIGNvbnN0IHNoaXBzID0gW107XG4gIGNvbnN0IGhpdHMgPSBbXTtcbiAgY29uc3QgbWlzc2VzID0gW107XG5cbiAgY29uc3QgZ2V0Um93cyA9ICgpID0+IFsuLi5yb3dzXTtcbiAgY29uc3QgZ2V0Q29sdW1ucyA9ICgpID0+IFsuLi5jb2x1bW5zXTtcbiAgY29uc3QgZ2V0U2hpcHMgPSAoKSA9PiBbLi4uc2hpcHNdO1xuICBjb25zdCBnZXRIaXRzID0gKCkgPT4gWy4uLmhpdHNdO1xuICBjb25zdCBnZXRNaXNzZXMgPSAoKSA9PiBbLi4ubWlzc2VzXTtcblxuICBjb25zdCBnZXRSZWxQb3NpdGlvbnMgPSAoeyBsZW5ndGgsIHRhcmdldEFycmF5LCBzdGFydCB9KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IHRhcmdldEFycmF5LmZpbmRJbmRleCgoY3VycikgPT4gY3VyciA9PT0gc3RhcnQpO1xuICAgIHJldHVybiBbLi4udGFyZ2V0QXJyYXldLnNwbGljZShzdGFydEluZGV4LCBsZW5ndGgpO1xuICB9O1xuXG4gIGNvbnN0IGdldFRhcmdldEFycmF5QW5kU3RhcnQgPSAoeyBzaGlwLCByb3csIGNvbHVtbiB9KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0QXJyYXkgPSBzaGlwLmlzSG9yaXpvbnRhbCA/IGNvbHVtbnMgOiByb3dzO1xuICAgIGNvbnN0IHN0YXJ0ID0gdGFyZ2V0QXJyYXkgPT09IHJvd3MgPyByb3cgOiBjb2x1bW47XG4gICAgcmV0dXJuIHsgdGFyZ2V0QXJyYXksIHN0YXJ0IH07XG4gIH07XG5cbiAgY29uc3QgZ2V0QWJzUG9zaXRpb25zID0gKHsgc2hpcCwgcm93LCBjb2x1bW4gfSkgPT4ge1xuICAgIGNvbnN0IHsgdGFyZ2V0QXJyYXksIHN0YXJ0IH0gPSBnZXRUYXJnZXRBcnJheUFuZFN0YXJ0KHsgc2hpcCwgcm93LCBjb2x1bW4gfSk7XG4gICAgcmV0dXJuIGdldFJlbFBvc2l0aW9ucyh7IGxlbmd0aDogc2hpcC5sZW5ndGgsIHRhcmdldEFycmF5LCBzdGFydCB9KS5tYXAoKHBvcykgPT4ge1xuICAgICAgaWYgKHRhcmdldEFycmF5ID09PSByb3dzKSByZXR1cm4gYCR7Y29sdW1ufSR7cG9zfWA7XG4gICAgICByZXR1cm4gYCR7cG9zfSR7cm93fWA7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tPdmVybGFwID0gZnVuY3Rpb24gY2hlY2tPdmVybGFwV2l0aEV2ZXJ5U2hpcChwb3MpIHtcbiAgICByZXR1cm4gcG9zLmV2ZXJ5KChwb3NpdGlvbikgPT4gc2hpcHMuZXZlcnkoKHNoaXApID0+ICFzaGlwLnBvcy5pbmNsdWRlcyhwb3NpdGlvbikpKTtcbiAgfTtcblxuICBjb25zdCBjaGVja1BsYWNlID0gZnVuY3Rpb24gY2hlY2tDYW5QbGFjZVRoZXJlKHsgc2hpcCwgcm93LCBjb2x1bW4sIHBvcyB9KSB7XG4gICAgY29uc3QgcG9zQXJyYXkgPSBwb3MgfHwgZ2V0QWJzUG9zaXRpb25zKHsgc2hpcCwgcm93LCBjb2x1bW4gfSk7XG4gICAgaWYgKHBvc0FycmF5Lmxlbmd0aCAhPT0gc2hpcC5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gY2hlY2tPdmVybGFwKHBvc0FycmF5KTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSBmdW5jdGlvbiBwbGFjZVNoaXBCb2FyZCh7IHNoaXAsIHJvdywgY29sdW1uIH0pIHtcbiAgICBjb25zdCBwb3MgPSBnZXRBYnNQb3NpdGlvbnMoeyBzaGlwLCByb3csIGNvbHVtbiB9KTtcbiAgICBjb25zdCBjYW5QbGFjZSA9IGNoZWNrUGxhY2UoeyBzaGlwLCByb3csIGNvbHVtbiwgcG9zIH0pO1xuICAgIGlmICghY2FuUGxhY2UpIHJldHVybiBmYWxzZTtcblxuICAgIHNoaXBzLnB1c2goeyBzaGlwLCByb3csIGNvbHVtbiwgcG9zIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNvb3Jkcykge1xuICAgIGNvbnN0IHRhcmdldCA9IHNoaXBzLmZpbmQoKHNoaXBPYmopID0+IHNoaXBPYmoucG9zLmluY2x1ZGVzKGNvb3JkcykpO1xuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIHRhcmdldC5zaGlwLmhpdCh0YXJnZXQucG9zLmZpbmRJbmRleCgoY3VycikgPT4gY3VyciA9PT0gY29vcmRzKSk7XG4gICAgICBoaXRzLnB1c2goY29vcmRzKTtcbiAgICB9IGVsc2UgbWlzc2VzLnB1c2goY29vcmRzKTtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgncmVjZWl2ZWRBdHRhY2snKSk7XG4gIH07XG5cbiAgY29uc3QgaXNBbGxTdW5rID0gKCkgPT4gc2hpcHMuZXZlcnkoKHNoaXBPYmopID0+IHNoaXBPYmouc2hpcC5pc1N1bmsoKSk7XG5cbiAgY29uc3QgcmVtb3ZlU2hpcCA9IChzaGlwKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBzaGlwcy5maW5kSW5kZXgoKHNoaXBPYmopID0+IHNoaXBPYmouc2hpcCA9PT0gc2hpcCk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHJldHVybiBzaGlwcy5zcGxpY2UoaW5kZXgsIDEpWzBdO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCByYW5kb21pemUgPSAoc2hpcCkgPT4gKHtcbiAgICBzaGlwLFxuICAgIHJvdzogcm93c1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KV0sXG4gICAgY29sdW1uOiBjb2x1bW5zW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpXSxcbiAgfSk7XG5cbiAgY29uc3QgcGxhY2VSYW5kb20gPSAoc2hpcHNBcnJheSkgPT4ge1xuICAgIGNvbnN0IG5ld1NoaXBzID0gc2hpcHNBcnJheS5tYXAoKHNoaXApID0+IHtcbiAgICAgIGNvbnN0IG5ld1NoaXAgPSB7IC4uLnNoaXAgfTtcbiAgICAgIG5ld1NoaXAuaXNIb3Jpem9udGFsID0gQm9vbGVhbihNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpKTtcbiAgICAgIHJldHVybiBuZXdTaGlwO1xuICAgIH0pO1xuICAgIG5ld1NoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGxldCBzaGlwT2JqID0gcmFuZG9taXplKHNoaXApO1xuICAgICAgd2hpbGUgKCFwbGFjZVNoaXAoc2hpcE9iaikpIHtcbiAgICAgICAgc2hpcE9iaiA9IHJhbmRvbWl6ZShzaGlwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFJvd3MsXG4gICAgZ2V0Q29sdW1ucyxcbiAgICBnZXRTaGlwcyxcbiAgICBwbGFjZVNoaXAsXG4gICAgY2hlY2tQbGFjZSxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGlzQWxsU3VuayxcbiAgICBnZXRIaXRzLFxuICAgIGdldE1pc3NlcyxcbiAgICByZW1vdmVTaGlwLFxuICAgIHBsYWNlUmFuZG9tLFxuICB9O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0ICh7IG5hbWUsIHN0YXJ0cywgaXNIdW1hbiwgc2VsZiwgZW5lbXkgfSkgPT4ge1xuICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcbiAgY29uc3Qgc2V0TmFtZSA9IChzdHJpbmcpID0+IHtcbiAgICBuYW1lID0gc3RyaW5nO1xuICB9O1xuICBjb25zdCBnZXRTZWxmID0gKCkgPT4gc2VsZjtcbiAgY29uc3QgZ2V0RW5lbXkgPSAoKSA9PiBlbmVteTtcbiAgY29uc3QgaXNUdXJuID0gc3RhcnRzO1xuXG4gIGNvbnN0IHBvc05vdFVzZWQgPSAocG9zKSA9PlxuICAgIFsuLi5lbmVteS5nZXRIaXRzKCksIC4uLmVuZW15LmdldE1pc3NlcygpXS5ldmVyeSgoY3VycikgPT4gY3VyciAhPT0gcG9zKTtcblxuICBjb25zdCByYW5kb21BdHRhY2sgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm93ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSArIDEpO1xuICAgIGNvbnN0IGNvbHVtbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSArIDEpICsgOTYpO1xuICAgIGNvbnN0IHBvcyA9IGAke2NvbHVtbn0ke3Jvd31gO1xuICAgIGlmIChwb3NOb3RVc2VkKHBvcykpIHJldHVybiBwb3M7XG4gICAgcmV0dXJuIHJhbmRvbUF0dGFjaygpO1xuICB9O1xuXG4gIGNvbnN0IGF0dGFjayA9IChwb3MpID0+IHtcbiAgICBpZiAocG9zICYmIHBvc05vdFVzZWQocG9zKSkgZW5lbXkucmVjZWl2ZUF0dGFjayhwb3MpO1xuICAgIGVsc2UgaWYgKCFpc0h1bWFuKSBlbmVteS5yZWNlaXZlQXR0YWNrKHJhbmRvbUF0dGFjaygpKTtcbiAgfTtcblxuICBjb25zdCBzd2l0Y2hUdXJuID0gZnVuY3Rpb24gc3dhcFR1cm5zKCkge1xuICAgIHRoaXMuaXNUdXJuID0gIXRoaXMuaXNUdXJuO1xuXG4gICAgaWYgKHRoaXMuaXNUdXJuICYmICFpc0h1bWFuKSBhdHRhY2soKTtcbiAgfTtcblxuICByZXR1cm4geyBnZXROYW1lLCBpc1R1cm4sIHN3aXRjaFR1cm4sIGdldFNlbGYsIGdldEVuZW15LCBhdHRhY2ssIHNldE5hbWUgfTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAoeyBpc0hvcml6b250YWwsIG5hbWUgfSkgPT4ge1xuICBjb25zdCBhbHJlYWR5U3VuayA9IGZhbHNlO1xuXG4gIGNvbnN0IGxlbmd0aFRhYmxlID0ge1xuICAgIENhcnJpZXI6IDUsXG4gICAgQmF0dGxlc2hpcDogNCxcbiAgICBDcnVpc2VyOiAzLFxuICAgIFN1Ym1hcmluZTogMyxcbiAgICBEZXN0cm95ZXI6IDIsXG4gIH07XG4gIGNvbnN0IGxlbmd0aCA9IGxlbmd0aFRhYmxlW25hbWVdO1xuXG4gIGNvbnN0IGhpdHMgPSBbXTtcbiAgY29uc3QgaGl0ID0gZnVuY3Rpb24gYWRkSGl0KHBvcykge1xuICAgIGlmIChwb3MgPj0gbGVuZ3RoIHx8IHBvcyA8IDApIHJldHVybjtcbiAgICBoaXRzLnB1c2gocG9zKTtcbiAgfTtcbiAgY29uc3QgaXNTdW5rID0gZnVuY3Rpb24gY2hlY2tJZlN1bmsoKSB7XG4gICAgY29uc3Qgc3VuayA9IGhpdHMubGVuZ3RoID09PSB0aGlzLmxlbmd0aDtcbiAgICBpZiAoc3VuayAmJiAhdGhpcy5hbHJlYWR5U3Vuaykge1xuICAgICAgY29uc3QgZSA9IG5ldyBDdXN0b21FdmVudCgnc2hpcFN1bmsnLCB7IGRldGFpbDogbmFtZSB9KTtcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZSk7XG5cbiAgICAgIHRoaXMuYWxyZWFkeVN1bmsgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gc3VuaztcbiAgfTtcblxuICByZXR1cm4geyBsZW5ndGgsIGlzSG9yaXpvbnRhbCwgbmFtZSwgaXNTdW5rLCBoaXQgfTtcbn07XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAnO1xuaW1wb3J0ICcuL1NoaXAuY3NzJztcblxuY29uc3Qgd3JhcENyZWF0ZVNoaXBzID0gKCkgPT4gW1xuICBTaGlwKHtcbiAgICBpc0hvcml6b250YWw6IGZhbHNlLFxuICAgIG5hbWU6ICdDYXJyaWVyJyxcbiAgfSksXG5cbiAgU2hpcCh7XG4gICAgaXNIb3Jpem9udGFsOiBmYWxzZSxcbiAgICBuYW1lOiAnQmF0dGxlc2hpcCcsXG4gIH0pLFxuXG4gIFNoaXAoe1xuICAgIGlzSG9yaXpvbnRhbDogZmFsc2UsXG4gICAgbmFtZTogJ0NydWlzZXInLFxuICB9KSxcblxuICBTaGlwKHtcbiAgICBpc0hvcml6b250YWw6IGZhbHNlLFxuICAgIG5hbWU6ICdTdWJtYXJpbmUnLFxuICB9KSxcblxuICBTaGlwKHtcbiAgICBpc0hvcml6b250YWw6IGZhbHNlLFxuICAgIG5hbWU6ICdEZXN0cm95ZXInLFxuICB9KSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBDcmVhdGVTaGlwcztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCB3cmFwQ3JlYXRlU2hpcHMgZnJvbSAnLi9TaGlwL3dyYXBDcmVhdGVTaGlwcyc7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vR2FtZWJvYXJkL0dhbWVib2FyZCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyL1BsYXllcic7XG5pbXBvcnQgRGlzcGxheUNvbnRyb2xsZXIgZnJvbSAnLi9EaXNwbGF5Q29udHJvbGxlci9EaXNwbGF5Q29udHJvbGxlcic7XG5pbXBvcnQgJy4vbWFpbi5jc3MnO1xuXG4vLyBzZXR1cFxuY29uc3QgZG9tUGxheWVyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZF9wbGF5ZXIxJyk7XG5jb25zdCBkb21QbGF5ZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkX3BsYXllcjInKTtcblxuY29uc3QgdGV4dE91dHB1dDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uc29sZV9fbGluZS0xJyk7XG5jb25zdCB0ZXh0T3V0cHV0MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25zb2xlX19saW5lLTInKTtcblxuY29uc3QgYm9hcmRQbGF5ZXIxID0gR2FtZWJvYXJkKCk7XG5jb25zdCBib2FyZFBsYXllcjIgPSBHYW1lYm9hcmQoKTtcblxuY29uc3QgcGxheWVyID0gUGxheWVyKHtcbiAgbmFtZTogJ1RoZSBIdW1hbicsXG4gIGlzSHVtYW46IHRydWUsXG4gIHN0YXJ0czogdHJ1ZSxcbiAgc2VsZjogYm9hcmRQbGF5ZXIxLFxuICBlbmVteTogYm9hcmRQbGF5ZXIyLFxufSk7XG5cbmNvbnN0IGNwdSA9IFBsYXllcih7XG4gIG5hbWU6ICdUaGUgQ29tcHV0ZXInLFxuICBpc0h1bWFuOiBmYWxzZSxcbiAgc3RhcnRzOiBmYWxzZSxcbiAgc2VsZjogYm9hcmRQbGF5ZXIyLFxuICBlbmVteTogYm9hcmRQbGF5ZXIxLFxufSk7XG5cbmNvbnN0IHJlZk9iaiA9IHtcbiAgcGxheWVyMToge1xuICAgIHBsYXllcixcbiAgICBib2FyZDogYm9hcmRQbGF5ZXIxLFxuICAgIGNhY2hlRE9NOiBkb21QbGF5ZXIxLFxuICB9LFxuICBwbGF5ZXIyOiB7XG4gICAgcGxheWVyOiBjcHUsXG4gICAgYm9hcmQ6IGJvYXJkUGxheWVyMixcbiAgICBjYWNoZURPTTogZG9tUGxheWVyMixcbiAgfSxcbn07XG5cbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gRGlzcGxheUNvbnRyb2xsZXIocmVmT2JqKTtcblxuYm9hcmRQbGF5ZXIyLnBsYWNlUmFuZG9tKHdyYXBDcmVhdGVTaGlwcygpKTtcbmRpc3BsYXlDb250cm9sbGVyLnVwZGF0ZURpc3BsYXkoKTtcblxuY29uc3Qgc2hpcHNQbGF5ZXIxID0ge1xuICBzaGlwc0FycmF5OiB3cmFwQ3JlYXRlU2hpcHMoKS5tYXAoKHNoaXAsIGluZGV4KSA9PiAoeyBzaGlwLCBwb3M6IFtgcCR7aW5kZXh9YF0gfSkpLFxuICBjYWNoZURPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtcG9ydCcpLFxufTtcblxuZGlzcGxheUNvbnRyb2xsZXIuZGlzcGxheVNoaXBzKHNoaXBzUGxheWVyMSk7XG5cbi8vIGZ1bmN0aW9uc1xuY29uc3Qgc2VuZFRleHRPdXRwdXQgPSAoc3RyaW5nMSwgc3RyaW5nMikgPT4ge1xuICB0ZXh0T3V0cHV0MS5jbGFzc0xpc3QucmVtb3ZlKCdhbmltLXR5cGV3cml0ZXInKTtcbiAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHRleHRPdXRwdXQxLnRleHRDb250ZW50ID0gc3RyaW5nMTtcbiAgICB0ZXh0T3V0cHV0Mi50ZXh0Q29udGVudCA9ICcnO1xuICAgIHRleHRPdXRwdXQxLmNsYXNzTGlzdC5hZGQoJ2FuaW0tdHlwZXdyaXRlcicpO1xuICB9LCAxMCk7XG5cbiAgdGV4dE91dHB1dDIuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbS10eXBld3JpdGVyJyk7XG4gIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICB0ZXh0T3V0cHV0Mi50ZXh0Q29udGVudCA9IHN0cmluZzI7XG4gICAgdGV4dE91dHB1dDIuY2xhc3NMaXN0LmFkZCgnYW5pbS10eXBld3JpdGVyJyk7XG4gIH0sIDE1MDApO1xufTtcblxuY29uc3QgaGFuZGxlQXR0YWNrID0gKGUpID0+IHtcbiAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtY29vcmRzXScpO1xuICBpZiAocGxheWVyLmlzVHVybiAmJiB0YXJnZXQpIHBsYXllci5hdHRhY2sodGFyZ2V0LmRhdGFzZXQuY29vcmRzKTtcbn07XG5cbmNvbnN0IGNoZWNrRW5kID0gKHsgcGxheWVyMSwgcGxheWVyMiB9KSA9PiB7XG4gIGNvbnN0IHBsYXllcnMgPSBbcGxheWVyMSwgcGxheWVyMl07XG4gIGNvbnN0IGxvc2VyID0gcGxheWVycy5maW5kKCh7IGJvYXJkIH0pID0+IGJvYXJkLmlzQWxsU3VuaygpKTtcblxuICBpZiAobG9zZXIpIHJldHVybiBwbGF5ZXJzLmZpbmQoKGN1cnIpID0+IGN1cnIgIT09IGxvc2VyKTtcbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgaGFuZGxlRW5kID0gKHdpbm5lcikgPT4ge1xuICBzZW5kVGV4dE91dHB1dChgJHt3aW5uZXIucGxheWVyLmdldE5hbWUoKX0gd2lucyFgKTtcbiAgd2lubmVyLnBsYXllci5zd2l0Y2hUdXJuKCk7XG59O1xuXG5jb25zdCBkcmFnc3RhcnRIYW5kbGVyID0gKGUpID0+IHtcbiAgZS50YXJnZXQuc3R5bGUudG9wID0gYHVuc2V0YDtcbiAgZS50YXJnZXQuc3R5bGUubGVmdCA9IGB1bnNldGA7XG4gIGNvbnN0IHtcbiAgICB0YXJnZXQ6IHtcbiAgICAgIGRhdGFzZXQ6IHsgaW5kZXggfSxcbiAgICB9LFxuICB9ID0gZTtcbiAgY29uc3QgaG9yaXpDbGFzcyA9IFsuLi5lLnRhcmdldC5jbGFzc0xpc3RdLmZpbmQoKGNsYXNzTmFtZSkgPT4gY2xhc3NOYW1lLmluY2x1ZGVzKCdob3Jpem9udGFsJykpO1xuICBjb25zdCBpc0hvcml6ID0gaG9yaXpDbGFzcy5zcGxpdCgnXycpWzJdO1xuICBzaGlwc1BsYXllcjEuc2hpcHNBcnJheVtpbmRleF0uc2hpcC5pc0hvcml6b250YWwgPSBpc0hvcml6ID09PSAndHJ1ZSc7XG5cbiAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIGAke2luZGV4fWApO1xufTtcblxuY29uc3QgcGFyc2VTaXplID0gKHN0cmluZykgPT4gTWF0aC5yb3VuZChOdW1iZXIoc3RyaW5nLnJlcGxhY2UoL1tweF0vZywgJycpKSk7XG5cbmNvbnN0IG1vdXNlRG93bkhhbmRsZXIgPSAoZSkgPT4ge1xuICBjb25zdCB0YXJnZXRTdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlLnRhcmdldCk7XG4gIGNvbnN0IHdpZHRoID0gcGFyc2VTaXplKHRhcmdldFN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCd3aWR0aCcpKTtcbiAgY29uc3QgaGVpZ2h0ID0gcGFyc2VTaXplKHRhcmdldFN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdoZWlnaHQnKSk7XG4gIGNvbnN0IHNtYWxsZXN0ID0gd2lkdGggPCBoZWlnaHQgPyB3aWR0aCA6IGhlaWdodDtcblxuICBjb25zdCBvZmZzZXRYID0gKGUub2Zmc2V0WCB8fCBlLmxheWVyWCkgLSBzbWFsbGVzdCAvIDI7XG4gIGNvbnN0IG9mZnNldFkgPSAoZS5vZmZzZXRZIHx8IGUubGF5ZXJZKSAtIHNtYWxsZXN0IC8gMjtcblxuICBlLnRhcmdldC5zdHlsZS50b3AgPSBgJHtvZmZzZXRZfXB4YDtcbiAgZS50YXJnZXQuc3R5bGUubGVmdCA9IGAke29mZnNldFh9cHhgO1xufTtcblxuY29uc3QgbW91c2VVcEhhbmRsZXIgPSAoZSkgPT4ge1xuICBlLnRhcmdldC5zdHlsZS50b3AgPSBgdW5zZXRgO1xuICBlLnRhcmdldC5zdHlsZS5sZWZ0ID0gYHVuc2V0YDtcbn07XG5cbmNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAtcG9ydF9fYW5jaG9yIC5zaGlwJykubGVuZ3RoKSByZXR1cm47XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXR1cCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGRvbVBsYXllcjEuY2xhc3NMaXN0LmFkZCgnYm9hcmRfc2l6ZV9zJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYWJlbF9wbGF5ZXIyJykuY2xhc3NMaXN0LnJlbW92ZSgnbGFiZWxfaGlkZGVuJyk7XG4gIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IGRvbVBsYXllcjIuY2xhc3NMaXN0LnJlbW92ZSgnYm9hcmRfc2l6ZV9zJyksIDApO1xuICBkaXNwbGF5Q29udHJvbGxlci51cGRhdGVEaXNwbGF5KCk7XG4gIGRvbVBsYXllcjIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gaGFuZGxlQXR0YWNrKGUpKTtcbiAgc2VuZFRleHRPdXRwdXQoJ1lvdSBjYW4gYXR0YWNrIHRoZSBFbmVteSBGbGVldCBieSBjbGlja2luZyBvbiBhIGNlbGwuJywgJ0dvb2QgbHVjayEnKTtcbn07XG5cbi8vIGV2ZW50TGlzdGVuZXJzXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBwbGF5ZXIuc2V0TmFtZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2lucHV0JykudmFsdWUgfHwgJ1BsYXllciBPbmUnKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWxfdHJhbnNwYXJlbnQnKTtcbiAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsX2hpZGRlbicpO1xuICAgIHNlbmRUZXh0T3V0cHV0KFxuICAgICAgYFdlbGNvbWUgJHtwbGF5ZXIuZ2V0TmFtZSgpfSwgcGxlYXNlIHBsYWNlIHlvdXIgRmxlZXQuYCxcbiAgICAgICdZb3UgY2FuIERyYWcgYW5kIERyb3Agb3IgZ2VuZXJhdGUgYSByYW5kb20gcGxhY2VtZW50LidcbiAgICApO1xuICB9LCA1MDApO1xufSk7XG5cbmRvbVBsYXllcjEuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSc7XG59KTtcbmRvbVBsYXllcjEuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2JvYXJkX19jZWxsJykpIHJldHVybjtcblxuICBjb25zdCBkYXRhID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpO1xuICBjb25zdCBwb3MgPSBlLnRhcmdldC5kYXRhc2V0LmNvb3JkcztcblxuICBjb25zdCBvYmogPSB7XG4gICAgc2hpcDogc2hpcHNQbGF5ZXIxLnNoaXBzQXJyYXlbTnVtYmVyKGRhdGEpXS5zaGlwLFxuICAgIHJvdzogTnVtYmVyKHBvcy5zbGljZSgxKSksXG4gICAgY29sdW1uOiBwb3MuY2hhckF0KDApLFxuICB9O1xuXG4gIGNvbnN0IG9sZFNoaXAgPSBib2FyZFBsYXllcjEucmVtb3ZlU2hpcChvYmouc2hpcCk7XG5cbiAgY29uc3QgaXNQbGFjZWQgPSBib2FyZFBsYXllcjEucGxhY2VTaGlwKG9iaik7XG5cbiAgaWYgKGlzUGxhY2VkKSBlLnRhcmdldC5hcHBlbmRDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pbmRleD1cIiR7ZGF0YX1cIl1gKSk7XG4gIGlmICghaXNQbGFjZWQpIGJvYXJkUGxheWVyMS5wbGFjZVNoaXAob2xkU2hpcCk7XG59KTtcblxuY29uc3Qgc2hpcHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1pbmRleF0nKTtcbnNoaXBzRGl2LmZvckVhY2goKGRpdikgPT4ge1xuICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZ3N0YXJ0SGFuZGxlcik7XG4gIGRpdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtb3VzZURvd25IYW5kbGVyKTtcbiAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwSGFuZGxlcik7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldHVwX19yb3RhdGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLXBvcnQnKS5jbGFzc0xpc3QudG9nZ2xlKCdzaGlwLXBvcnRfcm90YXRlZCcpO1xuICBjb25zdCBzaGlwc0luUG9ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwLXBvcnRfX2FuY2hvciAuc2hpcCcpO1xuICBzaGlwc0luUG9ydC5mb3JFYWNoKChkaXYpID0+IGRpdi5jbGFzc0xpc3QudG9nZ2xlKCdzaGlwX2lzLWhvcml6b250YWxfZmFsc2UnKSk7XG4gIHNoaXBzSW5Qb3J0LmZvckVhY2goKGRpdikgPT4gZGl2LmNsYXNzTGlzdC50b2dnbGUoJ3NoaXBfaXMtaG9yaXpvbnRhbF90cnVlJykpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXR1cF9fcmFuZG9tJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnN0IHNoaXBzUGxhY2VkID0gYm9hcmRQbGF5ZXIxLmdldFNoaXBzKCkubWFwKChzaGlwT2JqKSA9PiBzaGlwT2JqLnNoaXAubmFtZSk7XG4gIGNvbnN0IG5vdFBsYWNlZFNoaXBzID0gd3JhcENyZWF0ZVNoaXBzKCkuZmlsdGVyKChzaGlwKSA9PiAhc2hpcHNQbGFjZWQuaW5jbHVkZXMoc2hpcC5uYW1lKSk7XG4gIGJvYXJkUGxheWVyMS5wbGFjZVJhbmRvbShub3RQbGFjZWRTaGlwcyk7XG4gIGRpc3BsYXlDb250cm9sbGVyLnVwZGF0ZURpc3BsYXkoKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtcG9ydCcpLnJlcGxhY2VDaGlsZHJlbigpO1xuICBzdGFydCgpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXR1cF9fc3RhcnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVjZWl2ZWRBdHRhY2snLCAoKSA9PiB7XG4gIGRpc3BsYXlDb250cm9sbGVyLnVwZGF0ZURpc3BsYXkoKTtcblxuICBjb25zdCB3aW5uZXIgPSBjaGVja0VuZChyZWZPYmopO1xuICBpZiAoIXdpbm5lcikge1xuICAgIHBsYXllci5zd2l0Y2hUdXJuKCk7XG4gICAgY3B1LnN3aXRjaFR1cm4oKTtcbiAgfSBlbHNlIGhhbmRsZUVuZCh3aW5uZXIpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3NoaXBTdW5rJywgKGUpID0+IHtcbiAgY29uc3Qgd2hvID0gcGxheWVyLmlzVHVybiA/IHBsYXllciA6IGNwdTtcbiAgY29uc3Qgb3RoZXIgPSB3aG8gPT09IHBsYXllciA/IGNwdSA6IHBsYXllcjtcbiAgY29uc3Qgc3RyaW5nID1cbiAgICB3aG8gPT09IHBsYXllclxuICAgICAgPyBgWW91IGhhdmUgc3VuayAke290aGVyLmdldE5hbWUoKX0ncyAke2UuZGV0YWlsfSFgXG4gICAgICA6IGAke290aGVyLmdldE5hbWUoKX0gaGFzIHN1bmsgeW91ciAke2UuZGV0YWlsfSFgO1xuICBzZW5kVGV4dE91dHB1dChzdHJpbmcpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=