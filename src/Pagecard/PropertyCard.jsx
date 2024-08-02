

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function PropertyCard({ name, description, price, image }) {
  return (
    <Card className="w-52">
      <CardHeader shadow={false} floated={false} className="h-52">
        <img
          src={image}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {name}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            €{price}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}

// const PropertyCard = ({name, description, price, image}) => {
  
  
//   return (
//   <div className="flex flex-col w-[25%] max-md:ml-0 max-md:w-full">
//     <div className="flex flex-col grow self-stretch pb-3 leading-[150%] max-md:mt-3">
//       <img
//         loading="lazy"
//         src={image}
//         className="w-full aspect-[1.79]"
//         alt={name}
//       />
//       <div className="flex flex-col mt-3">
//         <h4 className="justify-center text-base font-medium text-stone-100">
//           {name}
//         </h4>
//         <p className="justify-center text-sm text-stone-100">
//           {description}</p>
//         <p className="justify-center text-sm text-stone-100">€{price}</p>
//       </div>
//     </div>
//   </div>
// )
// };

// export default PropertyCard;
