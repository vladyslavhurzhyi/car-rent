"use client";

import Image from "next/image";
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import SearchManufactures from "./SearchManufactures";
import { useRouter } from "next/navigation";

const SearchButton = () => {
  return (
    <>
      <button type="submit" className="z-10 p-2">
        <Image
          src={"/magnifyingglass.svg"}
          alt="search icon"
          width={30}
          height={30}
        ></Image>
      </button>
    </>
  );
};

const SearchFilter = () => {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");

  const router = useRouter();

  const updateSearchParams = (manufacturer, model) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer", manufacturer);
    }

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model", model);
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName, { scroll: false });
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchManufacturer.trim().toLocaleLowerCase() === "") {
      return alert("Please provide some input");
    }

    updateSearchParams(
      searchManufacturer.toLowerCase(),
      searchModel.toLowerCase()
    );
  };

  return (
    <form onSubmit={handleSearch} className="">
      <h1 className="text-3xl font-bold md:mt-5">Car Catalogue</h1>
      <p className="">Explore the cars you might like</p>
      <div className=" max-w-md mt-4 flex">
        <SearchManufactures
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />

        <div className=" relative flex justify-start ">
          <Image
            src="/model-icon.png"
            width={20}
            height={20}
            className="absolute top-[10px]  ml-4"
            alt="car model"
          />
          <input
            type="text"
            name="model"
            value={searchModel}
            onChange={(e) => setSearchModel(e.target.value)}
            placeholder="Q5..."
            className={`w-full md:w-fit pl-12 cursor-default overflow-hidden rounded-r-lg bg-white text-left border-r-2 border-t-2 border-b-2 focus:outline-none  sm:text-sm`}
          />
          <SearchButton />
        </div>
      </div>
    </form>
  );
};

export default SearchFilter;
