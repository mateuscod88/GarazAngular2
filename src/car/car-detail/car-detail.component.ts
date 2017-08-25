import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Car } from '../car';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../car.service';
import {CarViewModel} from '../CarViewModel';
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
  carViewModel: CarViewModel = {
    id: 0,
    brand: '',
    brandId:0,
    model: '',
    engine: '',
    year: '',
    serviceDate: '',
    regNumber: '',
    owner: '',
    ownerId:0,
    fuel: '',
    phone: '',
    VIN: ''
  }
  @Input() id: number;
  constructor(private _route: ActivatedRoute, private _carService: CarService, private _router: Router) {
    console.log('Activated Route');

    console.log(this._route.snapshot.params['id']);
    this.id = +this._route.snapshot.params['id'];

  }

  ngOnInit() {
    //this._carService.getCarById(this.id).then(car => this.car = car);
    this.getAllCarDetails();
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
  getAllCarDetails(){
    this._carService.getCarById(this.id).then(car =>  {
    this.carViewModel.id = car.id;
    this._carService.getBrandById(car.brand).then(brand=> {
        this.carViewModel.brand = brand.name;
        this.carViewModel.brandId = brand.id;
    });
    this._carService.getOwnerById(car.owner).then(owner => {
      this.carViewModel.owner = owner.firstName +' '+owner.lastName;
      this.carViewModel.ownerId = owner.id;
    });
    this.carViewModel.engine = car.engine;
    this.carViewModel.fuel = car.fuel;
    this.carViewModel.model = car.model;
    this.carViewModel.phone = car.phone;
    this.carViewModel.regNumber = car.regNumber;
    this.carViewModel.serviceDate = car.serviceDate;
    this.carViewModel.VIN = car.VIN;

    });
  }


}
