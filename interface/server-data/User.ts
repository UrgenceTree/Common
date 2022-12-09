import { model, Schema } from "mongoose";
const uniqueValidator = require("mongoose-unique-validator");
export interface IUser {
    _id: Number
    name: String
    email: String
    status: String
    password: Number
    phoneNumber: String
}

const UserSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    status: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true, unique: true },
});

UserSchema.plugin(uniqueValidator);

export const UserModel = model("UserModel", UserSchema);
