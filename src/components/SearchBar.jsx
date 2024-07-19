// import React from "react";

const SearchBar = () => (
  <form className="flex relative flex-col justify-center mt-8 max-w-full w-[480px]">
    <div className="flex gap-0 rounded-xl max-md:flex-wrap max-md:max-w-full">
      <div className="flex flex-col justify-center items-start py-6 pr-4 pl-4 rounded-xl border-t border-b border-l border-solid bg-stone-50 border-stone-300">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8a4b76ce75cb47bd16826985730cf3d27b4870dce472baa54fe6742072e4e58?apiKey=19e7bba656cf4334ab650b33c0aad2c0&"
          className="w-5 aspect-square"
          alt="Search icon"
        />
      </div>
      <input
        type="text"
        placeholder="Search "
        className="flex-1 justify-center p-2 text-base leading-6 border-t border-b border-solid bg-stone-50 border-stone-300 text-stone-500"
        aria-label=""
      />
      <button
        type="submit"
        className="flex flex-col justify-center py-2 pr-2 text-base font-bold leading-6 text-center whitespace-nowrap rounded-none border-t border-r border-b border-solid bg-stone-50 border-stone-300 text-stone-900"
      >
        <div className="flex flex-col justify-center px-5 py-3 bg-amber-500 rounded-xl max-w-[480px]">
          <span className="justify-center text-ellipsis">Search</span>
        </div>
      </button>
    </div>
  </form>
);

export default SearchBar;
