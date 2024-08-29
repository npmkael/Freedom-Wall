import { NextFunction, Request, Response } from "express";
import Member from "../models/Member";
import "dotenv/config";
import mongoose, { Error, MongooseError } from "mongoose";
import { MongoServerError } from "mongodb";

const isMember = async (req: Request, _res: Response, next: NextFunction) => {
    const { email } = req.body;
    try {
        if (!process.env.secretPattern)
            throw new Error("No pattern to verify email");
        if (email) {
            const regex = new RegExp(process.env.secretPattern);
            const verifyPattern = email.match(regex);

            if (verifyPattern) {
                const match = await Member.findOne({ SN: verifyPattern[1] });
                if (match) {
                    console.log(
                        `${match.firstname} ${match.lastname} is verified as a true member`
                    );
                    return next();
                }
                return next(new Error("You are not from BSCS 3B"));
            }
            return next(new Error("Use DHVSU email"));
        }
        // email will be catched later, this is useless
        next();
    } catch (error) {
        console.log(error);
    }
};

type HandleErrorType = {
    message?: string;
    email?: string;
    password?: string;
};
const handleErrors = (
    err: MongoServerError | mongoose.Error.ValidationError
) => {
    let errors: HandleErrorType = {};

    if (err.message === "Incorrect credentials") {
        errors["message"] = err.message;
    } else if (err instanceof MongooseError) {
        errors["message"] = err.message;
    }

    if (err instanceof MongoServerError && err.code && err.code === 11000) {
        errors["email"] = "Email already exists";
        return errors;
    }

    if (
        err instanceof mongoose.Error.ValidationError &&
        err.message.includes("User validation failed")
    ) {
        Object.values(err.errors).forEach((error) => {
            if (error.path === "email" || error.path === "password") {
                errors[error.path] = error.message;
            }
        });
    }

    return errors;
};

export { handleErrors, isMember };
