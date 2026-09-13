import React, { useEffect, useState } from "react";

const First = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = ` Count : ${count}`;
    console.log("Component re-render");
  }, [name, count]);

  return (
    <div>
      <h3>Count : {count} </h3>
      <button onClick={() => setCount(count + 1)}>Increment </button> <br />
      <br />
    </div>
  );
};

export default First;
