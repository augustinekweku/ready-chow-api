import express, { json } from 'express';

import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoute from "./controllers/product"

dotenv.config();
const app = express();

app.use(json())

mongoose.connect(process.env.MONGO_URL)  
.then(()=>{console.log("DB connection succesful")})
.catch((err)=>{console.log(err)})

app.use("/api/products", productRoute)


app.get('/', async (req, res) => {
    res.json({ status: true, message: "Our node.js app works" })
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
