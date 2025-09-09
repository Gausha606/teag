import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function OurStory() {
  return (
    <div className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-evenly items-center gap-4">
         <div className="md:w-1/2 pl-12">
        <h1 className="text-white !text-5xl font-bold">Our Philosophy</h1>

        <div className="max-w-xl text-white mt-8 flex flex-col gap-4 montserrat ">
          <p className="m-0">
            At Teagather Grand, we believe that exceptional dining begins with
            exceptional ingredients. Every dish on our menu tells the story of
            its origins—from the tea gardens where our leaves are picked to the
            local farms that supply our fresh produce.
          </p>

          <p className="m-0">
            Our commitment to ingredient provenance means working directly with
            local farmers and artisan producers who share our passion for
            quality. We celebrate the seasons, allowing nature's rhythm to guide
            our menu and inspire our creativity.
          </p>

          <p className="m-0">
            This philosophy extends beyond sourcing to every aspect of our
            culinary craft—from traditional recipes passed down through
            generations to innovative preparations that honor the ingredient's
            natural character.
          </p>

        <Link href="/about">
          <button className=" px-12 cursor-pointer  py-2 bg-[#A84D06] !rounded-lg text-white montserrat hover:shadow-2xl hover:scale-105 duration-300 ease-in-out">
            More About Us →
          </button>
          </Link>
        </div>
      </div>

      <div className="h-[400px] flex justify-center items-center overflow-hidden rounded-2xl shadow-lg mx-8">
        <Image
          src="https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
          alt="Chef selecting fresh"
          width={520}
          height={300}
          className="object-cover"
        />
      </div>

   </div>
    </div>
  );
}


// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// export default function OurStory() {
//   return (
//     // Outer container for full-width background
//     <div className="bg-black py-12">
//       {/* Inner container with max-w-7xl mx-auto to center and limit content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
//         {/* Text content div */}
//         <div className="md:w-1/2">
//           <h1 className="text-white !text-5xl font-bold">Our Philosophy</h1>
//           <div className="text-white mt-8 flex flex-col gap-4 montserrat">
//             <p className="m-0">
//               At Teagather Grand, we believe that exceptional dining begins with
//               exceptional ingredients. Every dish on our menu tells the story of
//               its origins—from the tea gardens where our leaves are picked to the
//               local farms that supply our fresh produce.
//             </p>
//             <p className="m-0">
//               Our commitment to ingredient provenance means working directly with
//               local farmers and artisan producers who share our passion for
//               quality. We celebrate the seasons, allowing nature's rhythm to guide
//               our menu and inspire our creativity.
//             </p>
//             <p className="m-0">
//               This philosophy extends beyond sourcing to every aspect of our
//               culinary craft—from traditional recipes passed down through
//               generations to innovative preparations that honor the ingredient's
//               natural character.
//             </p>
//             <Link href="/about">
//               <button className="w-fit px-12 py-2 bg-[#A84D06] !rounded-lg text-white montserrat hover:shadow-2xl hover:scale-105 duration-300 ease-in-out">
//                 More About Us →
//               </button>
//             </Link>
//           </div>
//         </div>
//         {/* Image div */}
//         <div className="md:w-1/2 flex justify-center items-center">
//           <div className="h-[400px] overflow-hidden rounded-2xl shadow-lg">
//             <Image
//               src="https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
//               alt="Chef selecting fresh"
//               width={520}
//               height={300}
//               className="object-cover h-full w-full"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }