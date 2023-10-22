const ContainerWrapper = ({ children, addStyle }) => {
  return <div className={`container mx-auto px-8 ${addStyle}`}>{children}</div>;
};

export default ContainerWrapper;
