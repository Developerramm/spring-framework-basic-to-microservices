import React from 'react'

const Bye = () => {
    const user = {
        firstName : "Ram",
        lastName : "Kumar",
        age : 25
    }

    const usres = [
      {firstName : "ram", lastName : "kumar",age : 30},
      {firstName : "mohan", lastName : "kumar",age : 40},
      {firstName : "sohan", lastName : "kumar", age : 50},
      {firstName : "rana", lastName : "kumar", age : 60}
    ]

    const fullName = (user)=>{
      return user.firstName + " " + user.lastName
    }


    console.log(user)
  return (
    <div>
      <h3>Person details :  </h3>

      <p>First Name : {user.firstName} </p>
      <p>Last Name : {user.lastName} </p>
      <p>user age : {user.age} </p>


      <h3>Full name : {fullName(user)} </h3>

      {
        usres.map((user,index)=>(
          <p key={index}> Name : {fullName(user)} <b> {user.age} years old </b> </p>
        ))
      }


    </div>
  )
}

export default Bye
