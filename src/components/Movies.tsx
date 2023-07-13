import { Grid, Pagination, Stack } from "@mui/material";
import { useDispatch, useSelector } from "../store";
import Movie from "./Movie";

import classes from "./movie.module.scss";
import { getMovies } from "../slices";

const Movies = () => {
  const { movies, totalPages, name } = useSelector((state) => state.movies);
  
  const dispatch = useDispatch();

  const handlePageClick = (_event: React.ChangeEvent<unknown>, page: number) => {
    window.scrollTo(0, 0);
    dispatch(getMovies(name, page));
  };

  if (!movies.length) {
    return (
      <h2 style={{ color: "#ffffff" }}>
        No Movies Found!, search for the movies based on the actor's name
      </h2>
    );
  }

  return (
    <>
      <Grid container className={classes.movieGrid}>
        {movies.map((movie, index) => (
          <Movie key={index} movie={movie} />
        ))}
      </Grid>
      <Stack spacing={2}>
        <Pagination
          className={classes.pagination}
          count={totalPages}
          onChange={handlePageClick}
          shape="rounded"
          // variant= "outlined"
          color="primary"
          sx={{button:{color: '#ffffff'}}}
        />
      </Stack>
    </>
  );
};

export default Movies;
