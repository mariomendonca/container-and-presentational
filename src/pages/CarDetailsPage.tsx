import { useState, useEffect } from 'react';
import { CarDetails } from '../components/CarDetails';
import { useParams } from 'react-router-dom'
import { ICar } from '../components/CarItem'
import { carsData } from '../database'

export const CarDetailsPage = () => {
  const { carId } = useParams();
  const [car, setCar] = useState<ICar | undefined>();

  useEffect(() => {
    const selectedCar = carsData.find((c) => c.id === parseInt(carId!));
    setCar(selectedCar);
  }, [carId]);

  return car ? <CarDetails car={car} /> : <p>Car not found</p>;
};
