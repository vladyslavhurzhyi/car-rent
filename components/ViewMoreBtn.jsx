"use client";

import { useState } from "react";
import CustomButton from "./CustomButton";
import CarInfoModal from "./CarInfoModal";

const ViewMoreBtn = ({ car }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className=" hidden  group-hover:block  transition-all">
        <CustomButton
          title={"View More"}
          btnType={"button"}
          customStyles={"w-full"}
          icon={true}
          handleClick={handleOpen}
        />
      </div>
      <CarInfoModal isOpen={isOpen} setIsOpen={setIsOpen} car={car} />
    </>
  );
};

export default ViewMoreBtn;
