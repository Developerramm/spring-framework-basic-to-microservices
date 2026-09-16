import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();

  const goToAbout = ()=>{
    navigate("/about")
  }

  return (
    <div>
      <h3>This is home page </h3>
      <button onClick={goToAbout}>Go to About page </button>
    </div>
  )
}

export default Home
