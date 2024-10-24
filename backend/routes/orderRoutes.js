import express from "express";
import {verifyToken} from "../utils/verifyUser.js";
import { plcaeOrder } from "../controller/orderController.js";


const router = express.Router();

router.post('/orders', verifyToken, plcaeOrder);


export default router;