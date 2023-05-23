import { Product } from '../domain/Product';
import { ProductRepository } from '../domain/ProductRepository';
import { Product as ProductEntity } from './database/ProductEntity';

export class ProductRepositoryImpl implements ProductRepository {
	async getById(id: number): Promise<Product | string> {
		try {
			const product = await ProductEntity.findOneBy({ id: id });
			console.log(product);

			if (product) {
				return new Product(product.id, product.name, product.price);
			}
            return 'No existe id'
		} catch (error) {
			if (error instanceof Error) {
				return error.message;
			}
		}
		return '';
	}
}
