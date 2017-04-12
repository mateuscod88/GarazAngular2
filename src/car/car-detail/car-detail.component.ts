import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Car } from '../car';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  repairsVisible: boolean = false;
  carAudi: Car = {
    id: 1,
    brand: 1,
    model: 'A4',
    engine: '1.9TDI',
    regNumber: 'BIA666',
    serviceDate: '16-03-2017',
    year: '2004',
    owner: 1,
    fuel: 'diesel',
    phone: '513555233',
    VIN: ''
  };
  @Input() car: Car;
  @Input() id: number;
  constructor(private _route: ActivatedRoute) {
    console.log('Activated Route');

    console.log(this._route.snapshot.params['id']);
    this.id = +this._route.snapshot.params['id'];
  }

  ngOnInit() {
    this.car = this.carAudi;
    // console.log(this.car.id.toString());
    // console.log(this.id.toString());
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
