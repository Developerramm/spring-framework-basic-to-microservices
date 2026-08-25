import React from "react";

const Bye = ({ name, age, city = "Unknown", hobbies }) => {
  console.log(hobbies);

  return (
    <div>
      <h3>
        {" "}
        {name} {age} {city}{" "}
      </h3>

      <ul>
        {hobbies.map((hobby, index) => {
          return <li key={index}> {hobby} </li>;
        })}
      </ul>
    </div>
  );
};

export default Bye;
