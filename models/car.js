const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carSchema = new Schema({
    name: {
        type : String
    },
    year:{
        type : Number
    },
    seller:{
        type: Schema.Types.ObjectId,
        ref: 'seller'
    }
})

module.exports = mongoose.model('car',carSchema);