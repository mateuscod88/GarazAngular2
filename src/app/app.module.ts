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
import { OwnerListComponent } from '../owner/owner-list/owner-list.component';
import { OwnerModule } from '../owner/owner.module';
import { OwnerAddComponent } from '../owner/owner-add/owner-add.component';


@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarModule,
    OwnerModule,
    RepairsModule,
    RouterModule.forRoot([
      { path: 'carList', component: CarListComponent },
      { path: 'carDetail/:id', component: CarDetailComponent },
      { path: 'addCar', component: AddCarComponent },
      { path: 'ownerList', component: OwnerListComponent },
      { path: 'addOwner', component: OwnerAddComponent },
      { path: 'addRepair/:id', component: RepairAddComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
