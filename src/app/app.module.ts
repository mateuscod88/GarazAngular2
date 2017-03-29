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



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarModule,
    RepairsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
