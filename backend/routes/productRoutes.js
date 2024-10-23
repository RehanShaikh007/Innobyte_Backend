import express from "express";
import { addProduct, deleteProduct, updateProduct } from "../controller/productController.js";
import { verifyAdmin } from "../utils/verifyAdmin.js";
import {verifyToken} from "../utils/verifyUser.js";



const router = express.Router();

router.post('/products', verifyToken,verifyAdmin, addProduct);
router.put('/products/:id', verifyToken,verifyAdmin, updateProduct);
router.delete('/products/:id', verifyToken,verifyAdmin, deleteProduct);

export default router;