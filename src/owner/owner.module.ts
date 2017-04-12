import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerService } from './owner.service';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerAddComponent } from '../owner/owner-add/owner-add.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [OwnerListComponent,
    OwnerAddComponent
  ],
  providers: [OwnerService]
})
export class OwnerModule { }
