import { Product } from "./Product";

export interface ProductRepository{
  getById(productId: number): Promise<Product | string>;
}

export interface ProductRepositoryGetAll{
  getAll(): Promise<Product[]>; 
}