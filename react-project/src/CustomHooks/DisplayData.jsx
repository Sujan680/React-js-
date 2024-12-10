import React from "react";
import useFetchHook from "./useFetchHook";

const DisplayData = () => {
  const { data, loading, error } = useFetchHook(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <ol>
        <h2>Data List of some person:</h2>
        {
            data && 
            data.map((item) => (
                <li key={item.id} style={{listStyle: "inherit"}}>
                    <h3>Name: {item.name} </h3>
                    <h3>Email: {item.email}</h3>
                    <h3>Adress: {item.address.street}</h3>
                    <p>Phone: {item.phone}</p>
                    <p>Website: {item.website}</p>
                </li>
            ))
        }
    </ol>
  )
};

export default DisplayData;
