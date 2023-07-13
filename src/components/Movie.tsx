import { FC } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import moment from "moment"
import { API_KEY, MovieItem } from "../slices";
import classes from "./movie.module.scss";

export interface MovieData {
  movie: MovieItem;
}

const Movie: FC<MovieData> = ({ movie }) => {
  return (
    <Grid container xs={2.5}>
      <Card className={classes.card}>
        <Grid container className={classes.cardGrid}>
          <Grid item xs={12} className={classes.imageGrid}>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}?api_key=${API_KEY}`}
              alt="Poster"
              className={classes.image}
            />
          </Grid>
          <Grid item xs={12}>
            <CardContent>
            <Typography >
              {movie.title}
            </Typography>
            <Typography>
              ({moment(movie.release_date, "YYYY-MM-DD").format("YYYY")})
            </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default Movie;
