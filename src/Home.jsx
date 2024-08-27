
// import BackGroundImage from "./assets/image_6.jpg";

import {Footer} from "./components/Footer.jsx";
import {CarouselDefault} from "./components/Slider.jsx";
import Team from "./components/Team.jsx";


const Home = () => (
  <>
    <div className="flex flex-col justify-center  w-full">
      <div className="w-full relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          src="./assets/home.mov"
          className="object-cover brightness-50 opacity-80 w-full h-[548px] top-0 left-0 z-0"
          alt="Background image of a home"
        />
        <div className="absolute top-0 left-0 place-items-center mt-36 flex flex-col ml-16 z-10">
          <h2 className=" tracking-wide  text-white font-serif text-5xl font-black max-md:max-w-full max-md:text-4xl">
            Royal Restaurant
          </h2>
          <p className="font-extrabold text-brown-100 tracking-wide font-serif">
            Discover the best Restaurant to eat in your city
          </p>
        </div>
      </div>
    </div>
    <Team />
    <CarouselDefault />
    <Footer />
  </>
);



export default Home
