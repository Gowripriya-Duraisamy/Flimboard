import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "./axios";
import { AppThunk } from "../store";

export const API_KEY = "c18ec52331b517ae2aaa43b1b3c95c3a";
const BASE_URL = "https://api.themoviedb.org/3/";

export interface ResponseData {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface KnownFor {
  media_type: string;
  original_title: string;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  adult: boolean;
}

export interface Movie {
  original_name: string;
  known_for_department: string;
  known_for: KnownFor[];
}

export interface MovieItem extends KnownFor {
  original_name: string;
  known_for_department: string;
}

export interface MovieData {
  page: number;
  movies: MovieItem[];
  totalPages: number;
  totalResults: number;
  name: string;
}

const initialState: MovieData = {
  page: 1,
  movies: [],
  totalPages: 0,
  totalResults: 0,
  name: ''
};

const slice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    storeName(state: MovieData, action: PayloadAction<string>) {
      state.name = action.payload
    },
    getMovie(state: MovieData, action: PayloadAction<ResponseData>) {
      state.page = action.payload.page;
      state.totalPages = action.payload.total_pages;
      state.totalResults = action.payload.total_results;
      const results: MovieItem[] = [];
      action.payload.results.forEach((result) => {
        result.known_for.forEach((known) => {
          if(known.poster_path && known.release_date && known.title) {
            results.push({
              title: known.title,
              media_type: known.media_type,
              original_title: known.original_title,
              overview: known.overview,
              poster_path: known.poster_path,
              release_date: known.release_date,
              adult: known.adult,
              original_name: result.original_name,
              known_for_department: result.known_for_department,
            });
          }
         
        });
      });
      state.movies = results;
    },
  },
});

export const reducer = slice.reducer;

export const storeName = (name: string) : AppThunk => async(dispatch) => {
    try {
      dispatch(slice.actions.storeName(name));
    } catch (error) {
      console.error(error);
    }
}

export const getMovies =
  (name: string, page: number): AppThunk =>
  async (dispatch) => {
    try {
      const queryString = `api_key=${API_KEY}&query=${name}&language=en-US&page=${page}&include_adult=false`;
      const response = await axios.get<ResponseData>(
        `${BASE_URL}/search/person?${queryString}`
      );
      dispatch(slice.actions.getMovie(response.data));
    } catch (ex) {
      console.error(ex);
    }
  };
