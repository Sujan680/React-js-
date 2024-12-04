import React, { useState } from 'react'

const UseStateWithArrayOfObject = () => {
    const [movies, setMovies] =useState([
        {
            id: 1,
            title: 'Hero panti',
            ratings: 9
        },
        {
            id: 2,
            title:'Superman',
            ratings:10,
        }
    ]);

    const handleClick = () => {
       setMovies(
        movies.map((movie) => (movie.id === 1 ? {...movies, title: "Sujan Magr"} : movie))
       )
    };
  return (
    <div>
        {
            movies.map((movie,id) => (
                <li key={id}>
                    {movie.title}
                </li>
            ))
        }
        <button onClick={handleClick}>Change Name</button>
    </div>
  )
}

export default UseStateWithArrayOfObject