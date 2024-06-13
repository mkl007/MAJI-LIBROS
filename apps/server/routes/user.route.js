import express from 'express'
import User from '../models/user.model.js';
// import { verifyToken } from '../middlewares/isLogged.middleware.js';
import { emailTokenConfimation, logout, passwordReset, passwordResetHandler, registerUser, userLogin, verifyTokenRoute, userDataTest } from '../controllers/user.controller.js';
import passport from 'passport';
import { Strategy as GitHubStrategy } from 'passport-github2';
import jwt from "jsonwebtoken";


export const routerUser = express.Router();

routerUser.post('/register', registerUser)

routerUser.get('/confirm/:token', emailTokenConfimation)

routerUser.post('/login', userLogin)

routerUser.post('/logout', logout);

routerUser.post('/reset_password', passwordReset)

routerUser.put('/password_reset/:token', passwordResetHandler)

routerUser.get('/userData/:token', verifyTokenRoute)

routerUser.get('/userdatatest', userDataTest)

routerUser.get('/auth/github', passport.authenticate('github'));

routerUser.get('/auth/github/callback', passport.authenticate('github', { session: false }), async (req, res) => {
    const token = jwt.sign({ id: req.user.id }, process.env.JWT_PASS, { expiresIn: 60 * 60 * 24 });

    res.cookie('token', token, {
        httpOnly: false,
        sameSite: 'none',
        secure: true
    })
    res.redirect(`http://localhost:5173/profile`); 
});

routerUser.get('/dashboard', (req, res) => {
    const userToShow = {
        username: 'maikel',
    }
    res.json({ userToShow });
});


routerUser.get('/logout', function (req, res) {
    res.clearCookie('jwt');
    res.redirect('http://localhost:5173/')

});
