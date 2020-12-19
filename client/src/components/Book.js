import { ButtonBase, Paper, Button, Grid, Typography } from "@material-ui/core";
import API from '../utils/API'

const Book = (props) => {
  function performAction() {
    switch (props.actionName) {
      case "Add":
        API.saveBook({title:props.title, author: props.author, description: props.description, image:props.src }).then(() => {
          
        });
        break;
      case "Delete":
        API.deleteBookByID(props.id).then(() => {
          API.getBooks().then((res) => {
            props.setBooks(res.data);
          });
        });
        break;
        
    }
  }

  return (
    <div>
      <Paper style={{ margin: "1.5rem" }}>
        <Grid item xs={12} direction="column" sm container spacing={2}>
          <Grid item xs={12} justify="space-around" sm container spacing={2}>
            <Grid item>
              <Typography>{props.title}</Typography>
              <Typography>Written by:{props.author}</Typography>
            </Grid>
            <Grid item>
              <Button>View</Button>
              <Button onClick={performAction}>{props.actionName}</Button>
            </Grid>
          </Grid>
          <Grid item xs={12} direction="row" sm container spacing={2}>
            <Grid item lg={2} sm={4} md={3} xs={12}>
              <ButtonBase>
                <img
                  style={{ maxWidth: "200px" }}
                  alt={props.alt}
                  src={props.src}
                />
              </ButtonBase>
            </Grid>
            <Grid style={{ margin: "1.5rem" }} item sm={6} xs={12}>
              <Typography>{props.description}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Book;
