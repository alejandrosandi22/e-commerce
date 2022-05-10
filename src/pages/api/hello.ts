// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Product = {
  type: string;
  team: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product>
) {
  res.status(200).json({ type: 'camiseta', team: 'barcelona' });
}
