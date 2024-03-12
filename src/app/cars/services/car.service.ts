import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { CARS } from '../../data/cars';
import { firstValueFrom } from 'rxjs';
import { environment } from './environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private readonly http: HttpClient) {}

  get cars(): Promise<Car[]> {
    return firstValueFrom(this.http.get<Car[]>(`${environment.apiUrl}/cars`));
  }
  async add(c: Car): Promise<Car> {
    const car = await firstValueFrom(
      this.http.post<Car>(`${environment.apiUrl}/cars`, {
        make: c.make,
        model: c.model,
        description: c.description,
      })
    );

    return car;
  }
}

/*

//public cars: Car[] = CARS;
  public getCarById(id: number | null): Car | null {

    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      return null;
    }
    return car;
  }
  public AddCar(c: Car) {
    c.id = this.cars.length + 1;
    this.cars.push(c);
    console.log(c);
    console.log(this.cars);
  }
  */
