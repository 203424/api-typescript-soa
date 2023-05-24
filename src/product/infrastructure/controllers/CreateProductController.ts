import { Request, Response } from 'express';
import {CreateProductUseCase} from '../../application/CreateProductUseCase';
import { Product } from '../../domain/Product';

export class CreateProductController {
	constructor(readonly CreateProductUseCase: CreateProductUseCase) {}

	async run(req: Request, res: Response) {
		const body = req.body as Product

        const product = await this.CreateProductUseCase.run(body.id, body.name, body.price);
        return res.status(200).json(product);
      }
    }