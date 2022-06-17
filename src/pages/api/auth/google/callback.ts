import { setCookies } from 'cookies-next';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import passport from 'passport';
import { dbConnect } from '../../../../../utils/database';
import '../../../../../utils/passport';

dbConnect();

export default async function (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextApiHandler
) {
  passport.authenticate('auth-google', (error, user, info) => {
    if (error || !user) res.redirect('http://localhost:3000/?a=auth_fail');

    setCookies('e-commerce-user-token', info.token, { req, res });
    res.redirect('http://localhost:3000/');
  })(req, res, next);
}
