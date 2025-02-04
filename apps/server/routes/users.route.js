import express from 'express'
import { emailTokenConfimation, logout, passwordReset, passwordResetHandler, registerUser, userLogin, verifyTokenRoute, handleAuthGoogleProvider, handleAuthGithubProvider } from '../controllers/users.controller.js';
import passport from 'passport';
import jwt from "jsonwebtoken";


export const routerUser = express.Router();

routerUser.post('/register', registerUser)

routerUser.get('/confirm/:token', emailTokenConfimation)

routerUser.post('/login', userLogin)

routerUser.post('/logout', logout);

routerUser.post('/reset_password', passwordReset)

routerUser.put('/password_reset/:token', passwordResetHandler)

routerUser.get('/userData', verifyTokenRoute)

routerUser.get('/auth/github', passport.authenticate('github', { scope: ['email'] }));

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
routerUser.get('/auth/github/callback', passport.authenticate('github', { session: false }), handleAuthGithubProvider);

routerUser.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }));

routerUser.get('/auth/google/callback', passport.authenticate('google', { session: false }), handleAuthGoogleProvider)

routerUser.get('/logout', function (req, res) {
    req.cookies = null
    res.clearCookie('token');
    res.redirect('http://localhost:5173/')
});

