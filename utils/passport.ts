/* eslint-disable @typescript-eslint/no-explicit-any */
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { dbConnect } from './database';

dbConnect();

passport.use(
  'auth-google',
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (
      _accessToken: string,
      _refreshToken: string | undefined,
      profile: any,
      cb: any
    ) => {
      try {
        const user = await User.findOne({ email: profile.emails[0].value });

        if (!user) {
          const newUser = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            provider: 'google',
          });

          const userForToken = {
            name: profile.displayName,
            email: profile.emails[0].value,
            id: newUser._id,
          };

          const token = jwt.sign(
            userForToken,
            process.env.ACCESS_TOKEN_SECRET,
            {
              expiresIn: '8d',
            }
          );

          await newUser.save();

          return cb(null, user, { message: 'Auth successful', token });
        }

        if (user.provider) {
          const userForToken = {
            name: profile.displayName,
            email: profile.emails[0].value,
            id: user._id,
          };
          const token = jwt.sign(
            userForToken,
            process.env.ACCESS_TOKEN_SECRET,
            {
              expiresIn: '8d',
            }
          );

          return cb(null, user, { message: 'Auth successful', token });
        }
        cb(Error, 'User logged with email and password');
      } catch (error) {
        if (error instanceof Error)
          cb(error, false, { message: error.message });
      }
    }
  )
);
