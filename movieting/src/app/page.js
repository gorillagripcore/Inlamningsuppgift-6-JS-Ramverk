// Page.js
"use client"
import React, { useState } from "react";
import MovieForm from "./movieform";
import MovieList from "./movielist";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"; 

export default function Page() {
  const [movies, setMovies] = useState([]);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const deleteMovie = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  const sortAlphabetically = () => {
    const sortedMovies = [...movies].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setMovies(sortedMovies);
  };

  const sortByRating = () => {
    const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);
    setMovies(sortedMovies);
  };

  return (
    <main>
      <div className="Container">
        <h1>Movieting</h1>
        <MovieForm addMovie={addMovie} />
        <hr />
        <h2>Filmer</h2>
        <MovieList
          movies={movies}
          deleteMovie={deleteMovie}
          sortAlphabetically={sortAlphabetically}
          sortByRating={sortByRating}
        />
      </div>
    </main>
  );
}