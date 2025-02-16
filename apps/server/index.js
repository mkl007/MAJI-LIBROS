import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { routerUser } from './routes/users.route.js'
import { db } from './configs/db.config.js'
import passport from 'passport';
import './configs/passport.config.js'; // Importar configuración de Passport
import { routerBook } from './routes/books.route.js'
import cookieParser from 'cookie-parser'
import { cartRouter } from './routes/userCarts.route.js'
import { authFunction } from './configs/authGoogle.js'


export const port = process.env.NODE_ENV === 'test' ? 3001 : process.env.PORT || 3000;

dotenv.config()
db();

const app = express()



app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: process.env.FRONTEND_URI,
    credentials: true,

}))
authFunction()
app.use(passport.initialize());

app.use('/api/v1', routerUser)
app.use('/api/v1/books', routerBook)
app.use('/api/v1/books/carts', cartRouter)


app.get('/success', (req, res) => {
    res.json({ message: 'Froom here all good', })
})

app.get('/failure', (req, res) => {
    res.json({ message: 'Froom here all failure' })
})

const server = app.listen(port, () => {
    // console.log(`Server start at port ${port}`)
})

app.close = function (callback) {
    server.close(callback);
};

export default app;
export { server };
