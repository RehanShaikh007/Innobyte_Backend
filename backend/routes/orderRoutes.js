import express from "express";
import {verifyToken} from "../utils/verifyUser.js";
import { placeOrder, viewOrders } from "../controller/orderController.js";


const router = express.Router();

router.post('/orders', verifyToken, placeOrder);
router.get('/orders', verifyToken, viewOrders);


export default router;