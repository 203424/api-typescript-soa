import { Request, Response } from 'express';
import { GetByIdUseCase } from '../../application/GetByIdUseCase';
import { Product } from '../../domain/Product';

export class ProductController {
	constructor(readonly getByIdUseCase: GetByIdUseCase) {}

	async run(req: Request, res: Response) {
		const productId = req.params.id;

		const product = await this.getByIdUseCase.run(parseInt(productId));

		if(product instanceof Product){
			res.status(200).json(product);
		}else{
			res.status(500).json({message: product});
		}
	}
}
