import React, { useState } from "react";

const UseState1 = () => {
  const [friends, setFriends] = useState(["Sujan", "Dipesh", "Nabin"]);

  const addNewFriend = () => {
    setFriends([...friends, "Sudip", "Rajesh"]);
  };

  const removeOneFriend =() => {
    setFriends(friends.filter((friend) => friend !== "Dipesh"))
  }

  const updateNewFriend = () => {
    setFriends( friends.map(friend => friend === "Nabin" ? 'Milan' : friend) )
  }
  return (
    <div>
      {friends.map((friend, indx) => (
        <ul key={indx}>
          <li> {friend} </li>
        </ul>
      ))}
      <button
        style={{
          borderRadius: "10px",
          backgroundColor: "darkorchid",
          padding: "10px",
          color: "white",
          marginBottom:'10px'
        }}
        onClick={addNewFriend}
      >
       Add New Friend
      </button>
      <button
        style={{
          borderRadius: "10px",
          backgroundColor: "darkorchid",
          padding: "10px",
          color: "white",
          marginBottom:'10px'
        }}
        onClick={removeOneFriend}
      >
       Remove Friend
      </button>
      <button
        style={{
          borderRadius: "10px",
          backgroundColor: "darkorchid",
          padding: "10px",
          color: "white",
          marginBottom:'10px'
        }}
        onClick={updateNewFriend}
      >
       Update New Friend
      </button>
    </div>
  );
};

export default UseState1;
