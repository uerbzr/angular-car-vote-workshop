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
