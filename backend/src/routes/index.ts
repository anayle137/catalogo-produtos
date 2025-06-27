import { Router } from "express";
import { createProduct } from "../controller/products.controller";
import { getAllProducts } from "../controller/products.controller";
import { deleteProduct } from "../controller/products.controller";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello World!!!" });
});

router.post("/products", createProduct);
router.get("/products", getAllProducts);
router.delete("/products/:id", deleteProduct);

export default router;
