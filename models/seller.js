const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const  sellerSchema = new Schema({
    name : {
        type: String
    },
    email : {
        type: String
    },
    cars: [
        {
            type: Schema.Types.ObjectId,
            ref: 'car'
        }

    ]
});

module.exports = mongoose.model('seller',sellerSchema);
