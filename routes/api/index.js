const router = require("express").Router();
const books = require("./books");

// all routes
//*if* the URL path starts with "/api/books" then we call user.js inside api folder
router.use("/books", books);

module.exports = router;