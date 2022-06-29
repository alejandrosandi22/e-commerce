import { NextApiRequest, NextApiResponse } from 'next';
import { OrderType } from 'types';
import User from '../../../../models/User';
import { dbConnect } from '../../../../utils/database';

dbConnect();

export default async function Order(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const { id, orderId } = req.query;
  const { purshasedMethod, products, total } = req.body;

  if (method === 'GET') {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    const order = user.orders.find(
      (order: OrderType) => order._id.toString() === orderId
    );
    return res.status(200).json({ order });
  }

  if (method === 'PUT') {
    try {
      const newOrder = await User.findByIdAndUpdate(id, {
        $push: {
          orders: [
            {
              purshasedMethod,
              products,
              total,
            },
          ],
        },
      });

      return res.status(200).json({
        message: 'Order created',
        newOrder,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      return res.status(500).json({
        message: e.message,
      });
    }
  }

  if (method === 'DELETE') {
    try {
      await User.findByIdAndUpdate(id, {
        $pull: {
          orders: {
            orderId,
          },
        },
      });

      return res.status(200).json({
        message: 'Order deleted',
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      return res.status(500).json({
        message: e.message,
      });
    }
  }

  return res.status(405).json({ message: `Method ${method} Not Allowed` });
}
