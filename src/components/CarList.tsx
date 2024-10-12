import { CarItem, ICar } from './CarItem'

interface ICarList {
  cars: ICar[]
  onSelectCar: (id: number) => void
  loading: boolean
}

export const CarList = ({ cars, onSelectCar, loading }: ICarList) => (
  loading ? (
    <p>loading....</p>
  ) : (
    <ul>
      {cars.map((car) => <CarItem car={car} onSelectCar={onSelectCar} />)}
    </ul>
  )
)
