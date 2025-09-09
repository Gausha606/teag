import Image from "next/image";
import React from "react";
import beverages from "../download/beverages1.png";
import intro from "../download/intro1.png";
import Link from "next/link";
import StartersCarousel from "../components/StartersCarousel";
import MainCourseCarousel from "../components/MainCourseCarousel copy";
import "./menu.css";
import bgImage from "../../public/images/menu.jpg";



export default function page() {
  return (
    <section className=" mt-18 relative">
      <div
        className=" flex flex-col justify-center items-center "
        id="menu-card"
      >
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

        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center gap-4 ">
          <p className="text-5xl  text-white font-bold pt-2 m-0">Our Menu</p>
          <p className="text-xl max-w-3xl text-center  text-white  mt-2  montserrat ">
            Discover dishes crafted with passion, featuring the finest seasonal
            ingredients and time-honored techniques
          </p>
          <Image src={intro} width={700} height={380} alt="intro page" className="pb-12"/>
        </div>
      </div>

      <div className="sticky top-18 z-50  bg-white shadow-lg w-full">
        <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto py-3 text-black">
            <Link
              href="#beverages"
              className="text-black"
              data-category="beverages"
            >
              <span className=" font-medium whitespace-nowrap">Beverages</span>
            </Link>
            <Link
              href="#starters"
              className="text-black"
              data-category="starters"
            >
              <span className=" font-medium whitespace-nowrap">Starters</span>
            </Link>
            <Link href="#mc" className="text-black" data-category="main course">
              <span className=" font-medium whitespace-nowrap">
                Main Courses
              </span>
            </Link>
          </nav>
        </div>
      </div>

      <div id="menu-card">
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
        <div className="flex flex-col gap-4  max-w-7xl mx-auto pb-8 relative z-10">
          {/* beverages page */}
          <section
            id="beverages"
            className="flex  flex-col  justify-center items-center  scroll-mt-28"
          >
            <p className="text-4xl text-center text-[#e46504] font-bold mt-4 py-2">
              Beverages
            </p>
            <p className="text-xl w-[700px] text-center text-white  pb-8 montserrat ">
              Freshly squeezed juices and exquisite coffee brews await to
              refresh your senses.
            </p>

            <Image
              src={beverages}
              width={700}
              height={500}
              alt="beverages page"
            />
          </section>
          {/* <div className="border-gray-700 border-b-1 w-full mx-4 mb-6 "></div> */}

          {/* starters page */}
          <section
            id="starters"
            className="flex  flex-col justify-center items-center scroll-mt-28"
          >
            <p className="text-4xl text-center text-[#e46504] font-bold mt-4 py-2">
              Appetizers/Starters
            </p>
            <p className="text-xl w-[700px] text-center text-white  pb-8 montserrat ">
              A journey begins with a single step, and a great meal begins with
              the perfect appetizer.
            </p>
            <StartersCarousel />
            {/* <Image src={starters} width={700} height={500} alt="starters page" />
      <br />
      <Image src={starters2} width={700} height={500} alt="starters2 page" /> */}
          </section>
          {/* <div className="border-gray-700 border-b-1 w-full mb-6 "></div> */}

          {/* main courses */}
          <section
            id="mc"
            className="flex flex-col  justify-center items-center scroll-mt-34"
          >
            <p className="text-4xl text-center text-[#e46504] font-bold  py-2">
              Main Course
            </p>
            <p className="text-xl w-[700px] text-center text-white  pb-8 montserrat ">
              Crafted to satisfy your cravings, our main courses are a
              celebration of culinary excellence.
            </p>
            <MainCourseCarousel />
            {/* <Image src={mc} width={700} height={500} alt="mc page" />
        <br />
      <Image src={mc2} width={700} height={500} alt="mc2 page" />
        <br />
      <Image src={mc3} width={700} height={500} alt="mc3 page" /> */}
          </section>

          {/* intro page */}
          {/* <section id="intro" className='flex justify-center items-center pt-12'>
      <Image src={intro} width={700} height={500} alt="intro page" />
      </section> */}

          {/* outro */}
          {/* <section id="outro" className='flex justify-center items-center pt-34'>
      <Image src={outro} width={700} height={500} alt="outro page" />
      </section> */}
        </div>
      </div>
    </section>
  );
}
