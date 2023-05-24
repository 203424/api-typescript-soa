import { CreateProductUseCase } from '../application/CreateProductUseCase';
import { GetByIdUseCase } from '../application/GetByIdUseCase';
import { ProductController } from './controllers/ProductController';
import { CreateProductController } from './controllers/CreateProductController';
import {
	ProductRepositoryImpl,
	CreateProductRepositoryImpl
} from './ProductRepositoryImpl';

const productRepository = new ProductRepositoryImpl();
const createProductRepository = new CreateProductRepositoryImpl();
const getByIdUseCase = new GetByIdUseCase(productRepository);
const createProductUseCase = new CreateProductUseCase(createProductRepository);

export const productController = new ProductController(getByIdUseCase);
export const createProductController = new CreateProductController(
	createProductUseCase
);
