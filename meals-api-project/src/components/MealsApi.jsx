import React, { useEffect, useState } from "react";
import "../style.css";
import axios from "axios";

const MealsApi = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  // Using the fetch method for getting data.....
//   useEffect(() => {
//     const fetchAPI = async () => {
//       try {
//         const response = await fetch(
//           "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const result = await response.json();
//         // console.log(result.meals);
//         setItems(result.meals);
//       } catch (error) {
//         setError(error.message);
//       }
//     };
//     fetchAPI();
//   }, []);


// Using the axios methods for the getting data...
    useEffect(() => {
      axios
        .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then((res) => {
          // console.log(res.data.meals);
          setItems(res.data.meals);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

  const itemsList = items.map(({ idMeal, strMeal, strMealThumb }) => {
    return (
      <section className="card" key={idMeal}>
        <img src={strMealThumb} alt={strMeal} />
        <section className="content">
          <p>{strMeal}</p>
          <p>{idMeal}</p>
        </section>
      </section>
    );
  });

  return (
    <>
      <h2 className="title">Some the best meals in the street...</h2>
      <div className="items-container">{itemsList}</div>
    </>
  );
};

export default MealsApi;
