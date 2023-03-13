export interface Product {
  id: string;
  name: string;
  price: number;
  count: number;
}
export interface ProductClothes {
  id: string;
  title: string;
  image: string;
  price: number;
  rate: number;
  count: number;
  description: string;
  category: string;
  buy?: number;
}

export type ProductResponseFromApi = {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  description: string;
  category: string;
};
