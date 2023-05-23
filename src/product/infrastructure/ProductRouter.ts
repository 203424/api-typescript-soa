import { Router } from 'express';

import { productController } from './dependencies';

export const productRouter = Router();

productRouter.get(
	'/products/:id',
	productController.run.bind(productController)
);
