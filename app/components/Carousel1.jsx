"use client";
import un1 from "../download/16.png";
import un2 from "../download/17.png";
import un3 from "../download/18.png";
import un4 from "../download/19.png";
import un5 from "../download/20.png";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import "./Carousel.css";

export default function Carousel1() {
  return (
    <div className="w-full relative mt-18 bg-black">
      <div className="carousel rounded-lg">
        <Carousel interval={3000} className="px-2 py-2 ">
          {/* Added margin-bottom for spacing */}
          <Carousel.Item>
            <Image
              className="d-block w-100 rounded-lg"
              src={un1}
              alt="teagather image"
              style={{ height: "570px", objectFit: "cover" }} // Added height and object-fit
            />
            <Carousel.Caption>
              {/* <h3 className="!text-[#ff7458]">Kedarnath Holy Place</h3>
            <p>Some representative placeholder content for the first slide.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Image
              className="d-block w-100 rounded-lg"
              src={un2}
              alt="teagather image"
              style={{ height: "570px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              {/* <h3 >Second slide label</h3>
            <p>Some representative placeholder content for the second slide.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Image
              className="d-block w-100 rounded-lg"
              src={un3}
              alt="teagather image"
              style={{ height: "570px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
            <p>Some representative placeholder content for the third slide.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Image
              className="d-block w-100 rounded-lg"
              src={un4}
              alt="teagather image"
              style={{ height: "570px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
            <p>Some representative placeholder content for the third slide.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Image
              className="d-block w-100 rounded-lg"
              src={un5}
              alt="teagather image"
              style={{ height: "570px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
            <p>Some representative placeholder content for the third slide.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
