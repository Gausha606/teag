import Image from 'next/image'
import React from 'react'

export default function ChefsCorner() {
  return (
    <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6 text-stone-800 border-b-2 border-[#A84D06] pb-2">
              {"Chef's Corner"}
            </h2>
            <h3 className="text-2xl font-semibold mb-4 text-stone-700">
              Mera Favorite Dish: Dahi Ke Sholey
            </h3>
            <p className="text-lg leading-relaxed text-stone-600 mb-2">
              Mera junoon hai spices ke saath experiment karna. Dahi Ke Sholey
              ki recipe mein, hum dahi ko pehle achhi tarah se phent kar smooth
              bana lete hain, phir usmein besan ya refined flour milate hain
              taaki ek creamy texture aaye. Iske baad ise dheemi aanch par
              pakate hain aur dhyaan rakhte hain ki yeh na phate.
            </p>
            <p className="text-lg leading-relaxed text-stone-600 mb-2">
              Spices ka jadoo yahan bhi chalta hai - haldi, dhaniya powder, aur
              hing ka tadka lagakar ise aur bhi swadisht banate hain. Kuch log
              isme hari mirch aur adrak ka paste bhi add karte hain extra flavor
              ke liye.
            </p>

            <p className="text-lg leading-relaxed text-stone-600 mb-2">
              Phir hamare khas masale milate hain - jeera, rai ka tempering, aur
              fresh dhania patti se garnish karte hain. Yeh dish sirf ek recipe
              nahi, balki meri mehnat aur dil ka ansh hai. Har bite mein woh
              creamy texture aur tangy flavor ka perfect balance milta hai jo
              dil ko chu jaata hai.
            </p>

            <p className="text-lg leading-relaxed text-stone-600 mb-2">
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
  )
}
