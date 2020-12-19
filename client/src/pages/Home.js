import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import NavBar from "../components/NavBar";
import HeroBanner from "../components/HeroBanner";
import BookList from "../components/BookList";
import API from '../utils/API';

const Home = (props) => {
  
  const [savedBooks, setSavedBooks] = useState([]);

    useEffect(() => {
        API.getBooks().then((res) =>{
            console.log(res.data);
            setSavedBooks(res.data);
        });
    },[]);

  return (
    <div>
      <NavBar />
      <Grid xs={12} container direction="column">
        <HeroBanner/>
        <BookList actionName="Delete" books={savedBooks} setBooks={setSavedBooks} title="Saved Books" />
      </Grid>
    </div>
  );
};

export default Home;
