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


const port = process.env.NODE_ENV === 'test' ? 3001 : process.env.PORT || 3000;

dotenv.config()
db();

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,

}))
app.use(passport.initialize());

app.use('/api/v1', routerUser)
app.use('/api/v1/books', routerBook)
app.use('/api/v1/books/carts', cartRouter)



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