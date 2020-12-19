import React from "react";
import Book from './Book';
import { Grid } from '@material-ui/core';


const BookList = props=>{

    

    return(
        <div>
            <Grid>
            {props.books ? props.books.map(res => (
                
            <Book 
            title={res.title}
            author={res.author}
            alt={res.alt}
            src={res.image}
            description={res.description}
            key={res._id ? res._id : res.key}
            action={props.action}
            actionName={props.actionName}
            selectedBook={props.selectedBook}
            id={res._id ? res._id : res.key}
            />
            )) : null}
            </Grid>
        </div>
    )
}

export default BookList;