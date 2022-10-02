import Order from "../models/Order";
import express from "express";

var router = express.Router();

// get all orders
router.get("/", async  (req, res)=>{
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
      } catch (err) {
        res.status(500).json(err);
      }
})

//get an order

router.get("/:id", async  (req, res)=>{
    try {
        const order = await Order.findById(req.params.id,);
        res.status(200).json(order);
      } catch (err) {
        res.status(500).json(err);
      }
})


//create a new order
router.post("/:id", async  (req, res)=>{
    try {
        const order = await Order.create(req.body);
        res.status(201).json(order);
      } catch (err) {
        res.status(500).json(err);
      }
})

// update an order

router.put("/:id", async  (req, res)=>{
    try {
        const order = await Order.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        res.status(200).json(order);
      } catch (err) {
        res.status(500).json(err);
      }
})





module.exports = router ;
