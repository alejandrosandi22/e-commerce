type CommentType = {
  body: string;
  author: string;
  date: string;
  _id: string;
};

type ProductType = {
  _id: string;
  team: string;
  images: string[];
  endpoint: string;
  type: string;
  season?: string;
  price: string;
  category?: string;
  size: string[];
  sold: number;
  rate: number[];
  comments: CommentType[];
  createdAt: string;
  updatedAt: string;
};

type CollectionsType = {
  kits: ProductType[];
  training: ProductType[];
  lifestyle: ProductType[];
  accessories: ProductType[];
};

export type { ProductType, CollectionsType, CommentType };
