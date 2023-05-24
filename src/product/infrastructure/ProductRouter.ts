import { Router } from 'express';

import { productController, createProductController } from './dependencies';

export const productRouter = Router();

productRouter.get(
	'/products/:id',
	productController.run.bind(productController)
);
productRouter.post(
	'/products/',
	createProductController.run.bind(createProductController)
);
