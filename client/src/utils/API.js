/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {

    //============ ALL Book API CALLS ==============
  // Gets all Books
  getBooks: function() {
      console.log("Getting Books");
    return axios.get("/api/Books");
  },
  // Gets the Book with the given id
  getBookByID: function(id) {
    return axios.get("/api/Books/" + id);
  },
  // Updates the Book information for the given Book id
  updateBookByID: function(id) {
    return axios.put("/api/Books/" + id);
  },
  // Deletes the Book with the given id
  deleteBookByID: function(id) {
    return axios.delete("/api/Books/" + id);
  },
  // Saves a Book to the database
  saveBook: function(BookData) {
    return axios.post("/api/Books", BookData);
  },

};
