import SearchBar from "./components/SearchBar.jsx";
import BackGroundImage from "./assets/image_6.jpg";
import Card from "./Pagecard/Card.jsx";
import {Footer} from "./components/Footer.jsx";
import {CarouselDefault} from "./components/Slider.jsx";
import {SimpleRegistrationForm} from "./components/booking.jsx";

const Home = () => (
  <>
    <section className="flex w-full">
      <div className="flex flex-col w-full">
        <div className="flex flex-col justify-center max-md:max-w-full">
          <div className="flex flex-col justify-center p-4 max-md:max-w-full">
            <div className="w-full flex overflow-hidden relative flex-col justify-end items-start px-14 pt-20 pb-6 rounded-xl min-h-[480px] max-md:px-5 max-md:max-w-full">
              <img
                loading="Hero"
                src={BackGroundImage}
                className=" opacity-70 object-cover  w-full h-full absolute top-0 left-0 z-0"
                alt="Background image of a home"
              />
              <div className="flex relative flex-col mt-48 max-w-full text-white w-[713px] max-md:mt-10">
                <h2 className="justify-center text-5xl font-black tracking-tighter max-md:max-w-full max-md:text-4xl">
                  XYZ Restaurant
                </h2>
                <p className="justify-center mt-2 text-base leading-6 max-md:max-w-full">
                  Discover the best Restaurant to eat in your city
                </p>
              </div>
              <SearchBar />
            </div>
          </div>
          {/* <ToggleButtons /> */}
        </div>
      </div>
    </section>
    <Card />
    <CarouselDefault />
    <SimpleRegistrationForm />
    <Footer />
  </>
);



export default Home
