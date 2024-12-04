import React, { useState } from "react";

const TodoList = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setItems([...items, name]);
      setName("");
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Add a new Todo"
        />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}item</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
