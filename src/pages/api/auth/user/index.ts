import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

export default function getAuth(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method === 'GET') {
    try {
      const token = req.cookies['e-commerce-user-token'];

      if (token) {
        const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        return res.status(202).send(user);
      }

      return res.status(401).send({ message: 'Successful' });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return res.status(500).send({ message: error.message });
    }
  }

  return res.status(405).send({ message: 'Method not allowed' });
}
