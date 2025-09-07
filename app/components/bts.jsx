import Link from "next/link";
import React from "react";
import instagram from "../download/instagram1.png";
import post1 from "../download/post5.jpg";
import post2 from "../download/post6.jpg";
import post3 from "../download/post7.jpg";
import post4 from "../download/post8.jpg";

import Image from "next/image";

export default function Bts() {
  return (
    <div className="pb-24 bg-[#F5F1EB] ">
      <p className="text-center text-5xl pt-12 font-bold text-gray-900 poppins">
        Behind The Scenes
      </p>
      <p className="text-center text-lg mt-4 text-gray-600 lora">
        Follow our culinary journey on Instagram
      </p>
      <div className="flex justify-center items-center gap-1.5 my-4">
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

      <div className="flex justify-evenly items-center mt-12 mx-2 ">
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
          className="hover:scale-105 duration-300 ease-in-out rounded-sm"
        />
        <Image
          src={post2}
          width={280}
          alt="post2"
          className="hover:scale-105 duration-300 ease-in-out rounded-sm"
        />
      </div>
    </div>
  );
}
