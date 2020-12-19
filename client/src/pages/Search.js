import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import NavBar from "../components/NavBar";
import HeroBanner from "../components/HeroBanner";
import BookList from "../components/BookList";
import SearchField from '../components/SearchField';

const Search = (props) => {
  const [searchBooks, setsearchBooks] = useState([]);

  return (
    <div className="Search-wrapper">
      <NavBar />
      <Grid container direction="column">
        <HeroBanner/>
        <SearchField books={searchBooks} setBooks={setsearchBooks}/>
        <BookList actionName="Add" books={searchBooks} title="Results" />
      </Grid>
    </div>
  );
};

export default Search;
