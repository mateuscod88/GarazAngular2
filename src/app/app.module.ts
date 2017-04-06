import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CarModule } from '../car/car.module';
import { RepairsModule } from '../repairs/repairs.module';
import { AppComponent } from './app.component';
import { RepairListComponent } from '../repairs/repair-list/repair-list.component';
import { RepairDetailsComponent } from '../repairs/repair-details/repair-details.component';
import { RepairAddComponent } from '../repairs/repair-add/repair-add.component';
import { RouterModule } from '@angular/router';
import { CarListComponent } from '../car/car-list/car-list.component';
import { CarDetailComponent } from '../car/car-detail/car-detail.component';
import { AddCarComponent } from '../car/add-car/add-car.component';
import { Router } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarModule,
    RepairsModule,
    RouterModule.forRoot([
      { path: 'carList', component: CarListComponent },
      { path: 'carDetail/:id', component: CarDetailComponent },
      { path: 'addCar', component: AddCarComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
