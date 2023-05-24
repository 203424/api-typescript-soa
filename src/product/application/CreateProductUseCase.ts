import { ProductRepositoryCreate } from '../domain/ProductRepository';

export class CreateProductUseCase {
	constructor(readonly productRepository: ProductRepositoryCreate) {}

	async run(id: number, name: string, price: number ) {
		const product = await this.productRepository.createProduct(id, name, price);
		return product;
	}
}
