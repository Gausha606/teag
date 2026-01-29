// src/components/AboutPage.jsx

import Image from "next/image";
import Link from "next/link";
import React from "react";
import bgImage from "../../public/images/16.png";
import "./about.css";

export const metadata = {
  title: "About Us",
  description:
    "Learn about the philosophy of Teagather Grand, and meet our passionate owners and find out our other activity areas.",
  openGraph: {
    images: [
      {
        url: "https://teag.netlify.app/images/aboutpage.png",
        width: 1200,
        height: 630,
        alt: "Our dedicated team at Teagather Grand.",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "https://teag.netlify.app/images/aboutpage.png",
        width: 1200,
        height: 630,
        alt: "Our dedicated team at Teagather Grand.",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="bg-neutral-50  montserrat text-stone-800">
      {/* Hero Section */}
      <section
        className="relative h-[450px] flex items-center justify-center text-center p-6 bg-cover bg-center"
        id="about-card"
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
        </div>
        <div className="absolute inset-0 bg-stone-900 opacity-70"></div>
        <div className="relative text-white max-w-4xl mx-auto">
          <h1 className="text-4xl md:!text-6xl !font-bold !mb-4 tracking-wide drop-shadow-lg">
            About Us
            <br />
            {/*A Confluence of Taste and Tradition*/}
          </h1>
          <p className="!text-lg md:text-xl font-light leading-relaxed drop-shadow-md">
            A journey that started with a small idea has today become a unique
            culinary experience. Our passion is to show quality, freshness, and
            heartfelt love in every dish.
          </p>
        </div>
      </section>

      {/* Our Story & Philosophy Section */}
      <section className="py-12 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out">
            <Image
              src="/images/20.png"
              alt="Restaurant Interior Art"
              className="w-full h-auto object-cover"
              width={600}
              height={400}
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="!text-4xl !font-bold !mb-6 text-stone-800 border-b-2 border-[#A84D06] pb-2">
              Our Beginning
            </h2>
            <p className="text-lg leading-relaxed text-stone-600 m-0 !mb-4">
              In 2018, our founders Dheeraj and Rishabh ji laid the foundation
              for this restaurant. Their dream was to create a place where food
              was not just for filling the stomach, but a memorable experience.
              They created a menu that combines traditional flavors with modern
              presentation.
            </p>
            <p className="text-lg leading-relaxed text-stone-600 m-0">
              For us, every ingredient has its own story. All our products come
              directly from local farms and organic suppliers, so that every
              plate is filled with freshness and purity. We are not just a
              restaurant, but a community that believes in good food, great
              experiences, and sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="bg-stone-800 text-neutral-50 py-24 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="!text-4xl !font-bold !mb-12 border-b-2 border-[#A84D06] inline-block pb-2">
            Our Passionate Owners
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 ">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center p-6 !rounded-lg bg-[#F5F1EB] shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 ">
              <Image
                src="/images/dheeraj.jpg"
                alt="Chef Priya"
                className="w-40 h-40 rounded-full object-cover !mb-4 "
                width={600}
                height={400}
              />
              <h3 className="!text-xl text-black !font-semibold !mb-1">
                Dheeraj Paramanand Sharma
              </h3>
              <p className="text-[#A84D06] !font-light !text-xs italic m-0">
                Co-founder, The Visionary Leader
              </p>
              <p className="!mt-4 !text-sm leading-relaxed text-black m-0">
                He envisioned a place where culinary art meets community,
                creating not just a restaurant but a destination for
                unforgettable experiences. His dedication to innovation and
                excellence is the driving force behind every dish and every
                detail.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col items-center p-6 rounded-lg  bg-[#F5F1EB] shadow-xl transition-transform duration-300 ease-in-out hover:scale-105">
              <Image
                src="/images/rishabh.jpg"
                alt="Manager Rohan"
                className="w-40 h-40 rounded-full object-cover !mb-4 "
                width={600}
                height={400}
              />
              <h3 className="!text-xl !font-semibold !mb-1 text-black">
                Rishabh Singh Jadon
              </h3>
              <p className="text-[#A84D06] !font-light !text-xs italic m-0">
                Co-founder, The Master of Operations
              </p>
              <p className="!mt-4 !text-sm leading-relaxed text-black m-0">
                Driven by a passion for perfection, he meticulously oversees
                every detail of the {"restaurant's"} operations. His commitment
                to quality ensures a flawless and exceptional dining experience
                for every guest.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col items-center p-6 rounded-lg  bg-[#F5F1EB] shadow-xl transition-transform duration-300 ease-in-out hover:scale-105">
              <Image
                src="/images/agraj.jpg"
                alt="Bartender"
                className="w-40 h-40 rounded-full object-cover !mb-4 "
                width={600}
                height={400}
              />
              <h3 className="!text-xl !font-semibold !mb-1 text-black">
                Agraj Singh Chauhan
              </h3>
              <p className="text-[#A84D06] !font-light !text-xs italic m-0">
                Co-founder, The Creative Heart
              </p>
              <p className="!mt-4 !text-sm leading-relaxed text-black m-0">
                Driven by a deep love for flavors and a desire to share
                authentic cuisine, she curated a menu that tells a story with
                every bite. Her creativity and passion infuse life into the
                restaurant, making it a place where food is an art form and a
                celebration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ambiance & Gallery Section */}
      <section className="bg-neutral-50 py-24 px-6 text-center">
        <h2 className="!text-4xl !font-bold !mb-6 text-stone-800 border-b-2 border-[#A84D06] inline-block pb-2">
          Our Elegant Ambience
        </h2>
        <p className="max-w-3xl mx-auto !text-lg leading-relaxed text-stone-600 !mb-12">
          We have paid attention to every detail to ensure your dining
          experience is the best. Our ambiance is perfect for romantic dinners,
          family gatherings, and business meetings.
        </p>
        <div className="flex flex-col sm:flex-row gap-8 max-w-7xl mx-auto justify-center">
          <div className="relative rounded-xl overflow-hidden shadow-xl group cursor-pointer flex-1">
            <Image
              src="/images/16.png"
              alt="Restaurant dining area"
              className="w-full h-80 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
              width={600}
              height={400}
            />
            <div className="absolute inset-0 bg-stone-900 opacity-50 group-hover:!opacity-0 transition-opacity duration-300"></div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-xl group cursor-pointer flex-1">
            <Image
              src="/images/19.png"
              alt="Restaurant bar"
              className="w-full h-80 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
              width={600}
              height={400}
            />
            <div className="absolute inset-0 bg-stone-900 opacity-50 group-hover:!opacity-0 transition-opacity duration-300"></div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-xl group cursor-pointer flex-1">
            <Image
              src="/images/20.png"
              alt="Outdoor seating"
              className="w-full h-80 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
              width={600}
              height={400}
            />
            <div className="absolute inset-0 bg-stone-900 opacity-50 group-hover:!opacity-0 transition-opacity duration-300"></div>
          </div>
        </div>
      </section>

      {/* Ambiance & Gallery Section */}
      <section className="bg-stone-800 py-24 px-6 text-center">
        <h2 className="!text-4xl !font-bold !mb-6 text-white border-b-2 border-[#A84D06] inline-block pb-2">
          Our More Activities Areas
        </h2>
        <p className="max-w-3xl mx-auto !text-lg leading-relaxed text-white !mb-12">
          We have considered every aspect to make sure your time with us is
          exceptional, whether you are enjoying a swim in our pool, admiring the
          impressive cityscapes from our rooftop, or engaging in a spirited game
          on our sports field.
        </p>
        <div className="flex flex-col sm:flex-row gap-8 max-w-7xl mx-auto justify-center">
          <div className="relative rounded-xl overflow-hidden shadow-xl group cursor-pointer flex-1">
            <Image
              src="/images/post9.jpg"
              alt="Restaurant dining area"
              className="w-full h-80 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
              width={600}
              height={400}
            />
            <div className="absolute inset-0 bg-stone-900 opacity-50 group-hover:!opacity-0 transition-opacity duration-300"></div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-xl group cursor-pointer flex-1">
            <Image
              src="/images/post10.jpg"
              alt="Restaurant bar"
              className="w-full h-80 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
              width={600}
              height={400}
            />
            <div className="absolute inset-0 bg-stone-900 opacity-50 group-hover:!opacity-0 transition-opacity duration-300"></div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-xl group cursor-pointer flex-1">
            <Image
              src="/images/post12.png"
              alt="Outdoor seating"
              className="w-full h-80 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
              width={600}
              height={400}
            />
            <div className="absolute inset-0 bg-stone-900 opacity-50 group-hover:!opacity-0 transition-opacity duration-300"></div>
          </div>
        </div>
      </section>

      {/* New Section 4: Chef's Corner */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="!text-4xl !font-bold !mb-6 text-stone-800 border-b-2 border-[#A84D06] pb-2">
              {"Chef's Corner"}
            </h2>
            <h3 className="!text-2xl !font-semibold !mb-4 text-stone-700">
              Mera Favorite Dish: Dahi Ke Sholey
            </h3>
            <p className="text-lg leading-relaxed text-stone-600 !mb-2">
              Mera junoon hai spices ke saath experiment karna. Dahi Ke Sholey
              ki recipe mein, hum dahi ko pehle achhi tarah se phent kar smooth
              bana lete hain, phir usmein besan ya refined flour milate hain
              taaki ek creamy texture aaye. Iske baad ise dheemi aanch par
              pakate hain aur dhyaan rakhte hain ki yeh na phate.
            </p>
            <p className="text-lg leading-relaxed text-stone-600 !mb-2">
              Spices ka jadoo yahan bhi chalta hai - haldi, dhaniya powder, aur
              hing ka tadka lagakar ise aur bhi swadisht banate hain. Kuch log
              isme hari mirch aur adrak ka paste bhi add karte hain extra flavor
              ke liye.
            </p>

            <p className="text-lg leading-relaxed text-stone-600 !mb-2">
              Phir hamare khas masale milate hain - jeera, rai ka tempering, aur
              fresh dhania patti se garnish karte hain. Yeh dish sirf ek recipe
              nahi, balki meri mehnat aur dil ka ansh hai. Har bite mein woh
              creamy texture aur tangy flavor ka perfect balance milta hai jo
              dil ko chu jaata hai.
            </p>

            <p className="text-lg leading-relaxed text-stone-600 !mb-2">
              Dahi Ke Sholey ko chawal ya roti ke saath serve karna ho to aur
              bhi accha lagta hai. Yeh comfort food hai jo ghar ki warmth aur
              maa ke haath ka pyaar dono feel karata hai.
            </p>

            <p className="mt-4 text-xl font-bold text-[#A84D06]">
              - Chef Priya Sharma
            </p>
          </div>
          <div className="flex-1 rounded-xl shadow-2xl overflow-hidden">
            <Image
              src="/images/dahi.png"
              alt="Chef's Special Dish"
              className="w-full h-auto object-cover"
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* New Section 7: Private Dining & Events */}
      <section className="py-24 px-6 bg-stone-800 text-neutral-50 text-center">
        <h2 className="!text-4xl !font-bold !mb-6 border-b-2 border-[#A84D06] inline-block !pb-2">
          Private Dining aur Events
        </h2>
        <p className="max-w-3xl mx-auto !text-lg leading-relaxed text-neutral-300 !mb-6">
          For special occasions, we also have private dining rooms available.
          Whether {"it's"} a birthday, anniversary, or corporate party, we make
          every event memorable.
        </p>

        <Link href="/reserve">
          <button className="bg-[#A84D06] text-white !font-bold !py-3 !px-4 !rounded-full shadow-lg hover:bg-amber-700 hover:scale-105 hover:shadow-lg  duration-300 !text-lg cursor-pointer">
            Book Event
          </button>
        </Link>
      </section>

      {/* New Section 1: Featured Dishes */}
      <section className="bg-white py-24 px-6 text-center">
        <h2 className="!text-4xl !font-bold !mb-12 text-stone-800 border-b-2 border-[#A84D06] inline-block pb-2">
          Our Special Dishes.
        </h2>
        <p className="max-w-3xl mx-auto !text-lg leading-relaxed text-stone-600 !mb-12">
          Here are some of our signature dishes that have won the hearts of our
          customers. You must try them.
        </p>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center group">
            <Image
              src="/images/paneer.jpeg"
              alt="Signature Dish 1"
              className="w-full h-80 object-cover rounded-xl shadow-lg mb-4 transform hover:scale-105 transition-transform duration-500"
              width={600}
              height={400}
            />
            <h3 className="!text-2xl !font-semibold">Tandoori Paneer Tikka</h3>
            <p className="text-stone-600">
              Perfectly marinated paneer, smoky flavor.
            </p>
          </div>
          <div className="flex flex-col items-center group">
            <Image
              src="/images/dalmakhni.jpeg"
              alt="Signature Dish 2"
              className="w-full h-80 object-cover rounded-xl shadow-lg !mb-4 transform hover:scale-105 transition-transform duration-500"
              width={600}
              height={400}
            />
            <h3 className="!text-2xl !font-semibold">Dal Makhani Special</h3>
            <p className="text-stone-600">
              Our secret family recipe, slow-cooked to perfection.
            </p>
          </div>
          <div className="flex flex-col items-center group">
            <Image
              src="/images/rashcake.jpeg"
              alt="Signature Dish 3"
              className="w-full h-80 object-cover rounded-xl shadow-lg !mb-4 transform hover:scale-105 transition-transform duration-500"
              width={600}
              height={400}
            />
            <h3 className="!text-2xl !font-semibold">Rasmalai Cake</h3>
            <p className="text-stone-600">
              A fusion of traditional dessert and modern baking.
            </p>
          </div>
        </div>
      </section>

      {/* New Section 9: Customer Stories */}
      <section className="py-24 px-6 bg-stone-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="!text-4xl !font-bold !mb-12  text-white border-b-2 border-[#A84D06] inline-block pb-2">
            Aapki Kahaniyan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl  shadow-xl hover:scale-105 duration-300 ease-in-out">
              <p className="italic !text-lg !mb-4">
                {
                  "Hamari pehli date yahan hui thi, aur us din se yeh hamara favorite restaurant ban gaya hai. Har visit par wahi magical feeling hoti hai."
                }
              </p>
              <p className="!font-bold">Amit & Pooja</p>
            </div>
            <div className="bg-white p-8 rounded-xl  shadow-xl hover:scale-105 duration-300 ease-in-out">
              <p className="italic text-lg !mb-4">
                {
                  "Meri family jab bhi shehar aati hai, hum yahan zaroor aate hain. Yahan ka khaana bilkul ghar lagta hai, aur service bahut achi hai."
                }
              </p>
              <p className="!font-bold">The Gupta Family</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Section 1: Founder's Message */}
      <section className="py-24 px-6 bg-white text-stone-800">
        <div className="max-w-4xl mx-auto text-center italic font-serif">
          <p className="text-lg md:text-xl leading-relaxed !mb-6">
            {
              "Yeh restaurant sirf ek vyavsay nahi, balki hamare sapno aur junoon ka ek roop hai. Har baar jab aap hamare yahan khaana khate hain, toh aap hamari kahani ka hissa bante hain. Hum aapka dil se swagat karte hain."
            }
          </p>
          <p className="!text-2xl !font-bold">
            - Rishabh, Agaraj aur Dheeraj Sharma
          </p>
          <p className="!text-sm !mt-2">
            Founders of{" "}
            <span className="poppins !font-bold">Teagather Grand</span>
          </p>
        </div>
      </section>
    </div>
  );
}

{
  /* New Section 6: Art & Decor */
}
{
  /* <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6 text-stone-800 border-b-2 border-[#A84D06] pb-2">
              Our Art and Decoration
            </h2>
            <p className="text-lg leading-relaxed text-stone-600">
              Every dining table, every lamp, and every wall tells a story about
              us. We have paid great attention to the interior design to give
              you a visual treat along with your meal. Our interior is a perfect
              blend of modern minimalism and traditional Indian art.
            </p>
          </div>
          <div className="flex-1 rounded-xl shadow-2xl overflow-hidden">
            <Image
              src="/images/16.png"
              alt="Restaurant Interior Art"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section> */
}

{
  /* New Section 3: Press & Awards */
}
{
  /* <section className="bg-white text-neutral-50 py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 border-b-2 border-[#A84D06] text-black  inline-block pb-2">Press & Awards</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-black mb-12">
          Hamein garv hai ki hamari mehnat ko media aur critics ne saraha hai.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 max-w-5xl mx-auto">
          <Image src="https://images.seeklogo.com/logo-png/36/2/tripadvisor-logo-png_seeklogo-368343.png" alt="Forbes logo" className="h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer" />
          <Image src="https://images.seeklogo.com/logo-png/8/2/madeira-wine-logo-png_seeklogo-87104.png" alt="Food & Wine logo" className="h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer" />
          <Image src="https://images.seeklogo.com/logo-png/23/2/zagat-logo-png_seeklogo-233770.png" alt="Zagat logo" className="h-16 w-auto  cursor-pointer" />
          <Image src="https://images.seeklogo.com/logo-png/26/1/forbes-logo-png_seeklogo-269983.png" alt="Tripadvisor logo" className="h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer" />
        </div>
      </section> */
}
