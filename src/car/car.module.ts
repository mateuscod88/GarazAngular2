import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarDetailComponent } from '../car/car-detail/car-detail.component';
import { CarListComponent } from '../car/car-list/car-list.component';
import { AddCarComponent } from '../car/add-car/add-car.component';
import { FormsModule } from '@angular/forms';
import { Car } from './car';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CarDetailComponent,
    CarListComponent,
    AddCarComponent
  ]
  ,
  declarations: [
    CarDetailComponent,
    CarListComponent,
    AddCarComponent
  ]
})
export class CarModule {
}
