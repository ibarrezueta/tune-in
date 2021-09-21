exports.id = 207;
exports.ids = [207];
exports.modules = {

/***/ 9394:
/***/ ((module) => {

module.exports = function() { return ":root{--border-width:1px;--border-radius:.3rem;--color-error:#c94b4b;--color-info:#157efb;--color-info-text:#fff}.__next-auth-theme-auto,.__next-auth-theme-light{--color-background:#fff;--color-text:#000;--color-primary:#444;--color-control-border:#bbb;--color-button-active-background:#f9f9f9;--color-button-active-border:#aaa;--color-seperator:#ccc}.__next-auth-theme-dark{--color-background:#000;--color-text:#fff;--color-primary:#ccc;--color-control-border:#555;--color-button-active-background:#060606;--color-button-active-border:#666;--color-seperator:#444}@media (prefers-color-scheme:dark){.__next-auth-theme-auto{--color-background:#000;--color-text:#fff;--color-primary:#ccc;--color-control-border:#555;--color-button-active-background:#060606;--color-button-active-border:#666;--color-seperator:#444}}body{background-color:var(--color-background);font-family:-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Helvetica,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;margin:0;padding:0}h1{font-weight:400;margin-bottom:1.5rem;padding:0 1rem}h1,p{color:var(--color-text)}form{margin:0;padding:0}label{color:#666;display:block;font-weight:500;margin-bottom:.25rem;text-align:left}input[type]{background:var(--color-background);border:var(--border-width) solid var(--color-control-border);border-radius:var(--border-radius);box-shadow:inset 0 .1rem .2rem rgba(0,0,0,.2);box-sizing:border-box;color:var(--color-text);display:block;font-size:1rem;padding:.5rem 1rem;width:100%}input[type]:focus{box-shadow:none}p{font-size:1.1rem;line-height:2rem;margin:0 0 1.5rem;padding:0 1rem}a.button{line-height:1rem;text-decoration:none}a.button,a.button:link,a.button:visited,button{background-color:var(--color-background);color:var(--color-primary)}a.button,button{border:var(--border-width) solid var(--color-control-border);border-radius:var(--border-radius);box-shadow:0 .15rem .3rem rgba(0,0,0,.15),inset 0 .1rem .2rem var(--color-background),inset 0 -.1rem .1rem rgba(0,0,0,.05);font-size:1rem;font-weight:500;margin:0 0 .75rem;padding:.75rem 1rem;position:relative;transition:all .1s ease-in-out}a.button:hover,button:hover{cursor:pointer}a.button:active,button:active{background-color:var(--color-button-active-background);border-color:var(--color-button-active-border);box-shadow:0 .15rem .3rem rgba(0,0,0,.15),inset 0 .1rem .2rem var(--color-background),inset 0 -.1rem .1rem rgba(0,0,0,.1);cursor:pointer}a.site{color:var(--color-primary);font-size:1rem;line-height:2rem;text-decoration:none}a.site:hover{text-decoration:underline}.page{display:table;height:100%;margin:0;padding:0;position:absolute;width:100%}.page>div{display:table-cell;padding:.5rem;text-align:center;vertical-align:middle}.error a.button{display:inline-block;margin-top:.5rem;padding-left:2rem;padding-right:2rem}.error .message{margin-bottom:1.5rem}.signin a.button,.signin button,.signin input[type=text]{display:block;margin-left:auto;margin-right:auto}.signin hr{border:0;border-top:1px solid var(--color-seperator);display:block;margin:1.5em auto 0;overflow:visible}.signin hr:before{background:var(--color-background);color:#888;content:\"or\";padding:0 .4rem;position:relative;top:-.6rem}.signin .error{background:#f5f5f5;background:var(--color-info);border-radius:.3rem;font-weight:500}.signin .error p{color:var(--color-info-text);font-size:.9rem;line-height:1.2rem;padding:.5rem 1rem;text-align:left}.signin>div,.signin form{display:block;margin:0 auto .5rem}.signin>div input[type],.signin form input[type]{margin-bottom:.5rem}.signin>div button,.signin form button{width:100%}.signin>div,.signin form{max-width:300px}" }

/***/ }),

/***/ 2842:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _server.default;
  }
}));

var _server = _interopRequireDefault(__webpack_require__(767));

var _types = __webpack_require__(618);

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});

/***/ }),

/***/ 2260:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  encode: true,
  decode: true,
  getToken: true
};
exports.encode = encode;
exports.decode = decode;
exports.getToken = getToken;

var _crypto = _interopRequireDefault(__webpack_require__(6417));

var _jose = _interopRequireDefault(__webpack_require__(5574));

var _logger = _interopRequireDefault(__webpack_require__(9498));

var _types = __webpack_require__(6444);

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});
const DEFAULT_SIGNATURE_ALGORITHM = "HS512";
const DEFAULT_ENCRYPTION_ALGORITHM = "A256GCM";
const DEFAULT_ENCRYPTION_ENABLED = false;
const DEFAULT_MAX_AGE = 30 * 24 * 60 * 60;

async function encode({
  token = {},
  maxAge = DEFAULT_MAX_AGE,
  secret,
  signingKey,
  signingOptions = {
    expiresIn: `${maxAge}s`
  },
  encryptionKey,
  encryptionOptions = {
    alg: "dir",
    enc: DEFAULT_ENCRYPTION_ALGORITHM,
    zip: "DEF"
  },
  encryption = DEFAULT_ENCRYPTION_ENABLED
}) {
  const _signingKey = signingKey ? _jose.default.JWK.asKey(JSON.parse(signingKey)) : getDerivedSigningKey(secret);

  const signedToken = _jose.default.JWT.sign(token, _signingKey, signingOptions);

  if (encryption) {
    const _encryptionKey = encryptionKey ? _jose.default.JWK.asKey(JSON.parse(encryptionKey)) : getDerivedEncryptionKey(secret);

    return _jose.default.JWE.encrypt(signedToken, _encryptionKey, encryptionOptions);
  }

  return signedToken;
}

async function decode({
  secret,
  token,
  maxAge = DEFAULT_MAX_AGE,
  signingKey,
  verificationKey = signingKey,
  verificationOptions = {
    maxTokenAge: `${maxAge}s`,
    algorithms: [DEFAULT_SIGNATURE_ALGORITHM]
  },
  encryptionKey,
  decryptionKey = encryptionKey,
  decryptionOptions = {
    algorithms: [DEFAULT_ENCRYPTION_ALGORITHM]
  },
  encryption = DEFAULT_ENCRYPTION_ENABLED
}) {
  if (!token) return null;
  let tokenToVerify = token;

  if (encryption) {
    const _encryptionKey = decryptionKey ? _jose.default.JWK.asKey(JSON.parse(decryptionKey)) : getDerivedEncryptionKey(secret);

    const decryptedToken = _jose.default.JWE.decrypt(token, _encryptionKey, decryptionOptions);

    tokenToVerify = decryptedToken.toString("utf8");
  }

  const _signingKey = verificationKey ? _jose.default.JWK.asKey(JSON.parse(verificationKey)) : getDerivedSigningKey(secret);

  return _jose.default.JWT.verify(tokenToVerify, _signingKey, verificationOptions);
}

async function getToken(params) {
  var _req$headers$authoriz;

  const {
    req,
    secureCookie = !(!process.env.NEXTAUTH_URL || process.env.NEXTAUTH_URL.startsWith("http://")),
    cookieName = secureCookie ? "__Secure-next-auth.session-token" : "next-auth.session-token",
    raw = false,
    decode: _decode = decode
  } = params !== null && params !== void 0 ? params : {};
  if (!req) throw new Error("Must pass `req` to JWT getToken()");
  let token = req.cookies[cookieName];

  if (!token && ((_req$headers$authoriz = req.headers.authorization) === null || _req$headers$authoriz === void 0 ? void 0 : _req$headers$authoriz.split(" ")[0]) === "Bearer") {
    const urlEncodedToken = req.headers.authorization.split(" ")[1];
    token = decodeURIComponent(urlEncodedToken);
  }

  if (raw) {
    return token;
  }

  try {
    return await _decode({
      token,
      ...params
    });
  } catch (_unused) {
    return null;
  }
}

let DERIVED_SIGNING_KEY_WARNING = false;
let DERIVED_ENCRYPTION_KEY_WARNING = false;

function hkdf(secret, {
  byteLength,
  encryptionInfo,
  digest = "sha256"
}) {
  if (_crypto.default.hkdfSync) {
    return Buffer.from(_crypto.default.hkdfSync(digest, secret, Buffer.alloc(0), encryptionInfo, byteLength));
  }

  return __webpack_require__(5568)(secret, byteLength, {
    info: encryptionInfo,
    hash: digest
  });
}

function getDerivedSigningKey(secret) {
  if (!DERIVED_SIGNING_KEY_WARNING) {
    _logger.default.warn("JWT_AUTO_GENERATED_SIGNING_KEY");

    DERIVED_SIGNING_KEY_WARNING = true;
  }

  const buffer = hkdf(secret, {
    byteLength: 64,
    encryptionInfo: "NextAuth.js Generated Signing Key"
  });

  const key = _jose.default.JWK.asKey(buffer, {
    alg: DEFAULT_SIGNATURE_ALGORITHM,
    use: "sig",
    kid: "nextauth-auto-generated-signing-key"
  });

  return key;
}

