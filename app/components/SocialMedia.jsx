import Link from "next/link";
import React from "react";
import post1 from "../download/post5.jpg";
import post2 from "../download/post6.jpg";
import post3 from "../download/post7.jpg";
import post4 from "../download/post8.jpg";
import Image from "next/image";

export default function SocialMedia() {
  return (
    <div className="max-w-7xl mx-auto mt-12 montserrat">
      <div>
        <h2 className="!text-5xl !font-bold text-center bg-gradient-to-r from-[#A84D06] to-[#533218de] !bg-clip-text !text-transparent">
          Reach Out To US
        </h2>
        <p className="!text-xl text-center !mt-6 text-gray-400">
          Follow our culinary journey and stay updated with the latest from
          Teagather Grand
        </p>
      </div>

      <div className="flex justify-around mt-12">
        <div>
          {/* headline */}
          <p className="text-xl  font-semibold mb-4">Follow Our Story</p>

          {/* social-media boxes */}
          <div className="flex flex-col gap-4 ">
            {/* instagram text box */}
            <Link
              href="https://www.instagram.com/teagathergrand?igsh=aTQ4cngwbDA5em5m"
              target="_blank"
              className="bg-[#F5F1EB] flex gap-3 py-4 px-4 rounded-xl hover:scale-105 duration-300 ease-in-out hover:shadow-lg text-decoration-none cursor-pointer"
            >
              {/* instagram icon*/}
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center ">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>

              {/* text-box */}
              <div>
                <p className="text-lg font-semibold m-0 text-black">@Teagather Grand</p>
                <p className="text-sm m-0  text-black">
                  Behind-the-scenes kitchen moments and daily specials
                </p>
              </div>
            </Link>

            {/* twitter text box */}
            <Link
              href="https://www.facebook.com/share/16xJUx2xTV/"
              target="_blank"
              className="bg-[#F5F1EB] flex gap-3 py-4 px-4 cursor-pointer hover:scale-105 duration-300 ease-in-out hover:shadow-lg text-decoration-none rounded-xl"
            >
              {/* twitter icon */}
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </div>

              {/* text-box */}
              <div>
                <p className="text-lg font-semibold m-0  text-black">@Teagather Grand</p>
                <p className="text-sm m-0  text-black">
                  Behind-the-scenes kitchen moments and daily specials
                </p>
              </div>
            </Link>

            {/* facebook text box */}
            <Link
              href="https://www.facebook.com/share/16xJUx2xTV/"
              target="_blank"
              className="bg-[#F5F1EB] flex gap-3 py-4 px-4 cursor-pointer hover:scale-105 duration-300 ease-in-out hover:shadow-lg text-decoration-none rounded-xl"
            >
              {/* facebook icon */}
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>

              {/* text-box */}
              <div>
                <p className="text-lg font-semibold m-0  text-black">@Teagather Grand</p>
                <p className="text-sm m-0  text-black">
                  Behind-the-scenes kitchen moments and daily specials
                </p>
              </div>
            </Link>
          </div>

          {/* plan your visit card */}
          <div className="mt-12 text-center ">
            <div className="max-w-2xl mx-auto flex flex-col justify-center items-center bg-[#F5F1EB] rounded-xl p-8">
              <h3 className=" text-xl font-semibold  my-4">
                Planning Your Visit?
              </h3>
              <p className=" w-[300px] text-center mb-6">
                Happy to help with your visit to Downtown District. Our team can
                assist with recommendations for activities, accommodations, and
                transportation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="tel:+9199811-48990"
                  className="bg-[#A84D06] text-white py-2 px-4 rounded-lg hover:scale-105 hover:shadow-lg duration-300 ease-in-out cursor-pointer"
                >
                  Call for Assistance
                </Link>
                <Link
                  href="/reserve"
                  className="bg-[#533218de]  text-white py-2 rounded-lg px-4 hover:scale-105 hover:shadow-lg duration-300 ease-in-out cursor-pointer"
                >
                  Make Reservation
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* post section */}
        <div className="mb-12">
          <p className="text-xl  font-semibold mb-4">Recent Posts</p>

          {/* post section-1 */}
          <div className="flex justify-between gap-4 items-center mt-4 mx-2  ">
            <Image
              src={post1}
              width={300}
              alt="post1"
              className="hover:scale-105 duration-300 ease-in-out rounded-sm"
            />
            <Image
              src={post3}
              width={300}
              alt="post3"
              className="hover:scale-105 duration-300 ease-in-out rounded-sm"
            />
          </div>

          {/* post section-2 */}
          <div className="flex justify-between items-center mt-4 mx-2 ">
            <Image
              src={post4}
              width={300}
              alt="post4"
              className="hover:scale-105 duration-300 ease-in-out rounded-sm"
            />
            <Image
              src={post2}
              width={300}
              alt="post2"
              className="hover:scale-105 duration-300 ease-in-out rounded-sm"
            />
          </div>

          {/* view more on instagram */}
          <div className="flex justify-center items-center">
            <Link
              href="https://www.instagram.com/teagathergrand?igsh=aTQ4cngwbDA5em5m"
              target="_blank"
              className="font-semibold text-sm text-center text-decoration-none !text-[#d85d5d] py-6 hover:scale-105 duration-300 ease-in-out cursor-pointer"
            >
              view more on Instagram →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
