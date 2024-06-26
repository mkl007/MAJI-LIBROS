import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import { routerUser } from './routes/user.route.js'
import { db } from './config/db.config.js'
import passport from 'passport';
import { Strategy as GitHubStrategy } from 'passport-github2';
import './config/passport.config.js'; // Importar configuración de Passport



const port = process.env.NODE_ENV === 'test' ? 3001 : process.env.PORT || 3000;

dotenv.config()
db();

const app = express()
app.use(express.json())
app.use(cors())
app.use(passport.initialize());

app.use('/api/v1', routerUser)


app.post('/test', (req, res) => {
    return res.status(200).json({ msg: 'hi from test' });
})

const server = app.listen(port, () => {
    // console.log(`Server start at port ${port}`)
})

app.close = function (callback) {
    server.close(callback);
};

export default app;
export { server };