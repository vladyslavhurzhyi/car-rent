import CarThreeD from "./CarThreeD.jsx";
import CustomButton from "./CustomButton";
import ViewMoreBtn from "./ViewMoreBtn.jsx";

const DealOfTheDay = () => {
  return (
    <section>
      <div className=" md:flex  bg-slate-100  p-6 items-center rounded-xl my-10">
        <div className=" w-full h-[200px] md:h-[400px]">
          <CarThreeD />
        </div>
        <div className="">
          <h3 className="animate-pulse text-blue-700 text-xl md:text-3xl uppercase font-bold mb-6 text-center">
            Deal of the Day - Rent a 2018 Mercedes-Benz A45!
          </h3>
          <div className=" md:mx-10">
            <p className="mb-3">
              Looking for an unforgettable driving experience? <br />
            </p>
            <p className="mb-6">
              Our Deal of the Day brings you the opportunity to rent a 2018
              Mercedes-Benz A45 at an unbeatable price!
            </p>
          </div>
          <CustomButton btnType={"button"} title={"Rent Now!"} />
        </div>
      </div>
    </section>
  );
};

export default DealOfTheDay;
