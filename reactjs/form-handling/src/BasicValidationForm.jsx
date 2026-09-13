import React, { useState } from "react";

const BasicValidationForm = () => {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [error, SetError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      SetError("Please fill all fields");
    } else {
      SetError("");
      console.log({ name, email });
      alert("form sumited success ");
    }
  };

  return (
    <div className="col-md-6 mt-5">
      <form onSubmit={handleSubmit}>
        <h3>Basic Validation form </h3>

        <div className="mb-3">
          <label className="form-label"> Name : </label>
          <input
            onChange={(e) => SetName(e.target.value)}
            type="text"
            value={name}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label"> Email : </label>
          <input
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
            type="email"
            className="form-control"
          />
        </div>

        {error && <p className="text-bg-danger  p-3 rounded-3"> {error} </p>}

        <button className="btn btn-outline-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BasicValidationForm;
