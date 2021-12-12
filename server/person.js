const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
    number: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        default: "بدون آدرس",
    },
    phone: {
        type: String,
        required: true,
    },
    dateArrival: {
        type: String,
        required: true,
    },
    dateExport: {
        type: String,
        required: true,
    },
    typeRoom: {
        type: String,
        required: true,
    },
    lengthDay: {
        type: Number,
        require:true,
    },
    totalPrice :{
        type:Number,
        require:true,
    },
    discount: {
        type: Number,
        min: 0,
        max: 100,
        default: 0
    },
    curentDate:{
        type: Date,
        require:true
    }
});

module.exports = mongoose.model("person", personSchema);