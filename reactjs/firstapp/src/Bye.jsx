import React from 'react'
import ram from "./Bye.module.css"


const Bye = () => {
 
  return (
    <div>
      <h3 className='text'>This is bye component here </h3>

      <p className={ram.box}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eaque omnis modi ex odio eum dolorum minima voluptatibus quasi ullam.</p>

      <div className={`${ram.bg} ${ram.dabba}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corrupti vero id accusantium consequatur, nisi sequi molestias tenetur ratione quibusdam iusto aut modi hic dolorum eaque commodi. Porro, doloribus saepe!
      </div>
    </div>
  )
}

export default Bye
