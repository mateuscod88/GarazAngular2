import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Car } from '../car';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  repairsVisible: boolean = false;
  carAudi: Car = {
    id: 1,
    brand: 'Audi',
    model: 'A4',
    engine: '1.9TDI',
    regNumber: 'BIA666',
    serviceDate: '16-03-2017',
    year: '2004',
    owner: 'Wojciech M',
    fuel: 'diesel',
    phone: '513555233'
  };
  @Input() car: Car;

  constructor() { }

  ngOnInit() {
    console.log(this.car.id.toString());
  }
  showRepairs() {
    if (this.repairsVisible === false) {
      this.repairsVisible = true;
    }
    else {
      this.repairsVisible = false;
    }
    console.log(this.repairsVisible);
    console.log(this.car.id);
  }



}
