import React from "react";

const Text = () => {
  function getName(name) {
    return name;
  }

  const handleClick = () => {
    console.log("button is cliked");
    alert("button is clicked");
  };

  const handleInput = (e) => {
    console.clear()
    console.log("your are typing ");
    console.log(e.target.value);
  };

  return (
    <div>
      <h3>This is text component </h3>
      <h4>Your name is {getName("Ram kumar")} </h4>

      <h3> {getName("Mohit kumar")} </h3>

      <button onClick={handleClick}>click me </button>

      <button onClick={() => alert("hello ram")}>say hello </button>

      <br />
      <br />
      <br />
      <input type="text" onChange={handleInput} placeholder="type something" />

      <br /><br /><br />
      <p >Lorem ipsum dolor sit amet.</p>
    </div>
  );
};

export default Text;
