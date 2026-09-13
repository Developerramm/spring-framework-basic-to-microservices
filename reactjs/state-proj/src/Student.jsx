import React, { useState } from "react";

const Student = () => {
  const [student, setStudent] = useState({
    name: "Ram",
    age: 30,
    city: "Delhi",
  });

  const changeCity = () => {
    setStudent({
      ...student,
      city: "Noida",
    });
  };

  return (
    <div>
      <h3>Name : {student.name} </h3>
      <h3> Age : {student.age} </h3>
      <h3> City : {student.city} </h3>

      <button onClick={changeCity} className="btn btn-outline-dark">
        {" "}
        click me change city
      </button>
    </div>
  );
};

export default Student;
