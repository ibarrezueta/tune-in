"use strict";
exports.id = 309;
exports.ids = [309];
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

/***/ 5309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c3": () => (/* binding */ saveUserInfo),
/* harmony export */   "$z": () => (/* binding */ getUsersByEmail),
/* harmony export */   "z6": () => (/* binding */ updateEmailValidationStatusForUser),
/* harmony export */   "GA": () => (/* binding */ getUserById),
/* harmony export */   "AW": () => (/* binding */ getAllUsers)
/* harmony export */ });
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3687);


var mongo = __webpack_require__(7548);

const saveUserInfo = async userInfo => {
  const connection = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z;
  const db = connection.db('usersdb');
  const id = await db.collection('usersdb').insertOne(userInfo);
  return id;
};
const getUsersByEmail = async email => {
  const connection = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z;
  const db = connection.db('usersdb');
  const users = await db.collection('usersdb').find({
    email: email
  }).limit(20).toArray();
  return users;
};
const updateEmailValidationStatusForUser = async userId => {
  const connection = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z;
  const db = connection.db('usersdb');
  var o_id = new mongo.ObjectID(userId);
  const newEmailStatus = {
    $set: {
      emailValidated: true
    }
  };
  const user = await db.collection('usersdb').updateOne({
    _id: o_id
  }, newEmailStatus);
  return user;
};
const getUserById = async userId => {
  const connection = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z;
  const db = connection.db('usersdb');
  var o_id = new mongo.ObjectID(userId);
  const emailData = await db.collection('usersdb').findOne({
    _id: o_id
  });
  return emailData;
};
const getAllUsers = async () => {
  const connection = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z;
  const db = connection.db('usersdb');
  const users = await db.collection('usersdb').find({}).limit(20).toArray();
  return users;
};

/***/ })

};
;