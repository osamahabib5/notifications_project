
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    productImage = {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Todo', Todo);