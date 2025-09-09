import Image from "next/image";
import React from "react";
import img from "../../public/logo.png";
import disc from "../../public/disc.png";
import fb from "../../public/fb.png";
import youtube from "../../public/youtube.png";
import ig from "../../public/ig.png";
import Link from "next/link";
import GoToTop from "./GoToTop";
import { MdOutlineArrowLeft, MdOutlineArrowRight } from "react-icons/md";
import Address from "./Address";



export default function Footer() {
  return (
    <footer className="bg-[#533218de] ">
    <div className="max-w-7xl mx-auto py-4  montserrat">
      <div className=" text-white py-4  flex  justify-evenly  flex-row gap-12 inter">
        {/* logo-name-icons */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center  gap-3">
            <Image src={img} alt="Teagather Logo" width={20} />
            <p className="font-bold poppins m-0">Teagather Grand</p>
          </div>

          <p className="w-[400px] montserrat m-0 ">
            Where exceptional ingredients meet passionate craftsmanship. Every
            dish tells a story of quality, tradition, and culinary artistry.
          </p>

          <div className="mt-8 sm:mt-4 ml-2 flex gap-3 items-center ">
            <Link
              href="https://www.instagram.com/teagathergrand?igsh=aTQ4cngwbDA5em5m"
              target="_blank"
              className="text-decoration-none cursor-pointer hover:scale-110 duration-300 ease-in-out hover:shadow-lg"
            >
              {/* instagram icon*/}
              <div className="w-8 h-8 bg-[#F5F1EB] rounded-lg flex items-center justify-center ">
                <svg
                  className="w-5 h-5 text-[#A84D06]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406 11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
            </Link>

            <Link
              href="https://www.facebook.com/share/16xJUx2xTV/"
              target="_blank"
              className="text-decoration-none cursor-pointer hover:scale-110 duration-300 ease-in-out hover:shadow-lg"
            >
              {/* twitter icon */}
              <div className="w-8 h-8 bg-[#F5F1EB] rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[#A84D06]"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </div>
            </Link>
            <Link
              href="https://www.facebook.com/share/16xJUx2xTV/"
              target="_blank"
              className="text-decoration-none cursor-pointer hover:scale-110 duration-300 ease-in-out hover:shadow-lg"
            >
              {/* facebook icon */}
              <div className="w-8 h-8 bg-[#F5F1EB] rounded-lg flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-[#A84D06]"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 26V16h4l1-4h-5v-2c0-1.5 0-3 2-3h3V4c-1 0-2.5 0-4 0-4 0-6 2.5-6 6v2H9v4h4v10h5z" />
                </svg>
              </div>
            </Link>
          </div>
        </div>

        {/* quick links */}
        <div className=" montserrat">
          <p className="font-bold text-lg mb-4">Quick Links</p>
          <ul className="flex flex-col gap-3  m-0 p-0 px-0.5 ">
            <li className="group">
              <Link href="/" className="text-white no-underline flex items-center hover:scale-105 duration-300 ease-in-out">
                 <MdOutlineArrowLeft className="group-hover:rotate-180 duration-300 ease-in-out"/> Home
              </Link>
            </li>
              <li className="group">
              <Link href="/menu" className="text-white no-underline flex items-center hover:scale-105 duration-300 ease-in-out">
               <MdOutlineArrowLeft className="group-hover:rotate-180 duration-300 ease-in-out"/> Menu
              </Link>
            </li>
            <li className="group">
              <Link href="/about" className="text-white no-underline flex items-center hover:scale-105 duration-300 ease-in-out">
                <MdOutlineArrowLeft className="group-hover:rotate-180 duration-300 ease-in-out"/> About
              </Link>
            </li>
            <li className="group">
              <Link href="/contact" className="text-white no-underline flex items-center hover:scale-105 duration-300 ease-in-out">
                <MdOutlineArrowLeft className="group-hover:rotate-180 duration-300 ease-in-out"/> Contact
              </Link>
            </li>
          
          </ul>
        </div>

        {/* business hours */}
        <div className="flex flex-col gap-2 pr-2 montserrat ">
          <p className="text-lg font-bold m-0">Business Hours</p>
          <div className="flex flex-col gap-2 m-0 !text-sm">
            <p className="m-0">Mon: 11:00 AM – 11:00 PM</p>
            <p className="m-0">Tue: 11:00 AM – 11:00 PM</p>
            <p className="m-0">Wed: 11:00 AM – 11:00 PM</p>
            <p className="m-0">Thu: 11:00 AM – 11:00 PM</p>
            <p className="m-0">Fri: 11:00 AM – 11:00 PM</p>
            <p className="m-0">Sat: 11:00 AM – 11:00 PM</p>
            <p className="m-0">Sun: 11:00 AM – 11:00 PM</p>
          </div>
        </div>

        {/* contact-address-email   */}
        <div className="flex flex-col gap-3 pr-6 montserrat ">
          <p className="font-bold text-lg m-0">Address / Contact / Email</p>
          {/* Address page */}
          {/* <Link
          href="/location" className="flex gap-3 items-center text-white text-decoration-none">
            <svg
              className="w-5 h-5 mt-0.5 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>       
            
          
            <p className="w-[200px] m-0">
              New Collectorate Road, Model Town, Gwalior
            </p>
          
          </Link> */}
    
          <div
           className="flex gap-3 items-center ">
            <svg
              className="w-5 h-5 mt-0.5 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>       
            
          <Address />
            {/* <Overlay /> */}
          
          </div>

          {/* phone Number  */}
          <div className="flex gap-3 justify-center items-center ">
            <svg
              className="w-5 h-5 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <div className="w-[200px]">
              <Link
                href="tel:9981148990 "
                className="text-white no-underline"
              >
                99811-48990,{" "}
              </Link>
              <Link
                href="tel:8269925555 "
                className="text-white no-underline"
              >
                82699-25555{" "}
              </Link>
            </div>
          </div>

          {/* email  */}
          <div className="flex gap-3 justify-center items-center">
            <svg
              className="w-5 h-5 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <Link href="mailto: teagathergrand@gmail.com">
             <p className="w-[200px] m-0 text-white">TeagatherGrand@gmail.com</p>
             </Link>
           
          </div>
        </div>
      </div>

      <div className="border-gray-700 border-b-1 mx-4 mb-6 "></div>
      <p className="text-center text-white pb-2">
        © 2025 Teagather Grand. All Rights Reserved.
      </p>

      <GoToTop />
    </div>
    </footer>
  );
}
