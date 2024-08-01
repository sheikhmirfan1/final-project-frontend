// import React from "react";

const SearchBar = () => (
  <div className="flex relative flex-col justify-center mt-8 max-w-full w-[480px]">
    <div className="flex gap-0 rounded-xl max-md:flex-wrap max-md:max-w-full">
      <input
        type="text"
        placeholder="Search"
        className="w-full p-3 rounded-l-xl focus:outline-none"
      />
      <button type="submit" className="bg-[#F59E0B] p-3 rounded-r-xl">
      <input type="submit" value="Search" />
      </button>
    </div>
  </div>
);

export default SearchBar;
