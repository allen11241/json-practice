/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/main-page.js":
/*!***************************!*\
  !*** ./dist/main-page.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nasync function populate() {\n\n    const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';\n    const request = new Request(requestURL);\n  \n    const response = await fetch(request);\n    const superHeroes = await response.json();\n  \n    populateHeader(superHeroes);\n    populateHeroes(superHeroes);\n  \n  }\n\n  function populateHeader(obj) {\n    const header = document.querySelector('header');\n    const myH1 = document.createElement('h1');\n    myH1.textContent = obj.squadName;\n    header.appendChild(myH1);\n  \n    const myPara = document.createElement('p');\n    myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;\n    header.appendChild(myPara);\n  }\n\n  function populateHeroes(obj) {\n    const section = document.querySelector('section');\n    const heroes = obj.members;\n  \n    for (const hero of heroes) {\n      const myArticle = document.createElement('article');\n      const myH2 = document.createElement('h2');\n      const myPara1 = document.createElement('p');\n      const myPara2 = document.createElement('p');\n      const myPara3 = document.createElement('p');\n      const myList = document.createElement('ul');\n  \n      myH2.textContent = hero.name;\n      myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;\n      myPara2.textContent = `Age: ${hero.age}`;\n      myPara3.textContent = 'Superpowers:';\n  \n      const superPowers = hero.powers;\n      for (const power of superPowers) {\n        const listItem = document.createElement('li');\n        listItem.textContent = power;\n        myList.appendChild(listItem);\n      }\n  \n      myArticle.appendChild(myH2);\n      myArticle.appendChild(myPara1);\n      myArticle.appendChild(myPara2);\n      myArticle.appendChild(myPara3);\n      myArticle.appendChild(myList);\n  \n      section.appendChild(myArticle);\n    }\n  }\n  \n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populate);\n\n//# sourceURL=webpack://json-practice/./dist/main-page.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dist_main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/main-page */ \"./dist/main-page.js\");\n\n\n(0,_dist_main_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n//# sourceURL=webpack://json-practice/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;