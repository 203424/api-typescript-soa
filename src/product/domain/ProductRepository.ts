import { Product } from "./Product";

export interface ProductRepository{
  getById(productId: number): Promise<Product | null>;
}

export interface ProductRepositoryGetAll{
  getAll(): Promise<Product[]>; 
}