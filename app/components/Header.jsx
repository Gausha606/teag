"use client"
import React from "react";
import img from "../../public/logo.png";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";


export default function Header() {
  const pathname = usePathname();
  return (
    <div className="text-white w-full fixed top-0 z-50 "> 
    <div className=" flex justify-between items-center  bg-[#2c2c2c] shadow-2xl px-8 py-3 montserrat ">
      {/* logo and name  */}
      <Link href="/" className="flex items-center  gap-3 no-underline  ">
        <Image src={img} alt="Teagather Logo" width={20} />
        <p className=" font-semibold poppins text-xl m-0 text-white">Teagather Grand</p>
      </Link>

      <nav className="flex gap-8 items-center justify-center">
        <ul className="flex gap-12 poppins m-0">
          <li>
            <Link href="/" className={`${pathname==="/" ? "navBarActive" :"navBarInActive"}`} >Home</Link>
          </li>
          <li>
            <Link href="/menu" className={`${pathname==="/menu" ? "navBarActive" :"navBarInActive"}`}>Menu</Link>
          </li>
          <li>
            <Link href="/about" className={`${pathname==="/about" ? "navBarActive" :"navBarInActive"}`}>About</Link>
          </li>
          <li>
            <Link href="/contact" className={`${pathname==="/contact" ? "navBarActive" :"navBarInActive"}`}>Contact</Link>
          </li>
          {/* <li>
            <Link href="/ourstory" className={`${pathname==="/ourstory" ? "navBarActive" :"navBarInActive"}`}>Our Story</Link>
          </li> */}
        </ul>
        <Link href="/reserve" className="text-decoration-none text-white">
        <button className="bg-[#A84D06] px-4 py-2 !rounded-lg cursor-pointer text-white hover:shadow-2xl hover:scale-105 duration-300 ease-in-out">Reserve Table</button></Link>

      </nav>


    </div>
    </div>
  );
}
