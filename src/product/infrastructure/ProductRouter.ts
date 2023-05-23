import express from "express";

import { productController } from "./dependencies";

export const productRouter = express.Router();

productRouter.get("/:id", productController.run.bind(productController));