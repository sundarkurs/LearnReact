import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "../Movies/MoviesList";
import AddMovie from "../Movies/AddMovie";
import axios from "axios";

const UsingAxios = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(() => {
    setIsLoading(true);
    setError(null);

    axios
      .get("https://reactdata-ccb9d-default-rtdb.firebaseio.com/movies.json")
      .then((response) => {
        const loadedMovies = [];
        for (const key in response.data) {
          loadedMovies.push({
            id: key,
            title: response.data[key].title,
            openingText: response.data[key].openingText,
            releaseDate: response.data[key].releaseDate,
          });
        }
        setMovies(loadedMovies);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  function addMovieHandler(movie) {
    axios
      .post("https://reactdata-ccb9d-default-rtdb.firebaseio.com/movies.json", {
        ...movie,
      })
      .then((res) => {
        console.log(res.data);
      });
  }

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
};

export default UsingAxios;
