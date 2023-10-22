const CustomButton = ({ title, customStyles, btnType, handleClick }) => {
  return (
    <button
      type={btnType || "submit"}
      className={customStyles}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
};

export default CustomButton;
