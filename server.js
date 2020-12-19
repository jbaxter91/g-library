const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

require('dotenv').config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("/client/build"));
}

// Add routes, both API and view
app.use(routes);

// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Established connection with MongoDB database.')
})

// Start the API server
app.listen(PORT, function() {
    console.log(`http://localhost:${PORT} Server Running on port ${PORT}!`);
});