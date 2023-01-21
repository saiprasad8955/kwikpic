const invoiceModel = require('../model/invoiceModel');


const newProductData = async (req, res) => {
    try {

        if (Object.keys(req.body).length === 0) {
            res.status(400).send({ status: false, msg: "Please Enter the Products Data" });
        }

        const newProduct = await invoiceModel.create(req.body);
        res.status(201).send({ status: true, msg: "Data Inserted Successfully", Data: newProduct });

    } catch (err) {
        console.log("This is the error :", err.message)
        res.status(500).send({ msg: "Error", error: err.message })
    }
};


module.exports = { newProductData }
