const ContainerWrapper = ({ children, addStyle }) => {
  return (
    <div className={`container mx-auto px-8 overflow-hidden ${addStyle}`}>
      {children}
    </div>
  );
};

export default ContainerWrapper;
