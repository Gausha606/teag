"use client"
import React, { useRef } from 'react'
import "./littlebox.css"
import Image from 'next/image'
import bgImage from "/public/images/dish.jpg"; 
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

export default function Littlebox() {
  const containerRef = useRef()
  const firstparaRef = useRef()
  const secondparaRef = useRef()
  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        scroller: "body",
        start: "top 50%",
        end: "30% 30%",
        markers: true,
        scrub: false
      }
    })

    tl.from(firstparaRef.current,{
      x: -200,
      opacity:0,
    })
    tl.from(secondparaRef.current,{
      x: 200,
      opacity:0,
    })

  },[])
  return (
    <div className='h-[307px] w-full' id="card1" ref={containerRef}>
        <div className="absolute top-0 left-0 w-full h-full z-[-1]">
          <Image
            src={bgImage}
            alt="Background of restaurant"
            fill
            style={{
              objectFit: "cover",
              backgroundAttachment: "scroll",
            }}
          />
          {/* Overlay div on top of the image */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
    </div>

      <p className='text-center text-xl pt-22 pb-2   poppins text-white' ref={firstparaRef}>Culinary artistry for events.</p>
      <p className="text-center text-5xl  pb-24 font-bold libre-baskerville text-white" ref={secondparaRef}>Good Food, Good Mood</p>

    </div>
  )
}
