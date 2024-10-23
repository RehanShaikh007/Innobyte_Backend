import Product from "../model/productMode.js";

import { errorHandler } from "../utils/error.js";

export const addProduct = async (req, res, next) => {
  const { name, description, price, category, stock, imageUrl } = req.body;

  const newProduct = new Product({
    name,
    description,
    price,
    category,
    stock,
    imageUrl,
  });

  try {
    
    const savedProduct = await newProduct.save();
    res.status(201).json({
      message: "Product created Successfully!",
      product: savedProduct,
});
}
  catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedProduct) {
      return next(errorHandler(404, "Product Not Found!"));
    }

    res.status(200).json({
      message: "Product Updated Successfully!",
      product: updatedProduct,
    });
  } catch (error) {
    if (error.kind === "ObjectId") {
      return next(errorHandler(400, "Invalid Product ID"));
    }
    next(error);
  }
};
