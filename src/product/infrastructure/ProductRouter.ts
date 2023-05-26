import { Router } from 'express';

import {
	getByIdController,
	createProductController,
	getAllProductController
} from './dependencies';

export const productRouter = Router();

productRouter.post(
	'/products/add/',
	createProductController.run.bind(createProductController)
);
productRouter.get(
	'/products/list/',
	getAllProductController.run.bind(getAllProductController)
);
productRouter.get(
	'/products/list/:id',
	getByIdController.run.bind(getByIdController)
);
