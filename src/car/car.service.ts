import { Injectable } from '@angular/core';
import { CARS } from '../car/car.mock';
import * as Enumerable from 'linq';
@Injectable()
export class CarService {

  constructor() { }
  getCars() {
    return Promise.resolve(CARS);
  }
}
