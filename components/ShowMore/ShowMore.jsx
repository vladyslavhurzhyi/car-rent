"use client";

import { useRouter } from "next/navigation";
import { updateSearchParams } from "@/app/utils/updateSearchParams";

const ShowMore = ({ pageNumber, isNext }) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;

    const newPathname = updateSearchParams("limit", `${newLimit}`);
    router.push(newPathname, { scroll: false });
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {isNext && (
        <button
          type="button"
          className="block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full"
          onClick={handleNavigation}
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default ShowMore;
