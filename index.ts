import 'reflect-metadata';
import app from './src/app';
import { AppDataSource } from './src/product/infrastructure/database/db';
import dotenv from 'dotenv';
import { productRouter } from './src/product/infrastructure/ProductRouter';

dotenv.config();
const port = process.env.PORT || 3000;

async function main() {
	try {
		await AppDataSource.initialize();

		app.use('/api/products', productRouter);

		app.listen(port, () => {
			console.log(`Server in port ${port}`);
		});
	} catch (error) {
		console.error(error);
	}
}

main();
