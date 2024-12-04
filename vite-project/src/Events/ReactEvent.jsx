import React from "react";

const ReactEvent = () => {
  return (
    <div>
      <Move />
      <MouseOver />
      <OnCopy/>
    </div>
  );
};

export default ReactEvent;

const Move = () => {
  const handleClick = () => {
    console.log("I was clicked");
  };
  return (
    <>
      <button onClick={handleClick}>Click me</button>
    </>
  );
};

const MouseOver = () => {
  const handleMouseMove = () => {
    alert("Mouse moved over me!!");
  };
  return (
    <div>
      <p onMouseMove={handleMouseMove}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
        perspiciatis, totam modi dolore ipsam nemo, facilis consequatur officiis
        ipsum qui commodi fuga, est dignissimos obcaecati distinctio deserunt
        hic amet?
      </p>
    </div>
  );
};

const OnCopy = () => {
    const handleOnCopy = () => {
        console.log("Dont copy my content");
        
    }
  return (
    <div>
      <p onCopy={handleOnCopy}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi debitis
        ducimus cumque aliquid excepturi sequi id aut, numquam nulla
        perferendis.
      </p>
    </div>
  );
};
