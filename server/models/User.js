import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min:2,
        max:20,
    },
    lastName: {
        type: String,
        required: true,
        min:2,
        max:20,
    },
    email: {
        type: String,
        required: true,
        max:50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min:6,
    },
    picturePath:{
        type: String,
        default:""
    },
    friends:{
        type: Array,
        default:[]
    },
    location: String,
    occupation: String,
    impressions: Number,
    viewdProfile:Number
}, {timestamps: true});

export default mongoose.model("User", userSchema);
