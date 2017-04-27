import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Car } from '../car';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  repairsVisible: boolean = false;

  car: Car = {
    id: 0,
    brand: 0,
    model: '',
    engine: '',
    year: '',
    serviceDate: '',
    regNumber: '',
    owner: 0,
    fuel: '',
    phone: '',
    VIN: ''
  };
  @Input() id: number;
  constructor(private _route: ActivatedRoute, private _carService: CarService, private _router: Router) {
    console.log('Activated Route');

    console.log(this._route.snapshot.params['id']);
    this.id = +this._route.snapshot.params['id'];

  }

  ngOnInit() {
    this._carService.getCarById(this.id).then(car => this.car = car);
    console.log('ngOnInit_');
    console.log(this.car);
    // coconsole.log(this._route.snapshot.params['id']);nsole.log(this.car.id.toString());
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
  addRepair() {
    console.log('Dodaj Naprawe');
    this._router.navigate(['/addRepair', this.id]);
  }



}
