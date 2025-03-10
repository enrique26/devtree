import mongoose, { Schema } from "mongoose";

interface UserI {
    handle: string;
    name: string;
    email: string;
    password: string;
}

const userSchema = new Schema({
    handle: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    }
})

const User = mongoose.model<UserI>('User',userSchema);
export default User;