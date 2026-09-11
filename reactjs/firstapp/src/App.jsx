import React from "react";
import Hello from "./components/Hello";
import Bye from "./components/Bye";
import Button from "./components/Button";
const App = () => {
  
  const hobbies = ["cricket", "walking", "running", "eating"];

  function message() {
    alert("Hello from message box");
  }

  return (
    <div>
      <Hello name="Ram kumar" age={25} city="Noida" />
      <Hello name="Mohit" age={40} city="Delhi" />

      <Bye name="Rita" age={20} hobbies={hobbies} />

      <Button lable={"click me"} handleClick={message} />
    </div>
  );
};

export default App;
