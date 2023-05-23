import { Request, Response } from 'express';
import { GetByIdUseCase } from '../../application/GetByIdUseCase';

export class ProductController {
	constructor(readonly getByIdUseCase: GetByIdUseCase) {}

	async run(req: Request, res: Response) {
		const productId = req.params.id;

		const product = await this.getByIdUseCase.run(parseInt(productId));
		res.status(200).send(product);
	}
}
