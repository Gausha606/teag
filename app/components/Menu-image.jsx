import React from "react";
import "./Menuimage.css";
import Image from "next/image";
import beverages from "../download/beverages1.png";
import intro from "../download/intro.png";
import starters from "../download/starters.png";
import mc from "../download/mc.png";
import Link from "next/link";
import bgImage from "/public/images/19.png"; 

export default function Menuimage() {
  return (
    <div className=" pt-4 relative" id="card">
      {/* Background Image as an Image Component */}
      <div className="absolute top-0 left-0 w-full h-[650px] z-[-1]">
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

      <div className="relative z-[2] max-w-7xl mx-auto">
        <p className="text-center text-5xl pt-12 pb-24 font-bold text-white">
          Delicious Food is waiting for you
        </p>
        <div className="flex justify-evenly pb-12 gap-4 ">
          <div className="flex !flex-col justify-center items-center bg-[#ffffff] rounded-2xl mx-12 py-8 gap-3 hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
            <p className="w-[450px] text-center text-xl montserrat px-12 m-0">
              "Every plate tells a story of its origin, from the land to your
              table."
            </p>
            <Link href="/reserve" className="text-decoration-none text-white">
              <button className=" px-3 cursor-pointer !mr-4 py-2 bg-[#A84D06] !rounded-lg text-white montserrat hover:shadow-2xl hover:scale-105 duration-300 ease-in-out">
                Reserve The Table
              </button>
            </Link>
            <p className=" w-[450px] text-center text-xl px-12 montserrat m-0">
              A <span className="text-[#A84D06] inter ">restaurant</span> menu
              serves as a guide for customers, listing a variety of dishes and
              beverages. It's not just a list, but a story that reflects the
              restaurant's flavor and identity.
            </p>
          </div>
          
          <div className="relative hover:scale-105 duration-300 ease-in-out">
            <Image
              src={beverages}
              className="absolute top-20 left-[-60px] rotate-45"
              width={280}
              alt="Beverages section"
            />
            <Image
              src={starters}
              className="absolute top-10 rotate-90"
              width={280}
              alt="Starters section"
            />
            <Image
              src={intro}
              className="relative mt-20 mr-4 z-30"
              width={250}
              alt="Intro section"
            />
            <Image
              src={mc}
              className="absolute top-20 right-[-40px] rotate-305 "
              width={280}
              alt="Main Course section"
            />
            <Link href="/menu">
              <button className="absolute !top-66 left-8 px-3 cursor-pointer !mr-4 py-2 bg-[#A84D06] !rounded-lg text-white montserrat hover:shadow-2xl hover:scale-105 duration-300 ease-in-out">
                Explore Full Menu
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}