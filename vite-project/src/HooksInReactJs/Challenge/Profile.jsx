import React, { useState } from "react";

const Profile = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [profile, setProfile] = useState({
    name: "sujan",
    age: "13",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={profile.name}
          onChange={handleChange}
          placeholder="enter your name"
        />
        <input
          type="number"
          value={profile.age}
          onChange={handleChange}
          placeholder="enter your age"
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        <h2>Profile Information</h2>

        <h3>Name: {profile.name} </h3>
        <h4>Age: {profile.age} </h4>
      </div>
    </div>
  );
};

export default Profile;
