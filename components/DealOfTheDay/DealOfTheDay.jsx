import CarThreeD from "../CarThreeD/CarThreeD";

const DealOfTheDay = () => {
  return (
    <section>
      <div className="flex  bg-slate-100  p-6 items-center rounded-xl my-10">
        <div className=" w-full h-[400px] ">
          <CarThreeD />
        </div>
        <div className="">
          <h3 className="animate-pulse text-blue-700 text-3xl uppercase font-bold mb-6 text-center">
            Deal of the Day - Rent a 2018 Mercedes-Benz A45!
          </h3>
          <div className=" mx-10 ">
            <p className="mb-6">
              Looking for an unforgettable driving experience? <br />
              Our Deal of the Day brings you the opportunity to rent a 2018
              Mercedes-Benz A45 at an unbeatable price!
            </p>
          </div>
          <button class="block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">
            Rent Now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default DealOfTheDay;
