const mongoose = require("mongoose");
const db = require("../models");
require('dotenv').config();

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI);

const bookSeed = [
  {
    title: "Harry Potter",
    author: "JK Rowling",
    description:
      "Harry potter does something with things and magic comes out of his butt!",
    image:
      "https://i5.walmartimages.com/asr/0a641b4f-33c3-4b81-8995-6faaaca606cf.3792f93a2c3075c55c1d61556ebb4986.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
    url: "",
  },
  {
    title: "Harry Potter",
    author: "JK Rowling",
    description:
      "Harry potter does something with things and magic comes out of his butt!",
    image:
      "https://i5.walmartimages.com/asr/0a641b4f-33c3-4b81-8995-6faaaca606cf.3792f93a2c3075c55c1d61556ebb4986.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
    url: "",
  },
];

db.Books.create(bookSeed[0])
.then(() => db.Books.create(bookSeed[1]))
.then((data)=> {process.exit(0);})
