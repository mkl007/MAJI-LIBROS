import express from 'express'
import User from '../models/user.model.js';
import { verifyToken } from '../middlewares/isLogged.middleware.js';
import { emailTokenConfimation, logout, passwordReset, passwordResetHandler, registerUser, userLogin } from '../controllers/user.controller.js';

export const routerUser = express.Router();

routerUser.post('/register', registerUser)

routerUser.get('/confirm/:token', emailTokenConfimation)

routerUser.post('/login', userLogin)

routerUser.post('/logout', logout);

routerUser.post('/reset_password', passwordReset)

routerUser.put('/password_reset/:token', passwordResetHandler)


// For testing propusess
routerUser.post('/testing', async(req, res) => {
    try {
        return res.status(200).json({msg: 'Went through it '})
    } catch (error) {
        console.log(error)
        return res.status(500).send('Error, not went thru')
    }
})

routerUser.get('/testing2', verifyToken, async (req, res, next) => {
    try {
        const cukies = req.userId
        const user = await User.findById(req.userId)
        if (user) return res.json({ user })
        res.status(200).json({ cukies, msg: 'User not found' })
    } catch (error) {

    }
})
