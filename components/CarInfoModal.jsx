"use client";

import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { generateImageUrl } from "@/app/utils/fetchData";

const CarInfoModal = ({ isOpen, setIsOpen, car }) => {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 rounded-lg">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="mx-auto max-w-sm rounded bg-white w-full p-4 ">
            <div className="flex justify-center mb-2">
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
            <div className="flex flex-col mb-4">
              <h2 className="font-bold uppercase text-2xl">{car.make}</h2>
              <h3 className="uppercase ">{car.model}</h3>
            </div>
            {/* /////////////// */}
            <div>
              {Object.entries(car).map(([key, value]) => (
                <div className="flex justify-between" key={key}>
                  <h4 className="mb-4"> {key.split("_").join(" ")}</h4>
                  <p className="mb-4">{value}</p>
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
