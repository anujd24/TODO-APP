const mongoose = require("mongoose");
// const { boolean } = require("zod");
mongoose.connect("mongodb+srv://anujd24:GkTYCfHDWEwzmVIn@ad.tqrvfcl.mongodb.net/todos");
const todoSchema = mongoose.Schema({
    title: String,
    description : String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}