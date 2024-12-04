// UseState in the object

import React, { useState } from "react";

const UseStateObject = () => {
  const [movie, setMovie] = useState({
    title: "Equalizer 3",
    ratings: "6",
  });

  const updateRatings = () => {
    // const copyMovie = {
    //     ...movie,
    //     ratings: 9,
    // };
    // setMovie(copyMovie);

    setMovie({ ...movie, ratings: 9 });
  };
  return (
    <div>
      <h1> Movie: {movie.title} </h1>
      <h3> Ratings: {movie.ratings}</h3>
      <button
        style={{
          borderRadius: "10px",
          backgroundColor: "darkorchid",
          padding: "10px",
          color: "white",
        }}
        onClick={updateRatings}
      >
        Update Rating
      </button>
    </div>
  );
};

export default UseStateObject;
