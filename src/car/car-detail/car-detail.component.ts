import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carAudi: Car = {
    id: 1,
    brand: 'Audi',
    model: 'A4',
    engine: '1.9TDI',
    regNumber: 'BIA666',
    serviceDate: '16-03-2017',
    year: '2004',
    owner: 'Wojciech M'
  };
  constructor() { }

  ngOnInit() {
  }

}
