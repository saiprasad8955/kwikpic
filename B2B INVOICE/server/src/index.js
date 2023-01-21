const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const route = require('../src/route/route')
const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
})
);

mongoose.set("strictQuery", false);

mongoose.connect("mongodb+srv://Sai0047:rXxgqYKPqwnhcXX7@cluster0.qptsw.mongodb.net/InvoiceDatabase", { useNewUrlParser: true })
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/api', route);

app.listen(process.env.PORT || 8080, () => {
    console.log("Server is running on Port " + (process.env.PORT || 8080))
});