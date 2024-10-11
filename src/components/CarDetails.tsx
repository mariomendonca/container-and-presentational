import { ICar } from './CarItem'

export const CarDetails = ({ car }: {car: ICar}) => (
  <div>
    <h2>{car.name}</h2>
    <p>{car.description}</p>
    <p>Price: {car.price}</p>
  </div>
);
