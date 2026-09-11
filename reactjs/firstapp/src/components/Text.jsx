import React from 'react'

const Text = () => {


  function getName(name){
    return name;
  }


  const handleClick = ()=>{
    alert("button was click ")
  }


  const handleInput = (event) =>{
    console.clear()
    console.log(event.target.value);
  }

  const handleMouseOver = ()=>{
    console.log("mouse is over the text")
  }

  const handleDubleClick = ()=>{
    console.log("text double click")
  }

  return (
    <div>

      <h4>your name is {getName("Ram kumar")} </h4>
      <h4>your name is {getName("Mohit kumar")} </h4>


      <button onClick={handleClick}>Click me</button>
      <br /> <br />

      <button onClick={()=>alert("Hellow from inline function")}>Say Hello </button>

      <br /><br />
      
      <input type="text" onChange={handleInput} placeholder="type something " />


      <p onMouseOver={handleMouseOver} onDoubleClick={handleDubleClick}>Lorem ipsum dolor sit amet.</p>

      
    </div>
  )
}

export default Text
