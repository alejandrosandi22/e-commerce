import { setCookies } from 'cookies-next';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import '../../../../../utils/passport';
import passport from 'passport';

export default async function (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextApiHandler
) {
  passport.authenticate('auth-google', function (error, _user, info) {
    if (error) return res.status(500).redirect('/signin');

    setCookies('e-commerce-user-token', info.token, { req, res });
    res.status(200).redirect('/');
  })(req, res, next);
}
