import { Router } from 'express';

import { productController } from './dependencies';

export const productRouter = Router();

productRouter.get(
	'/products/:id',
	productController.run.bind(productController)
);
productRouter.get(
	'/products/:id',
	productController.run.bind(productController)
);
productRouter.post(
	'/products/create',
	productController.run.bind(productController)
);
