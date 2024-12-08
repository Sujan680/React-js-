import React, { useEffect, useState } from "react";

const FetchingWithHooks = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      if (data && data.length) {
        setData(data);
      }
    }
    getData();
  }, []);
  return (
    <div>
        <h2>The fetched data are as follows:</h2>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchingWithHooks;
