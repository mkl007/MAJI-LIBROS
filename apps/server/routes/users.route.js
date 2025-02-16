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

routerUser.get('/auth/github/callback', passport.authenticate('github', { session: false }), handleAuthGithubProvider);

routerUser.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }));

routerUser.get('/auth/google/callback', passport.authenticate('google', { session: false }), handleAuthGoogleProvider)

routerUser.get('/logout', function (req, res) {
    req.cookies = null
    res.clearCookie('token');
    res.redirect(process.env.FRONTEND_URI)
});

