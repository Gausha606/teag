"use client";
import un1 from "../download/starters.png";
import un2 from "../download/starters2.png";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import "./MenuCarousel.css";

export default function StartersCarousel() {
  return (
    <div className=" relative ">
      <div className="  carousel1  w-[720px] h-[490px] flex justify-center items-center">
        <Carousel interval={1000} className="px-2 py-2 ">
          {/* Added margin-bottom for spacing */}
          <Carousel.Item>
            <Image
              className="d-block  "
              src={un1}
              alt="teagather image"
              width={1000} height={500}
              style={{ objectFit: "cover" }} // Added height and object-fit
            />
 
          </Carousel.Item>

          <Carousel.Item>
            <Image
              className="d-block   "
              src={un2}
              alt="teagather image"
               width={1000} height={500}
              style={{objectFit: "cover" }}
            />
          </Carousel.Item>


        </Carousel>
      </div>
    </div>
  );
}
