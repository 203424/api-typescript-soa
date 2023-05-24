import { Request, Response } from 'express';
import {CreateProductUseCase} from '../../application/CreateProductUseCase';
import { Product } from '../../domain/Product';

export class CreateProductController {
	constructor(readonly CreateProductUseCase: CreateProductUseCase) {}

	async run(req: Request, res: Response) {
		const body = req.body as Product

        const product = await this.CreateProductUseCase.run(body.name, body.price);
        
        if(product instanceof Product){
          res.status(200).json(product);
        }else{
          res.status(500).json({message: product});
        }
      }
    }