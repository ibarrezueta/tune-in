"use strict";
(() => {
var exports = {};
exports.id = 845;
exports.ids = [845];
exports.modules = {

/***/ 5529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _repository_UserRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5309);

async function handler(req, res) {
  const {
    newAccountId
  } = req.query;
  const emailData = await (0,_repository_UserRepository__WEBPACK_IMPORTED_MODULE_0__/* .getUserById */ .GA)(newAccountId);
  res.json(emailData);
}

/***/ }),

/***/ 7548:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [309], () => (__webpack_exec__(5529)));
module.exports = __webpack_exports__;

})();