"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routerUser = void 0;
var _express = _interopRequireDefault(require("express"));
var _usersController = require("../controllers/users.controller.js");
var _passport = _interopRequireDefault(require("passport"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var routerUser = exports.routerUser = _express["default"].Router();
routerUser.post('/register', _usersController.registerUser);
routerUser.get('/confirm/:token', _usersController.emailTokenConfimation);
routerUser.post('/login', _usersController.userLogin);
routerUser.post('/logout', _usersController.logout);
routerUser.post('/reset_password', _usersController.passwordReset);
routerUser.put('/password_reset/:token', _usersController.passwordResetHandler);
routerUser.get('/userData', _usersController.verifyTokenRoute);
routerUser.get('/auth/github', _passport["default"].authenticate('github', {
  scope: ['email']
}));

// routerUser.get('/auth/github/callback', passport.authenticate('github', { session: false }), async (req, res) => {
// const token = jwt.sign({ id: req.user.id }, process.env.JWT_PASS, { expiresIn: '7' });

// // await User.deleteOne({ email: req.profile })
// // const user = req.user._json

// const checkEmailUser = await User.findOne({ email: user.email })
// // // User does not exist in db, create user
// if (!checkEmailUser) {

//     const newUser = new User({
//         accountID: user.sub,
//         fullname: user.name,
//         displayName: user.given_name,
//         provider: 'google',
//         userAvatar: user.picture,
//         email: user.email,
//         verified: true

//     })
//     await newUser.save()

//     const token = jwt.sign({ id: newUser.id }, process.env.JWT_PASS, { expiresIn: '7d' });
//     res.cookie('token', token, {
//         httpOnly: false,
//         sameSite: 'none',
//         secure: true
//     })

//     // return res.json({ message: 'User successfully Signed in!', newUser })
//     res.redirect(`${process.env.FRONTEND_URI}/profile`);

// }

// // // if user exists in DB then, login the user 
// // const token = jwt.sign({ id: checkEmailUser._id }, process.env.JWT_PASS, { expiresIn: '7d' });
// // res.cookie('token', token, {
// //   httpOnly: false,
// //   sameSite: 'none',
// //   secure: true
// // })

// // // return res.json({ message: 'Logged successfull', token })
// // res.redirect(`${process.env.FRONTEND_URI}/signup`);

// res.json(req.user)
// });
routerUser.get('/auth/github/callback', _passport["default"].authenticate('github', {
  session: false
}), _usersController.handleAuthGithubProvider);
routerUser.get('/auth/google', _passport["default"].authenticate('google', {
  scope: ['email', 'profile']
}));
routerUser.get('/auth/google/callback', _passport["default"].authenticate('google', {
  session: false
}), _usersController.handleAuthGoogleProvider);
routerUser.get('/logout', function (req, res) {
  req.cookies = null;
  res.clearCookie('token');
  res.redirect('http://localhost:5173/');
});