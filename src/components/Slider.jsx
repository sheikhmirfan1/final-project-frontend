// import { Carousel } from "@material-tailwind/react";

// export function CarouselDefault() {
//   return (

//       <Carousel
//         className="rounded-xl"
//         transition={{ type: "tween", duration: 0.5 }}
//       >
//         <img
//           src="/src/assets/dinner.jpg"
//           alt="image 1"
//           className="h-2/5 w-3/6 object-cover"
//         />
//         <img
//           src="/src/assets/dinner1.jpg"
//           alt="image 2"
//           className=" h-2/4 w-3/5 object-cover"
//         />
//         <img
//           src="/src/assets/lunch2.jpg"
//           alt="image 3"
//           className="h-2/5 w-3/6 object-cover"
//         />
//       </Carousel>

//   );
// }

import { Carousel, Typography } from "@material-tailwind/react";

export function CarouselDefault() {
  return (
    <div className=" flex w-full h-96 justify-center  ">
      <Carousel autoplay={true} loop={true} className="rounded-xl h-auto w-full  ">
        <div className="relative h-full w-full">
          <img
            src="/src/assets/dinner.jpg"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                The Beauty of Nature
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                It is not so much for its beauty that the forest makes a claim
              </Typography>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="/src/assets/dinner1.jpg"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                The Beauty of Nature
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                It is not so much for its beauty that the forest makes a claim
              </Typography>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="/src/assets/lunch2.jpg"
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                The Beauty of Nature
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                It is not so much for its beauty that the forest makes a claim
              </Typography>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
