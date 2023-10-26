const ShowMore = ({ loading, incrementLimit }) => {
  return (
    <>
      {!loading && (
        <button
          onClick={incrementLimit}
          type="button"
          className="block mx-auto  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded-lg"
        >
          More
        </button>
      )}
    </>
  );
};

export default ShowMore;
