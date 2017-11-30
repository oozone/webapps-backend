let mongoose = require('mongoose');

let ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    comment: String,
    createdDate: {type: Date, default: new Date()}
});



mongoose.model('Contact', ContactSchema);