function getDerivedEncryptionKey(secret) {
  if (!DERIVED_ENCRYPTION_KEY_WARNING) {
    _logger.default.warn("JWT_AUTO_GENERATED_ENCRYPTION_KEY");

    DERIVED_ENCRYPTION_KEY_WARNING = true;
  }

  const buffer = hkdf(secret, {
    byteLength: 32,
    encryptionInfo: "NextAuth.js Generated Encryption Key"
  });

  const key = _jose.default.JWK.asKey(buffer, {
    alg: DEFAULT_ENCRYPTION_ALGORITHM,
    use: "enc",
    kid: "nextauth-auto-generated-encryption-key"
  });

  return key;
}

/***/ }),

/***/ 6444:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ 3773:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.merge = merge;

function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}

function merge(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, {
          [key]: {}
        });
        merge(target[key], source[key]);
      } else {
        Object.assign(target, {
          [key]: source[key]
        });
      }
    }
  }

  return merge(target, ...sources);
}

/***/ }),

/***/ 3020:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.Z = Google;

function Google(options) {
  return {
    id: "google",
    name: "Google",
    type: "oauth",
    wellKnown: "https://accounts.google.com/.well-known/openid-configuration",
    authorization: {
      params: {
        scope: "openid email profile"
      }
    },
    idToken: true,
    checks: ["pkce", "state"],

    profile(profile) {
      return {
        id: profile.sub,
        name: profile.name,
        email: profile.email,
        image: profile.picture
      };
    },

    options
  };
}

/***/ }),

/***/ 767:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var jwt = _interopRequireWildcard(__webpack_require__(2260));

var _parseUrl = _interopRequireDefault(__webpack_require__(8341));

var _logger = _interopRequireWildcard(__webpack_require__(9498));

var cookie = _interopRequireWildcard(__webpack_require__(9350));

var _defaultCallbacks = __webpack_require__(8237);

var _providers = _interopRequireDefault(__webpack_require__(1802));

var routes = _interopRequireWildcard(__webpack_require__(6504));

var _pages = _interopRequireDefault(__webpack_require__(6214));

var _callbackUrlHandler = _interopRequireDefault(__webpack_require__(1790));

var _extendRes = _interopRequireDefault(__webpack_require__(5604));

var _csrfTokenHandler = _interopRequireDefault(__webpack_require__(2067));

var _errors = __webpack_require__(339);

var _utils = _interopRequireDefault(__webpack_require__(4640));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

if (!process.env.NEXTAUTH_URL) {
  _logger.default.warn("NEXTAUTH_URL");
}

async function NextAuthHandler(req, res, userOptions) {
  var _process$env$NEXTAUTH, _userOptions$useSecur, _provider$version, _userOptions$events, _process$env$NEXTAUTH2;

  if (userOptions.logger) {
    (0, _logger.setLogger)(userOptions.logger);
  }

  if (userOptions.debug) {
    ;
    process.env._NEXTAUTH_DEBUG = true;
  }

  (0, _extendRes.default)(req, res);

  if (!req.query.nextauth) {
    const message = "Cannot find [...nextauth].js in pages/api/auth. Make sure the filename is written correctly.";

    _logger.default.error("MISSING_NEXTAUTH_API_ROUTE_ERROR", new Error(message));

    return res.status(500).end(`Error: ${message}`);
  }

  const {
    nextauth,
    action = nextauth[0],
    providerId = nextauth[1],
    error = nextauth[1]
  } = req.query;
  delete req.query.nextauth;
  const {
    basePath,
    baseUrl
  } = (0, _parseUrl.default)((_process$env$NEXTAUTH = process.env.NEXTAUTH_URL) !== null && _process$env$NEXTAUTH !== void 0 ? _process$env$NEXTAUTH : process.env.VERCEL_URL);
  const cookies = { ...cookie.defaultCookies((_userOptions$useSecur = userOptions.useSecureCookies) !== null && _userOptions$useSecur !== void 0 ? _userOptions$useSecur : baseUrl.startsWith("https://")),
    ...userOptions.cookies
  };
  const secret = (0, _utils.default)({
    userOptions,
    basePath,
    baseUrl
  });
  const providers = (0, _providers.default)({
    providers: userOptions.providers,
    base: `${baseUrl}${basePath}`
  });
  const provider = providers.find(({
    id
  }) => id === providerId);

  if ((provider === null || provider === void 0 ? void 0 : provider.type) === "oauth" && !((_provider$version = provider.version) !== null && _provider$version !== void 0 && _provider$version.startsWith("1.")) && !provider.checks) {
    provider.checks = ["state"];
  }

  const maxAge = 30 * 24 * 60 * 60;
  const options = {
    debug: false,
    pages: {},
    theme: "auto",
    ...userOptions,
    baseUrl,
    basePath,
    action: action,
    provider,
    cookies,
    secret,
    providers,
    session: {
      jwt: !userOptions.adapter,
      maxAge,
      updateAge: 24 * 60 * 60,
      ...userOptions.session
    },
    jwt: {
      secret,
      maxAge,
      encode: jwt.encode,
      decode: jwt.decode,
      ...userOptions.jwt
    },
    events: (0, _errors.eventsErrorHandler)((_userOptions$events = userOptions.events) !== null && _userOptions$events !== void 0 ? _userOptions$events : {}, _logger.default),
    adapter: (0, _errors.adapterErrorHandler)(userOptions.adapter, _logger.default),
    callbacks: { ..._defaultCallbacks.defaultCallbacks,
      ...userOptions.callbacks
    },
    logger: _logger.default,
    callbackUrl: (_process$env$NEXTAUTH2 = process.env.NEXTAUTH_URL) !== null && _process$env$NEXTAUTH2 !== void 0 ? _process$env$NEXTAUTH2 : "http://localhost:3000"
  };
  req.options = options;
  (0, _csrfTokenHandler.default)(req, res);
  await (0, _callbackUrlHandler.default)(req, res);
  const render = (0, _pages.default)(req, res);
  const {
    pages
  } = req.options;

  if (req.method === "GET") {
    switch (action) {
      case "providers":
        return routes.providers(req, res);

      case "session":
        return await routes.session(req, res);

      case "csrf":
        return res.json({
          csrfToken: req.options.csrfToken
        });

      case "signin":
        if (pages.signIn) {
          let signinUrl = `${pages.signIn}${pages.signIn.includes("?") ? "&" : "?"}callbackUrl=${req.options.callbackUrl}`;

          if (error) {
            signinUrl = `${signinUrl}&error=${error}`;
          }

          return res.redirect(signinUrl);
        }

        return render.signin();

      case "signout":
        if (pages.signOut) return res.redirect(pages.signOut);
        return render.signout();

      case "callback":
        if (provider) {
          return await routes.callback(req, res);
        }

        break;

      case "verify-request":
        if (pages.verifyRequest) {
          return res.redirect(pages.verifyRequest);
        }

        return render.verifyRequest();

      case "error":
        if (pages.error) {
          return res.redirect(`${pages.error}${pages.error.includes("?") ? "&" : "?"}error=${error}`);
        }

        if (["Signin", "OAuthSignin", "OAuthCallback", "OAuthCreateAccount", "EmailCreateAccount", "Callback", "OAuthAccountNotLinked", "EmailSignin", "CredentialsSignin", "SessionRequired"].includes(error)) {
          return res.redirect(`${baseUrl}${basePath}/signin?error=${error}`);
        }

        return render.error({
          error
        });

      default:
    }
  } else if (req.method === "POST") {
    switch (action) {
      case "signin":
        if (req.options.csrfTokenVerified && provider) {
          return await routes.signin(req, res);
        }

        return res.redirect(`${baseUrl}${basePath}/signin?csrf=true`);

      case "signout":
        if (req.options.csrfTokenVerified) {
          return await routes.signout(req, res);
        }

        return res.redirect(`${baseUrl}${basePath}/signout?csrf=true`);

      case "callback":
        if (provider) {
          if (provider.type === "credentials" && !req.options.csrfTokenVerified) {
            return res.redirect(`${baseUrl}${basePath}/signin?csrf=true`);
          }

          return await routes.callback(req, res);
        }

        break;

      case "_log":
        if (userOptions.logger) {
          try {
            const {
              code,
              level,
              ...metadata
            } = req.body;

            _logger.default[level](code, metadata);
          } catch (error) {
            _logger.default.error("LOGGER_ERROR", error);
          }
        }

        return res.end();

      default:
    }
  }

  return res.status(400).end(`Error: HTTP ${req.method} is not supported for ${req.url}`);
}

function NextAuth(...args) {
  if (args.length === 1) {
    return async (req, res) => await NextAuthHandler(req, res, args[0]);
  }

  return NextAuthHandler(args[0], args[1], args[2]);
}

var _default = NextAuth;
exports.default = _default;

/***/ }),

/***/ 2764:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = callbackHandler;

var _errors = __webpack_require__(339);

var _utils = __webpack_require__(4640);

var _crypto = __webpack_require__(6417);

