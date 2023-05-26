import { ProductRepository } from '../domain/ProductRepository';

export class CreateProductUseCase {
	constructor(readonly productRepository: ProductRepository) {}

	async run(name: string, price: number ) {
		const product = await this.productRepository.createProduct(name, price);
		return product;
	}
}
