import { Product } from '../domain/Product';
import { ProductRepository } from '../domain/ProductRepository';
import { Product as ProductEntity } from './database/ProductEntity';

export class RepositoryImpl implements ProductRepository {
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

	async createProduct(name: string, price: number): Promise<Product | string> {
		try {
			const existingProduct = await ProductEntity.findOneBy({ name: name });

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

	async getAll(): Promise<Product[] | string> {
		try {
			const products = await ProductEntity.find();
			let listProduct: Product[] = [];
			if (products) {
				products.forEach((product) => {
					listProduct.push(
						new Product(product.id, product.name, product.price)
					);
				});
			}
			return listProduct;
		} catch (error) {
			if (error instanceof Error) {
				return error.message;
			}
		}
		return '';
	}
}
