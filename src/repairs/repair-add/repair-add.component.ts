import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Repair } from '../repair';
import { Category } from '../category';
import { RepairService } from '../repair.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DateModel, DatePickerOptions } from 'ng2-datepicker';

@Component({
  selector: 'app-repair-add',
  templateUrl: './repair-add.component.html',
  styleUrls: ['./repair-add.component.css']
})
export class RepairAddComponent implements OnInit {
  repairCategoryId: number = undefined;
  details: string;
  repair: Repair = {
    id: 0,
    categoryId: 0,
    carId: 0,
    name: '',
    parts: [{ id: 1, name: 'zestaw rozrzadu', price: 22 }],
    date: '',
    details: 'Wpisz opis Naprawy.'
  };
  date: DateModel;
  options: DatePickerOptions;
  categoryes: Category[] = [
    { id: 1, name: 'Silnik' },
    { id: 2, name: 'Zawieszenie' },
    { id: 3, name: 'Wymiany Okresowe' }]

  constructor(private _repairService: RepairService, private _route: ActivatedRoute, private _router: Router) {
    this.repair.carId = +_route.snapshot.params['id'];
    this.options = new DatePickerOptions();
  }

  ngOnInit() {
  }
  add() {
    console.log('Add Naprawe');
    console.log(this.repair.carId);


    console.log(this.date.formatted);
    this._repairService.create(this.repair.carId, this.repairCategoryId, this.repair.name, this.repair.parts, this.date.formatted, this.repair.details);
    this._router.navigate(['/carDetail', this.repair.carId]);

  }

}
