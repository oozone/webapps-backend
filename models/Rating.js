let mongoose = require('mongoose');

let RatingSchema = new mongoose.Schema({
    comment: String,
    ratingNumber: {type: Number, default: 0},
    createdDate: {type: Date, default: new Date()}
});



mongoose.model('Rating', RatingSchema);