import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../car';
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  car: Car = { id: 0, brand: '', engine: '', fuel: '', model: '', owner: '', phone: '', regNumber: '', serviceDate: '', year: '' };
  constructor() { }

  ngOnInit() {
  }

}
