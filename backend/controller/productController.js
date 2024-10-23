import Product from "../model/productMode.js";

import { errorHandler } from "../utils/error.js";

export const addProduct = async(req, res, next) =>{
    try {
      const {name, description, price, category, stock, imageUrl} = req.body;

      const newProduct = new Product({
        name, description, price, category, stock, imageUrl
      });

      await newProduct.save();
      res.status(201).json('Product created Successfully!');
    }
    catch(error) {
        next(error);
    }
}