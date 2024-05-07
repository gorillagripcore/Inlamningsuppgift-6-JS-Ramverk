"use client";
import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("0");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title === "" || rating === "0") {
      alert("Hoppsan! Fyll i både titel och betyg thx.");
      return;
    }

    const stars = `<img style="height:20px; float:right;" src="https://cdn.discordapp.com/attachments/1065202775782330368/1237459221428047912/star.png?ex=663bb935&is=663a67b5&hm=0b1ca93f8a0103fc08a55c3324ff9ab75d3f82b216057e5dafecb7c927213e21&" alt="Star">`;
    const starRating = stars.repeat(parseInt(rating));

    const newMovie = {
      title: title,
      rating: rating,
      stars: starRating,
    };

    setMovies([...movies, newMovie]);

    setTitle("");
    setRating("0");
  };

  const handleDeleteMovie = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  const handleSortAlphabetically = () => {
    const sortedMovies = [...movies].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setMovies(sortedMovies);
  };

  const handleSortByRating = () => {
    const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);
    setMovies(sortedMovies);
  };

  return (
    <main>
      <div>
        <div className="Container">
          <h1>Min filmlista</h1>
          <form className="m-3" id="add-movie-form" onSubmit={handleSubmit}>
            <fieldset>
              <legend>Lägg till en film</legend>

              <label htmlFor="title-field">Titel:</label>
              <input
                type="text"
                id="title-field"
                className="form-control m-3"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <label htmlFor="rating-field">Betyg:</label>

              <select
                id="rating-field"
                className="form-control m-3"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                <option value="0">Välj betyg här...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              <input
                type="submit"
                className="btn btn-success m-3"
                value="Spara film"
              />
            </fieldset>
          </form>

          <hr />

          <h2>Filmer</h2>

          <ul id="movies">
            {movies.map((movie, index) => (
              <li
                key={index}
                data-grade={movie.rating}
                data-title={movie.title}
              >
                {movie.title}
                <img
                  src="https://cdn.discordapp.com/attachments/1065202775782330368/1237459221172322386/delete.png?ex=663bb935&is=663a67b5&hm=487ce8581e505fab426b1ab5b011bfbd06919479a57a5d8b414055df4b49c5a3&"
                  alt="Delete movie"
                  className="delete-movie-icon"
                  onClick={() => handleDeleteMovie(index)}
                />
                <span dangerouslySetInnerHTML={{ __html: movie.stars }} />
              </li>
            ))}
          </ul>

          <div>
            <button
              className="btn btn-primary m-2"
              onClick={handleSortAlphabetically}
            >
              Sortera alfabetiskt
            </button>
            <button
              className="btn btn-primary m-2"
              onClick={handleSortByRating}
            >
              Sortera efter betyg
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
