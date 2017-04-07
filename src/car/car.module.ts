import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarDetailComponent } from '../car/car-detail/car-detail.component';
import { CarListComponent } from '../car/car-list/car-list.component';
import { AddCarComponent } from '../car/add-car/add-car.component';
import { FormsModule } from '@angular/forms';
import { Car } from './car';
import { CarService } from './car.service';
import { RepairsModule } from '../repairs/repairs.module';
import { DatePickerModule } from 'ng2-datepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RepairsModule,
    DatePickerModule

  ],
  exports: [
    CarDetailComponent,
    CarListComponent,
    AddCarComponent
  ],
  providers:
  [
    CarService
  ]
  ,
  declarations: [
    CarListComponent,
    CarDetailComponent,

    AddCarComponent
  ]
})
export class CarModule {
}
