import React from "react";
import "../index.css";
const Card = () => {
  return (
    <div className="container">
      <div className="card">
        <img
          src="https://images.pexels.com/photos/29549363/pexels-photo-29549363/free-photo-of-vibrant-european-robin-perched-in-nature.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt="bird"
        />
        <h2>Bird</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est
          quod necessitatibus? Beatae, officia, minus sit molestias ipsam esse
          modi commodi reiciendis omnis similique nemo, dignissimos enim
          suscipit dolorum tempore!
        </p>
      </div>
    </div>
  );
};

export default Card;
