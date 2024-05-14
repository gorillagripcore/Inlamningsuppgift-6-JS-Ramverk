// Movie.js
import React from "react";

export default function Movie({ movie, index, deleteMovie }) {
  return (
    <li key={index} data-grade={movie.rating} data-title={movie.title}>
      {movie.title}
      <img
        src="https://cdn.discordapp.com/attachments/1065202775782330368/1237459221172322386/delete.png?ex=663bb935&is=663a67b5&hm=487ce8581e505fab426b1ab5b011bfbd06919479a57a5d8b414055df4b49c5a3&"
        alt="Delete movie"
        className="delete-movie-icon"
        onClick={() => deleteMovie(index)}
      />
      <span dangerouslySetInnerHTML={{ __html: movie.stars }} />
    </li>
  );
}