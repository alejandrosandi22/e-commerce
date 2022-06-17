import User from '../../../../../models/User';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from 'next';
import { dbConnect } from '../../../../../utils/database';

dbConnect();

export default async function SignIn(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) res.status(409).json({ Error: 'User does not exist' });
    if (user && user.provider)
      res.status(409).json({ Error: 'User signed with google' });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) res.status(409).json({ Error: 'Password is incorrect' });
    const userForToken = {
      id: user._id,
      name: user.name,
      email: user.email,
      cart: user.cart,
    };
    const token = jwt.sign(userForToken, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '8d',
    });
    res.status(200).json({ message: 'Successful', token });
  } catch (error) {
    if (error instanceof Error)
      res.status(500).json({ message: error.message });
  }
}
