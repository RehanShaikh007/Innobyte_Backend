import Product from "../model/productMode.js";
import {errorHandler} from "../utils/error.js";
import Order from "../model/orderModel.js";

export const plcaeOrder = async(req, res, next) => {
    try {
        const {userId, products, shippingAddress, paymentMethod} = req.body;

        let totalPrice = 0;

        for(const item of products){
            const product = await Product.findById(item.productId);

            if(!product){
                return next(errorHandler(404, 'Product Not Found!'));
            }

            totalPrice += product.price * item.quantity;
        }

        const newOrder = new Order ({
            userId, products, totalPrice, shippingAddress, paymentMethod
        });

        await newOrder.save();

        res.status(201).json({
            message: 'Order Placed Successfully!',
            newOrder
        });
    } catch (error) {
        next(error);
    }
}