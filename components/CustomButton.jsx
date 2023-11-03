const CustomButton = ({ title, customStyles, btnType, handleClick, icon }) => {
  return (
    <button
      type={btnType || "submit"}
      className={`${customStyles} block transition-all group mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full`}
      onClick={handleClick}
    >
      <span className="flex gap-2 justify-center group-hover:scale-105 transition-all">
        {title}
        {icon && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 transition-all"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        )}
      </span>
    </button>
  );
};

export default CustomButton;
