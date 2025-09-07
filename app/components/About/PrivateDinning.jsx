"use client"
import Link from 'next/link'

export default function PrivateDinning() {
  return (
    <section className="py-24 px-6 bg-stone-800 text-neutral-50 text-center">
            <h2 className="text-4xl font-bold mb-6 border-b-2 border-[#A84D06] inline-block pb-2">
              Private Dining aur Events
            </h2>
            <p className="max-w-3xl mx-auto text-lg leading-relaxed text-neutral-300 mb-6">
              For special occasions, we also have private dining rooms available.
              Whether {"it's"} a birthday, anniversary, or corporate party, we make
              every event memorable.
            </p>
    
            <Link href="/reserve">
              <button className="bg-[#A84D06] text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-amber-700 hover:scale-105 hover:shadow-lg  duration-300 text-lg cursor-pointer">
                Book Event
              </button>
            </Link>
          </section>
  )
}
