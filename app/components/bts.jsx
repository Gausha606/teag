"use client"
import Link from "next/link";
import React, { useRef } from "react";
import instagram from "../download/instagram1.png";
import post1 from "../download/post5.jpg";
import post2 from "../download/post6.jpg";
import post3 from "../download/post7.jpg";
import post4 from "../download/post8.jpg";
import { Lora } from 'next/font/google';
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const lora = Lora({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Bts() {
  const containerRef = useRef();
  const hedRef = useRef();
  const pRef = useRef();
  const instaRef = useRef();
  const imgDivRef = useRef();




 useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        scroller: "body",
        start: "top 10%", // Component pins when its top hits the top of the viewport
        end: "+=250", // The pin will last for 500px of scrolling
        pin: true, 
        scrub: false, 
      }
    });

    tl.from(hedRef.current, {
      opacity: 0,
      x: -50,
      duration: 1
    });

    tl.from(pRef.current, {
      opacity: 0,
      x: -500,
      duration: 1
    }, "-=0.5"); // Starts 0.5s before the previous animation ends

    tl.from(instaRef.current.children, {
      opacity: 0,
      x: 500,
      duration: 1
    }, "-=0.5"); // Starts 0.5s before the previous animation ends

    tl.from(imgDivRef.current.children, {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: {
        amount: 0.5,
        from: "left"
      },
      onComplete: () => {
          gsap.set(imgDivRef.current.children, { clearProps: "transform,opacity" });
      }
    });

  }, []);

  return (
    <div className="pb-24 bg-[#F5F1EB] h-screen" ref={containerRef}>
      <div className="max-w-7xl mx-auto ">
      <p className="text-center text-5xl pt-12 font-bold text-gray-900 poppins italic" ref={hedRef}>
        Behind The Scenes
      </p>
      <p className={`text-center text-lg mt-4 text-gray-600  italic ${lora.className}`} ref={pRef}>
        Follow our culinary journey on Instagram
      </p>
      <div className="flex justify-center items-center gap-1.5 my-4" ref={instaRef}>
        <Image
          src={instagram}
          alt="Instagram Icon"
          className="w-[20px]"
          width={600}
          height={400}
        />
        <Link
          href="https://www.instagram.com/teagathergrand?igsh=aTQ4cngwbDA5em5m"
          target="_blank"
          className="font-semibold text-lg poppins no-underline !text-[#d85d5d] "
        >
          Teagather grand
        </Link>
      </div>

      <div className="flex justify-evenly items-center mt-12 mx-2 " ref={imgDivRef}>
        <Image
          src={post1}
          width={280}
          alt="post1"
          className="hover:scale-105 duration-300 ease-in-out rounded-sm" 
        />
        <Image
          src={post3}
          width={280}
          alt="post3"
          className="hover:scale-105 duration-300 ease-in-out rounded-sm" 
        />
        <Image
          src={post4}
          width={280}
          alt="post4"
          className="hover:scale-105 duration-300 ease-in-out rounded-sm " 
        />
        <Image
          src={post2}
          width={280}
          alt="post2"
          className="hover:scale-105 duration-300 ease-in-out rounded-sm" 
        />
      </div>
      </div>
    </div>
  );
}
