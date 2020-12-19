const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema({
  title: {type: String, trim: true, required: [true, "Please add a title"]},
  author: {type: String, trim: true, required: [true, "Please add an author"]},
  description: {type: String, trim: true},
  image: {type:String},
  url: {type:String}
  
});

const Books = mongoose.model("Books", booksSchema);

module.exports = Books;
