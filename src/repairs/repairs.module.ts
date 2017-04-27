import { NgModule, OnChanges } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RepairDetailsComponent } from './repair-details/repair-details.component';
import { RepairListComponent } from './repair-list/repair-list.component';
import { RepairAddComponent } from './repair-add/repair-add.component';
import { RepairService } from './repair.service';
import { DatePickerModule } from 'ng2-datepicker';


@NgModule({
  imports: [

    CommonModule,
    FormsModule,
    DatePickerModule
  ],
  declarations: [
    RepairDetailsComponent,
    RepairListComponent,
    RepairAddComponent
  ],
  providers: [
    RepairService
  ],
  exports: [
    RepairAddComponent,
    RepairListComponent,
    RepairDetailsComponent
  ]
})
export class RepairsModule { }
