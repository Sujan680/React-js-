import React, { useState } from "react";

const ShoppinsList = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!name || !quantity) return;

    const newItems = {
        name, 
        quantity: parseInt(quantity),
    };

    setItems((prevItems) => [...prevItems, newItems]);

    setName("");
    setQuantity("");


  }
  return (
    <div>
      <h1> Shopping List </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="enter the name"
        />
        <input
          type="number"
          name="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="enter the Quantity"
        />
        <button type="submit">Add Items</button>
      </form>

      <ul>
        {
            items.map((item, index) => (
                <li key={index}>{item.name} - Quantity : {item.quantity}</li>
            ))
        }
      </ul>
    </div>
  );
};

export default ShoppinsList;
