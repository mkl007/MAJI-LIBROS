import express from 'express'
import User from '../models/user.model.js';
// import { verifyToken } from '../middlewares/isLogged.middleware.js';
import { emailTokenConfimation, logout, passwordReset, passwordResetHandler, registerUser, userLogin, verifyTokenRoute, userDataTest} from '../controllers/user.controller.js';

export const routerUser = express.Router();

routerUser.post('/register', registerUser)

routerUser.get('/confirm/:token', emailTokenConfimation)

routerUser.post('/login', userLogin)

routerUser.post('/logout', logout);

routerUser.post('/reset_password', passwordReset)

routerUser.put('/password_reset/:token', passwordResetHandler)

routerUser.get('/userData/:token', verifyTokenRoute)  

routerUser.get('/userdatatest', userDataTest)  
