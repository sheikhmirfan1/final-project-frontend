

const MenuItem = ({ image, title, description, price }) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow pt-px pb-3 text-sm text-white rounded border border-solid border-slate-300 border-opacity-80 max-md:mt-3">
        <img
          loading="lazy"
          src={image}
          className="self-center w-52 aspect-[1.41]"
          alt={title}
        />
        <div className="flex flex-col px-3.5 mt-3.5">
          <div className="text-base font-semibold">{title}</div>
          <div className="mt-3">{description}</div>
          <div className="flex gap-0.5 mt-4 font-bold text-white whitespace-nowrap">
            <div>€</div>
            <div className="flex-auto">{price}</div>
          </div>
          <div className="mt-7 text-xs leading-4 text-white">Quantity</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b7bf22f91db2635a53941aea26c8acc2e8a25c89eeb3226a83d3de74aef1f2d?apiKey=19e7bba656cf4334ab650b33c0aad2c0&&apiKey=19e7bba656cf4334ab650b33c0aad2c0"
            className="mt-2 aspect-[1.59] w-[54px]"
            alt="Quantity selector"
          />
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
