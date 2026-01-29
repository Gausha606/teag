"use client"
import React, { useRef } from "react";
import Image from "next/image";
import img from "../../public/logo.png";
import "./Reviews.css"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Reviews() {
  const containerRef = useRef()
  const firstparaRef = useRef()
  const secondparaRef = useRef()
  const firstReviewRef = useRef()
  const secondReviewRef = useRef()
  const thirdReviewRef = useRef()
  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        scroller: "body",
        start: "top 50%",
        end: "40% 40%",
        scrub: false
      }
    })

    tl.from(firstparaRef.current,{
      x: -200,
      opacity:0,
      
    })
    tl.from(secondparaRef.current,{
      x: 200,
      opacity:0,
    })

    gsap.from(firstReviewRef.current,{
      y: 200,
      opacity:0,
      scrollTrigger: {
        trigger: firstReviewRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    })
    gsap.from(secondReviewRef.current,{
      y: 200,
      opacity:0,
      scrollTrigger: {
        trigger: secondReviewRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    })
    gsap.from(thirdReviewRef.current,{
      y: 200,
      opacity:0,
      scrollTrigger: {
        trigger: thirdReviewRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    })

    gsap.to(".large",{
      scale: 1.1, 
      scrollTrigger: {
        trigger: ".large",
        start: "top 50%",
        end: "30% center",
        scrub: true,
        markers: true
      }
    })

  },[])
  return (
    <section className="py-12 sm:py-4 lg:py-20 px-4 sm:px-20 ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" ref={containerRef}>
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold  sm:!text-5xl xl:text-5xl " ref={firstparaRef}>
              What Our Guests Say
            </h2>
            <p className="text-lg font-medium  font-pj !mt-8" ref={secondparaRef}>
              Discover why diners choose Teagather Grand for their most memorable
              meals
            </p>
          </div>

          {/* <div className="mt-8 text-center md:mt-16 md:order-3">
                    <a href="#" title="" className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600"> Check all 2,157 reviews </a>
                </div> */}

          <div className="relative mt-10 md:mt-12 md:order-2">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"></div>
            </div>

            <div className="relative grid max-w-lg grid-cols-1 gap-8 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3  ">

            <span className="group">
              <div className="flex flex-row sm:flex-col  overflow-hidden border-1 border-[#A84D06] shadow-xl duration-300 group-hover:scale-105 group-hover:text-white rounded-xl  cursor-pointer" ref={firstReviewRef}>
                <div className="flex flex-col justify-between flex-1 p-6 overflow-hidden bg-white lg:py-8 lg:px-7 card3 ">
                <Image src="https://images.unsplash.com/photo-1728910156510-77488f19b152?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwZm9vZHN8ZW58MHx8MHx8fDA%3D" className="card-bg-image hover:scale-110 duration-300 ease-in-out" width={500} height={100} alt="image" />
                  <div className="flex-1 card-content">
                    <div className="flex items-center justify-between">
                      <div className="flex  ">
                        <svg
                        className="w-5 h-5 text-[#FDB241]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="w-5 h-5 text-[#FDB241]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="w-5 h-5 text-[#FDB241]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="w-5 h-5 text-[#FDB241]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      </div>

                        <div className="bg-black group-hover:!bg-[#A84D06] rounded-3xl w-11 h-11 flex justify-center items-center">
                        <Image src={img} alt="Teagather Logo" width={20} />
                      </div>
                    </div>

                    <blockquote className="flex-1 mt-8 ">
                      <p className="text-sm sm:text-base leading-relaxed lora mt-4">
                        "The food here is simply outstanding, delivering pure happiness from the very first bite. Every dish was delicious, with generous portions that leave you feeling completely content and full. I can't recommend this place enough!""
                      </p>
                    </blockquote>
                  </div>

                  <div className="flex items-center mt-8 relative card-content">
                    <Image
                      className="flex-shrink-0 object-cover rounded-full"
                      src="https://saketsharmaeditor.my.canva.site/portfolio/_assets/media/6bcb6784642cb2b63c4d8f775888b0d0.png"
                      alt="Akash Rai's image"
                      width={40}
                      height={40}
                    />
                    <div className="ml-4">
                      <p className="text-sm sm:text-base font-bold montserrat  font-pj m-0">
                        Akash Rai
                      </p>
                      {/* <p className="mt-0.5 text-xs sm:text-sm font-pj montserrat text-gray-600">Business Owner</p> */}
                    </div>
                  </div>
                </div>
              </div>
              </span>

            <span className="group">
              <div className="flex flex-row sm:flex-col  overflow-hidden border-1 border-[#A84D06] shadow-xl duration-300 group-hover:scale-105 rounded-xl  large cursor-pointer" ref={secondReviewRef}>
                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7 relative">
                    <Image src={img} className="absolute top-25 left-30 opacity-50 " width={150} height={150} alt="image" />
                  <div className="flex-1 card-content">
                    <div className="flex items-center justify-between">
                      <div className="flex ">
                        <svg
                        className="w-5 h-5 text-[#FDB241]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="w-5 h-5 text-[#FDB241]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="w-5 h-5 text-[#FDB241]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="w-5 h-5 text-[#FDB241]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      </div>

                        <div className="bg-black group-hover:!bg-[#A84D06] rounded-3xl w-11 h-11 flex justify-center items-center">
                        <Image src={img} alt="Teagather Logo" width={20} />
                      </div>
                    </div>

                    <blockquote className="flex-1 mt-8 ">
                      <p className="text-sm sm:text-base leading-relaxed text-gray-900 font-pj lora mt-4">
                        "What a fantastic meal! I was so impressed by the
                        quality and freshness of the ingredients. The
                        presentation was beautiful, and the taste was even
                        better. This is definitely my new favorite restaurant."
                      </p>
                    </blockquote>
                  </div>

                  <div className="flex items-center mt-8 card-content" >
                    <Image
                      className="flex-shrink-0 object-cover rounded-full"
                      src="https://saketsharmaeditor.my.canva.site/portfolio/_assets/media/3f4fbddfdfd22b60cb33e8fdeda01a79.png"
                      alt="Gaurav Sharma's image"
                      width={40}
                      height={40}
                    />
                    <div className="ml-4">
                      <p className="text-sm sm:text-base font-bold montserrat text-gray-900 font-pj m-0">
                        Gaurav Sharma
                      </p>
                      {/* <p className="mt-0.5 text-xs sm:text-sm font-pj montserrat text-gray-600">Business Owner</p> */}
                    </div>
                  </div>
                </div>
              </div>
              </span>

            <span className="group">
              <div className="flex flex-row sm:flex-col  overflow-hidden border-1 border-[#A84D06] shadow-xl duration-300 group-hover:scale-105 rounded-xl  cursor-pointer" ref={thirdReviewRef}>
                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex">
                        <svg
                        className="w-5 h-5 text-[#FDB241]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="w-5 h-5 text-[#FDB241]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="w-5 h-5 text-[#FDB241]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="w-5 h-5 text-[#FDB241]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="w-5 h-5 text-[#FDB241]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      </div>

                        <div className="bg-black  group-hover:!bg-[#A84D06] cursor-pointer rounded-3xl w-11 h-11 flex justify-center items-center">
                        <Image src={img} alt="Teagather Logo" width={20} />
                      </div>
                    </div>

                    <blockquote className="flex-1 mt-8">
                      <p className="text-sm sm:text-base leading-relaxed text-gray-900 font-pj lora mt-4">
                        "The food at this place is just amazing. It's the kind
                        of meal that makes you happy from the first bite to the
                        last. Everything was delicious, the portions were
                        generous, and I left feeling completely satisfied.
                        Highly recommend!"
                      </p>
                    </blockquote>
                  </div>

                  <div className="flex items-center mt-8">
                    <Image
                      className="flex-shrink-0 object-cover rounded-full"
                      src="https://saketsharmaeditor.my.canva.site/portfolio/_assets/media/d382bb3bc43c79107a77677013939c11.png"
                      alt="Saket Sharma's image"
                      width={40}
                      height={40}
                    />
                    <div className="ml-4">
                      <p className="text-sm sm:text-base font-bold text-gray-900 font-pj m-0 montserrat">
                        Saket Sharma
                      </p>
                      {/* <p className="mt-0.5 text-xs sm:text-sm font-pj montserrat text-gray-600">Professional Video Editor</p> */}
                    </div>
                  </div>
                </div>
              </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
