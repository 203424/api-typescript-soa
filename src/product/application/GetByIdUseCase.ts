import { ProductRepository } from '../domain/ProductRepository';

export class GetByIdUseCase {
	constructor(readonly productRepository: ProductRepository) {}

	async run(id: number) {
		const product = await this.productRepository.getById(id);
		return product;
	}
}
