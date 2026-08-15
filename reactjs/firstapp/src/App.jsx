import React from "react";
import Hello from "./Hello";
import svg from "./assets/react.svg";
import Bye from "./Bye";

const App = () => {
  return (
    <div>
      <h1>This is simple react app </h1>
      <h3>My name is ram kumar maniyari</h3>
      <Hello />
      <img src={svg} alt="svg" />
      <Bye />
    </div>
  );
};

export default App;
