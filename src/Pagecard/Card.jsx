
import PropertyCard from "./PropertyCard.jsx";


const Card = () => {
  const properties = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6757431bad4c2bbb79d5e0eb971cd15d1c98d192ae5230d75ce422b8d9969f30?apiKey=19e7bba656cf4334ab650b33c0aad2c0&",
      title: "Luxury 2 bed flat, The Park",
      price: "$1,800 per month",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7e88f7f569aa5b0a4396e7b27136de207879e6f460e411410155cbfe58c8e38a?apiKey=19e7bba656cf4334ab650b33c0aad2c0&",
      title: "3 bed semi-detached house, Lenton",
      price: "$1,500 per month",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3924d98905e73e88944a959a68edc65994fe222163521bfde585274c31601c87?apiKey=19e7bba656cf4334ab650b33c0aad2c0&",
      title: "4 bed detached house, Beeston",
      price: "$1,600 per month",
    },
  ];

  return (
    <section className="flex flex-col justify-center p-4 max-md:max-w-full">
      <h3 className="px-4 pt-4 pb-2 text-lg font-bold leading-6 text-stone-100 max-md:max-w-full">
        Featured for you
      </h3>
      <div className="px-px max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
