import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarDetailComponent } from '../car/car-detail/car-detail.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CarDetailComponent
  ]
  ,
  declarations: [
    CarDetailComponent
  ]
})
export class CarModule { }
