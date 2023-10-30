import ContainerWrapper from "@/components/ContainerWrapper";
import Hero from "@/components/Hero/Hero";
import SearchFilter from "@/components/SearchFilter/SearchFilter";
import { fetchCars } from "./utils/fetchData";
import CarCard from "@/components/CarCard/CarCard";
import DealOfTheDay from "@/components/DealOfTheDay/DealOfTheDay";

// import ShowMore from "@/components/ShowMore/ShowMore";

export default async function Home({ searchParams }) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    model: searchParams.model || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
  });

  return (
    <>
      <ContainerWrapper addStyle={""}>
        <Hero />
        <DealOfTheDay />
        <SearchFilter />

        <div className="block   md:flex md:flex-wrap mt-4 md:-mx-[10px] ">
          {(allCars.length < 1 && (
            <div className="animate-pulse ">
              We have 0 {searchParams.manufacturer} {searchParams.model} for
              rent
            </div>
          )) || <CarCard cars={allCars} />}
        </div>

        {/* <ShowMore /> */}
      </ContainerWrapper>
    </>
  );
}
