export interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  freeShipping: boolean;
  soldQuantity?: number;
  description?: string;
  seller?: string;
}

export interface Price {
  currency: string;
  amount: number;
  decimals: number;
}