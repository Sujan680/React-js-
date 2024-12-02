/* eslint-disable react/prop-types */
// Props are arguments passed into react components.
// Props allows us to pass data from parent to a child component

const Props = () => {
  return (
    <div>
      <User
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s"
        name1="Cat"
        age="2"
      />
    </div>
  );
};

export default Props;

const User = (props) => {
  return (
    <div>
      <img src={props.img} alt={props.name} />
      <h3> Name: {props.name1} </h3>
      <p>Age: {props.age} </p>
    </div>
  );
};
