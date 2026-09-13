import React, { useState } from "react";

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
    <br /><br />
      <button
        className="btn btn-outline-dark"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Hide" : "Show"}{" "}
      </button>

        {isVisible && <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab perferendis deleniti delectus tempora. Nesciunt, suscipit? Aliquam consequuntur repellat odio qui?</p>}

    </div>
  );
};

export default ToggleText;
