/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import User from '../../../../../models/User';

export default async function getAuth(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const { id } = req.body;

  if (method === 'GET') {
    try {
      const token = req.cookies['e-commerce-user-token'];

      if (token) {
        const user: any = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const cart = await User.findById(user.id);

        return res.status(202).send({ user, cart: cart.cart });
      }

      return res.status(203).send({ message: 'Unauthorized' });
    } catch (error: any) {
      return res.status(500).send({ message: error.message });
    }
  }

  if (method === 'DELETE') {
    try {
      const user = await User.findByIdAndDelete(id);

      return res.status(202).send(user);
    } catch (error: any) {
      return res.status(500).send({ message: error.message });
    }
  }

  return res.status(405).send({ message: 'Method not allowed' });
}
