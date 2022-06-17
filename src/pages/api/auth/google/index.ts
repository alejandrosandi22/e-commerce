import passport from 'passport';
import { dbConnect } from '../../../../../utils/database';
import '../../../../../utils/passport';
import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';

dbConnect();

export default async function (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextApiHandler
) {
  passport.authenticate('auth-google', {
    scope: ['profile', 'email'],
    session: false,
  })(req, res, next);
}
