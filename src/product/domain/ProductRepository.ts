import { Product } from './Product';

export interface ProductRepository {
  getById(productId: number): Promise<Product | string>;
  createProduct(name: string, price: number): Promise<Product | string>;
  getAll(): Promise<Product[] | string>;
}