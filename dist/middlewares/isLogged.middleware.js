"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = verifyToken;
var _jsonwebtoken = _interopRequireWildcard(require("jsonwebtoken"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
/* eslint-disable no-undef */

/**
 * -Validate token after proceed to profile,dashbaord and some routes that has verifyToken
 * @param {*} req -to require data HTTP
 * @param {*} res -To responde to cliente side by HTTP
 * @param {*} next -To proceed after completing the validation
 * @returns {token , req.userId} -sending these datas to our dashboard route.
 */

function verifyToken(req, res, next) {
  try {
    var preToken = req.headers.cookie;
    if (!preToken) {
      return res.json({
        message: 'Please login brha'
      });
    }
    var token = preToken.split('=')[1];
    if (!token) {
      return res.status(401).json({
        message: 'No token provided :('
      });
    }
    var decoded = _jsonwebtoken["default"].verify(token, process.env.JWT_PASS);
    req.userId = decoded.id;
    console.log(_jsonwebtoken.decode);
    next();
  } catch (error) {
    res.status(500).json({
      msg: 'Error bro',
      error: error
    });
  }
}

// try {
//     const token = req.cookies.token
//     // if (!token) console.log('no token bro')
//     const decoded = jwt.verify(token, process.env.JWT_PASS)
//     const userId = decoded.id
//     const userInfo = await User.findById(userId).select('-password')
//     if (userInfo) return res.json({ userInfo })
//     return res.json({ message: 'No user found' })
//   } catch (error) {
//     if (error.name === 'TokenExpiredError') return res.json({ Message: 'Token for the verification expired. Please signup in the app!' })
//     else if (error.name === 'JsonWebTokenError') return res.json({ message: 'Please log in' })
//     console.log(error)
//     res.status(500).json({ error })
//   }