/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sites/foundit/foundit.ts":
/*!**************************************!*\
  !*** ./src/sites/foundit/foundit.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const foundit = () => {
    console.log(">>>>>>>>>>>foundit running");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (foundit);


/***/ }),

/***/ "./src/sites/instahyre/instahyre.ts":
/*!******************************************!*\
  !*** ./src/sites/instahyre/instahyre.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const instahyre = () => {
    console.log(">>>>>>>>>>>instahyre running");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instahyre);


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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sites_foundit_foundit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sites/foundit/foundit */ "./src/sites/foundit/foundit.ts");
/* harmony import */ var _sites_instahyre_instahyre__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sites/instahyre/instahyre */ "./src/sites/instahyre/instahyre.ts");


const INSTAHYRE = 'INSTAHYRE';
const FOUNDIT = 'FOUNDIT';
const currentUrl = window.location.href;
let currentSite = '';
if (currentUrl.includes('instahyre'))
    currentSite = INSTAHYRE;
if (currentUrl.includes('foundit'))
    currentSite = FOUNDIT;
switch (currentSite) {
    case INSTAHYRE:
        (0,_sites_instahyre_instahyre__WEBPACK_IMPORTED_MODULE_1__["default"])();
        break;
    case FOUNDIT:
        (0,_sites_foundit_foundit__WEBPACK_IMPORTED_MODULE_0__["default"])();
        break;
}

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map