import { useState } from 'react';
import { CarList } from '../components/CarList';
import { useNavigate } from 'react-router-dom'
import { carsData } from '../database'

export const CarListPage = () => {
  const navigate = useNavigate();
  const [cars] = useState(carsData);

  const handleSelectCar = (carId: number) => {
    handleNavigateToDetails(carId);
  };


  const handleNavigateToDetails = (carId: number) => {
    navigate(`/car/${carId}`);
  };

  return <CarList cars={cars} onSelectCar={handleSelectCar} />;
};
