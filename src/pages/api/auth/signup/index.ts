import { NextApiRequest, NextApiResponse } from 'next';
import User from '../../../../../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { dbConnect } from '../../../../../utils/database';

dbConnect();

export default async function SignUp(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, lastName, email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) res.status(409).json({ Error: 'User already exists' });
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = await new User({
      name: `${name} ${lastName}`,
      email,
      password: hashPassword,
    });

    const userForToken = {
      id: newUser._id,
      name: `${name} ${lastName}`,
      email,
      cart: newUser.cart,
    };

    const token = jwt.sign(userForToken, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '8d',
    });

    await newUser.save();

    res.status(200).json({ message: 'Successful', token });
  } catch (error) {
    if (error instanceof Error)
      res.status(500).json({ message: error.message });
  }
}
