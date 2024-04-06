const mongoose = require('mongoose');
const {Schema} = mongoose;

const adjusterSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    email:{
        type : String,
        required: true,
    },
    password:{
        type : String,
        required: true,
    },
    assigned_machine:{
        type : Object
    },
    
    status: {
        type: String
    },
});

module.exports = mongoose.model('Adjuster' , adjusterSchema);