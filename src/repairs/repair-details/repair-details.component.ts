import { Component, OnInit, Input } from '@angular/core';
import { RepairService } from '../repair.service';
import { Repair } from '../repair';
import { ActivatedRoute } from '@angular/router';
import { DateModel, DatePickerOptions } from 'ng2-datepicker';
@Component({
  selector: 'app-repair-details',
  templateUrl: './repair-details.component.html',
  styleUrls: ['./repair-details.component.css']
})
export class RepairDetailsComponent implements OnInit {
  @Input() id: number;
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

  constructor(private _repairService: RepairService, private _route: ActivatedRoute) {
    this.id = +_route.snapshot.params['id'];
    this.options = new DatePickerOptions(

    );
  }

  ngOnInit() {
    console.log('REPAIR DETAIL');
    console.log(this.id);
    this._repairService.getRepairById(this.id).then(repair => this.repair = repair);
    this.options = new DatePickerOptions(

    );
    console.log(this.repair);
    console.log('REPAIR END');

  }

}