async function callbackHandler(sessionToken, profile, account, options) {
  if (!(account !== null && account !== void 0 && account.providerAccountId) || !account.type) throw new Error("Missing or invalid provider account");
  if (!["email", "oauth"].includes(account.type)) throw new Error("Provider not supported");
  const {
    adapter,
    jwt,
    events,
    session: {
      jwt: useJwtSession
    }
  } = options;

  if (!adapter) {
    return {
      user: profile,
      account,
      session: {}
    };
  }

  const {
    createUser,
    updateUser,
    getUser,
    getUserByAccount,
    getUserByEmail,
    linkAccount,
    createSession,
    getSessionAndUser,
    deleteSession
  } = adapter;
  let session = null;
  let user = null;
  let isNewUser = false;

  if (sessionToken) {
    if (useJwtSession) {
      try {
        session = await jwt.decode({ ...jwt,
          token: sessionToken
        });

        if (session && "sub" in session && session.sub) {
          user = await getUser(session.sub);
        }
      } catch (_unused) {}
    } else {
      const userAndSession = await getSessionAndUser(sessionToken);

      if (userAndSession) {
        session = userAndSession.session;
        user = userAndSession.user;
      }
    }
  }

  if (account.type === "email") {
    const userByEmail = profile.email ? await getUserByEmail(profile.email) : null;

    if (userByEmail) {
      var _user, _events$updateUser;

      if (((_user = user) === null || _user === void 0 ? void 0 : _user.id) !== userByEmail.id && !useJwtSession && sessionToken) {
        await deleteSession(sessionToken);
      }

      user = await updateUser({
        id: userByEmail.id,
        emailVerified: new Date()
      });
      await ((_events$updateUser = events.updateUser) === null || _events$updateUser === void 0 ? void 0 : _events$updateUser.call(events, {
        user
      }));
    } else {
      var _events$createUser;

      const newUser = { ...profile,
        emailVerified: new Date()
      };
      delete newUser.id;
      user = await createUser(newUser);
      await ((_events$createUser = events.createUser) === null || _events$createUser === void 0 ? void 0 : _events$createUser.call(events, {
        user
      }));
      isNewUser = true;
    }

    session = useJwtSession ? {} : await createSession({
      sessionToken: generateSessionToken(),
      userId: user.id,
      expires: (0, _utils.fromDate)(options.session.maxAge)
    });
    return {
      session,
      user,
      isNewUser
    };
  } else if (account.type === "oauth") {
    const userByAccount = await getUserByAccount({
      providerAccountId: account.providerAccountId,
      provider: account.provider
    });

    if (userByAccount) {
      if (user) {
        if (userByAccount.id === user.id) {
          return {
            session,
            user,
            isNewUser
          };
        }

        throw new _errors.AccountNotLinkedError("The account is already associated with another user");
      }

      session = useJwtSession ? {} : await createSession({
        sessionToken: generateSessionToken(),
        userId: userByAccount.id,
        expires: (0, _utils.fromDate)(options.session.maxAge)
      });
      return {
        session,
        user: userByAccount,
        isNewUser
      };
    } else {
      var _events$createUser2, _events$linkAccount2;

      if (user) {
        var _events$linkAccount;

        await linkAccount({ ...account,
          userId: user.id
        });
        await ((_events$linkAccount = events.linkAccount) === null || _events$linkAccount === void 0 ? void 0 : _events$linkAccount.call(events, {
          user,
          account
        }));
        return {
          session,
          user,
          isNewUser
        };
      }

      const userByEmail = profile.email ? await getUserByEmail(profile.email) : null;

      if (userByEmail) {
        throw new _errors.AccountNotLinkedError("Another account already exists with the same e-mail address");
      }

      const newUser = { ...profile,
        emailVerified: null
      };
      delete newUser.id;
      user = await createUser(newUser);
      await ((_events$createUser2 = events.createUser) === null || _events$createUser2 === void 0 ? void 0 : _events$createUser2.call(events, {
        user
      }));
      await linkAccount({ ...account,
        userId: user.id
      });
      await ((_events$linkAccount2 = events.linkAccount) === null || _events$linkAccount2 === void 0 ? void 0 : _events$linkAccount2.call(events, {
        user,
        account
      }));
      session = useJwtSession ? {} : await createSession({
        sessionToken: generateSessionToken(),
        userId: user.id,
        expires: (0, _utils.fromDate)(options.session.maxAge)
      });
      return {
        session,
        user,
        isNewUser: true
      };
    }
  }
}

function generateSessionToken() {
  var _randomUUID;

  return (_randomUUID = _crypto.randomUUID === null || _crypto.randomUUID === void 0 ? void 0 : (0, _crypto.randomUUID)()) !== null && _randomUUID !== void 0 ? _randomUUID : (0, _crypto.randomBytes)(32).toString("hex");
}

/***/ }),

/***/ 1790:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = callbackUrlHandler;

var cookie = _interopRequireWildcard(__webpack_require__(9350));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

async function callbackUrlHandler(req, res) {
  const {
    query
  } = req;
  const {
    body
  } = req;
  const {
    cookies,
    baseUrl,
    callbacks
  } = req.options;
  let callbackUrl = baseUrl;
  const callbackUrlParamValue = body.callbackUrl || query.callbackUrl || null;
  const callbackUrlCookieValue = req.cookies[cookies.callbackUrl.name] || null;

  if (callbackUrlParamValue) {
    callbackUrl = await callbacks.redirect({
      url: callbackUrlParamValue,
      baseUrl
    });
  } else if (callbackUrlCookieValue) {
    callbackUrl = await callbacks.redirect({
      url: callbackUrlCookieValue,
      baseUrl
    });
  }

  if (callbackUrl && callbackUrl !== callbackUrlCookieValue) {
    cookie.set(res, cookies.callbackUrl.name, callbackUrl, cookies.callbackUrl.options);
  }

  req.options.callbackUrl = callbackUrl;
}

/***/ }),

/***/ 9350:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.set = set;
exports.defaultCookies = defaultCookies;

function set(res, name, value, options = {}) {
  const stringValue = typeof value === "object" ? "j:" + JSON.stringify(value) : String(value);

  if ("maxAge" in options) {
    var _options$maxAge, _options$maxAge2;

    options.expires = new Date(Date.now() + ((_options$maxAge = options.maxAge) !== null && _options$maxAge !== void 0 ? _options$maxAge : 0));
    options.maxAge = ((_options$maxAge2 = options.maxAge) !== null && _options$maxAge2 !== void 0 ? _options$maxAge2 : 0) / 1000;
  }

  let setCookieHeader = res.getHeader("Set-Cookie") || [];

  if (!Array.isArray(setCookieHeader)) {
    setCookieHeader = [setCookieHeader];
  }

  setCookieHeader.push(_serialize(name, String(stringValue), options));
  res.setHeader("Set-Cookie", setCookieHeader);
}

function _serialize(name, val, options) {
  const fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  const opt = options || {};
  const enc = opt.encode || encodeURIComponent;

  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }

  const value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError("argument val is invalid");
  }

  let str = `${name}=${value}`;

  if (opt.maxAge != null) {
    const maxAge = opt.maxAge - 0;

    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }

    str += `; Max-Age=${Math.floor(maxAge)}`;
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }

    str += `; Domain=${opt.domain}`;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }

    str += `; Path=${opt.path}`;
  } else {
    str += "; Path=/";
  }

  if (opt.expires) {
    let expires = opt.expires;

    if (typeof opt.expires.toUTCString === "function") {
      expires = opt.expires.toUTCString();
    } else {
      const dateExpires = new Date(opt.expires);
      expires = dateExpires.toUTCString();
    }

    str += `; Expires=${expires}`;
  }

  if (opt.httpOnly) {
    str += "; HttpOnly";
  }

  if (opt.secure) {
    str += "; Secure";
  }

  if (opt.sameSite) {
    const sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;

      case "lax":
        str += "; SameSite=Lax";
        break;

      case "strict":
        str += "; SameSite=Strict";
        break;

      case "none":
        str += "; SameSite=None";
        break;

      default:
        throw new TypeError("option sameSite is invalid");
    }
  }

  return str;
}

function defaultCookies(useSecureCookies) {
  const cookiePrefix = useSecureCookies ? "__Secure-" : "";
  return {
    sessionToken: {
      name: `${cookiePrefix}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: useSecureCookies
      }
    },
    callbackUrl: {
      name: `${cookiePrefix}next-auth.callback-url`,
      options: {
        sameSite: "lax",
        path: "/",
        secure: useSecureCookies
      }
    },
    csrfToken: {
      name: `${useSecureCookies ? "__Host-" : ""}next-auth.csrf-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: useSecureCookies
      }
    },
    pkceCodeVerifier: {
      name: `${cookiePrefix}next-auth.pkce.code_verifier`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: useSecureCookies
      }
    }
  };
}

/***/ }),

/***/ 2067:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = csrfTokenHandler;

var _crypto = __webpack_require__(6417);

