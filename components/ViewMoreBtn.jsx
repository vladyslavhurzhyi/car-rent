"use client";

import { useState } from "react";
import CustomButton from "./CustomButton";
import CarInfoModal from "./CarInfoModal";

const ViewMoreBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className=" hidden py-4 group-hover:block  transition-all">
        <CustomButton
          title={"View More"}
          btnType={"button"}
          customStyles={"w-full"}
          icon={true}
          handleClick={handleOpen}
        />
      </div>
      <CarInfoModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default ViewMoreBtn;
