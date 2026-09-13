import React, { useState } from "react";

const UserProfile = () => {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(18);

  return (
    <div>
      <h3>Your name is : {name}</h3>
      <h3>Your age is {age} </h3>
      <button onClick={() => setName("Ram kumar")}>Change name </button>
      <br />
      <br />
      <button onClick={() => setAge(age +1)}>Change age </button>
      <br />
      <br />
    </div>
  );
};

export default UserProfile;
