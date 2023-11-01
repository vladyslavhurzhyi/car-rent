import { generateImageUrl } from "@/app/utils/fetchData";

import Image from "next/image";
import CustomButton from "../CustomButton";

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
            return (
              <div
                key={index}
                className={`md:mx-[10px] w-full md:w-[calc(50%-20px)] lg:w-[calc(25%-20px)]  bg-slate-100 p-4 rounded-xl mb-4 hover:shadow-md transition-all ease-in duration-200 group ${
                  loading ? " animate-pulse" : " "
                }`}
              >
                <div className="flex flex-col">
                  <p className="font-bold uppercase text-2xl">{car.make}</p>
                  <p className="uppercase ">{car.model}</p>
                </div>

                <Image
                  src={generateImageUrl(car)}
                  alt="car image"
                  width={300}
                  height={300}
                  className={`mx-auto mb-4`}
                  quality={50}
                />

                <div className="flex justify-between py-4 px-2  group-hover:hidden transition-all   ">
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

                <div className=" hidden py-4 group-hover:block  transition-all">
                  <CustomButton
                    title={"View More"}
                    btnType={"button"}
                    customStyles={"w-full"}
                    icon={true}
                  />
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default CarCards;
