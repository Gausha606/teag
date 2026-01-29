"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function OurStory() {
  const containerRef = useRef();
  const hedRef = useRef();
  const ctaRef = useRef();
  const imgRef = useRef();
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        scroller: "body",
        start: "top 10%",
        end: "+=200",
        scrub: false,
        pin:true,
      },
    });
    tl.from(hedRef.current, {
      y: -50,
      opacity: 0,
      
    });
    tl.from(".para", {
      y: 100,
      opacity: 0,
      stagger: 0.7,
    });

    tl.from(ctaRef.current, {
      y: 100,
      opacity: 0,
    },"anim");

    tl.from(imgRef.current, {
      x: 300,
      opacity: 0,
    },"anim");
  
  },);

  return (
    <div className="bg-black py-12" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-evenly items-center gap-4">
        <div className="md:w-1/2 pl-12">
          <h1 ref={hedRef} className="text-white !text-5xl font-bold">
            Our Philosophy
          </h1>

          <div className="max-w-xl text-white mt-8 flex flex-col gap-4 montserrat ">
            <p className="para m-0">
              At Teagather Grand, we believe that exceptional dining begins with
              exceptional ingredients. Every dish on our menu tells the story of
              its origins—from the tea gardens where our leaves are picked to
              the local farms that supply our fresh produce.
            </p>

            <p className="para m-0">
              Our commitment to ingredient provenance means working directly
              with local farmers and artisan producers who share our passion for
              quality. We celebrate the seasons, allowing nature's rhythm to
              guide our menu and inspire our creativity.
            </p>

            <p className="para m-0">
              This philosophy extends beyond sourcing to every aspect of our
              culinary craft—from traditional recipes passed down through
              generations to innovative preparations that honor the ingredient's
              natural character.
            </p>

            <Link href="/about" ref={ctaRef}>
              <button className=" px-12 cursor-pointer  py-2 bg-[#A84D06] !rounded-lg text-white montserrat hover:shadow-2xl hover:scale-105 duration-300 ease-in-out">
                More About Us →
              </button>
            </Link>
          </div>
        </div>

        <div className="h-[400px] flex justify-center items-center overflow-hidden rounded-2xl shadow-lg mx-8" ref={imgRef}>
          <Image
            src="https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
            alt="Chef selecting fresh"
            width={520}
            height={300}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
