"use strict";
(() => {
var exports = {};
exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 7550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _repository_UserRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5309);
 // changed from ../../util/mongodb

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (_req, res) => {
  const users = await (0,_repository_UserRepository__WEBPACK_IMPORTED_MODULE_0__/* .getAllUsers */ .AW)();
  res.json(users);
});

/***/ }),

/***/ 7548:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [309], () => (__webpack_exec__(7550)));
module.exports = __webpack_exports__;

})();