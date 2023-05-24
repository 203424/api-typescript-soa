import { ProductRepositoryCreate } from '../domain/ProductRepository';

export class CreateProductUseCase {
	constructor(readonly productRepository: ProductRepositoryCreate) {}

	async run(name: string, price: number ) {
		const product = await this.productRepository.createProduct(name, price);
		return product;
	}
}
