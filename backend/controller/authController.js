import User from "../model/usermodel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

import { errorHandler } from "../utils/error.js";

export const signup = async(req, res, next) => {
    const {username, email, password} = req.body;

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({username, email, password: hashedPassword});

    try {
        await newUser.save();
        res.status(200).json('User created Successfully!');
    } catch (error) {
        next(error);
    }
}

export const signin = async(req, res, next) => {
    const {email, password} = req.body;

    try {
        const validUser = await User.findOne({email});

        if(!validUser){
            return next(errorHandler(404, 'User not Found!'));
        }

        const validPassword = bcryptjs.compare(password, validUser.password);

        if(!validPassword){
            return next(errorHandler(401, 'Wrong Credentials!'));

        }

        const token = jwt.sign({id: validUser}, process.env.JWT_SECRET);

        const {password: pass, ...rest} = validUser._doc;

        res.cookie('access_token', token, {httpOly: true}).status(200).json(rest);


    } catch (error) {
        next(error);
    }
}