var cookie = _interopRequireWildcard(__webpack_require__(9350));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function csrfTokenHandler(req, res) {
  const {
    cookies,
    secret
  } = req.options;

  if (cookies.csrfToken.name in req.cookies) {
    const [csrfToken, csrfTokenHash] = req.cookies[cookies.csrfToken.name].split("|");
    const expectedCsrfTokenHash = (0, _crypto.createHash)("sha256").update(`${csrfToken}${secret}`).digest("hex");

    if (csrfTokenHash === expectedCsrfTokenHash) {
      const csrfTokenVerified = req.method === "POST" && csrfToken === req.body.csrfToken;
      req.options.csrfToken = csrfToken;
      req.options.csrfTokenVerified = csrfTokenVerified;
      return;
    }
  }

  const csrfToken = (0, _crypto.randomBytes)(32).toString("hex");
  const csrfTokenHash = (0, _crypto.createHash)("sha256").update(`${csrfToken}${secret}`).digest("hex");
  const csrfTokenCookie = `${csrfToken}|${csrfTokenHash}`;
  cookie.set(res, cookies.csrfToken.name, csrfTokenCookie, cookies.csrfToken.options);
  req.options.csrfToken = csrfToken;
}

/***/ }),

/***/ 8237:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.defaultCallbacks = void 0;
const defaultCallbacks = {
  signIn() {
    return true;
  },

  redirect({
    url,
    baseUrl
  }) {
    if (url.startsWith(baseUrl)) return url;
    return baseUrl;
  },

  session({
    session
  }) {
    return session;
  },

  jwt({
    token
  }) {
    return token;
  }

};
exports.defaultCallbacks = defaultCallbacks;

/***/ }),

/***/ 8555:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = email;

var _crypto = __webpack_require__(6417);

var _utils = __webpack_require__(4640);

async function email(identifier, options) {
  var _await$provider$gener, _provider$generateVer, _provider$maxAge;

  const {
    baseUrl,
    basePath,
    adapter,
    provider,
    logger,
    callbackUrl
  } = options;
  const token = (_await$provider$gener = await ((_provider$generateVer = provider.generateVerificationToken) === null || _provider$generateVer === void 0 ? void 0 : _provider$generateVer.call(provider))) !== null && _await$provider$gener !== void 0 ? _await$provider$gener : (0, _crypto.randomBytes)(32).toString("hex");
  const ONE_DAY_IN_SECONDS = 86400;
  const expires = new Date(Date.now() + ((_provider$maxAge = provider.maxAge) !== null && _provider$maxAge !== void 0 ? _provider$maxAge : ONE_DAY_IN_SECONDS) * 1000);
  await adapter.createVerificationToken({
    identifier,
    token: (0, _utils.hashToken)(token, options),
    expires
  });
  const params = new URLSearchParams({
    callbackUrl,
    token,
    email: identifier
  });
  const url = `${baseUrl}${basePath}/callback/${provider.id}?${params}`;

  try {
    await provider.sendVerificationRequest({
      identifier,
      token,
      expires,
      url,
      provider
    });
  } catch (error) {
    logger.error("SEND_VERIFICATION_EMAIL_ERROR", {
      identifier,
      url,
      error
    });
    throw new Error("SEND_VERIFICATION_EMAIL_ERROR");
  }
}

/***/ }),

/***/ 5604:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = extendRes;

function extendRes(req, res) {
  res.redirect = url => {
    var _req$body;

    if (((_req$body = req.body) === null || _req$body === void 0 ? void 0 : _req$body.json) === "true") {
      return res.json({
        url
      });
    }

    res.status(302).setHeader("Location", url);
    return res.end();
  };
}

/***/ }),

/***/ 1247:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = getAuthorizationUrl;

var _client = __webpack_require__(1177);

var _clientLegacy = __webpack_require__(9817);

var _stateHandler = __webpack_require__(8101);

var _pkceHandler = __webpack_require__(5237);

async function getAuthorizationUrl(req, res) {
  const {
    logger
  } = req.options;

  try {
    var _provider$version;

    const provider = req.options.provider;
    let params = {};

    if (typeof provider.authorization === "string") {
      const parsedUrl = new URL(provider.authorization);
      const parsedParams = Object.fromEntries(parsedUrl.searchParams.entries());
      params = { ...params,
        ...parsedParams
      };
    } else {
      var _provider$authorizati;

      params = { ...params,
        ...((_provider$authorizati = provider.authorization) === null || _provider$authorizati === void 0 ? void 0 : _provider$authorizati.params)
      };
    }

    params = { ...params,
      ...req.query
    };

    if ((_provider$version = provider.version) !== null && _provider$version !== void 0 && _provider$version.startsWith("1.")) {
      const client = (0, _clientLegacy.oAuth1Client)(req.options);
      const tokens = await client.getOAuthRequestToken(params);
      const url = `${provider.authorization}?${new URLSearchParams({
        oauth_token: tokens.oauth_token,
        oauth_token_secret: tokens.oauth_token_secret,
        ...tokens.params
      })}`;
      logger.debug("GET_AUTHORIZATION_URL", {
        url
      });
      return url;
    }

    const client = await (0, _client.openidClient)(req.options);
    const pkce = await (0, _pkceHandler.createPKCE)(req, res);
    const url = client.authorizationUrl({ ...params,
      ...pkce,
      state: (0, _stateHandler.createState)(req)
    });
    logger.debug("GET_AUTHORIZATION_URL", {
      url
    });
    return url;
  } catch (error) {
    logger.error("GET_AUTHORIZATION_URL_ERROR", error);
    throw error;
  }
}

/***/ }),

/***/ 4445:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = oAuthCallback;

var _client = __webpack_require__(1177);

var _clientLegacy = __webpack_require__(9817);

var _stateHandler = __webpack_require__(8101);

var _pkceHandler = __webpack_require__(5237);

var _errors = __webpack_require__(339);

var _openidClient = __webpack_require__(1730);

async function oAuthCallback(req, res) {
  var _req$body$error, _provider$version;

  const {
    logger
  } = req.options;
  const provider = req.options.provider;
  const errorMessage = (_req$body$error = req.body.error) !== null && _req$body$error !== void 0 ? _req$body$error : req.query.error;

  if (errorMessage) {
    const error = new Error(errorMessage);
    logger.error("OAUTH_CALLBACK_HANDLER_ERROR", {
      error,
      body: req.body,
      providerId: provider.id
    });
    throw error;
  }

  if ((_provider$version = provider.version) !== null && _provider$version !== void 0 && _provider$version.startsWith("1.")) {
    try {
      const client = await (0, _clientLegacy.oAuth1Client)(req.options);
      const {
        oauth_token,
        oauth_verifier
      } = req.query;
      const tokens = await client.getOAuthAccessToken(oauth_token, null, oauth_verifier);
      let profile = await client.get(provider.profileUrl, tokens.oauth_token, tokens.oauth_token_secret);

      if (typeof profile === "string") {
        profile = JSON.parse(profile);
      }

      return await getProfile({
        profile,
        tokens,
        provider,
        logger
      });
    } catch (error) {
      logger.error("OAUTH_V1_GET_ACCESS_TOKEN_ERROR", error);
      throw error;
    }
  }

  try {
    var _provider$token, _provider$token2, _provider$userinfo, _ref, _req$body$user;

    const client = await (0, _client.openidClient)(req.options);
    let tokens;
    const checks = {
      code_verifier: await (0, _pkceHandler.usePKCECodeVerifier)(req, res),
      state: (0, _stateHandler.getState)(req)
    };
    const params = { ...client.callbackParams(req),
      ...((_provider$token = provider.token) === null || _provider$token === void 0 ? void 0 : _provider$token.params)
    };

    if ((_provider$token2 = provider.token) !== null && _provider$token2 !== void 0 && _provider$token2.request) {
      const response = await provider.token.request({
        provider,
        params,
        checks,
        client
      });
      tokens = new _openidClient.TokenSet(response.tokens);
    } else if (provider.idToken) {
      tokens = await client.callback(provider.callbackUrl, params, checks);
    } else {
      tokens = await client.oauthCallback(provider.callbackUrl, params, checks);
    }

    if (Array.isArray(tokens.scope)) {
      tokens.scope = tokens.scope.join(" ");
    }

    let profile;

    if ((_provider$userinfo = provider.userinfo) !== null && _provider$userinfo !== void 0 && _provider$userinfo.request) {
      profile = await provider.userinfo.request({
        provider,
        tokens,
        client
      });
    } else if (provider.idToken) {
      profile = tokens.claims();
    } else {
      var _provider$userinfo2;

      profile = await client.userinfo(tokens, {
        params: (_provider$userinfo2 = provider.userinfo) === null || _provider$userinfo2 === void 0 ? void 0 : _provider$userinfo2.params
      });
    }

    profile.user = JSON.parse((_ref = (_req$body$user = req.body.user) !== null && _req$body$user !== void 0 ? _req$body$user : req.query.user) !== null && _ref !== void 0 ? _ref : null);
    return await getProfile({
      profile,
      provider,
      tokens,
      logger
    });
  } catch (error) {
    logger.error("OAUTH_CALLBACK_ERROR", {
      error,
      providerId: provider.id
    });
    throw new _errors.OAuthCallbackError(error);
  }
}

