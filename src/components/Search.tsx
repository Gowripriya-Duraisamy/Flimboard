import { Button, Grid, TextField } from "@mui/material";

import classes from "./search.module.scss";
import { useDispatch, useSelector } from "../store";
import { ChangeEvent } from "react";
import { getMovies, storeName } from "../slices";

const Search = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.movies);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(storeName(event.target.value));
    dispatch(getMovies(event.target.value, 1));
  };

  const handleButtonClick = () => {
    dispatch(getMovies(name, 1));
  };

  return (
    <Grid item xs={9} className={classes.searchGrid}>
      <Grid item xs={4}>
        <TextField
          className={classes.textField}
          id="outlined-basic"
          variant="outlined"
          size="small"
          onChange={handleNameChange}
          placeholder="Actors name"
          fullWidth
        />
      </Grid>
      <Grid item xs={1}>
        <Button  className={classes.searchButton} onClick={handleButtonClick}>Search</Button>
      </Grid>
    </Grid>
  );
};

export default Search;
