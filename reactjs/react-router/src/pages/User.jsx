import React from 'react'
import { useParams } from 'react-router-dom';

const User = () => {
    const param = useParams();
    console.log(param);
    const { id } = useParams();
    console.log(id);
  return (
    <div>
      <h3>This is User page </h3>
      <h3>Your id is {id} </h3>
    </div>
  );
}

export default User
