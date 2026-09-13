import React, { useState } from "react";

const MultiInputForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: "", email: "", age: "" });
  };

  return (
    <div className="col-md-6">
      <form onSubmit={handleSubmit}>
        <h3>Multi Input form </h3>

        <div className="mb-3">
          <input
            value={formData.name}
            onChange={handleChange}
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter name "
          />
        </div>

        <div className="mb-3">
          <input
            value={formData.email}
            onChange={handleChange}
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email "
          />
        </div>

        <div className="mb-3">
          <input
            value={formData.age}
            onChange={handleChange}
            type="number"
            name="age"
            className="form-control"
            placeholder="Enter age "
          />
        </div>
        <button type="submit" className="btn btn-outline-primary">
          submit
        </button>
      </form>
    </div>
  );
};

export default MultiInputForm;
