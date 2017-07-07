import { Component, OnInit, Input } from '@angular/core';
import { RepairService } from '../repair.service';
import { Repair } from '../repair';
import { ActivatedRoute, Router } from '@angular/router';
import { DateModel, DatePickerOptions } from 'ng2-datepicker';
import { RepairViewModel } from '../RepairViewModel/repair-view-model';
import * as moment from 'moment';
@Component({
  selector: 'app-repair-details',
  templateUrl: './repair-details.component.html',
  styleUrls: ['./repair-details.component.css']
})
export class RepairDetailsComponent implements OnInit {
  @Input() id: number;
  repairViewModel: RepairViewModel =
  {
    id: 0,
    carId: 0,
    categoryName: '',
    date: undefined,
    details: '',
    name: '',
    parts: undefined
  };
  repair: Repair;
  date: DateModel;
  options: DatePickerOptions;

  constructor(private _repairService: RepairService, private _route: ActivatedRoute, private _router: Router) {
    this.id = +_route.snapshot.params['id'];
    this.options = new DatePickerOptions({
      format: 'DD-MM-YYYY'
    }
    );
  }

  ngOnInit() {
    debugger;
    console.log('REPAIR DETAIL');
    console.log(this.id);
    this.GetAllRepairDetails();
    console.log(this.repair);
    console.log('REPAIR END');

  }
  back() {
    this._router.navigate(['/carDetail', this.repair.carId]);
  }
  GetAllRepairDetails() {
    this._repairService.getRepairById(this.id).then(repair => {
      debugger;
      this.repair = repair;

      this.repairViewModel.carId = repair.carId;
      this._repairService.getRepairCategoryById(Number(repair.categoryId)).then(category => {
        debugger;
        this.repairViewModel.categoryName = category.name;
      });
      this.repairViewModel.date = new DateModel({
        day: new Date(repair.date).getDay().toString(),
        month: new Date(repair.date).getMonth().toString(),
        year: new Date(repair.date).getFullYear().toString(),
        formatted: repair.date,
        momentObj: moment(repair.date)
      });
      this.repairViewModel.details = repair.details;
      this.repairViewModel.id = repair.id;
      this.repairViewModel.name = repair.name;
      this._repairService.getPartsByRepairId(repair.id).then(parts => this.repairViewModel.parts = parts);

    });
  }

}
