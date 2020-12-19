import {Paper,Grid,Typography} from "@material-ui/core";

const HeroBanner = (props) => {
  return (
    <div>
      <Paper style={{ margin: "1.5rem", paddingBottom:"1rem" }}>
        <Grid style={{ margin: "1.5rem", paddingTop: "2rem" }}>
            <Grid container direction="column" alignItems="center" justify="center" xs={12}>
                <Typography variant="h3" component="h2" gutterBottom>(React) Google Books Search</Typography>
                <Typography variant="h4" gutterBottom>Search for and Save Books of Interest</Typography>
            </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default HeroBanner;
