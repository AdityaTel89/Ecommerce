import { Product } from './product.types';

export interface CartItem {
  productId: string;
  product?: Product;
  quantity: number;
  price: number;
}

export interface CartState {
  items: CartItem[];
  totalAmount: number;
  totalItems: number;
}
