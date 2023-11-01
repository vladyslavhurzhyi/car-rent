const CustomButton = ({ title, customStyles, btnType, handleClick }) => {
  return (
    <button
      type={btnType || "submit"}
      className={`${customStyles} block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full`}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
};

export default CustomButton;
