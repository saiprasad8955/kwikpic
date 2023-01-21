const express = require('express')
const router = express.Router();

const { newProductData } = require('../controller/invoiceController')
const { createTable, download } = require('../controller/downloadPdf')
// Database for creating PDF
router.post('/addData', newProductData);

// Download Pdf
router.get("/generate/report", download);


module.exports = router;