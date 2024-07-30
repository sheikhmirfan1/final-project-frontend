import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="w-full flex gap-20 justify-evenly px-10 py-3 border-b border-gray-200 border-solid max-md:flex-wrap max-md:px-5">
      <div className="flex gap-10 my-auto">
        <div className="flex flex-col justify-center my-auto">
          <div className="shrink-0 h-4" />
        </div>
        <h1 className="justify-center text-lg font-bold leading-6 text-stone-100">
          Base Logo
        </h1>
      </div>
      <nav className="flex justify-between flex-1 gap-5 pl-20 max-md:flex-wrap ">
        <div className="flex gap-40 justify-between flex-wrap py-2.5 text-sm font-bold leading-5 whitespace-nowrap text-stone-100">
          <Link to="/" className="justify-center">
            Home
          </Link>
          <Link to="/order" className="justify-center">
            Order
          </Link>
          <Link to="/contactUs" className="justify-center">Contact Us</Link>
          <Link className="justify-center">About</Link>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col justify-center px-4 py-2.5 text-sm font-bold leading-5 text-center bg-amber-500 rounded-xl w-100px text-stone-900">
            <div className="justify-center text-ellipsis">Orders list</div>
          </div>
          <div className="flex flex-col justify-center items-center px-1.5 w-10 h-10 bg-rose-100 rounded-xl">
            <div className="flex justify-center items-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e3cebce77e1845457e870438a763466b0b3eb92181836a66fa1ab83c4c6fd2b?apiKey=19e7bba656cf4334ab650b33c0aad2c0&"
                className="w-5 aspect-square"
                alt=""
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
