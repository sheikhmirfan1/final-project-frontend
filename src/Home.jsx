
// import BackGroundImage from "./assets/image_6.jpg";

import {Footer} from "./components/Footer.jsx";
import {CarouselDefault} from "./components/Slider.jsx";
import Team from "./components/Team.jsx";


const Home = () => (
  <>
    <div className="flex flex-col justify-center p-4  w-full">
      <div className="w-full">
        <video
          id="
        "
          autoPlay
          loop
          muted
          playsInline
          src="/src/assets/home.mov"
          className="  object-cover opacity-80 w-full h-[648px] top-0 left-0 z-0"
          alt="Background image of a home"
        />
        {/* <div className="flex relative flex-col mt-48 max-w-full text-black w-[713px] max-md:mt-10">
          <h2 className="justify-center text-5xl font-black tracking-tighter max-md:max-w-full max-md:text-4xl">
            XYZ Restaurant
          </h2>
          <p className="justify-center mt-2 text-base leading-6 max-md:max-w-full">
            Discover the best Restaurant to eat in your city
          </p>
        </div> */}
      </div>
    </div>

    <Team />
    <CarouselDefault />

    <Footer />
  </>
);



export default Home
