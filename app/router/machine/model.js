const mongoose = require('mongoose');
const {Schema} = mongoose;

const machineSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },  

    name: {
        type: String, 
        required: true
    },

    assignedToAdjuster: {
        type: String
    },

    status: { 
        type: String
    },

});

module.exports = mongoose.model('Machine' , machineSchema);