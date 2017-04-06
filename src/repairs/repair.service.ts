import { Injectable } from '@angular/core';
import * as Enumerable from 'linq';
import { REPAIRS } from './repair.mock';
@Injectable()
export class RepairService {

  constructor() { }
  getRepairsByCarId(id: number) {
    console.log('service');
    console.log(id);
    console.log('end service');
    return Promise.resolve(Enumerable.from(REPAIRS).where(x => x.carId === id).toArray());
  }
}
