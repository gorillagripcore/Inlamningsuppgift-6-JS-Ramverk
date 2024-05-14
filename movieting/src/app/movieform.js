// MovieForm.js
import React, { useState } from "react";

export default function MovieForm({ addMovie }) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("0");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title === "" || rating === "0") {
      alert("Hoppsan! Fyll i både titel och betyg thx.");
      return;
    }

    const stars = `<img style="height:20px; float:right;" src="https://i.imgur.com/ZL8u2NV.png" alt="Star">`;
    const starRating = stars.repeat(parseInt(rating));

    const newMovie = {
      title: title,
      rating: rating,
      stars: starRating,
    };

    addMovie(newMovie);
    setTitle("");
    setRating("0");
  };

  return (
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
  );
}