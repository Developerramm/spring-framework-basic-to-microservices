import React, { useState } from "react";

const AdvancedForm = () => {
  const [formData, setFormData] = useState({
    gender: "",
    country: "India",
    agree: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({gender : "",country : "",agree : false})
  };

  const handleChange = (e) => {
    const {name, type, value,checked} = e.target;
    setFormData((prev)=>({
      ...prev,
      [name] : type === "checkbox" ? checked : value
    }))
  };

  return (
    <div className="col-md-6 mt-5">
      <form onSubmit={handleSubmit}>
        <h2>Form with check box Radio and select </h2>

        <div className="form-check">
          <input
            onChange={handleChange}
            checked={formData.gender === "Male"}
            type="radio"
            name="gender"
            value="Male"
            className="form-check-input"
          />
          <label htmlFor="" className="form-check-label">
            Male{" "}
          </label>
        </div>

        <div className="form-check">
          <input
            onChange={handleChange}
            type="radio"
            name="gender"
            checked={formData.gender}
            value="Female"
            className="form-check-input"
          />
          <label htmlFor="" className="form-check-label">
            Female{" "}
          </label>
        </div>

        <select
          name="country"
          className="form-select"
          value={formData.country}
          onChange={handleChange}
        >
          
          <option value="India">India</option>
          <option value="Nepal">Nepal</option>
          <option value="Pakistan">Pakistan</option>
          <option value="sri Lanka">sri Lanka</option>
          <option value="Butan">Butan</option>
          <option value="Myamar">Myamar</option>
        </select>

        <div className="form-check">
          <input
            type="checkbox"
            onChange={handleChange}
            checked={formData.agree}
            className="form-check-input"
            name="agree"
          />
          <label className="form-check-label">
            I agree to terms and conditions
          </label>
        </div>

        <button type="submit" className="btn btn-outline-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdvancedForm;
