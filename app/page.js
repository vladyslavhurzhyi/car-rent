"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import Hero from "@/components/Hero/Hero";
import SearchFilter from "@/components/SearchFilter/SearchFilter";
import fetchCars from "./utils/getCars";
import { useEffect, useState } from "react";

export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  //search state
  const [manufacturer, setManuFacturer] = useState("");
  const [model, setModel] = useState("");

  //filter state
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);

  //limitState
  const [limit, setLimit] = useState(10);

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
      <ContainerWrapper>
        <Hero />
        <SearchFilter setManuFacturer={setManuFacturer} setModel={setModel} />
        {allCars.length > 0 && <div>Cars</div>}
        {loading && <div>Loading...</div>}
      </ContainerWrapper>
    </>
  );
}
