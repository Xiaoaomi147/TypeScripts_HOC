const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userModel = new Schema({
    name:{
        type: String,
        required: true,
    },
    phone:{
        type: Number,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
})
module.exports = mongoose.model('User', userModel)


