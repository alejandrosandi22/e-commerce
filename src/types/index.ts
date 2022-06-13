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

type SuggestionsType = {
  related: {
    kits: ProductType[];
    training: ProductType[];
    lifestyle: ProductType[];
    accesories: ProductType[];
  };
  others: {
    kits: ProductType[];
    training: ProductType[];
    lifestyle: ProductType[];
    accesories: ProductType[];
  };
};

type PrincipalType = {
  kits: ProductType[];
  training: ProductType[];
  lifestyle: ProductType[];
  accesories: ProductType[];
  kitsCreatedAtOrder: ProductType[];
  trainingCreatedAtOrder: ProductType[];
  lifestyleCreatedAtOrder: ProductType[];
  accesoriesCreatedAtOrder: ProductType[];
};

type CollectionsType = {
  kits: ProductType[];
  training: ProductType[];
  lifestyle: ProductType[];
  accesories: ProductType[];
};

export type {
  ProductType,
  SuggestionsType,
  PrincipalType,
  CollectionsType,
  CommentType,
};
