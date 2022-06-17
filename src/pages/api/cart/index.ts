/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from 'next';
import User from '../../../../models/User';
import { dbConnect } from '../../../../utils/database';

dbConnect();

export default async function Cart(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const { id } = req.query;

  if (method === 'GET') {
    const cartData = await User.findById(id);
    return res.status(200).json({ cart: cartData.cart });
  }

  if (method === 'PUT') {
    const { productId, quantity } = req.body;
    const updateCart = await User.findByIdAndUpdate(
      id,
      {
        $push: {
          cart: {
            productId,
            quantity,
          },
        },
      },
      { new: true }
    );
    return res.status(200).json({ cart: updateCart.cart });
  }

  if (method === 'DELETE') {
    const { productId } = req.body;

    const deleteCartItem = await User.findByIdAndUpdate(
      id,
      {
        $pull: {
          cart: {
            productId,
          },
        },
      },
      { new: true }
    );
    return res.status(200).json({ cart: deleteCartItem.cart });
  }
  res.status(400).json({ message: 'Method not supported' });
}
