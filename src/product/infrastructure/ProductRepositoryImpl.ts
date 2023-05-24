import { Product } from '../domain/Product';
import {
	ProductRepository,
	ProductRepositoryCreate
} from '../domain/ProductRepository';
import { Product as ProductEntity } from './database/ProductEntity';

export class ProductRepositoryImpl implements ProductRepository {
	async getById(id: number): Promise<Product | string> {
		try {
			const product = await ProductEntity.findOneBy({ id: id });
			console.log(product);

			if (product) {
				return new Product(product.id, product.name, product.price);
			}
			return 'No existe id';
		} catch (error) {
			if (error instanceof Error) {
				return error.message;
			}
		}
		return '';
	}
}
export class CreateProductRepositoryImpl implements ProductRepositoryCreate {
	async createProduct(name: string, price: number): Promise<Product | string> {
		try {
            const existingProduct = await ProductEntity.findOneBy({name: name});

            if (existingProduct) {
				throw new Error('Ya existe un producto con ese nombre.');
			}

			const product = new ProductEntity();
			product.name = name;
			product.price = price;
			const newProduct = await ProductEntity.save(product);

			return new Product(newProduct.id, newProduct.name, newProduct.price);
		} catch (error) {
			if (error instanceof Error) {
				console.error(error.message);
				return error.message;
			}
		}

		return '';
	}
}
