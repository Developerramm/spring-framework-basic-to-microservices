import React, { useRef } from "react";

const UncontrolledForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Name : ", nameRef.current.value);
    // console.log("Email : ", emailRef.current.value);

    let name = nameRef.current.value;
    let email = emailRef.current.value;

    console.log({ name, email });
  };

  return (
    <div className="col-md-6 mt-5">
      <form onSubmit={handleSubmit}>
        <h3>Uncontrolled Form</h3>

        <div className="mb-3">
          <label className="form-label"> Name : </label>
          <input type="text" className="form-control" ref={nameRef} />
        </div>

        <div className="mb-3">
          <label className="form-label"> Email : </label>
          <input type="email" className="form-control" ref={emailRef} />
        </div>

        <button className="btn btn-outline-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UncontrolledForm;
