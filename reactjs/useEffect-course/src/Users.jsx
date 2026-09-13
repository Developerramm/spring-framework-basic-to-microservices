import React, { useEffect, useState } from 'react'

const Users = () => {
    const [users, setUsers] = useState();

    useEffect(()=>{

        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((json) => setUsers(json));

    },[])

    console.log(users)

  return (
    <div>
      <h3> User list here below </h3>

      { users &&
        users.map((u,index)=>(
            <li key={index}> {u.name} </li>
        ))
      }


    </div>
  )
}

export default Users
