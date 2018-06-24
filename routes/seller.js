const express = require('express');
const router = express.Router();

const Seller = require('../models/seller');

router.route('/').get(async (req,res,next) => {

    const seller = await Seller.find({});
    res.json(seller);
}).post(async(req,res,next) => {
    const newSeller = new Seller(req.body);
    await newSeller.save();
    res.json(newSeller);
});

module.exports = router;