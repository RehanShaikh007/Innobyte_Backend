import {signin, signup}  from "../controller/authController.js";
import express from "express";

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);


export default router;