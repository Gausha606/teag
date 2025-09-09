import Image from "next/image";
import hero from "../app/download/20.png";
// import Carousel1 from "./components/Carousel1";
import Reviews from "./components/Reviews";
import "./globals.css";
import Menuimage from "./components/Menu-image";
import Bts from "./components/bts";
import OurStory from "./components/OurStory";
import Littlebox from "./components/littlebox";
import Carousel1 from "./components/Carousel1";
import Accordion from "./components/Accordion";



export default function Home() {

  return (
    <div >
      {/* Hero section */}
      <div  className="relative">

      <Carousel1 />
       <div className="max-w-7xl mx-auto absolute inset-0 flex flex-col items-center justify-center z-20">
        <div className="flex justify-center items-center flex-col montserrat text-center space-y-4">
            <h2 className=" text-black text-3xl md:text-5xl font-bold bg-white p-2">
                <span>Welcome to Teagather Grand</span>
            </h2>
            <h2 className="w-full max-w-3xl text-white montserrat text-xl md:text-2xl">
                <span>
                    Experience culinary artistry where exceptional ingredients meet
                    passionate craftsmanship
                </span>
            </h2>
            <button className="px-6 py-2 bg-[#A84D06] !rounded-lg text-white montserrat hover:shadow-2xl hover:scale-105 duration-300 ease-in-out">
                Explore Our Menu
            </button>
        </div>
    </div>
      </div>


      {/* Our Story */}
      <OurStory />

      {/* Menu image card */}
      <Menuimage />


      {/* carousel */}
      {/* <Carousel1 /> */}

      {/* Behind The Scenes */}
      <Bts />

      {/* littlebox */}
      <Littlebox />

      {/* happy reviews */}
      <Reviews />

      {/* Accordion */}
      <Accordion />

      
    </div>
  );
}

