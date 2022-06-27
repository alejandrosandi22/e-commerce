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
  total?: number;
  createdAt: string;
  updatedAt: string;
};

type CollectionsType = {
  kits: ProductType[];
  training: ProductType[];
  lifestyle: ProductType[];
  accessories: ProductType[];
};

type CartType = {
  _id: string;
  productId: string;
  quantity: number;
};

type UserType = {
  id: string;
  name: string;
  email: string;
  cart: CartType;
};

type ItemType = {
  _id: string;
  productId: string;
  quantity: number;
  size?: string;
};

type InvoiceData = {
  products: number;
  shipping: number;
  total: number;
};

export type {
  ProductType,
  UserType,
  CollectionsType,
  CommentType,
  CartType,
  ItemType,
  InvoiceData,
};
