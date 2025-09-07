import React from 'react'
import "./littlebox.css"
import Image from 'next/image'
import bgImage from "/public/images/dish.jpg"; 


export default function Littlebox() {
  return (
    <div className='h-[307px] w-full' id="card1">
        <div className="absolute top-0 left-0 w-full h-full z-[-1]">
          <Image
            src={bgImage}
            alt="Background of restaurant"
            fill
            style={{
              objectFit: "cover",
              backgroundAttachment: "fixed",
            }}
          />
          {/* Overlay div on top of the image */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
    </div>

      <p className='text-center text-xl pt-32 pb-2   poppins text-white'>Culinary artistry for events.</p>
      <p className="text-center text-5xl  pb-24 font-bold libre-baskerville text-white">Good Food, Good Mood</p>

    </div>
  )
}
