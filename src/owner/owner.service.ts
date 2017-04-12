import { Injectable } from '@angular/core';
import * as Enumerable from 'linq';
import { OWNERS } from './owner.mock';
@Injectable()
export class OwnerService {

  constructor() { }

  getOwners() {
    return Promise.resolve(OWNERS);
  }
  create(name: string, lastName: string, phone: string, idDocument: string) {
    let enumerableOwners = Enumerable.from(OWNERS);
    let id = enumerableOwners.any() ? Enumerable.from(OWNERS).max(item => item.id) + 1 : 0;
    console.log(id);
    console.log(OWNERS);
    OWNERS.push({ id, name, lastName, phone, idDocument });
    console.log(OWNERS);
    return Promise.resolve(Enumerable.from(OWNERS).last());
  }
}
