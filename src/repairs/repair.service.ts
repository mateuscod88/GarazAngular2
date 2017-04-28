import { Injectable } from '@angular/core';
import * as Enumerable from 'linq';
import { REPAIRS } from './repair.mock';
import { Part } from '../repairs/part';
@Injectable()
export class RepairService {

  constructor() { }
  getRepairsByCarId(id: number) {
    console.log('service');
    console.log(id);
    console.log('end service');
    return Promise.resolve(Enumerable.from(REPAIRS).where(x => x.carId === id).toArray());
  }
  getRepairById(id: number) {
    return Promise.resolve(Enumerable.from(REPAIRS).where(repair => id === repair.id).firstOrDefault());
  }
  create(carId: number, categoryId: number, name: string, parts: Part[], date: string, details: string) {
    let enumerableRepair = Enumerable.from(REPAIRS);
    let id = enumerableRepair.any() ? Enumerable.from(REPAIRS).max(item => item.id) + 1 : 0;
    REPAIRS.push({ id, carId, categoryId, name, parts, date, details });
    return Promise.resolve(Enumerable.from(REPAIRS).last());
  }

}
