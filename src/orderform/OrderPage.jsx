import { Footer } from "../components/Footer.jsx";
import Header from "./Header.jsx";
import SearchBar from "./SearchBar.jsx";
import MenuSection from "./MenuSection.jsx";
import OrderForm from "./OrderForm.jsx";


const menuSections = [
  {
    title: "Appetizers",
    items: [
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/302c67e564a9cb0f3bc4902245c8acfc842dff44290a37c740c294456cc7443e?apiKey=19e7bba656cf4334ab650b33c0aad2c0&&apiKey=19e7bba656cf4334ab650b33c0aad2c0",
        title: "Butter Chicken",
        description:
          "Deep fried vidalia onion rings served with a tangy dipping sauce",
        price: "6.00",
      },
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/ef258d7e2fe726262f1eff50b6d6c3861193752a174918792fbf1f41329e9841?apiKey=19e7bba656cf4334ab650b33c0aad2c0&&apiKey=19e7bba656cf4334ab650b33c0aad2c0",
        title: "Thai Spring Rolle",
        description:
          "Crispy Thai spring rolls filled with vegetables and served with sweet and sour dipping sauce",
        price: "8.00",
      },
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/3748b481faf74f4084c5d488ad023b47c3fe1b149ce060625da880d5078d0a98?apiKey=19e7bba656cf4334ab650b33c0aad2c0&&apiKey=19e7bba656cf4334ab650b33c0aad2c0",
        title: "Ancho Chili Cheese Quesadilla",
        description: "Served with sour cream, guacamole, and salsa",
        price: "6.00",
      },
    ],
  },
  {
    title: "Soups",
    items: [
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/882a0c3f82283ba678d19b33cc0749c534090087f172bdf0d5500a6e734b5e83?apiKey=19e7bba656cf4334ab650b33c0aad2c0&&apiKey=19e7bba656cf4334ab650b33c0aad2c0",
        title: "Cream of Wild Mushroom",
        description: "A bowl of our house special creamy mushroom soup",
        price: "4.00",
      },
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/d672c59c00824c379fa502b58882a658fd09aad7beaed457ad9fdd06d1fbde0b?apiKey=19e7bba656cf4334ab650b33c0aad2c0&&apiKey=19e7bba656cf4334ab650b33c0aad2c0",
        title: "Tasty Chicken Noodle soup",
        description:
          "A bowl of our classic chicken noodle made from grandma's recipe",
        price: "4.00",
      },
    ],
  },
  // Add other menu sections here...
];

const OrderPage = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col justify-center self-center max-w-full rounded-md shadow-lg w-[752px]">
        <div className="flex flex-col pb-2.5 max-md:max-w-full">
          <Header />
          <div className="flex flex-col px-12 mt-11 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col rounded max-md:max-w-full">
              <div className="text-base font-medium text-white max-md:max-w-full">
                Menu
              </div>
              <SearchBar />
              {menuSections.map((section, index) => (
                <MenuSection
                  key={index}
                  title={section.title}
                  items={section.items}
                />
              ))}
            </div>
            {/* Add other form elements here */}
            <OrderForm />
          </div>
        </div>
      </div>
     
      <Footer />
    </div>
  );
};

export default OrderPage;