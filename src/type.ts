export type DispatchType = (args: ProductAction) => any;

export type ProductAction = {
  type: string;
  payload?: any;
};

export interface IProduct {
  name: string;
  id: string;
  price: number;
  category: string;
  image: string;
  shipping?: boolean;
}

export interface ProductState {
  loading: boolean;
  products: IProduct[];
  filter: string;
}
