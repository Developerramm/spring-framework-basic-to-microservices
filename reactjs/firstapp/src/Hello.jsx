import React from "react";

const Hello = () => {
  const name = "Ram kumar";

  const headingStyle = {
    color: "red",
    textAlign: "center",
    backgroundColor: "pink",
    fontSize: 20,
  };

  return (
    <div>
      <h1 style={headingStyle}>This is hello component </h1>
      <h3
        style={{ color: "red", textAlign: "center", fontFamily: "monospace" }}
      >
        My name is {name}{" "}
      </h3>
    </div>
  );
};

export default Hello;
