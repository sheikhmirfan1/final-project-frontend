

import PropTypes from 'prop-types';

const PropertyCard = ({name, description, price, image}) => {
  
  
  return (
  <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow self-stretch pb-3 leading-[150%] max-md:mt-3">
      <img
        loading="lazy"
        src={image}
        className="w-full aspect-[1.79]"
        alt={name}
      />
      <div className="flex flex-col mt-3">
        <h4 className="justify-center text-base font-medium text-stone-100">
          {name}
        </h4>
        <p className="justify-center text-sm text-stone-100">
          {description}</p>
        <p className="justify-center text-sm text-stone-100">€{price}</p>
      </div>
    </div>
  </div>
)
};

export default PropertyCard;
