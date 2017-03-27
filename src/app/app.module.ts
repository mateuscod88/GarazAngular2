import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CarModule } from '../car/car.module';
import {RepairsModule} from '../repairs/repairs.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
   
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
