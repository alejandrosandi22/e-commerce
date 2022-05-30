type ProductType = {
  _id: string;
  team: string;
  image: string;
  endpoint: string;
  locality: string;
  type: string;
  season: string;
  price: string;
  category: string;
  size: string[];
  sold: number;
  createdAt: string;
  updatedAt: string;
};

type SuggestionsType = {
  related: {
    kits: ProductType;
    training: ProductType;
    lifestyle: ProductType;
    accesories: ProductType;
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

export type { ProductType, SuggestionsType, PrincipalType };
