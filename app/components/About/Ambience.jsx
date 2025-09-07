import Image from 'next/image'


export default function Ambience() {
  return (
    <section className="bg-neutral-50 py-24 px-6 text-center">
  <h2 className="text-4xl font-bold mb-6 text-stone-800 border-b-2 border-[#A84D06] inline-block pb-2">
    Our Elegant Ambience
  </h2>
  <p className="max-w-3xl mx-auto text-lg leading-relaxed text-stone-600 mb-12">
    We have paid attention to every detail to ensure your dining experience is the best. Our ambiance is perfect for romantic dinners, family gatherings, and business meetings.
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
      <div className="absolute inset-0 bg-stone-900 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
    </div>
    <div className="relative rounded-xl overflow-hidden shadow-xl group cursor-pointer flex-1">
      <Image
        src="/images/19.png"
        alt="Restaurant bar"
        className="w-full h-80 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
        width={600}
              height={400}
      />
      <div className="absolute inset-0 bg-stone-900 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
    </div>
    <div className="relative rounded-xl overflow-hidden shadow-xl group cursor-pointer flex-1">
      <Image
        src="/images/20.png"
        alt="Outdoor seating"
        className="w-full h-80 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
        width={600}
              height={400}
      />
      <div className="absolute inset-0 bg-stone-900 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
    </div>
  </div>
</section>
  )
}
