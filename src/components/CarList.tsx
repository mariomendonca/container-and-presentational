import { ICar } from './CarItem'

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
      {cars.map((car) => (
        <li key={car.id}>
          <h3>{car.name}</h3>
          <button onClick={() => onSelectCar(car.id)}>See Details</button>
        </li>
      ))}
    </ul>
  )
)
