export interface ICar {
  id: number
  name: string
  description: string
  price: string
  agencyName: string
}

interface ICarItem {
  car: ICar
  onSelectCar: (id: number) => void
}

export const CarItem = ({ car, onSelectCar }: ICarItem) => (
  <div>
    <h3>{car.name}</h3>
    <p>{car.description}</p>
    <p>{car.price}</p>
    <p>{car.agencyName}</p>
    <button onClick={() => onSelectCar(car.id)}>See Details</button>
  </div>
);
