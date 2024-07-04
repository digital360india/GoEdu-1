import Image from 'next/image'
import React from 'react'

const Formnav = () => {
  return (
    
        <div className=" bg-[#006269] h-[90px] flex justify-center items-center">
        <Image
          className="mx-16"
          src="/goEdu 1.svg"
          alt="go edu logo"
          width={90}
          height={90}
        />
      </div>
   
  )
}

export default Formnav;