"use client";

import { useRouter } from "next/navigation";
import { updateSearchParams } from "@/app/utils/updateSearchParams";
import CustomButton from "./CustomButton";

const ShowMore = ({ pageNumber, isNext, allCars }) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;

    const newPathname = updateSearchParams("limit", `${newLimit}`);
    router.push(newPathname, { scroll: false });
  };

  return (
    <>
      {allCars.length && (
        <div className="w-full flex-center gap-5 mt-10">
          {isNext && (
            <CustomButton
              btnType={"button"}
              title={"Show More"}
              handleClick={handleNavigation}
            />
          )}
        </div>
      )}
    </>
  );
};

export default ShowMore;
