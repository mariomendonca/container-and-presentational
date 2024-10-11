import { useEffect, useState } from 'react'
import { ICar } from '../components/CarItem'
import { carsData } from '../database'
import { useNavigate } from 'react-router-dom'

export const useCarList = () => {
  const [cars, setCars] = useState<ICar[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const navigate = useNavigate();

  const handleNavigateToDetails = (carId: number) => {
    navigate(`/car/${carId}`);
  };


  useEffect(() => {
    setTimeout(() => {
      setCars(carsData)
      setLoading(false)
    }, 3000)
  }, [])

  return { cars, loading, handleNavigateToDetails }
}