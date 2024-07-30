
import MenuItem from './MenuItem.jsx';

const MenuSection = ({ title, items }) => {
  return (
    <div className="mt-5 max-md:max-w-full">
      <div className="flex gap-5 justify-center items-start pt-3 pb-5 mt-3 text-base font-bold text-white whitespace-nowrap border-b border-slate-300 border-opacity-80 max-md:flex-wrap max-md:max-w-full">
        <div className="mt-1.5">{title}</div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ed2a818a11bf9a29b2a478c64de981dc0bab9747fae966dc0961177f28da3b7?apiKey=19e7bba656cf4334ab650b33c0aad2c0&&apiKey=19e7bba656cf4334ab650b33c0aad2c0" className="shrink-0 border border-solid aspect-square border-slate-300 border-opacity-80 w-[22px]" alt="" />
      </div>
      <div className="px-px mt-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {items.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSection