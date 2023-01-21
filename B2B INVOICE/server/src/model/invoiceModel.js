const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({

    itemName: {
        type: String,
        required: true,
    },
    SKU: {
        type: String,
        required: true,
    },
    HSN_SAC: {
        type: String,
        required: true,
    },
    quantity: {
        type: String,
        required: true,
    },
    rate: {
        type: String,
        required: true,
    },
    discount: {
        type: String,
        required: true,
    },
    cgst: {
        percentage: { type: Number },
        amount: { type: Number },
    },
    sgst: {
        percentage: { type: Number },
        amount: { type: Number },
    },
    itemAmount: { type: Number }
}, { timestamps: true });

module.exports = mongoose.model("Invoices", invoiceSchema)