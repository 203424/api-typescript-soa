import { Request, Response } from 'express';
import { GetAllUseCase } from '../../application/GetAllUseCase';
import { Product } from '../database/ProductEntity';

export class GetAllController {
	constructor(readonly getAllUseCase: GetAllUseCase) {}

	async run(_req: Request, res: Response) {
		const products = await this.getAllUseCase.run();
		console.log(typeof products);
		if (products instanceof Array<Product>) {
			res.status(200).json(products);
		} else {
			res.status(500).json({ message: products });
		}
	}
}
