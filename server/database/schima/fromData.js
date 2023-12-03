const mongoose = require("mongoose");

const FromData = new mongoose.Schema({
    userImage: {
        type: String
    },
    customerName: {
        type: String
    },
    email: {
        type: String
    },
    mobileNumber: {
        type: Number
    },
    address: {
        type: String
    },
    works: [{
        work: {
            type: String
        }
    }]
})

const FromData_Schima = mongoose.model("fromData", FromData);
module.exports = FromData_Schima;
