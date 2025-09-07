"use client"
import Image from "next/image";
export default function OurOwners() {
  return (
    <section className="bg-stone-800 text-neutral-50 py-24 px-6 text-center">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 border-b-2 border-[#A84D06] inline-block pb-2">
                Our Passionate Owners
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 ">
                {/* Team Member 1 */}
                <div className="flex flex-col items-center p-6 rounded-lg bg-[#F5F1EB] shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 ">
                  <Image
                    src="/images/dheeraj.jpg"
                    alt="Chef Priya"
                    className="w-40 h-40 rounded-full object-cover mb-4 "
                    width={600}
                  height={400}
                  />
                  <h3 className="text-xl text-black font-semibold mb-1">
                    Dheeraj Paramanand Sharma
                  </h3>
                  <p className="text-[#A84D06] font-light text-xs italic">Co-founder, The Visionary Leader</p>
                  <p className="mt-4 text-sm leading-relaxed text-black">
                    He envisioned a place where culinary art meets community, creating not just a restaurant but a destination for unforgettable experiences. His dedication to innovation and excellence is the driving force behind every dish and every detail.
                  </p>
                </div>
    
                {/* Team Member 2 */}
                <div className="flex flex-col items-center p-6 rounded-lg  bg-[#F5F1EB] shadow-xl transition-transform duration-300 ease-in-out hover:scale-105">
                  <Image
                    src="/images/rishabh.jpg"
                    alt="Manager Rohan"
                    className="w-40 h-40 rounded-full object-cover mb-4 "
                    width={600}
                  height={400}
                  />
                  <h3 className="text-xl font-semibold mb-1 text-black">
                    Rishabh Singh Jadon
                  </h3>
                  <p className="text-[#A84D06] font-light text-xs italic">Co-founder, The Master of Operations</p>
                  <p className="mt-4 text-sm leading-relaxed text-black">
                    Driven by a passion for perfection, he meticulously oversees every detail of the {"restaurant's"} operations. His commitment to quality ensures a flawless and exceptional dining experience for every guest.
                  </p>
                </div>
    
                {/* Team Member 3 */}
                <div className="flex flex-col items-center p-6 rounded-lg  bg-[#F5F1EB] shadow-xl transition-transform duration-300 ease-in-out hover:scale-105">
                  <Image
                    src="/images/agraj.jpg"
                    alt="Bartender"
                    className="w-40 h-40 rounded-full object-cover mb-4 "
                    width={600}
                  height={400}
                  />
                  <h3 className="text-xl font-semibold mb-1 text-black">
                    Agraj Singh Chauhan
                  </h3>
                  <p className="text-[#A84D06] font-light text-xs italic">Co-founder, The Creative Heart</p>
                  <p className="mt-4 text-sm leading-relaxed text-black">
                    Driven by a deep love for flavors and a desire to share authentic cuisine, she curated a menu that tells a story with every bite. Her creativity and passion infuse life into the restaurant, making it a place where food is an art form and a celebration.
                  </p>
                </div>
              </div>
            </div>
          </section>
  )
}
