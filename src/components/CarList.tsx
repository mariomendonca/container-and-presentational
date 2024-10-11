import { ICar } from './CarItem'

interface ICarList {
  cars: ICar[]
  onSelectCar: (id:  number) => void
}

export const CarList = ({ cars, onSelectCar }: ICarList) => (
  <ul>
    {cars.map((car) => (
      <li key={car.id}>
        <h3>{car.name}</h3>
        <button onClick={() => onSelectCar(car.id)}>See Details</button>
      </li>
    ))}
  </ul>
);
