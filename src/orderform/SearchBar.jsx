

const SearchBar = () => {
  return (
    <div className="flex gap-2.5 mt-7 max-md:flex-wrap">
      <div className="flex overflow-hidden relative flex-col justify-center py-3.5 text-base font-light whitespace-nowrap border border-solid aspect-[5.22] border-slate-300 border-opacity-80 text-slate-500 w-[209px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb38717b756ad5246fd43f9ccea53d7053ceffa9f552869ebaa9d9f89b4fd424?apiKey=19e7bba656cf4334ab650b33c0aad2c0&&apiKey=19e7bba656cf4334ab650b33c0aad2c0"
          className="object-cover absolute inset-0 size-full"
          alt=""
        />
        <div className="relative">Search</div>
      </div>
      <div className="flex gap-5 justify-between px-2.5 py-3.5 bg-white border border-solid border-slate-300 border-opacity-80">
        <div className="flex gap-1.5 text-base whitespace-nowrap">
          <div className="grow text-slate-400">Categories:</div>
          <div className="self-start text-white">All</div>
        </div>
        <div className="flex justify-center items-center my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec48273ace046c7c8ab000185d00a0a7ba4940893078375004e52e561b4cba98?apiKey=19e7bba656cf4334ab650b33c0aad2c0&&apiKey=19e7bba656cf4334ab650b33c0aad2c0"
            className="w-2.5 aspect-[1.67]"
            alt="Dropdown arrow"
          />
        </div>
      </div>
      <div className="flex overflow-hidden relative flex-col py-3.5 text-base border border-solid aspect-[5.25] border-slate-300 border-opacity-80 text-slate-400">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e53654f835601f735f3008ac1eb891716f8faf571d283dbf85e654c38e157f18?apiKey=19e7bba656cf4334ab650b33c0aad2c0&&apiKey=19e7bba656cf4334ab650b33c0aad2c0"
          className="object-cover absolute inset-0 size-full"
          alt=""
        />
        Sort By
      </div>
    </div>
  );
};

export default SearchBar;
