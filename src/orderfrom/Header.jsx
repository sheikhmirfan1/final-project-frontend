

const Header = () => {
  return (
    <header className="py-px pl-12 max-md:pl-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto text-white max-md:mt-10">
            <h1 className="text-3xl font-light leading-10 uppercase">
              You Can Order Now
            </h1>
            <h2 className="mt-5 text-xl font-semibold leading-8">
              Delight & Joy
            </h2>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7c44d77f8ee8a3cd58c153678f81adc756d52ca64bc8a22f70f31af31e6a66d?apiKey=19e7bba656cf4334ab650b33c0aad2c0&&apiKey=19e7bba656cf4334ab650b33c0aad2c0"
            className="grow w-full aspect-[1.2] max-md:mt-10"
            alt="Delight & Joy illustration"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
