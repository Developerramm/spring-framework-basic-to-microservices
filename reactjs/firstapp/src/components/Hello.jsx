import React from "react";

const Hello = () => {
  let fruits = ["Apple", "Banana", "Orange"];
  let name = "Ram kumar";
  return (
    <div>
      <h2>Fruit Name : {name} </h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}> {fruit} </li>
        ))}
      </ul>
    </div>
  );
};

export default Hello;
