import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="mx-auto max-w-screen-2xl">
        <nav
          className="flex justify-between items-center p-3  lg:px-8"
          aria-label="Global"
        >
          <a href="/" className="items-center">
            <span className=" text-blue-600 font-bold uppercase text-xl lg:text-2xl">
              MORENT
            </span>
          </a>

          <Link href="/" className="">
            <span className="flex lg:p-3 justify-center items-center hover:text-violet-600 transition-all rounded-3xl lg:hover:bg-zinc-50 ">
              Log in
            </span>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
