// Books controller is where all the database calls are done
// This seperates the routes from the database code
const db = require("../models");

// Defining methods for the BooksController
module.exports = {
  findAll: function (req, res) {
    db.Books.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Books.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByCompanyId: function (req, res) {
    //If the request is not formatted correct it will not even try
    if (req.params.id) {
      var query = {};

      query = { companyID: req.params.id };
      db.Books.find(query)

        //Because we are searching by company, we will remove the company return because its redundent
        .select("-companyID")

        //Fill in needed data for the agents
        .populate("agents", ["username", "avatarURL"])

        //Now we sort the array of messages so its always in the same order
        .populate({ path: "messages", options: { sort: { timeStamp: -1 } } })

        .then((dbModel) => {
          res.json(dbModel);
        })
        .catch((err) => res.status(422).json(err));
    }
  },
  create: function (req, res) {
    db.Books.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    //console.log(req.body);
    db.Books.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
      .then((updatedBooks) => {
        //console.log(updatedBooks);
        res.json(updatedBooks);
      })
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Books.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
