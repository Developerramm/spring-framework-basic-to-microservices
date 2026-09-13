import React, { useEffect, useState } from 'react'

const WindowsSizeTracker = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(()=>{

        const handleResize = ()=>{
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize',handleResize)

        return ()=>{
            window.removeEventListener('resize', handleResize)
            console.log("event remove")
        }

    },[])

  return (
    <div>
      <h3> window current  width is {width} px </h3>
    </div>
  )
}

export default WindowsSizeTracker
