type CommentType = {
  body: string;
  author: string;
  date: string;
  _id: string;
};

type ProductType = {
  _id: string;
  title: string;
  team: string;
  images: string[];
  endpoint: string;
  type: string;
  season?: string;
  price: number;
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

type UserType = {
  _id: string;
  name: string;
  email: string;
  cart: {
    items: [
      {
        productId: string;
        quantity: number;
      }
    ];
  };
};

export type { ProductType, UserType, CollectionsType, CommentType };