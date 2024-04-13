const express = require("express");
const mongoinit = require('./app/config/mongoose');
const bodyParser = require('body-parser');
const machineroutes = require('./app/router/machine/resolver');
const cors = require('cors');
require('dotenv').config();
const app = express();
const adjusterroutes = require('./app/router/Adjuster/resolver')
const userroutes= require('./app/router/User/resolver')
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
app.use('/api/user',userroutes);

const port = process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`server at ${port}`);
})