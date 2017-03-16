import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarDetailComponent } from '../car/car-detail/car-detail.component';
import { CarListComponent } from '../car/car-list/car-list.component';
import { FormsModule } from '@angular/forms';
import { Car } from './car';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CarDetailComponent,
    CarListComponent
  ]
  ,
  declarations: [
    CarDetailComponent,
    CarListComponent
  ]
})
export class CarModule {
}
