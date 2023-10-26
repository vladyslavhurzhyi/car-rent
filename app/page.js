"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import Hero from "@/components/Hero/Hero";
import SearchFilter from "@/components/SearchFilter/SearchFilter";
import fetchCars from "./utils/getCars";
import { useEffect, useState } from "react";
import CarCard from "@/components/CarCard/CarCard";
import Image from "next/image";
import ShowMore from "@/components/ShowMore/ShowMore";

export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(true);

  //search state
  const [manufacturer, setManuFacturer] = useState("");
  const [model, setModel] = useState("");

  //filter state
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);

  //limitState
  const [limit, setLimit] = useState(10);

  const incrementLimit = () => {
    setLimit((prevState) => prevState + 10);
  };

  const getAllCars = async () => {
    setLoading(true);

    try {
      const data = await fetchCars({
        manufacturer: manufacturer.toLocaleLowerCase() || "",
        model: model.toLowerCase() || "",
        fuel: fuel.toLowerCase() || "",
        year: year || "",
        limit: limit || 10,
      });
      setAllCars(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllCars();
    console.log("manufacturer", manufacturer);
    console.log("allCars", allCars);
  }, [fuel, year, limit, manufacturer, model]);

  return (
    <>
      <ContainerWrapper addStyle={""}>
        <Hero />

        <SearchFilter
          loading={loading}
          setManuFacturer={setManuFacturer}
          setModel={setModel}
        />

        <div className="block md:flex md:flex-wrap justify-start mt-4">
          {(allCars.length < 1 && !loading && (
            <div className="animate-pulse ">
              We have 0 {manufacturer} {model} for rent
            </div>
          )) || <CarCard cars={allCars} />}
        </div>
        {loading && (
          <div className=" ">
            <Image
              className="block mx-auto z-50 "
              src={"./loader.svg"}
              alt="loader"
              width={50}
              height={50}
            />
          </div>
        )}

        {!loading && limit > allCars.length ? (
          <button
            disabled
            className="block mx-auto cursor-not-allowed bg-blue-200  text-white font-bold py-2 px-4  rounded-lg"
            type="button"
          >
            No More
          </button>
        ) : (
          <ShowMore incrementLimit={incrementLimit} loading={loading} />
        )}
      </ContainerWrapper>
    </>
  );
}
