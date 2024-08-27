import { Document, Model } from "mongoose";

export interface CustomUserType extends Document {
    email: string;
    password: string;
}

export interface UserModelType extends Model<CustomUserType> {
    login(email: string, password: string): Promise<CustomUserType>;
}
