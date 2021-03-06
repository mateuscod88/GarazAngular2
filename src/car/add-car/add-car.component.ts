import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../car';
import { CarService } from '../car.service';
import { OwnerService } from '../../owner/owner.service';
import { Owner } from '../../owner/owner';
import { Brand } from '../../mocki/brand';
import { Model } from '../../mocki/model';
import { Year } from '../../mocki/year';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  car: Car = { id: 0, brand: undefined, engine: '', fuel: '', model: undefined, owner: undefined, phone: '', regNumber: '', serviceDate: '', year: undefined, VIN: '' };
  selectedBrand: number = undefined;
  selectedYear: string = undefined;
  owners: Owner[];
  brands: Brand[];
  models: Model[];
  years: Year[];
  date: DateModel;
  options: DatePickerOptions;
  @Output() addNewCarEvent = new EventEmitter<Car>();
  constructor(private _route: Router, private _carService: CarService, private _ownerService: OwnerService) {
    this.options = new DatePickerOptions();
  }

  ngOnInit() {
    this._ownerService.getOwners().then(owners => this.owners = owners);
    this._carService.getBrands().then(brands => this.brands = brands);
    this._carService.getYears().then(years => this.years = years);

  }
  add() {
    console.log('addCar');
    console.log(this.car.brand);

    this._carService.create(this.car.brand, this.car.model, this.car.engine, this.car.year,
      this.date.formatted, this.car.regNumber, this.car.owner, this.car.fuel, this.car.phone, this.car.VIN);
    this._route.navigate(['/carList']);
  }
  onChange($event) {
    console.log($event.target.value);
    let seledBrand = $event.target.value;
    console.log(seledBrand);
    this._carService.getModelByBrand(+seledBrand).then(models => this.models = models);
  }
}
