import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

//USER REGISTRATION
export const register = async (req,res) => {
    try{
        const {
            firstName,
            lastName,
            email,
            password,
            location,
            occupation,
            picturePath,
            friends,
        }=req.body;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            location,
            occupation,
            picturePath,
            friends,
            viewProfile: Math.floor(Math.random() * 500),
            impression: Math.floor(Math.random() * 500),
        })
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);

    }catch(err){
        res.status(500).json({error: err.message});
    }

}

//USER LOGIN
export const login = async (req,res) => {
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        const isMatch = await bcrypt.compare(password,user.password);
        if (!user || !isMatch) {
            return res.status(404).json("Wrong email or password");
        }
        const token = jwt.sign({id: user._id},process.env.JWT_SECRET,);
        delete user.password;
        res.status(200).json({user,token});
    }catch(err){
        res.status(500).json({error: err.message});
    }
}