const CustomButton = ({ title, customStyles, btnType, handleClick, icon }) => {
  return (
    <button
      type={btnType || "submit"}
      className={`${customStyles} block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full`}
      onClick={handleClick}
    >
      <span className="flex justify-center hover:scale-105 transition-all">
        {title}{" "}
        {icon && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        )}
      </span>
    </button>
  );
};

export default CustomButton;
