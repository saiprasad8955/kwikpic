const fs = require("fs");
const PDFDocument = require("pdfkit-table");
const invoiceModel = require('../model/invoiceModel');

const { cwd } = require("process");

// init document
let doc = new PDFDocument({ margin: 30, size: "A4" });
// save document
doc.pipe(fs.createWriteStream("./Invoice.pdf"));

const createTable = async (data) => {
    const table = {
        title: "Invoice",
        headers: ["ItemName", "SKU", "HSN_SAC", "Qty", "Rate", "Discount", "CGST_percentage", "CGST_Amt", "SGST_percentage", "SGST_Amt", "Amount"],
        rows: data,
    };
    await doc.table(table, {});
    doc.end();
}

const download = async (req, res) => {

    const data1 = await invoiceModel.find();

    data1.forEach((el) => {
        createTable([
            [el.itemName, el.SKU, el.HSN_SAC, el.quantity, el.rate, el.discount, el.cgst.percentage, el.cgst.amount, el.sgst.percentage, el.sgst.amount, el.itemAmount]
        ]);
    });
    
    res.download(cwd() + "/invoice.pdf");
}

module.exports = { createTable, download }