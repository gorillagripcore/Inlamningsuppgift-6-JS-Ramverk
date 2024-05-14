// Movie.js
import React from "react";

export default function Movie({ movie, index, deleteMovie }) {
  return (
    <li key={index} data-grade={movie.rating} data-title={movie.title}>
      {movie.title}
      <img
        src="https://i.imgur.com/uVNCTlC.png"
        alt="Delete movie"
        className="delete-movie-icon"
        onClick={() => deleteMovie(index)}
      />
      <span dangerouslySetInnerHTML={{ __html: movie.stars }} />
    </li>
  );
}