import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Repair } from '../repair';
import { Category } from '../category';
import { RepairService } from '../repair.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DateModel, DatePickerOptions } from 'ng2-datepicker';
import { RepairViewModel } from '../RepairViewModel/repair-view-model';
import { AddRepairViewModel } from '../RepairViewModel/add-repair-view-model';

@Component({
  selector: 'app-repair-add',
  templateUrl: './repair-add.component.html',
  styleUrls: ['./repair-add.component.css']
})
export class RepairAddComponent implements OnInit {
  repairCategoryId: number = undefined;
  details: string;
  repairViewModel: AddRepairViewModel =
  {
    id: 0,
    carId: 0,
    categorys: undefined,
    categoryId: undefined,
    date: undefined,
    details: 'Wpisz opis Naprawy.',
    name: '',
    parts: undefined
  };
  repair: Repair = {
    id: 0,
    categoryId: 0,
    carId: 0,
    name: '',
    date: '',
    details: 'Wpisz opis Naprawy.'
  };
  date: DateModel;
  options: DatePickerOptions;


  constructor(private _repairService: RepairService, private _route: ActivatedRoute, private _router: Router) {
    this.repairViewModel.carId = +_route.snapshot.params['id'];
    this.options = new DatePickerOptions();
  }

  ngOnInit() {
    this._repairService.getCategorys().then(categorys => this.repairViewModel.categorys = categorys);
  }
  add() {
    debugger;
    console.log('Add Naprawe');
    console.log(this.repair.carId);
    this._repairService.create(this.repairViewModel.carId, Number(this.repairViewModel.categoryId), this.repairViewModel.name, this.repairViewModel.date.formatted, this.repairViewModel.details);
    this._router.navigate(['/carDetail', this.repairViewModel.carId]);

  }

}
