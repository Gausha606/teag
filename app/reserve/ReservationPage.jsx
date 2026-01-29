"use client";

import { useState } from "react";
import "./reserve.css";
import { IoIosArrowDown } from "react-icons/io";
import bgImage from "../../public/images/20.png";
import Image from "next/image";

export default function ReservationPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [demand, setDemand] = useState("");
  const [message, setMessage] = useState("");
  const [occasion, setOccasion] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const scrollToSection = () => {
  const section = document.getElementById('reserve-form');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth',duration: 5000 });
  }
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/reserve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, date, time, guests, occasion, phone, demand,message}),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        // Reset form fields
        setName("");
        setEmail("");
        setDate("");
        setTime("");
        setPhone("");
        setOccasion("");
        setGuests("");
        setDemand("");
        setTimeout(() => {
          setMessage("");
        }, 5000);
      } else {
        setMessage(data.message || "An error occurred.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to connect to the server.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#2d2d2d] pb-12">
      <section
        className="relative pt-12 bg-gradient-to-br from-[#FEF7F0] to-[#F4F6F0] h-[450px]"
        id="reserve-card"
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
        <div className="max-w-7xl mx-auto h-[400px] px-4 sm:px-6 lg:px-8 montserrat">
          <div className="text-center text-white flex flex-col justify-center items-center">
            <h1 className=" text-4xl md:!text-5xl  !font-bold !mt-36 !mb-6">
              Reserve Your Perfect Table
            </h1>
            <p className=" text-xl md:!text-2xl  max-w-3xl mx-auto leading-relaxed">
              Secure your spot for an unforgettable culinary journey where every
              detail is crafted to perfection
            </p>
            <div className="cursor-pointer scroll-mt-1">
            <IoIosArrowDown className="!text-[72px] mt-6 animate-bounce" onClick={scrollToSection} />
            </div>
          </div>
        </div>
      </section>

         <section id="reserve-form" className="pb-4 pt-20 montserrat text-white ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-1">
                <h2 className="text-white text-3xl md:text-4xl !font-bold  !mb-6">
                    Book Your Reservation
                </h2>
                <p className="text-lg ">
                    Real-time availability • Instant confirmation • Special requests welcome
                </p>
            </div>
            </div>
            </section>

      <div className="max-w-4xl mx-auto  bg-[#F5F1EB] p-12 h-[800px] rounded-xl montserrat ">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          {/* date & time selection */}
          <div className="flex justify-between">
            <div className="flex flex-col">
              <label htmlFor="date" className="mb-3 font-semibold">
                <svg
                  className="w-5 h-5 inline mr-2 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Select Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="py-2 px-4 border w-[370px] border-black rounded-lg text-lg"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="time" className="mb-3 font-semibold">
                <svg
                  className="w-5 h-5 inline mr-2 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Preferred Time
              </label>
              <select
                name="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="py-2 px-4 border w-[370px] border-black rounded-lg text-lg"
              >
                <option value>Choose Your Time</option>
                <optgroup label="Lunch Time">
                  <option value="11:00 A.M.">11:00 A.M.</option>
                  <option value="12:00 P.M.">12:00 P.M.</option>
                  <option value="01:00 P.M.">01:00 P.M.</option>
                  <option value="02:00 P.M.">02:00 P.M.</option>
                  <option value="03:00 P.M.">03:00 P.M.</option>
                  <option value="04:00 P.M.">04:00 P.M.</option>
                </optgroup>
                <optgroup label="Dinner Time">
                  <option value="07:00 p.M.">07:00 p.M.</option>
                  <option value="08:00 P.M.">08:00 P.M.</option>
                  <option value="09:00 P.M.">09:00 P.M.</option>
                  <option value="10:00 P.M.">10:00 P.M.</option>
                  <option value="11:00 P.M.">11:00 P.M.</option>
                </optgroup>
              </select>
            </div>
          </div>

          {/*guest number and occasion details */}
          <div className="flex justify-between mt-4">
            <div className="flex flex-col">
              <label htmlFor="guest" className="mb-3 font-semibold">
                <svg
                  className="w-5 h-5 inline mr-2 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Party Size
              </label>
              <select
                name="guest"
                id="guest"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="py-2 px-4 border w-[370px] border-black rounded-lg text-lg"
              >
                <option value>Number of guests</option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6 Guests</option>
                <option value="7">7 Guests</option>
                <option value="8">8 Guests</option>
                <option value="9">9+ Guests (Call Required)</option>
              </select>
            </div>


            <div className="flex flex-col">
              <label htmlFor="occasion" className="mb-3 font-semibold">
                <svg
                  className="w-5 h-5 inline mr-2 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
                Special Occasion (Optional)
              </label>
              <select
                name="occasion"
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                className="py-2 px-4 border w-[370px] border-black rounded-lg text-lg"
              >
                <option value>Select occasion</option>
                <option value="birthday">Birthday Celebration</option>
                <option value="anniversary">Anniversary</option>
                <option value="business">Business Dinner</option>
                <option value="date">Romantic Date</option>
                <option value="proposal">Proposal</option>
                <option value="celebration">General Celebration</option>
                <option value="other">Other Special Event</option>
                
              </select>
            </div>
          </div>
    
          {/* full name and phone number */}
          <div className="flex justify-between mt-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-3 font-semibold">
                 <svg
                  className="w-5 h-5 inline mr-2 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Full Name
              </label>
              <input type="text" id="name" name="name" className="py-2 px-4 border w-[370px] border-black rounded-lg text-lg" placeholder="Write Full name" value={name}
                onChange={(e) => setName(e.target.value)} />
            </div>


            <div className="flex flex-col">
              <label htmlFor="phone" className="mb-3 font-semibold">
                <svg
                  className="w-5 h-5 inline mr-2 text-black"
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
                Phone Number
              </label>
              <input type="tel" id="phone" name="phone" className="py-2 px-4 border w-[370px] border-black rounded-lg text-lg"  pattern="[0-9]{10}" placeholder="10 digits only" value={phone}
                onChange={(e) => setPhone(e.target.value)}/>
            </div>
          </div>
    
          {/* email address */}
          <div className="flex mt-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-3 font-semibold">
                 <svg
                className="w-5 h-5 inline mr-2 text-black"
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
                Email Address
              </label>
              <input type="email" id="email" name="email" className="py-2 px-4 border w-[800px]  border-black rounded-lg text-lg" placeholder="xyz@gmail.com" value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>

          

          {/* Special message */}
          <div className="flex mt-4">
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-3 font-semibold">
                 <svg
                className="w-5 h-5 inline mr-2 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
                Special Requests & Dietary Needs
              </label>
              <textarea type="message" id="message" rows={4} name="message" className="py-2 px-4 border w-[800px]  border-black rounded-lg text-lg" placeholder="Please let us know about any dietary restrictions, allergies, seating preferences, or special celebration details..." value={demand}
                onChange={(e) => setDemand(e.target.value)}/>
            </div>
          </div>

        {/* Reserve button */}
        <div className="mt-8">
            <div className="flex flex-col  justify-center items-center sm:flex-row gap-4 ">
              <button type="submit" className="px-4 bg-[#A84D06] cursor-pointer !rounded-lg text-white !text-lg py-2 hover:scale-105 duration-300 ease-in-out hover:shadow-lg">
                <svg
                  className="w-5 h-5 inline mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Book Your Table Now
              </button>
            </div>
          </div>
          {message && (
            <p className="mt-4 text-center text-sm font-semibold text-green-600">
              {message}</p>)}
        </form>
      </div>

      
    </div>
  );
}
