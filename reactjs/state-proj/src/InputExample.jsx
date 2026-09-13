import React, { useState } from "react";

const InputExample = () => {
  const [name, setName] = useState("");
  return (
    <div className="row">
      <div className="mb-3">
        <input
          onChange={(event) => {
            setName(event.target.value);
          }}
          type="text"
          value={name}
          className="form-control"
        />
      </div>

      <p> Hello , {name || "Guest"} </p>
      <p>your name lengh is {name == "Guest" ? 0 : name.trim().length} </p>
    </div>
  );
};

export default InputExample;
