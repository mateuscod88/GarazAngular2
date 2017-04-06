import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CARS } from '../car.mock';
import { Car } from '../car';
import { CarService } from '../car.service';
@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  selectedCar: Car;
  addCar = 0;
  cars: Car[];
  constructor(private carService: CarService, private _route: Router) { }

  ngOnInit() {
    console.log('laduj fury');
    this.carService.getCars().then(cars => this.cars = cars);
    console.log('zaladowal fury');
  }
  selectCar(car: Car) {
    console.log('selectedCarr');
    this.selectedCar = car;
    console.log(this.selectedCar.id.toString());

  }
  selectAddCar() {

    this._route.navigate(['/addCar']);

  }
  addCarHandle(car: Car) {
    console.log('addCarhandler');
    console.log(car);
    this.cars.push(car);
  }
}
