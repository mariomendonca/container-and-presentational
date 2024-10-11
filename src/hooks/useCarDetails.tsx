import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ICar } from '../components/CarItem'
import { carsData } from '../database'

export const useCarDetails = () => {
  const { carId } = useParams();
  const [car, setCar] = useState<ICar | undefined>();

  useEffect(() => {
    const selectedCar = carsData.find((c) => c.id === parseInt(carId!));
    setCar(selectedCar);
  }, [carId]);

  return { car };
}
