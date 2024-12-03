import React from "react";
import { FaBeerMugEmpty } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
const StylingComponent = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "darkkhaki",
          padding: "10px",
          fontSize: "16px",
        }}
      >
        <h2>Styling in React js</h2>
        <p>This is the styling in the react js...</p>
        <h4 style={{ textDecoration: "underline", fontSize: "20px" }}>
          These are the some react-icons:
        </h4>
        <FaBeerMugEmpty size={100} style={{ paddingRight: "30px" }} />
        <GiHamburgerMenu size={100} />
      </div>
      <div
        style={{
          backgroundColor: "lightblue",
          padding: "20px",
          borderRadius: "10px",
          color: "darkblue",
        }}
      >
        <h1>About Us</h1>
        <p style={{ textAlign: "justify" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          placeat sunt sint saepe, debitis totam tempore explicabo eligendi
          autem, nesciunt at cum dignissimos qui rem omnis enim sed excepturi
          quaerat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
          libero!
        </p>
        <p style={{ textAlign: "justify" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          nam. Sapiente neque optio voluptates unde aspernatur quibusdam sunt
          omnis quas adipisci? Assumenda perspiciatis provident ab ipsum ea
          commodi illo nam qui. Quasi suscipit laudantium eos unde voluptas
          dolorum quos perferendis, totam aliquam tempore veniam, minima neque
          aperiam dolore aspernatur distinctio.
        </p>
      </div>
    </>
  );
};

export default StylingComponent;
