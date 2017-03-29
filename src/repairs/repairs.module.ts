import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepairDetailsComponent } from './repair-details/repair-details.component';
import { RepairListComponent } from './repair-list/repair-list.component';
import { RepairAddComponent } from './repair-add/repair-add.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RepairDetailsComponent,
    RepairListComponent,
    RepairAddComponent
  ],
  exports: [
    RepairAddComponent,
    RepairListComponent,
    RepairDetailsComponent
  ]
})
export class RepairsModule { }
