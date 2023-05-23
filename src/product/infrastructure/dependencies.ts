import { GetByIdUseCase } from '../application/GetByIdUseCase';
import { ProductController } from './controllers/ProductController';
import { ProductRepositoryImpl } from './ProductRepositoryImpl';

const productRepository = new ProductRepositoryImpl();
const getByIdUseCase = new GetByIdUseCase(productRepository);

export const productController = new ProductController(getByIdUseCase);
