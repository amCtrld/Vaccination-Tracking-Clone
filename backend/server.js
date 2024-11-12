const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const Patient = require("./routes/patient.js")
const Vaccine = require("./routes/vaccine")


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


const uri = process.env.ATLAS_URI;
mongoose.set("strictQuery", false);

mongoose.connect(uri, {useNewUrlParser: true});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("connection established successfully")
})

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json());

// app.use(express.urlencoded({extended:true}))

// const usersRouter = require('./routes/users')

app.use('/patient', Patient)
app.use('/vaccine', Vaccine)

app.listen(port, () => {
    console.log(`Running: ${port}`);
});