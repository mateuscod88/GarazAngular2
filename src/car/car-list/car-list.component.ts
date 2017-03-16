import { Component, OnInit } from '@angular/core';
import { CARS } from '../car.mock';
import { Car } from '../car';
@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  selectedCar: number;
  cars: Car[] = CARS;
  constructor() { }

  ngOnInit() {
  }
  selectCar(car: Car) {
    this.selectedCar = car.id;
  }
}
