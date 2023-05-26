import { ProductRepository } from "../domain/ProductRepository";

export class GetAllUseCase {
	constructor(readonly productRepository: ProductRepository) {}

	async run() {
		const product = await this.productRepository.getAll();
		return product;
	}
}