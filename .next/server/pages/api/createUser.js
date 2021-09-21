"use strict";
(() => {
var exports = {};
exports.id = 322;
exports.ids = [322,709];
exports.modules = {

/***/ 311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _repository_UserRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5309);
/* harmony import */ var _email_send__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6079);


async function handler(req, res) {
  // Check that email isn't already used
  console.log('Trying this...', req.headers.host);
  isNewEmail(req.body.email).then(isNewEmail => {
    if (isNewEmail) {
      saveUser(req.body).then(response => {
        try {
          const host = req.headers.host;
          (0,_email_send__WEBPACK_IMPORTED_MODULE_1__.default)(host, response.ops[0]);
        } catch (error) {
          console.log('This is the error: ', error);
        }

        res.status(200).json({
          isNewEmail: true,
          confirmationURL: response.ops[0]._id
        });
      });
    } else {
      res.status(200).json({
        isNewEmail: false
      });
    }
  }); // Send out an email to the user confirming that they created an account...
  // Send out a confirmation email or something with a password
  // See if we can set up 2fa :D
  // res.status(200).json(
  //   req.body // after the above stuff is set up, this will just send a status 200 code
  // )
}

const saveUser = async userInfo => {
  return _repository_UserRepository__WEBPACK_IMPORTED_MODULE_0__/* .saveUserInfo */ .c3(userInfo);
};

const isNewEmail = async email => {
  const users = await _repository_UserRepository__WEBPACK_IMPORTED_MODULE_0__/* .getUsersByEmail */ .$z(email); // change this to a query that just checks existence  

  return Array.isArray(users) && !users.length;
}; // eslint-disable-next-line no-unused-vars


const confirmEmail = (req, res) => {
  // Here we validate that they enter the correct code we sent them
  // If the code is correct
  // Store this data in database
  // Figure out which database I want to use.. keep fleshing out the data
  // Set up the db on local and then set up the query I'll need here
  res.status(200).json({
    'isValid': true
  }); // If the code is incorrect
  // Have them re-enter the form.

  res.status(200).json({
    'isValid': false
  });
};

/***/ }),

/***/ 7548:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 8123:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [309,79], () => (__webpack_exec__(311)));
module.exports = __webpack_exports__;

})();