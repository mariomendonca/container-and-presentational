import { CarDetails } from '../components/CarDetails';
import { useCarDetails } from '../hooks/useCarDetails'

export const CarDetailsPage = () => {
  const { car } = useCarDetails()
  return car ? <CarDetails car={car} /> : <p>Car not found</p>;
};
