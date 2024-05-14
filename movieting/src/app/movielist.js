// MovieList.js
import React from "react";
import Movie from "./movie";

export default function MovieList({ movies, deleteMovie, sortAlphabetically, sortByRating }) {
  return (
    <div>
      <ul id="movies">
        {movies.map((movie, index) => (
          <Movie
            key={index}
            movie={movie}
            index={index}
            deleteMovie={deleteMovie}
          />
        ))}
      </ul>
      <div>
        <button className="btn btn-primary m-2" onClick={sortAlphabetically}>
          Sortera alfabetiskt
        </button>
        <button className="btn btn-primary m-2" onClick={sortByRating}>
          Sortera efter betyg
        </button>
      </div>
    </div>
  );
}
