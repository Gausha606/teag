import React from "react";
import "./contact.css";
import { MdCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import ContactForm from "../components/ContactForm";
import SocialMedia from "../components/SocialMedia";
import bgImage from "/public/images/19.png";
import Image from "next/image";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Teagather Grand. Find our address, phone number, and send us a message for reservations or inquiries.",
  openGraph: {
    images: [
      {
        url: "https://teag.netlify.app/images/contactpage.png",
        width: 1200,
        height: 630,
        alt: "Get in touch with us at Teagather Grand. Our team is here to assist with reservations, inquiries, or any special requests. We’re located in the heart of Gwalior.",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "https://teag.netlify.app/images/contactpage.png",
        width: 1200,
        height: 630,
        alt: "Get in touch with us at Teagather Grand. Our team is here to assist with reservations, inquiries, or any special requests. We’re located in the heart of Gwalior.",
      },
    ],
  },
};

export default function page() {
  return (
    <div className="mt-16">
      {/* hero section */}
      <div
        className="flex flex-col justify-center items-center h-[400px]"
        id="contact-card"
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
        <p className="text-5xl  text-white !font-bold m-0">Contact Us</p>
        <p className="text-xl w-[850px] text-center  text-white   !mt-4  montserrat ">
          For reservations, inquiries, or to share your feedback, please contact
          us. We are always delighted to connect with our guests.
        </p>
      </div>

      {/* button - contact section */}
      <div className="max-w-7xl mx-auto montserrat flex justify-between ">
        {/* button/map section */}
        <div className="flex flex-col justify-center items-center gap-4 p-8">
          <div className="flex gap-4">
            <div className="flex flex-col items-center group justify-center text-[#533218de] rounded-2xl w-[300px] h-[160px] hover:scale-105 duration-300 ease-in-out hover:shadow-lg p-4 gap-2 bg-[#F5F1EB] m-0">
              <MdCall className="text-4xl group-hover:animate-bounce" />
              <p className="m-0 text-xl font-semibold">Phone</p>
              <p className="m-0">99811-48990, 82699-25555</p>
            </div>
            <div className="flex flex-col items-center group justify-center text-[#533218de] rounded-2xl w-[300px] h-[160px] hover:scale-105 duration-300 ease-in-out hover:shadow-lg p-4 gap-2 bg-[#F5F1EB] m-0">
              <FaWhatsapp className="text-4xl group-hover:animate-bounce" />
              <p className="m-0 text-xl font-semibold">Whatsapp</p>
              <p className="m-0">99811-48990, 82699-25555</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col items-center justify-center group text-[#533218de] rounded-2xl w-[300px] hover:scale-105 duration-300 ease-in-out hover:shadow-lg p-4 gap-2 bg-[#F5F1EB] m-0">
              <MdEmail className="text-4xl group-hover:animate-bounce" />
              <p className="m-0 text-xl font-semibold">Gmail</p>
              <p className="m-0 ">TeagatherGrand@gmail.com</p>
            </div>
            <div className="flex flex-col items-center justify-center group text-[#533218de] rounded-2xl w-[300px] hover:scale-105 duration-300 ease-in-out hover:shadow-lg p-4 gap-2 bg-[#F5F1EB] m-0">
              <IoLocationSharp className="text-4xl group-hover:animate-bounce" />
              <p className="m-0 text-xl font-semibold">Address</p>
              <p className="m-0 text-center">
                New Collectorate Road, Model Town, Gwalior
              </p>
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.103132454738!2d78.20743257541486!3d26.193323177083204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c31754ae87cd%3A0xd05f0bbb8cf47a19!2sTeagather%20Grand!5e0!3m2!1sen!2sin!4v1756808744415!5m2!1sen!2sin"
            width="620"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="hover:scale-105 duration-300 ease-in-out"
          ></iframe>
        </div>

        {/* contacy section */}
        <ContactForm />
      </div>

      <SocialMedia />
    </div>
  );
}
