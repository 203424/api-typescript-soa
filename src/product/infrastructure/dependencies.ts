import { CreateProductUseCase } from '../application/CreateProductUseCase';
import { GetAllUseCase } from '../application/GetAllUseCase';
import { GetByIdUseCase } from '../application/GetByIdUseCase';

import { GetByIdController } from './controllers/GetByIdController';
import { CreateProductController } from './controllers/CreateProductController';
import { GetAllController } from './controllers/GetAllController';

import { RepositoryImpl } from './ProductRepositoryImpl';

const repositoryImpl = new RepositoryImpl();

const getByIdUseCase = new GetByIdUseCase(repositoryImpl);
const createProductUseCase = new CreateProductUseCase(repositoryImpl);
const getAllUseCase = new GetAllUseCase(repositoryImpl);

export const getByIdController = new GetByIdController(getByIdUseCase);
export const createProductController = new CreateProductController(createProductUseCase);
export const getAllProductController = new GetAllController(getAllUseCase);

