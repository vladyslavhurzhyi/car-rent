"use client";

import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { generateImageUrl } from "@/app/utils/fetchData";
import CustomButton from "./CustomButton";

const CarInfoModal = ({ isOpen, setIsOpen, car }) => {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30  " aria-hidden="true" />
        <div className="fixed inset-0  flex w-fit md:h-max   justify-center  rounded-lg overflow-y-auto overflow-x-clip bg-white px-4 mx-2 my-5 md:m-auto">
          <Dialog.Panel className=" relative mx-auto max-w-sm rounded bg-white w-full ">
            <button
              type="button"
              className="p-4 fixed md:absolute top-5 right-0 md:top-0"
              onClick={() => setIsOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6  hover:stroke-blue-500 transition-all"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <div className="flex justify-center mb-2 ">
              <Image
                className=""
                src={generateImageUrl(car)}
                alt={"car"}
                width={250}
                height={150}
                priority
              />
            </div>
            {/* ///////////////// */}
            <div className="flex justify-center gap-2 mb-4">
              <Image
                src={generateImageUrl(car, "29")}
                alt={"car"}
                width={120}
                height={100}
                priority
              />
              <Image
                src={generateImageUrl(car, "33")}
                alt={"car"}
                width={120}
                height={100}
                priority
              />
              <Image
                src={generateImageUrl(car, "13")}
                alt={"car"}
                width={120}
                height={100}
                priority
              />
            </div>
            <div className="flex justify-between items-center mb-4 px-4">
              <div>
                <h2 className="font-bold uppercase text-3xl ">{car.make}</h2>
                <h3 className="uppercase text-xl">{car.model.split(" ")[0]}</h3>
              </div>
              <div>
                <div className="my-4 py-4">
                  <CustomButton title={`Rent now`} customStyles={"uppercase"} />
                </div>
              </div>
            </div>
            {/* /////////////// */}
            <div className=" bg-white">
              {Object.entries(car).map(([key, value]) => (
                <div
                  className="flex justify-between odd:bg-white even:bg-slate-50"
                  key={key}
                >
                  <h4 className="capitalize p-2">{key.split("_").join(" ")}</h4>
                  <p className="capitalize p-2">
                    {value === "a" ? "Automatic" : value}
                  </p>
                </div>
              ))}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default CarInfoModal;
