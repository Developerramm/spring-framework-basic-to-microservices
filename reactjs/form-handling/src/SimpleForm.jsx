import React, { useState } from "react";

const SimpleForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <div className="col-md-6">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name : </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email : </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
            type="email"
            className="form-control"
          />
        </div>

        <button className="btn btn-outline-success"> submit</button>
      </form>
    </div>
  );
};

export default SimpleForm;
