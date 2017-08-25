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
  getCarById(id: number) {
    console.log('getCarByIdd');

    console.log(id);

    return Promise.resolve(Enumerable.from(CARS).where(x => x.id === id).firstOrDefault());

  }

  getOwners() {
    return Promise.resolve(OWNERS);
  }
  getOwnerById(id: number){
    return Promise.resolve(Enumerable.from(OWNERS).where(x => x.id === id).firstOrDefault());
  }
  getBrands() {
    return Promise.resolve(BRANDS);
  }
  getBrandById(id: number) {
    return Promise.resolve(Enumerable.from(BRANDS).where(x => x.id === id).firstOrDefault());
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
  create(brand: number, model: string, engine: string, year: string, serviceDate: string,
    regNumber: string, owner: number, fuel: string, phone: string, VIN: string) {
    let enumerableCars = Enumerable.from(CARS);
    let id = enumerableCars.any() ? Enumerable.from(CARS).max(item => item.id) + 1 : 0;
    CARS.push({ id, brand, model, engine, fuel, owner, phone, regNumber, serviceDate, year, VIN });
    return Promise.resolve(Enumerable.from(CARS).last());
  }
}
