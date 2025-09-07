import Image from 'next/image'


export default function Activities() {
  return (
    <section className="bg-stone-800 py-24 px-6 text-center">
  <h2 className="text-4xl font-bold mb-6 text-white border-b-2 border-[#A84D06] inline-block pb-2">
    Our More Activities Areas
  </h2>
  <p className="max-w-3xl mx-auto text-lg leading-relaxed text-white mb-12">
   We have considered every aspect to make sure your time with us is exceptional, whether you are enjoying a swim in our pool, admiring the impressive cityscapes from our rooftop, or engaging in a spirited game on our sports field.
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
      <div className="absolute inset-0 bg-stone-900 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
    </div>
    <div className="relative rounded-xl overflow-hidden shadow-xl group cursor-pointer flex-1">
      <Image
        src="/images/post10.jpg"
        alt="Restaurant bar"
        className="w-full h-80 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
        width={600}
              height={400}
      />
      <div className="absolute inset-0 bg-stone-900 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
    </div>
    <div className="relative rounded-xl overflow-hidden shadow-xl group cursor-pointer flex-1">
      <Image
        src="/images/post12.png"
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
