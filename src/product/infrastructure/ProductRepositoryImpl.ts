import { Product } from '../domain/Product';
import { ProductRepository } from '../domain/ProductRepository';

export class ProductRepositoryImpl implements ProductRepository {
	async getById(id: number): Promise<Product | null> {
    //logica de negocio
    return new Product(id, "");
	}
}
