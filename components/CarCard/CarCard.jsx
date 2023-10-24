import Image from "next/image";

const CarCard = ({ cars }) => {
  return (
    <>
      {cars.map((car, index) => {
        return (
          <div
            key={index}
            className="mx-[10px] w-full md:w-[calc(50%-20px)] lg:w-[calc(25%-20px)] bg-slate-100 p-4 rounded-xl mb-4"
          >
            <div className="flex flex-col">
              <p className="font-bold uppercase text-2xl">{car.make}</p>
              <p className="uppercase ">{car.model}</p>
            </div>

            <Image
              src="/hero.png"
              alt="car image"
              priority
              width={200}
              height={200}
              className=" mx-auto"
            />

            <div className="flex justify-between mb-2 px-2 mt-4">
              <div className="flex flex-col items-center">
                <Image
                  src={"./steering-wheel.svg"}
                  width={25}
                  height={25}
                  className="mb-2"
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
              <div className="flex flex-col items-center">
                <Image
                  src={"./gas.svg"}
                  alt="gas"
                  width={25}
                  height={25}
                  className="mb-2"
                />
                <p className=" text-gray-400">{car.combination_mpg} MPG</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CarCard;
