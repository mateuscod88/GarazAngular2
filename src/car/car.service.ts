import { Injectable } from '@angular/core';
import { CARS } from '../car/car.mock';
import { OWNERS } from '../mocki/owner.mock';
import { BRANDS } from '../mocki/brand.mock';
import { MODELS } from '../mocki/model.mock';
import { YEARS } from '../mocki/year.mock';
import * as Enumerable from 'linq';
@Injectable()
export class CarService {

  constructor() { }
  getCars() {
    return Promise.resolve(CARS);
  }
  getOwners() {
    return Promise.resolve(OWNERS);
  }
  getBrands() {
    return Promise.resolve(BRANDS);
  }
  getModels() {
    return Promise.resolve(MODELS);
  }
  getModelByBrand(id: number) {
    console.log(id);
    return Promise.resolve(Enumerable.from(MODELS).where(x => x.brandId === id).toArray());
  }
  getYears() {
    return Promise.resolve(YEARS);

  }
  create(brand: string, model: string, engine: string, year: string, serviceDate: string,
    regNumber: string, owner: string, fuel: string, phone: string, VIN: string) {
    let enumerableCars = Enumerable.from(CARS);
    let id = enumerableCars.any() ? Enumerable.from(CARS).max(item => item.id) + 1 : 0;
    CARS.push({ id, brand, model, engine, fuel, owner, phone, regNumber, serviceDate, year, VIN });
    return Promise.resolve(Enumerable.from(CARS).last());
  }
}
