"use client";
import Image from "next/image";
import Background from "./Background";
import "./bghero.css";
import CarCanvas from "../CarThreeD/CarThreeD";

const Hero = () => {
  return (
    <>
      <div className="md:flex mt-10">
        <div className="max-w-md block mr-auto">
          <h1 className=" text-start font-bold text-[35px] md:text-[50px] lg:text-[60px] 2xl:text-[70px]">
            Find, book, or rent a car - quickly and easily!
          </h1>
        </div>

        <div className="block relative ">
          <div className="w-[300px] md:w-[400px] lg:w-[600px] xl:w-[900px] h-[300px] lg:h-[500px]">
            <Background />
            <CarCanvas />
            <Image
              src="/hero.png"
              alt="heroImage"
              width={300}
              height={300}
              className="bghero object-contain blur-sm  ml-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
