import Image from 'next/image'

export default function FeaturedDishes() {
  return (
    <section className="bg-white py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-stone-800 border-b-2 border-[#A84D06] inline-block pb-2">
          Our Special Dishes.
        </h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-stone-600 mb-12">
          Here are some of our signature dishes that have won the hearts of our customers. You must try them.
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
            <h3 className="text-2xl font-semibold">Tandoori Paneer Tikka</h3>
            <p className="text-stone-600">
              Perfectly marinated paneer, smoky flavor.
            </p>
          </div>
          <div className="flex flex-col items-center group">
            <Image
              src="/images/dalmakhni.jpeg"
              alt="Signature Dish 2"
              className="w-full h-80 object-cover rounded-xl shadow-lg mb-4 transform hover:scale-105 transition-transform duration-500"
              width={600}
              height={400}
            />
            <h3 className="text-2xl font-semibold">Dal Makhani Special</h3>
            <p className="text-stone-600">
              Our secret family recipe, slow-cooked to perfection.
            </p>
          </div>
          <div className="flex flex-col items-center group">
            <Image
              src="/images/rashcake.jpeg"
              alt="Signature Dish 3"
              className="w-full h-80 object-cover rounded-xl shadow-lg mb-4 transform hover:scale-105 transition-transform duration-500"
              width={600}
              height={400}
            />
            <h3 className="text-2xl font-semibold">Rasmalai Cake</h3>
            <p className="text-stone-600">
              A fusion of traditional dessert and modern baking.
            </p>
          </div>
        </div>
      </section>
  )
}
