const mongoose = require('mongoose')
const candidateSchema = new mongoose.Schema({

    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: Number,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    
});
const candidates = mongoose.model.candidates || mongoose.model('candidates',candidateSchema)
module.exports = candidates