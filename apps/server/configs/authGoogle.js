import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from 'dotenv';

dotenv.config(); 


export const authFunction = () => {
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                callbackURL: process.env.GITHUB_CALLBACK_URL,
            },
            function (request, accessToken, refreshToken, profile, done) {
                done(null, profile);
            }
        )
    );

    passport.serializeUser((user, done) => {
        done(null, user)
    })

    passport.deserializeUser((user, done) => {
        done(null, user)
    })
}