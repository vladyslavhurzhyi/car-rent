import ContainerWrapper from "@/components/ContainerWrapper";
import Hero from "@/components/Hero/Hero";
import SearchFilter from "@/components/SearchFilter";
import { fetchCars } from "./utils/fetchData";
import CarCards from "@/components/CarCard";
import DealOfTheDay from "@/components/DealOfTheDay";
import ShowMore from "@/components/ShowMore";

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
        <SearchFilter searchParams={searchParams} />
        <CarCards cars={allCars} searchParams={searchParams} />
        <ShowMore
          pageNumber={(searchParams.limit || 10) / 10}
          isNext={(searchParams.limit || 10) <= allCars.length}
          allCars={allCars}
        />
      </ContainerWrapper>
    </>
  );
}
