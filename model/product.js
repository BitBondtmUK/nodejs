const mongoose = require('mongoose');
const product = mongoose.Schema({
    name:{
        type: String,
        require: 'Name must have a value'
    },
    price:{
        type: Number,
        require: 'Price must have a value'
    }
});

module.exports = product;