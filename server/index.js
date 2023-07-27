// REQUIRE PACKAGES
import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import multer from 'multer';
import morgan from 'morgan';
import path from "path";
import { fileURLToPath } from "url";
import helmet from 'helmet';
import dotenv from 'dotenv';
import {register} from './controllers/auth.js';
import authRoutes from './routes/auth.js'

// CONFIGURATIONS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({path: path.join(__dirname, '.env')});
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: 'cross-origin'}));
app.use(morgan('dev'));
app.use(bodyparser.json({limit: '20mb',extended: true}));
app.use(bodyparser.urlencoded({limit: '20mb',extended: true}));
app.use(cors());
app.use("/assets",express.static(path.join(__dirname, 'public/assets')));

//FILE STORAGE
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, './public/assets');
    },
    filename: function(req,file,cb){
        cb(null, file.originalname);
    }
});
const upload = multer({storage: storage});

// ROUTES
app.post('auth/register',upload.single('image'), register);

app.use('/login','authRoutes')

// DATABASE CONNECTION
const port = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI, 
    {useNewUrlParser: true, useUnifiedTopology: true
    }).then(()=>{
        console.log('DB CONNECTED')
    })
    .catch(err =>{
        console.log("ERROR, COULD NOT CONNECT")
        console.log(err)
    })


















app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})