async function getProfile({
  profile: OAuthProfile,
  tokens,
  provider,
  logger
}) {
  try {
    var _profile$email;

    logger.debug("PROFILE_DATA", {
      OAuthProfile
    });
    const profile = await provider.profile(OAuthProfile, tokens);
    profile.email = (_profile$email = profile.email) === null || _profile$email === void 0 ? void 0 : _profile$email.toLowerCase();
    return {
      profile,
      account: {
        provider: provider.id,
        type: provider.type,
        providerAccountId: profile.id.toString(),
        ...tokens
      },
      OAuthProfile
    };
  } catch (error) {
    logger.error("OAUTH_PARSE_PROFILE_ERROR", {
      error,
      OAuthProfile
    });
    return {
      profile: null,
      account: null,
      OAuthProfile
    };
  }
}

/***/ }),

/***/ 9817:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.oAuth1Client = oAuth1Client;

var _oauth = __webpack_require__(1983);

function oAuth1Client(options) {
  const provider = options.provider;
  const oauth1Client = new _oauth.OAuth(provider.requestTokenUrl, provider.accessTokenUrl, provider.clientId, provider.clientSecret, provider.version || "1.0", provider.callbackUrl, provider.encoding || "HMAC-SHA1");
  const originalGet = oauth1Client.get.bind(oauth1Client);

  oauth1Client.get = (...args) => {
    return new Promise((resolve, reject) => {
      originalGet(...args, (error, result) => {
        if (error) {
          return reject(error);
        }

        resolve(result);
      });
    });
  };

  const originalGetOAuth1AccessToken = oauth1Client.getOAuthAccessToken.bind(oauth1Client);

  oauth1Client.getOAuthAccessToken = (...args) => {
    return new Promise((resolve, reject) => {
      originalGetOAuth1AccessToken(...args, (error, oauth_token, oauth_token_secret) => {
        if (error) {
          return reject(error);
        }

        resolve({
          oauth_token,
          oauth_token_secret
        });
      });
    });
  };

  const originalGetOAuthRequestToken = oauth1Client.getOAuthRequestToken.bind(oauth1Client);

  oauth1Client.getOAuthRequestToken = (params = {}) => {
    return new Promise((resolve, reject) => {
      originalGetOAuthRequestToken(params, (error, oauth_token, oauth_token_secret, params) => {
        if (error) {
          return reject(error);
        }

        resolve({
          oauth_token,
          oauth_token_secret,
          params
        });
      });
    });
  };

  return oauth1Client;
}

/***/ }),

/***/ 1177:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.openidClient = openidClient;

var _openidClient = __webpack_require__(1730);

async function openidClient(options) {
  const provider = options.provider;
  let issuer;

  if (provider.wellKnown) {
    issuer = await _openidClient.Issuer.discover(provider.wellKnown);
  } else {
    var _provider$authorizati, _provider$token$url, _provider$userinfo$ur;

    issuer = new _openidClient.Issuer({
      issuer: provider.issuer,
      authorization_endpoint: (_provider$authorizati = provider.authorization.url) !== null && _provider$authorizati !== void 0 ? _provider$authorizati : provider.authorization,
      token_endpoint: (_provider$token$url = provider.token.url) !== null && _provider$token$url !== void 0 ? _provider$token$url : provider.token,
      userinfo_endpoint: (_provider$userinfo$ur = provider.userinfo.url) !== null && _provider$userinfo$ur !== void 0 ? _provider$userinfo$ur : provider.userinfo
    });
  }

  const client = new issuer.Client({
    client_id: provider.clientId,
    client_secret: provider.clientSecret,
    redirect_uris: [provider.callbackUrl]
  });
  return client;
}

/***/ }),

/***/ 5237:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createPKCE = createPKCE;
exports.usePKCECodeVerifier = usePKCECodeVerifier;

var cookie = _interopRequireWildcard(__webpack_require__(9350));

var jwt = _interopRequireWildcard(__webpack_require__(2260));

var _openidClient = __webpack_require__(1730);

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const PKCE_LENGTH = 64;
const PKCE_CODE_CHALLENGE_METHOD = "S256";
const PKCE_MAX_AGE = 60 * 15;

async function createPKCE(req, res) {
  var _provider$checks;

  const {
    cookies,
    logger
  } = req.options;
  const provider = req.options.provider;

  if (!((_provider$checks = provider.checks) !== null && _provider$checks !== void 0 && _provider$checks.includes("pkce"))) {
    return;
  }

  const codeVerifier = _openidClient.generators.codeVerifier(PKCE_LENGTH);

  const codeChallenge = _openidClient.generators.codeChallenge(codeVerifier);

  const encryptedCodeVerifier = await jwt.encode({
    maxAge: PKCE_MAX_AGE,
    ...req.options.jwt,
    token: {
      code_verifier: codeVerifier
    },
    encryption: true
  });
  const cookieExpires = new Date();
  cookieExpires.setTime(cookieExpires.getTime() + PKCE_MAX_AGE * 1000);
  cookie.set(res, cookies.pkceCodeVerifier.name, encryptedCodeVerifier, {
    expires: cookieExpires.toISOString(),
    ...cookies.pkceCodeVerifier.options
  });
  logger.debug("CREATE_PKCE_CHALLENGE_VERIFIER", {
    pkce: {
      code_challenge: codeChallenge,
      code_verifier: codeVerifier
    },
    pkceLength: PKCE_LENGTH,
    method: PKCE_CODE_CHALLENGE_METHOD
  });
  return {
    code_challenge: codeChallenge,
    code_challenge_method: PKCE_CODE_CHALLENGE_METHOD
  };
}

async function usePKCECodeVerifier(req, res) {
  var _pkce$code_verifier;

  const provider = req.options.provider;
  const {
    cookies
  } = req.options;

  if (!(provider !== null && provider !== void 0 && provider.checks.includes("pkce")) || !(cookies.pkceCodeVerifier.name in req.cookies)) {
    return;
  }

  const pkce = await jwt.decode({ ...req.options.jwt,
    token: req.cookies[cookies.pkceCodeVerifier.name],
    maxAge: PKCE_MAX_AGE,
    encryption: true
  });
  cookie.set(res, cookies.pkceCodeVerifier.name, "", { ...cookies.pkceCodeVerifier.options,
    maxAge: 0
  });
  return (_pkce$code_verifier = pkce === null || pkce === void 0 ? void 0 : pkce.code_verifier) !== null && _pkce$code_verifier !== void 0 ? _pkce$code_verifier : undefined;
}

/***/ }),

/***/ 8101:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createState = createState;
exports.getState = getState;

var _crypto = __webpack_require__(6417);

function createState(req) {
  var _provider$checks;

  const {
    csrfToken,
    logger
  } = req.options;
  const provider = req.options.provider;

  if (!((_provider$checks = provider.checks) !== null && _provider$checks !== void 0 && _provider$checks.includes("state"))) {
    return;
  }

  const state = (0, _crypto.createHash)("sha256").update(csrfToken).digest("hex");
  logger.debug("OAUTH_CALLBACK_PROTECTION", {
    state,
    csrfToken
  });
  return state;
}

function getState({
  options
}) {
  const provider = options.provider;

  if (provider !== null && provider !== void 0 && provider.checks.includes("state")) {
    return (0, _crypto.createHash)("sha256").update(options.csrfToken).digest("hex");
  }
}

/***/ }),

/***/ 1802:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = parseProviders;

var _merge = __webpack_require__(3773);

function parseProviders(params) {
  const {
    providers = [],
    base
  } = params;
  return providers.map(({
    options,
    ...defaultOptions
  }) => (0, _merge.merge)(defaultOptions, {
    signinUrl: `${base}/signin/${defaultOptions.id}`,
    callbackUrl: `${base}/callback/${defaultOptions.id}`,
    ...options
  }));
}

/***/ }),

/***/ 4640:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.fromDate = fromDate;
exports.hashToken = hashToken;
exports.default = createSecret;

var _crypto = __webpack_require__(6417);

function fromDate(time, date = Date.now()) {
  return new Date(date + time * 1000);
}

function hashToken(token, options) {
  var _provider$secret;

  const {
    provider,
    secret
  } = options;
  return (0, _crypto.createHash)("sha256").update(`${token}${(_provider$secret = provider.secret) !== null && _provider$secret !== void 0 ? _provider$secret : secret}`).digest("hex");
}

function createSecret({
  userOptions,
  basePath,
  baseUrl
}) {
  var _userOptions$secret;

  return (_userOptions$secret = userOptions.secret) !== null && _userOptions$secret !== void 0 ? _userOptions$secret : (0, _crypto.createHash)("sha256").update(JSON.stringify({
    baseUrl,
    basePath,
    ...userOptions
  })).digest("hex");
}

/***/ }),

/***/ 4503:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = Error;

var _preact = __webpack_require__(2642);

