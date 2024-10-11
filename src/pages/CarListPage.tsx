import { CarList } from '../components/CarList';
import { useCarList } from '../hooks/useCarList'

export const CarListPage = () => {
  const { cars, handleNavigateToDetails, loading } = useCarList()

  return <CarList cars={cars} onSelectCar={handleNavigateToDetails} loading={loading} />;
};
