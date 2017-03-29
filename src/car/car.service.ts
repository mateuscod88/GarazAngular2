import { Injectable } from '@angular/core';
import { CARS } from '../car/car.mock';
@Injectable()
export class CarService {

  constructor() { }
  getCars() {
    return Promise.resolve(CARS);
  }
}
