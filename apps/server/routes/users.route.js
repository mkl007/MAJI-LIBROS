import express from 'express'
import { emailTokenConfimation, logout, passwordReset, passwordResetHandler, registerUser, userLogin, verifyTokenRoute, handleAuthGoogleProvider } from '../controllers/users.controller.js';
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

routerUser.get('/auth/github', passport.authenticate('github'));

routerUser.get('/auth/github/callback', passport.authenticate('github', { session: false }), async (req, res) => {
    const token = jwt.sign({ id: req.user.id }, process.env.JWT_PASS, { expiresIn: 60 * 60 * 24 });

    res.cookie('token', token, {
        httpOnly: false,
        sameSite: 'none',
        secure: true
    })
    res.redirect(`${process.env.FRONTEND_URI}/profile`);
});

routerUser.get('/auth/google',
    passport.authenticate('google', { scope: ['email', 'profile'] }

    ));

routerUser.get('/auth/google/callback', passport.authenticate('google', { session: false }), handleAuthGoogleProvider)


// routerUser.get('/auth-signup-with-provider', (req, res) => {
//     console.log(req)
//     res.send('Hi from  providers signup')
// })

// routerUser.get('/auth-login-with-provider', (req, res) => {
//     console.log(req)

//     res.send('Hi from  providers login')
// })
// routerUser.get('/logout', function (req, res) {
//     res.clearCookie('token');
//     res.redirect('http://localhost:5173/')
// });

/// Google password

// routerUser.get('/auth/google',
//     passport.authenticate('google'));

// routerUser.get('/auth/google/callback',
//     passport.authenticate('google', { failureRedirect: '/login' }),
//     function (req, res) {
//         // Successful authentication, redirect home.
//         console.log('Success')
//         res.redirect('/')
//     });