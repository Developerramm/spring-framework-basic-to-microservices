import React, { useState } from "react";

const LikeButton = () => {
  const [likeButton, setLikeButton] = useState(false);
  return (
    <div>
      <button
        onClick={() => setLikeButton(!likeButton)}
        className={
          !likeButton ? "btn btn-outline-primary" : "btn btn-outline-danger"
        }
      >
        {" "}
        {likeButton ? "unlike me" : "like me"}{" "}
      </button>

      <div>{likeButton && "Your like the post "}</div>
    </div>
  );
};

export default LikeButton;
