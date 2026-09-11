import React from "react";

const Hello = (props) => {
  console.log(props);

  // props.name = "sanchit"
  return (
    <div>
      <h3>Hello {props.name} </h3>
      <h3>Your age is : {props.age} </h3>
      <h3>Your city is {props.city} </h3>
    </div>
  );
};

export default Hello;
