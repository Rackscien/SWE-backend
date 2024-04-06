
// const complaintRouter = require('./app/router/complaints/resolver')
// const materialRouter = require('./app/router/material/resolver')
// const labourRouter = require('./app/router/labours/resolver')

// app.use('/complaint', complaintRouter);
// app.use('/resource/material', materialRouter);
// app.use('/resource/labour', labourRouter);


const express = require("express");
const mongoinit = require('./app/config/mongoose');
const bodyParser = require('body-parser');
const machineroutes = require('./app/router/machine/resolver');
const cors = require('cors');
require('dotenv').config();
const app = express();
const adjusterroutes = require('./app/router/Adjuster/resolver')
mongoinit();

//middlewares

app.use(cors({
    origin: '*'
}))
app.use(express.json());
app.use(bodyParser.json());

//routes
app.get('/',(req,res)=>{
    res.send("hello");
})
app.use('/api/machine',machineroutes);
app.use('/api/adjuster',adjusterroutes);

const port = process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`server at ${port}`);
})