"use client";
import React, { useRef, useState } from "react";
import arrow from "../download/arrow.png";
import Image from "next/image";
import "./Accordian.css";
import bgImage from "../../public/images/16.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const containerRef = useRef();
  const hedRef = useRef()
  const questionRef = useRef([]);

  useGSAP(() => {
    gsap.from(hedRef.current,{
      x:-100,
      opacity: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: hedRef.current,
        scroller: "body",
       start: "top 80%",
        toggleActions: "play none none none"
      },
    })

    questionRef.current.forEach((item, index) => {
    gsap.from(item, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      delay: index * 0.15,
      scrollTrigger: {
        trigger: item,
        scroller: "body",
        start: "top 85%",
        toggleActions: "play none none none",

      },
    });
  });
 
  },[]);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div
      className=" pt-12  h-[520px] sm:h-[500px] overflow-hidden bg-black"
      id="card2"
      ref={containerRef}
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
      <p className="inter text-lg sm:text-3xl font-semibold text-center text-white mb-4" ref={hedRef}>
        FAQ (Frequently Asked Questions)
      </p>
      <div className="px-1 sm:px-0 py-2 block justify-start sm:flex sm:justify-center items-center ">
        <div className="">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="item pl-4 py-1 sm:pl-8 bg-white text-black mb-2 group w-[380px] sm:w-[1200px] rounded-lg hover:!bg-slate-50" ref={el=>(questionRef.current[index]=el)}
              
              >
                <div
                  className="question montserrat text-sm  sm:text-lg  py-2 font-medium  flex justify-between  items-start w-[380px] sm:w-full cursor-pointer "
                  onClick={() => toggle(index)} 
                >
                  {item.question}
                  {/* + - icon  */}
                  {/* <span className='pr-8 text-xl sm:text-4xl  cursor-pointer' onClick={()=>toggle(index)}>{selected===index ?"-" :"+"} </span>  */}

                  {/* up down icon  */}

                  {/* <span
                    className="pr-7 sm:pr-8 text-lg sm:text-2xl  cursor-pointer"
                    onClick={() => toggle(index)}
                  >
                    {selected === index ? (
                      <i class="fa-solid fa-circle-arrow-down"></i>
                    ) : (
                      <i class="fa-solid fa-circle-arrow-up"></i>
                    )}{" "}
                  </span> */}

                  {/* up down image icon  */}

                  <span
                    className="pr-7 sm:pr-8 text-lg sm:text-2xl   transition-[image] duration-500 ease-in-out "
                    onClick={() => toggle(index)}
                  >
                    <Image
                      src={arrow}
                      alt=""
                      className={`${
                        selected === index ? "rotate-[-180deg] " : "rotate-0"
                      } w-5 max-w-[24px] pt-1  transition-transform duration-300 ease-in-out  group-hover:scale-150`}
                    />
                  </span>
                </div>
                <div
                  className={`
                  answer montserrat  text-sm 
                  overflow-hidden transition-[max-height,padding] duration-500 ease-in-out pr-4
                  ${selected === index ? "max-h-[200px] pb-1" : "max-h-0 pb-0"}
                `}
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    question: "What makes your restaurant different from other places?",
    answer:
      "At Our Teagather Grand, we focus on the perfect blend of fresh, local ingredients, unique recipes, and a welcoming atmosphere. Our signature dishes feature innovative flavor combinations, while our commitment to supporting local farms ensures every meal is both delicious and sustainable.",
  },
  {
    question: "How do I make a reservation?",
    answer:
      "We recommend using our online reservation system, which is available on our website. You can also call us directly at 99811-48990, 82699-25555. We suggest making a reservation, especially on weekends, to ensure you get a table at your preferred time.",
  },
  {
    question: "What kind of ingredients do you use in your dishes?",
    answer:
      "We prioritize high-quality, seasonal, and locally sourced ingredients. Depending on the dish, we feature a range of items including farm-fresh vegetables, ethically sourced meats, and artisan cheeses. You can find specific ingredient details on our menu or ask your server.",
  },
  {
    question: "How do I care for my takeout meal to ensure its quality?",
    answer:
      "To ensure your takeout meal tastes its best, we recommend consuming it shortly after pickup. For any items that need reheating, we suggest following the instructions provided with your order, such as using an oven for crispiness rather than a microwave.",
  },
  {
    question: "Can we book a private event or a large party?",
    answer:
      "Absolutely! We have a private dining area that is perfect for special occasions, corporate events, or large group celebrations. We offer customizable menus and can work with you to plan the perfect event. Please contact our events coordinator at 99811-48990, 82699-25555 for more information and to check availability.",
  },
];
