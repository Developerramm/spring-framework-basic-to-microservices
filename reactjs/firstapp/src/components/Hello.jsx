import React from "react";

const Hello = () => {
  const isLoggedIn = false;

  let message;
  if (isLoggedIn) {
    message = <h2>Welcome user here </h2>;
  } else {
    message = <h2>Please login </h2>;
  }

  const toggle = false;

  const hasMessage = true;

  return (
    <div>
      <h3>Conditional rendering here below</h3>
      {message}

      <h3> {toggle ? "your are active" : "your are not active "} </h3>

      <h3 style={toggle ? { color: "red" } : { color: "blue" }}>
        {" "}
        {hasMessage && "Ram kumar"}{" "}
      </h3>
    </div>
  );
};

export default Hello;
