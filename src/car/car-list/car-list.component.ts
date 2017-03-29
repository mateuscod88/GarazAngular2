import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  constructor(private carService: CarService) { }
  @Output() selectCarEmiter = new EventEmitter<number>();
  ngOnInit() {
    console.log('laduj fury');
    this.carService.getCars().then(cars => this.cars = cars);
    console.log('zaladowal fury');
  }
  selectCar(car: Car) {
    console.log('selectedCarr');
    this.selectedCar = car;
    console.log(this.selectedCar.id.toString());
    this.selectCarEmiter.emit(this.selectedCar.id);
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
