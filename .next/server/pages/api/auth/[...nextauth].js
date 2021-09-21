"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 3687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7548);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

const uri = process.env.MONGODB_URI;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};
let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

if (false) {} else {
  // In production mode, it's best to not use a global variable.
  client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);
  clientPromise = client.connect();
} // Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);

/***/ }),

/***/ 5930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ auth)
});

// EXTERNAL MODULE: ./node_modules/next-auth/index.js
var next_auth = __webpack_require__(2842);
var next_auth_default = /*#__PURE__*/__webpack_require__.n(next_auth);
;// CONCATENATED MODULE: external "@next-auth/mongodb-adapter"
const mongodb_adapter_namespaceObject = require("@next-auth/mongodb-adapter");
// EXTERNAL MODULE: ./lib/mongodb.js
var mongodb = __webpack_require__(3687);
// EXTERNAL MODULE: ./node_modules/next-auth/providers/google.js
var google = __webpack_require__(3020);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js




async function auth(req, res) {
  return await next_auth_default()(req, res, {
    providers: [(0,google/* default */.Z)({
      clientId: process.env.G_CLIENT_ID,
      clientSecret: process.env.G_CLIENT_SECRET
    })],
    adapter: (0,mongodb_adapter_namespaceObject.MongoDBAdapter)({
      db: (await mongodb/* default */.Z).db('TuneInDB')
    }),
    secret: process.env.SECRET,
    session: {
      jwt: true
    },
    jwt: {},
    callbacks: {
      async signIn() {
        return true;
      },

      async redirect({
        baseUrl
      }) {
        return baseUrl;
      },

      async session({
        session
      }) {
        return session;
      },

      async jwt({
        token
      }) {
        return token;
      }

    },
    debug: false
  });
}

/***/ }),

/***/ 6417:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 5568:
/***/ ((module) => {

module.exports = require("futoin-hkdf");

/***/ }),

/***/ 5574:
/***/ ((module) => {

module.exports = require("jose");

/***/ }),

/***/ 7548:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 1983:
/***/ ((module) => {

module.exports = require("oauth");

/***/ }),

/***/ 1730:
/***/ ((module) => {

module.exports = require("openid-client");

/***/ }),

/***/ 2642:
/***/ ((module) => {

module.exports = require("preact");

/***/ }),

/***/ 8043:
/***/ ((module) => {

module.exports = require("preact-render-to-string");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [410,207], () => (__webpack_exec__(5930)));
module.exports = __webpack_exports__;

})();