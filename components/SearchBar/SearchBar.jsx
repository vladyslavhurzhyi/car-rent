const SearchBar = ({ addStyles }) => {
  return (
    <>
      <form className={addStyles || "hidden"}>
        <label
          htmlFor="search"
          className="mb-2  text-xs font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className="block w-full lg:w-96 p-4 pl-10 text-xs text-gray-900 border outline-none border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 hover:bg-zinc-100 transition-all"
            placeholder="Find car"
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-slate-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-xs px-4 py-2 dark:bg-blue-600 dark:hover:bg-slate-400 dark:focus:ring-blue-800 transition-all "
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
