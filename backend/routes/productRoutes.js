import express from "express";
import { addProduct } from "../controller/productController.js";
import { verifyAdmin } from "../utils/verifyAdmin.js";
import {verifyToken} from "../utils/verifyUser.js";



const router = express.Router();

router.post('/products', verifyToken,verifyAdmin, addProduct);

export default router;