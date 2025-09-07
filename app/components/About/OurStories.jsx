"use client"

export default function OurStories() {
  return (
    <section className="py-24 px-6 bg-stone-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12  text-white border-b-2 border-[#A84D06] inline-block pb-2">
            Aapki Kahaniyan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl  shadow-xl hover:scale-105 duration-300 ease-in-out">
              <p className="italic text-lg mb-4">
                {"Hamari pehli date yahan hui thi, aur us din se yeh hamara favorite restaurant ban gaya hai. Har visit par wahi magical feeling hoti hai."}
              </p>
              <p className="font-bold">Amit & Pooja</p>
            </div>
            <div className="bg-white p-8 rounded-xl  shadow-xl hover:scale-105 duration-300 ease-in-out">
              <p className="italic text-lg mb-4">
                {"Meri family jab bhi shehar aati hai, hum yahan zaroor aate hain. Yahan ka khaana bilkul ghar lagta hai, aur service bahut achi hai."}
              </p>
              <p className="font-bold">The Gupta Family</p>
            </div>
          </div>
        </div>
      </section>
  )
}
