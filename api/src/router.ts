import path from "node:path";

import { Router } from "express";
import multer from "multer";
import { createCategory } from "./app/models/useCases/categories/createCategory";
import { listCategories } from "./app/models/useCases/categories/listCategories";
import { createProduct } from "./app/models/useCases/products/createProduct";
import { listProducts } from "./app/models/useCases/products/listProducts";
import { listProductsByCategory } from "./app/models/useCases/categories/listProductsByCategory";
import { listOrders } from "./app/models/useCases/orders/listOrders";
import { createOrders } from "./app/models/useCases/orders/createOrders";
import { changeOrdersStatus } from "./app/models/useCases/orders/changeOrdersStatus";
import { cancelOrder } from "./app/models/useCases/orders/cancelOrder";

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, "..", "uploads"));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// List categories

router.get("/categories", listCategories);

// Create category
router.post("/categories", createCategory);

// List products

router.get("/products", listProducts);

// Create products
router.post("/products", upload.single("image"), createProduct);

// get products by category

router.get("/categories/:categoryId/products", listProductsByCategory);

// list orders

router.get("/orders", listOrders);

// Create orders
router.post("/orders", createOrders);

// Change order status
router.patch("/orders/:orderId", changeOrdersStatus);

// delete/cancel order
router.delete("/orders/:orderId", cancelOrder);
