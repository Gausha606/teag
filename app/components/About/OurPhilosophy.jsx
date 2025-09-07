import Image from 'next/image'

export default function OurPhilosophy() {
  return (
    <section className="py-24 px-6 bg-neutral-50">
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
                <h2 className="text-4xl font-bold mb-6 text-stone-800 border-b-2 border-[#A84D06] pb-2">
                  Our Beginning
                </h2>
                <p className="text-lg leading-relaxed text-stone-600 mb-4">
                  In 2018, our founders Dheeraj and Rishabh ji laid the foundation
                  for this restaurant. Their dream was to create a place where food
                  was not just for filling the stomach, but a memorable experience.
                  They created a menu that combines traditional flavors with modern
                  presentation.
                </p>
                <p className="text-lg leading-relaxed text-stone-600">
                  For us, every ingredient has its own story. All our products come
                  directly from local farms and organic suppliers, so that every
                  plate is filled with freshness and purity. We are not just a
                  restaurant, but a community that believes in good food, great
                  experiences, and sustainability.
                </p>
              </div>
            </div>
          </section>
  )
}
