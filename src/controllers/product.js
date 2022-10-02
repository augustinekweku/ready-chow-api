import Product from "../models/Product";
import express from "express";

var router = express.Router();

//get all products

router.get("/", async  (req, res)=>{
    try {
        const products = await Product.find();
        res.status(200).json(products);
      } catch (err) {
        res.status(500).json(err);
      }
})


//create a new product

router.post("/", async  (req, res)=>{
    try {
        const products = await Product.find();
        res.status(200).json(products);
      } catch (err) {
        res.status(500).json(err);
      }
})


//get a product

router.get("/:id", async  (req, res)=>{
    try {
        const product = await Product.findById(req.params.id,);
        res.status(200).json(product);
      } catch (err) {
        res.status(500).json(err);
      }
})




module.exports = router ;
