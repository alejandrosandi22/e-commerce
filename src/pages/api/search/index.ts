import { NextApiRequest, NextApiResponse } from 'next';
import { CollectionsType, ProductType } from 'types';

export default async function Search(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { q } = req.query;

  const response: Response = await fetch(
    `https://sp-api.alejandrosandi.com/api/products`
  );

  const data: CollectionsType = await response.json();

  const kitsResults: ProductType[] = data.kits.filter((kit: ProductType) => {
    const { team, season, type, category } = kit;
    const string = `${team} kit jersey ${season} ${type} ${category}`;

    return string.toLowerCase().includes(q.toString().toLowerCase());
  });

  const trainingResults: ProductType[] = data.training.filter(
    (product: ProductType) => {
      const { team, season, type, category } = product;
      const string = `${team} ${season} ${type} ${category} training`;

      return string.toLowerCase().includes(q.toString().toLowerCase());
    }
  );

  const lifestyleResults: ProductType[] = data.lifestyle.filter(
    (product: ProductType) => {
      const { team, season, type, category } = product;
      const string = `${team} ${season} ${type} ${category} lifestyle`;

      return string.toLowerCase().includes(q.toString().toLowerCase());
    }
  );

  const accessoriesResults: ProductType[] = data.accessories.filter(
    (accessory: ProductType) => {
      const { team, type } = accessory;
      const string = `${team} ${type} accessories`;

      return string.toLowerCase().includes(q.toString().toLowerCase());
    }
  );

  res
    .status(200)
    .json([
      ...kitsResults,
      ...trainingResults,
      ...lifestyleResults,
      ...accessoriesResults,
    ]);
}
