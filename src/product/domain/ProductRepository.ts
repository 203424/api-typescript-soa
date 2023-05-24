import { Product } from "./Product";

export interface ProductRepository{
  getById(productId: number): Promise<Product | string>;
}

export interface ProductRepositoryCreate{
  createProduct(name: string, price: number): Promise<Product | string>; 
}