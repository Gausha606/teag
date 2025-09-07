"use client"
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";


export default function GoToTop() {
  const [isVisible, setVisible]= useState(false);

  const toggleVisiblity = ()=>{
    if(window.scrollY > window.innerHeight){
      setVisible(true);
    }else{
      setVisible(false)
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll",toggleVisiblity);
    return ()=> window.removeEventListener("scroll",toggleVisiblity);
  })

    const goToTop =()=>{
    window.scrollTo({top:0, behavior: "smooth"})
  }

  return (
   <div className={`fixed right-10 bottom-5 cursor-pointer transition-opacity duration-300 z-50
    ${isVisible ? "opactity-100" : "opacity-0 pointer-events-none"}`
   }>
        <IoIosArrowDown className="text-[42px] text-white mt-10 rotate-180 animate-bounce bg-[#A84D06] rounded-lg p-2" onClick={goToTop} />
      </div>
  )
}
