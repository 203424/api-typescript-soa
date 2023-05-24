import { Product } from "./Product";

export interface ProductRepository{
  getById(productId: number): Promise<Product | string>;
  createProduct(name: string, description: string, price: number): Promise<[Product,boolean]>;
}

export interface ProductRepositoryGetAll{
  getAll(): Promise<Product[]>; 
}

