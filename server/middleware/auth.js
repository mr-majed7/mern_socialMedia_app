import e from 'express';
import jwt from 'jsonwebtoken';

const verify = async (req,res,next) => {
    try{
        let token = req.headers("Authorization");

        if(!token){
            return res.status(403).json("You are not authorized");
        }
        if (token.startsWith("Bearer ")) {
            token = token.slice(7, token.length).trimLeft();
        }
        const verified = jwt.verify(token,process.env.JWT_SECRET);
        req.user = verified;
        next();
    }catch(err){
        res.status(500).json({error: err.message});
    }
}