
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    email: {
        type: String
    },
    password: {
        type: String
    }
});

module.exports = mongoose.model('Todo', Todo);