import passport from 'passport';
import { Strategy as GitHubStrategy } from 'passport-github2';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/user.model.js';
import Token from '../models/token.model.js';

dotenv.config();
passport.use(new GitHubStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/api/v1/auth/github/callback',
  scope: ['email']
}, async (accessToken, refreshToken, profile, done) => {

  // for Dev enviroment only
  await User.deleteMany();
  await Token.deleteMany();

  /////

  let user = await User.findOne({ accountID: profile.id, provider: profile.provider });
  if (!user) {
    user = new User({
      accountID: profile.id,
      fullname: profile.username,
      displayName: profile.displayName,
      provider: profile.provider,
      userAvatar: profile._json.avatar_url,
      email: profile._json.email === null ? `${profile.username}_${profile.id}@majibooks.com` : profile._json.email,
      verified: true // Assuming social logins are automatically verified
    });
    await user.save();
  }
  return done(null, user);
}));

passport.serializeUser((user, done) => {
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
  done(null, token);
});

passport.deserializeUser(async (token, done) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

export default passport; // Exportar passport para asegurarse de que se pueda importar en otros archivos
