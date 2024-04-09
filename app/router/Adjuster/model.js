const mongoose = require('mongoose');
const {Schema} = mongoose;

const adjusterSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
       
    assigned_machine:{
        type : String
    },
    
    status: {
        type: String
    },
});

module.exports = mongoose.model('Adjuster' , adjusterSchema);