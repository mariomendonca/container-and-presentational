import { CarList } from '../components/CarList';
import { useNavigate } from 'react-router-dom'
import { carsData } from '../database'

export const CarListPage = () => {
  const navigate = useNavigate();

  const handleNavigateToDetails = (carId: number) => {
    navigate(`/car/${carId}`);
  };

  return <CarList cars={carsData} onSelectCar={handleNavigateToDetails} />;
};
