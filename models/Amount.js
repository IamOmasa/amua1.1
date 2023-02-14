const mongoose = require('mongoose');

const AmountSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    totalAmout: {
        type: Number,
        default: 0
    },
    member: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Member"
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Amount', AmountSchema, 'amounts')