function Error({
  baseUrl,
  basePath,
  error = "default",
  res
}) {
  var _errors$error$toLower;

  const signinPageUrl = `${baseUrl}${basePath}/signin`;
  const errors = {
    default: {
      statusCode: 200,
      heading: "Error",
      message: (0, _preact.h)("p", null, (0, _preact.h)("a", {
        className: "site",
        href: baseUrl
      }, baseUrl.replace(/^https?:\/\//, "")))
    },
    configuration: {
      statusCode: 500,
      heading: "Server error",
      message: (0, _preact.h)("div", null, (0, _preact.h)("p", null, "There is a problem with the server configuration."), (0, _preact.h)("p", null, "Check the server logs for more information."))
    },
    accessdenied: {
      statusCode: 403,
      heading: "Access Denied",
      message: (0, _preact.h)("div", null, (0, _preact.h)("p", null, "You do not have permission to sign in."), (0, _preact.h)("p", null, (0, _preact.h)("a", {
        className: "button",
        href: signinPageUrl
      }, "Sign in")))
    },
    verification: {
      statusCode: 403,
      heading: "Unable to sign in",
      message: (0, _preact.h)("div", null, (0, _preact.h)("p", null, "The sign in link is no longer valid."), (0, _preact.h)("p", null, "It may have been used already or it may have expired.")),
      signin: (0, _preact.h)("p", null, (0, _preact.h)("a", {
        className: "button",
        href: signinPageUrl
      }, "Sign in"))
    }
  };
  const {
    statusCode,
    heading,
    message,
    signin
  } = (_errors$error$toLower = errors[error.toLowerCase()]) !== null && _errors$error$toLower !== void 0 ? _errors$error$toLower : errors.default;
  res.status(statusCode);
  return (0, _preact.h)("div", {
    className: "error"
  }, (0, _preact.h)("h1", null, heading), (0, _preact.h)("div", {
    className: "message"
  }, message), signin);
}

/***/ }),

/***/ 6214:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = renderPage;

var _preactRenderToString = _interopRequireDefault(__webpack_require__(8043));

var _signin = _interopRequireDefault(__webpack_require__(9286));

var _signout = _interopRequireDefault(__webpack_require__(807));

var _verifyRequest = _interopRequireDefault(__webpack_require__(56));

var _error = _interopRequireDefault(__webpack_require__(4503));

var _css = _interopRequireDefault(__webpack_require__(9394));

function renderPage(req, res) {
  const {
    baseUrl,
    basePath,
    callbackUrl,
    csrfToken,
    providers,
    theme
  } = req.options;
  res.setHeader("Content-Type", "text/html");

  function send({
    html,
    title
  }) {
    res.send(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>${(0, _css.default)()}</style><title>${title}</title></head><body class="__next-auth-theme-${theme}"><div class="page">${(0, _preactRenderToString.default)(html)}</div></body></html>`);
  }

  return {
    signin(props) {
      send({
        html: (0, _signin.default)({
          csrfToken,
          providers,
          callbackUrl,
          ...req.query,
          ...props
        }),
        title: "Sign In"
      });
    },

    signout(props) {
      send({
        html: (0, _signout.default)({
          csrfToken,
          baseUrl,
          basePath,
          ...props
        }),
        title: "Sign Out"
      });
    },

    verifyRequest(props) {
      send({
        html: (0, _verifyRequest.default)({
          baseUrl,
          ...props
        }),
        title: "Verify Request"
      });
    },

    error(props) {
      send({
        html: (0, _error.default)({
          basePath,
          baseUrl,
          res,
          ...props
        }),
        title: "Error"
      });
    }

  };
}

/***/ }),

/***/ 9286:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = Signin;

var _preact = __webpack_require__(2642);

function Signin({
  csrfToken,
  providers,
  callbackUrl,
  email,
  error: errorType
}) {
  var _errors$errorType;

  const providersToRender = providers.filter(provider => {
    if (provider.type === "oauth" || provider.type === "email") {
      return true;
    } else if (provider.type === "credentials" && provider.credentials) {
      return true;
    }

    return false;
  });
  const errors = {
    Signin: "Try signing in with a different account.",
    OAuthSignin: "Try signing in with a different account.",
    OAuthCallback: "Try signing in with a different account.",
    OAuthCreateAccount: "Try signing in with a different account.",
    EmailCreateAccount: "Try signing in with a different account.",
    Callback: "Try signing in with a different account.",
    OAuthAccountNotLinked: "To confirm your identity, sign in with the same account you used originally.",
    EmailSignin: "Check your email inbox.",
    CredentialsSignin: "Sign in failed. Check the details you provided are correct.",
    default: "Unable to sign in."
  };
  const error = errorType && ((_errors$errorType = errors[errorType]) !== null && _errors$errorType !== void 0 ? _errors$errorType : errors.default);
  return (0, _preact.h)("div", {
    className: "signin"
  }, error && (0, _preact.h)("div", {
    className: "error"
  }, (0, _preact.h)("p", null, error)), providersToRender.map((provider, i) => (0, _preact.h)("div", {
    key: provider.id,
    className: "provider"
  }, provider.type === "oauth" && (0, _preact.h)("form", {
    action: provider.signinUrl,
    method: "POST"
  }, (0, _preact.h)("input", {
    type: "hidden",
    name: "csrfToken",
    value: csrfToken
  }), callbackUrl && (0, _preact.h)("input", {
    type: "hidden",
    name: "callbackUrl",
    value: callbackUrl
  }), (0, _preact.h)("button", {
    type: "submit",
    className: "button"
  }, "Sign in with ", provider.name)), (provider.type === "email" || provider.type === "credentials") && i > 0 && providersToRender[i - 1].type !== "email" && providersToRender[i - 1].type !== "credentials" && (0, _preact.h)("hr", null), provider.type === "email" && (0, _preact.h)("form", {
    action: provider.signinUrl,
    method: "POST"
  }, (0, _preact.h)("input", {
    type: "hidden",
    name: "csrfToken",
    value: csrfToken
  }), (0, _preact.h)("label", {
    htmlFor: `input-email-for-${provider.id}-provider`
  }, "Email"), (0, _preact.h)("input", {
    id: `input-email-for-${provider.id}-provider`,
    autoFocus: true,
    type: "text",
    name: "email",
    value: email,
    placeholder: "email@example.com"
  }), (0, _preact.h)("button", {
    type: "submit"
  }, "Sign in with ", provider.name)), provider.type === "credentials" && (0, _preact.h)("form", {
    action: provider.callbackUrl,
    method: "POST"
  }, (0, _preact.h)("input", {
    type: "hidden",
    name: "csrfToken",
    value: csrfToken
  }), Object.keys(provider.credentials).map(credential => {
    return (0, _preact.h)("div", {
      key: `input-group-${provider.id}`
    }, (0, _preact.h)("label", {
      htmlFor: `input-${credential}-for-${provider.id}-provider`
    }, provider.credentials[credential].label || credential), (0, _preact.h)("input", {
      name: credential,
      id: `input-${credential}-for-${provider.id}-provider`,
      type: provider.credentials[credential].type || "text",
      value: provider.credentials[credential].value || "",
      placeholder: provider.credentials[credential].placeholder || ""
    }));
  }), (0, _preact.h)("button", {
    type: "submit"
  }, "Sign in with ", provider.name)), (provider.type === "email" || provider.type === "credentials") && i + 1 < providersToRender.length && (0, _preact.h)("hr", null))));
}

/***/ }),

/***/ 807:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = Signout;

var _preact = __webpack_require__(2642);

function Signout({
  baseUrl,
  basePath,
  csrfToken
}) {
  return (0, _preact.h)("div", {
    className: "signout"
  }, (0, _preact.h)("h1", null, "Are you sure you want to sign out?"), (0, _preact.h)("form", {
    action: `${baseUrl}${basePath}/signout`,
    method: "POST"
  }, (0, _preact.h)("input", {
    type: "hidden",
    name: "csrfToken",
    value: csrfToken
  }), (0, _preact.h)("button", {
    type: "submit"
  }, "Sign out")));
}

/***/ }),

/***/ 56:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = VerifyRequest;

var _preact = __webpack_require__(2642);

function VerifyRequest({
  baseUrl
}) {
  return (0, _preact.h)("div", {
    className: "verify-request"
  }, (0, _preact.h)("h1", null, "Check your email"), (0, _preact.h)("p", null, "A sign in link has been sent to your email address."), (0, _preact.h)("p", null, (0, _preact.h)("a", {
    className: "site",
    href: baseUrl
  }, baseUrl.replace(/^https?:\/\//, ""))));
}

/***/ }),

/***/ 5299:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = callback;

var _callback = _interopRequireDefault(__webpack_require__(4445));

var _callbackHandler = _interopRequireDefault(__webpack_require__(2764));

var cookie = _interopRequireWildcard(__webpack_require__(9350));

var _utils = __webpack_require__(4640);

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

async function callback(req, res) {
  var _req$cookies$cookies$, _req$cookies;

  const {
    provider,
    adapter,
    baseUrl,
    basePath,
    cookies,
    callbackUrl,
    pages,
    jwt,
    events,
    callbacks,
    session: {
      jwt: useJwtSession,
      maxAge: sessionMaxAge
    },
    logger
  } = req.options;
  const sessionToken = (_req$cookies$cookies$ = (_req$cookies = req.cookies) === null || _req$cookies === void 0 ? void 0 : _req$cookies[cookies.sessionToken.name]) !== null && _req$cookies$cookies$ !== void 0 ? _req$cookies$cookies$ : null;

  if (provider.type === "oauth") {
    try {
      const {
        profile,
        account,
        OAuthProfile
      } = await (0, _callback.default)(req, res);

      try {
        var _events$signIn;

        logger.debug("OAUTH_CALLBACK_RESPONSE", {
          profile,
          account,
          OAuthProfile
        });

        if (!profile) {
          return res.redirect(`${baseUrl}${basePath}/signin`);
        }

        let userOrProfile = profile;

        if (adapter) {
          const {
            getUserByAccount
          } = adapter;
          const userByAccount = await getUserByAccount({
            providerAccountId: account.providerAccountId,
            provider: provider.id
          });
          if (userByAccount) userOrProfile = userByAccount;
        }

        try {
          const isAllowed = await callbacks.signIn({
            user: userOrProfile,
            account,
            profile: OAuthProfile
          });

          if (!isAllowed) {
            return res.redirect(`${baseUrl}${basePath}/error?error=AccessDenied`);
          } else if (typeof isAllowed === "string") {
            return res.redirect(isAllowed);
          }
        } catch (error) {
          return res.redirect(`${baseUrl}${basePath}/error?error=${encodeURIComponent(error.message)}`);
        }

        const {
          user,
          session,
          isNewUser
        } = await (0, _callbackHandler.default)(sessionToken, profile, account, req.options);

        if (useJwtSession) {
          var _user$id;

          const defaultToken = {
            name: user.name,
            email: user.email,
            picture: user.image,
            sub: (_user$id = user.id) === null || _user$id === void 0 ? void 0 : _user$id.toString()
          };
          const token = await callbacks.jwt({
            token: defaultToken,
            user,
            account,
            profile: OAuthProfile,
            isNewUser
          });
          const newEncodedJwt = await jwt.encode({ ...jwt,
            token
          });
          const cookieExpires = new Date();
          cookieExpires.setTime(cookieExpires.getTime() + sessionMaxAge * 1000);
          cookie.set(res, cookies.sessionToken.name, newEncodedJwt, {
            expires: cookieExpires.toISOString(),
            ...cookies.sessionToken.options
          });
        } else {
          cookie.set(res, cookies.sessionToken.name, session.sessionToken, {
            expires: session.expires,
            ...cookies.sessionToken.options
          });
        }

        await ((_events$signIn = events.signIn) === null || _events$signIn === void 0 ? void 0 : _events$signIn.call(events, {
          user,
          account,
          profile,
          isNewUser
        }));

        if (isNewUser && pages.newUser) {
          return res.redirect(`${pages.newUser}${pages.newUser.includes("?") ? "&" : "?"}callbackUrl=${encodeURIComponent(callbackUrl)}`);
        }

        return res.redirect(callbackUrl || baseUrl);
      } catch (error) {
        if (error.name === "AccountNotLinkedError") {
          return res.redirect(`${baseUrl}${basePath}/error?error=OAuthAccountNotLinked`);
        } else if (error.name === "CreateUserError") {
          return res.redirect(`${baseUrl}${basePath}/error?error=OAuthCreateAccount`);
        }

        logger.error("OAUTH_CALLBACK_HANDLER_ERROR", error);
        return res.redirect(`${baseUrl}${basePath}/error?error=Callback`);
      }
    } catch (error) {
      if (error.name === "OAuthCallbackError") {
        logger.error("CALLBACK_OAUTH_ERROR", error);
        return res.redirect(`${baseUrl}${basePath}/error?error=OAuthCallback`);
      }

      logger.error("OAUTH_CALLBACK_ERROR", error);
      return res.redirect(`${baseUrl}${basePath}/error?error=Callback`);
    }
  } else if (provider.type === "email") {
    try {
      var _ref, _events$signIn2;

      if (!adapter) {
        logger.error("EMAIL_REQUIRES_ADAPTER_ERROR", new Error("E-mail login requires an adapter but it was undefined"));
        return res.redirect(`${baseUrl}${basePath}/error?error=Configuration`);
      }

      const {
        useVerificationToken,
        getUserByEmail
      } = adapter;
      const token = req.query.token;
      const identifier = req.query.email;
      const invite = await useVerificationToken({
        identifier,
        token: (0, _utils.hashToken)(token, req.options)
      });
      const invalidInvite = !invite || invite.expires.valueOf() < Date.now();

      if (invalidInvite) {
        return res.redirect(`${baseUrl}${basePath}/error?error=Verification`);
      }

      const profile = (_ref = identifier ? await getUserByEmail(identifier) : null) !== null && _ref !== void 0 ? _ref : {
        email: identifier
      };
      const account = {
        providerAccountId: profile.email,
        type: "email",
        provider: provider.id
      };

      try {
        const signInCallbackResponse = await callbacks.signIn({
          user: profile,
          account,
          email: {
            email: identifier
          }
        });

        if (!signInCallbackResponse) {
          return res.redirect(`${baseUrl}${basePath}/error?error=AccessDenied`);
        } else if (typeof signInCallbackResponse === "string") {
          return res.redirect(signInCallbackResponse);
        }
      } catch (error) {
        return res.redirect(`${baseUrl}${basePath}/error?error=${encodeURIComponent(error.message)}`);
      }

      const {
        user,
        session,
        isNewUser
      } = await (0, _callbackHandler.default)(sessionToken, profile, account, req.options);

      if (useJwtSession) {
        var _user$id2;

        const defaultToken = {
          name: user.name,
          email: user.email,
          picture: user.image,
          sub: (_user$id2 = user.id) === null || _user$id2 === void 0 ? void 0 : _user$id2.toString()
        };
        const token = await callbacks.jwt({
          token: defaultToken,
          user,
          account,
          isNewUser
        });
        const newEncodedJwt = await jwt.encode({ ...jwt,
          token
        });
        const cookieExpires = new Date();
        cookieExpires.setTime(cookieExpires.getTime() + sessionMaxAge * 1000);
        cookie.set(res, cookies.sessionToken.name, newEncodedJwt, {
          expires: cookieExpires.toISOString(),
          ...cookies.sessionToken.options
        });
      } else {
        cookie.set(res, cookies.sessionToken.name, session.sessionToken, {
          expires: session.expires,
          ...cookies.sessionToken.options
        });
      }

      await ((_events$signIn2 = events.signIn) === null || _events$signIn2 === void 0 ? void 0 : _events$signIn2.call(events, {
        user,
        account,
        isNewUser
      }));

      if (isNewUser && pages.newUser) {
        return res.redirect(`${pages.newUser}${pages.newUser.includes("?") ? "&" : "?"}callbackUrl=${encodeURIComponent(callbackUrl)}`);
      }

      return res.redirect(callbackUrl || baseUrl);
    } catch (error) {
      if (error.name === "CreateUserError") {
        return res.redirect(`${baseUrl}${basePath}/error?error=EmailCreateAccount`);
      }

      logger.error("CALLBACK_EMAIL_ERROR", error);
      return res.redirect(`${baseUrl}${basePath}/error?error=Callback`);
    }
  } else if (provider.type === "credentials" && req.method === "POST") {
    var _user$id3, _events$signIn3;

    if (!useJwtSession) {
      logger.error("CALLBACK_CREDENTIALS_JWT_ERROR", new Error("Signin in with credentials is only supported if JSON Web Tokens are enabled"));
      return res.status(500).redirect(`${baseUrl}${basePath}/error?error=Configuration`);
    }

    if (!provider.authorize) {
      logger.error("CALLBACK_CREDENTIALS_HANDLER_ERROR", new Error("Must define an authorize() handler to use credentials authentication provider"));
      return res.status(500).redirect(`${baseUrl}${basePath}/error?error=Configuration`);
    }

    const credentials = req.body;
    let user;

    try {
      user = await provider.authorize(credentials, { ...req,
        options: {},
        cookies: {}
      });

      if (!user) {
        return res.status(401).redirect(`${baseUrl}${basePath}/error?${new URLSearchParams({
          error: "CredentialsSignin",
          provider: provider.id
        })}`);
      }
    } catch (error) {
      return res.redirect(`${baseUrl}${basePath}/error?error=${encodeURIComponent(error.message)}`);
    }

    const account = {
      providerAccountId: user.id,
      type: "credentials",
      provider: provider.id
    };

    try {
      const isAllowed = await callbacks.signIn({
        user,
        account,
        credentials
      });

      if (!isAllowed) {
        return res.status(403).redirect(`${baseUrl}${basePath}/error?error=AccessDenied`);
      } else if (typeof isAllowed === "string") {
        return res.redirect(isAllowed);
      }
    } catch (error) {
      return res.redirect(`${baseUrl}${basePath}/error?error=${encodeURIComponent(error.message)}`);
    }

    const defaultToken = {
      name: user.name,
      email: user.email,
      picture: user.image,
      sub: (_user$id3 = user.id) === null || _user$id3 === void 0 ? void 0 : _user$id3.toString()
    };
    const token = await callbacks.jwt({
      token: defaultToken,
      user,
      account,
      isNewUser: false
    });
    const newEncodedJwt = await jwt.encode({ ...jwt,
      token
    });
    const cookieExpires = new Date();
    cookieExpires.setTime(cookieExpires.getTime() + sessionMaxAge * 1000);
    cookie.set(res, cookies.sessionToken.name, newEncodedJwt, {
      expires: cookieExpires.toISOString(),
      ...cookies.sessionToken.options
    });
    await ((_events$signIn3 = events.signIn) === null || _events$signIn3 === void 0 ? void 0 : _events$signIn3.call(events, {
      user,
      account
    }));
    return res.redirect(callbackUrl || baseUrl);
  }

  return res.status(500).end(`Error: Callback for provider type ${provider.type} not supported`);
}

/***/ }),

/***/ 6504:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "callback", ({
  enumerable: true,
  get: function () {
    return _callback.default;
  }
}));
Object.defineProperty(exports, "signin", ({
  enumerable: true,
  get: function () {
    return _signin.default;
  }
}));
Object.defineProperty(exports, "signout", ({
  enumerable: true,
  get: function () {
    return _signout.default;
  }
}));
Object.defineProperty(exports, "session", ({
  enumerable: true,
  get: function () {
    return _session.default;
  }
}));
Object.defineProperty(exports, "providers", ({
  enumerable: true,
  get: function () {
    return _providers.default;
  }
}));

var _callback = _interopRequireDefault(__webpack_require__(5299));

var _signin = _interopRequireDefault(__webpack_require__(4401));

var _signout = _interopRequireDefault(__webpack_require__(1183));

var _session = _interopRequireDefault(__webpack_require__(5467));

var _providers = _interopRequireDefault(__webpack_require__(581));

/***/ }),

/***/ 581:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = providers;

function providers(req, res) {
  const {
    providers
  } = req.options;
  const result = providers.reduce((acc, {
    id,
    name,
    type,
    signinUrl,
    callbackUrl
  }) => {
    acc[id] = {
      id,
      name,
      type,
      signinUrl,
      callbackUrl
    };
    return acc;
  }, {});
  res.json(result);
}

/***/ }),

/***/ 5467:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = session;

var cookie = _interopRequireWildcard(__webpack_require__(9350));

var _utils = __webpack_require__(4640);

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

async function session(req, res) {
  const {
    cookies,
    adapter,
    jwt,
    events,
    callbacks,
    logger
  } = req.options;
  const useJwtSession = req.options.session.jwt;
  const sessionMaxAge = req.options.session.maxAge;
  const sessionToken = req.cookies[cookies.sessionToken.name];

  if (!sessionToken) {
    return res.json({});
  }

  let response = {};

  if (useJwtSession) {
    try {
      var _events$session;

      const decodedToken = await jwt.decode({ ...jwt,
        token: sessionToken
      });
      const newExpires = (0, _utils.fromDate)(sessionMaxAge);
      const defaultSession = {
        user: {
          name: decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken.name,
          email: decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken.email,
          image: decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken.picture
        },
        expires: newExpires.toISOString()
      };
      const token = await callbacks.jwt({
        token: decodedToken
      });
      const session = await callbacks.session({
        session: defaultSession,
        token
      });
      response = session;
      const newToken = await jwt.encode({ ...jwt,
        token
      });
      cookie.set(res, cookies.sessionToken.name, newToken, {
        expires: newExpires,
        ...cookies.sessionToken.options
      });
      await ((_events$session = events.session) === null || _events$session === void 0 ? void 0 : _events$session.call(events, {
        session,
        token
      }));
    } catch (error) {
      logger.error("JWT_SESSION_ERROR", error);
      cookie.set(res, cookies.sessionToken.name, "", { ...cookies.sessionToken.options,
        maxAge: 0
      });
    }
  } else {
    try {
      const {
        getSessionAndUser,
        deleteSession,
        updateSession
      } = adapter;
      let userAndSession = await getSessionAndUser(sessionToken);

      if (userAndSession && userAndSession.session.expires.valueOf() < Date.now()) {
        await deleteSession(sessionToken);
        userAndSession = null;
      }

      if (userAndSession) {
        var _events$session2;

        const {
          user,
          session
        } = userAndSession;
        const sessionUpdateAge = req.options.session.updateAge;
        const sessionIsDueToBeUpdatedDate = session.expires.valueOf() - sessionMaxAge * 1000 + sessionUpdateAge * 1000;
        const newExpires = (0, _utils.fromDate)(sessionMaxAge);

        if (sessionIsDueToBeUpdatedDate <= Date.now()) {
          await updateSession({
            sessionToken,
            expires: newExpires
          });
        }

        const sessionPayload = await callbacks.session({
          session: {
            user: {
              name: user.name,
              email: user.email,
              image: user.image
            },
            expires: session.expires.toISOString()
          },
          user
        });
        response = sessionPayload;
        cookie.set(res, cookies.sessionToken.name, sessionToken, {
          expires: newExpires,
          ...cookies.sessionToken.options
        });
        await ((_events$session2 = events.session) === null || _events$session2 === void 0 ? void 0 : _events$session2.call(events, {
          session: sessionPayload
        }));
      } else if (sessionToken) {
        cookie.set(res, cookies.sessionToken.name, "", { ...cookies.sessionToken.options,
          maxAge: 0
        });
      }
    } catch (error) {
      logger.error("SESSION_ERROR", error);
    }
  }

  res.json(response);
}

/***/ }),

/***/ 4401:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = signin;

var _authorizationUrl = _interopRequireDefault(__webpack_require__(1247));

var _signin = _interopRequireDefault(__webpack_require__(8555));

async function signin(req, res) {
  const {
    baseUrl,
    basePath,
    adapter,
    callbacks,
    logger
  } = req.options;
  const provider = req.options.provider;

  if (!provider.type) {
    return res.status(500).end(`Error: Type not specified for ${provider.name}`);
  }

  if (provider.type === "oauth") {
    try {
      const authorizationUrl = await (0, _authorizationUrl.default)(req, res);
      return res.redirect(authorizationUrl);
    } catch (error) {
      logger.error("SIGNIN_OAUTH_ERROR", {
        error,
        provider
      });
      return res.redirect(`${baseUrl}${basePath}/error?error=OAuthSignin`);
    }
  } else if (provider.type === "email") {
    var _req$body$email$toLow, _req$body$email, _ref;

    if (!adapter) {
      logger.error("EMAIL_REQUIRES_ADAPTER_ERROR", new Error("E-mail login requires an adapter but it was undefined"));
      return res.redirect(`${baseUrl}${basePath}/error?error=Configuration`);
    }

    const email = (_req$body$email$toLow = (_req$body$email = req.body.email) === null || _req$body$email === void 0 ? void 0 : _req$body$email.toLowerCase()) !== null && _req$body$email$toLow !== void 0 ? _req$body$email$toLow : null;
    const {
      getUserByEmail
    } = adapter;
    const user = (_ref = email ? await getUserByEmail(email) : null) !== null && _ref !== void 0 ? _ref : {
      email
    };
    const account = {
      providerAccountId: user.email,
      type: "email",
      provider: provider.id
    };

    try {
      const signInCallbackResponse = await callbacks.signIn({
        user,
        account,
        email: {
          verificationRequest: true
        }
      });

      if (!signInCallbackResponse) {
        return res.redirect(`${baseUrl}${basePath}/error?error=AccessDenied`);
      } else if (typeof signInCallbackResponse === "string") {
        return res.redirect(signInCallbackResponse);
      }
    } catch (error) {
      return res.redirect(`${baseUrl}${basePath}/error?${new URLSearchParams({
        error
      })}}`);
    }

    try {
      await (0, _signin.default)(email, req.options);
    } catch (error) {
      logger.error("SIGNIN_EMAIL_ERROR", error);
      return res.redirect(`${baseUrl}${basePath}/error?error=EmailSignin`);
    }

    const params = new URLSearchParams({
      provider: provider.id,
      type: provider.type
    });
    const url = `${baseUrl}${basePath}/verify-request?${params}`;
    return res.redirect(url);
  }

  return res.redirect(`${baseUrl}${basePath}/signin`);
}

/***/ }),

/***/ 1183:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = signout;

var cookie = _interopRequireWildcard(__webpack_require__(9350));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

async function signout(req, res) {
  const {
    adapter,
    cookies,
    events,
    jwt,
    callbackUrl,
    logger
  } = req.options;
  const useJwtSession = req.options.session.jwt;
  const sessionToken = req.cookies[cookies.sessionToken.name];

  if (useJwtSession) {
    try {
      var _events$signOut;

      const decodedJwt = await jwt.decode({ ...jwt,
        token: sessionToken
      });
      await ((_events$signOut = events.signOut) === null || _events$signOut === void 0 ? void 0 : _events$signOut.call(events, {
        token: decodedJwt
      }));
    } catch (error) {}
  } else {
    try {
      var _events$signOut2;

      const session = await adapter.deleteSession(sessionToken);
      await ((_events$signOut2 = events.signOut) === null || _events$signOut2 === void 0 ? void 0 : _events$signOut2.call(events, {
        session
      }));
    } catch (error) {
      logger.error("SIGNOUT_ERROR", error);
    }
  }

  cookie.set(res, cookies.sessionToken.name, "", { ...cookies.sessionToken.options,
    maxAge: 0
  });
  return res.redirect(callbackUrl);
}

/***/ }),

/***/ 618:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ })

};
;