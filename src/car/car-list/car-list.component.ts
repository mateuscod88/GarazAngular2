import { Component, OnInit } from '@angular/core';
import { CARS } from '../car.mock';
import { Car } from '../car';
@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  selectedCar: Car;
  addCar = 0;
  cars: Car[] = CARS;
  constructor() { }

  ngOnInit() {
  }
  selectCar(car: Car) {
    console.log('selectedCarr');
    this.selectedCar = car;

  }
  selectAddCar() {
    console.log('selectedCarr');
    if (this.addCar === 0) {
      this.addCar = 1;
    }
    else {
      this.addCar = 0;
    }
  }
  addCarHandle(car: Car) {
    console.log('addCarhandler');
    console.log(car);
    this.cars.push(car);
  }
}
