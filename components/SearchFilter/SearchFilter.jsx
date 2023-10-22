"use client";

import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
// import { Combobox, Transition } from "@headlessui/react";
// import { CheckIcon } from "@heroicons/react/20/solid";
import SearchManufactures from "./SearchManufactures";

const SearchButton = ({ otherClasses }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"./magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchFilter = ({ setModel, setManuFacturer }) => {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchManufacturer.trim().toLocaleLowerCase() === "") {
      return alert("Please provide some input");
    }

    setModel(searchModel);
    setManuFacturer(searchManufacturer);
  };

  return (
    <form onSubmit={handleSearch}>
      <h1 className="text-3xl font-bold md:mt-5">Car Catalogue</h1>
      <p className="">Explore the cars you might like</p>
      <div className=" max-w-md mt-4 flex">
        <SearchManufactures
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton />
        {/* 
        <Combobox value={selected} onChange={setSelected}>
          <div className="relative">
            <div className="relative w-full cursor-default overflow-hidden rounded-r-lg bg-white text-left border-r-2 border-t-2 border-b-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
              <Combobox.Button className="absolute top-[9px] left-[0px]">
                <Image
                  src="/model-icon.png"
                  width={20}
                  height={20}
                  className="ml-4"
                  alt="car logo"
                />
              </Combobox.Button>
              <Combobox.Input
                className="w-full border-none py-2 pl-10 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 "
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Tiguan"
              />
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filteredmanufacturers.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  filteredmanufacturers.map((item) => (
                    <Combobox.Option
                      key={item}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? " bg-slate-400 text-white" : "text-gray-900"
                        }`
                      }
                      value={item}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {item}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? "text-white" : "text-teal-600"
                              }`}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox> */}
      </div>
    </form>
  );
};

export default SearchFilter;
