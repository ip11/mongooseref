const express = require('express');
const router = express.Router();


const Car = require('../models/car');
const Seller = require('../models/seller');

router.route('/:sid').get(async(req,res,next)=>{
    const {sid} = req.params;
    const seller = await Seller.findById(sid).populate('cars','name -_id');
    res.json(seller);
// const seller = await Seller.findById(sid);
// res.json(seller);

}).post(async(req,res,next)=>{
    const {sid} = req.params;
    const newCar = new Car(req.body);
    const seller = await Seller.findById(sid);
    newCar.seller = seller;

    await newCar.save();

    seller.cars.push(newCar);
    await seller.save();

    res.json(newCar);
});


// router.route('/:sid').get().post(async(req,res,next)=>{
//     const {sid} = req.params;
// const newCar = new Car(req.body);
// const seller = await Seller.findById(sid);
// newCar.seller = seller;
//
// await newCar.save();
//
// seller.cars.push(newCar);
// await seller.save();
//
// res.json(newCar);
// });

module.exports = router;