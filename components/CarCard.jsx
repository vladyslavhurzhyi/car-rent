import { generateImageUrl } from "@/app/utils/fetchData";
import Image from "next/image";
import ViewMoreBtn from "./ViewMoreBtn";

const CarCards = ({ cars, loading, searchParams }) => {
  return (
    <div className="block   md:flex md:flex-wrap mt-4 md:-mx-[10px]">
      {(cars.length < 1 && (
        <div className="animate-pulse ">
          We have 0 {searchParams.manufacturer} {searchParams.model} for rent
        </div>
      )) || (
        <>
          {cars.map((car, index) => {
            const partsModel = car.model.split(" ");

            const rentalCost = Math.floor(Math.random() * 50) + 30;

            return (
              <div
                key={index}
                className={`md:mx-[10px] flex-col justify-between w-full md:w-[calc(50%-20px)] lg:w-[calc(25%-20px)]  bg-slate-100 p-4 rounded-xl mb-4 hover:shadow-md transition-all ease-in duration-200 group ${
                  loading ? " animate-pulse" : " "
                }`}
              >
                <div className="flex flex-col mb-10">
                  <p className="font-bold uppercase text-2xl">{car.make}</p>
                  <div className="flex gap-2">
                    <p className="uppercase ">
                      {partsModel[0]} {partsModel[1]} {partsModel[2]}
                    </p>
                  </div>
                  <p className="flex mt-2 text-[32px] leading-[38px] font-extrabold">
                    <span className="self-start text-[14px] leading-[17px] font-semibold">
                      $
                    </span>
                    {rentalCost}
                    <span className="self-end text-[14px] leading-[17px] font-medium">
                      /day
                    </span>
                  </p>
                </div>

                <Image
                  src={generateImageUrl(car)}
                  alt="car image"
                  width={300}
                  height={300}
                  className={`mx-auto mb-4`}
                  quality={50}
                />
                <div className="flex justify-between  group-hover:hidden transition-all   ">
                  <div className="flex flex-col items-center ">
                    <Image
                      src={"./steering-wheel.svg"}
                      width={25}
                      height={25}
                      className="mb-2 "
                      alt="steering-wheel"
                    />
                    <p className=" text-gray-400">
                      {car.transmission === "a" ? "Automatic" : "Manual"}
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image
                      src={"./tire.svg"}
                      alt="tire"
                      width={25}
                      height={25}
                      className="mb-2"
                    />
                    <p className=" uppercase text-gray-400">{car.drive}</p>
                  </div>
                  <div className="flex flex-col items-center ">
                    <Image
                      src={"./gas.svg"}
                      alt="gas"
                      width={25}
                      height={25}
                      className="mb-2 "
                    />
                    <p className=" text-gray-400">{car.combination_mpg} MPG</p>
                  </div>
                </div>
                <ViewMoreBtn car={car} />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default CarCards;
