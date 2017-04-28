import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RepairService } from '../repair.service';
import { Repair } from '../repair';
import { Router } from '@angular/router';
@Component({
  selector: 'app-repair-list',
  templateUrl: './repair-list.component.html',
  styleUrls: ['./repair-list.component.css']
})
export class RepairListComponent implements OnInit, OnChanges {
  repairs: Repair[];
  selectedRepair: Repair;
  constructor(private repairService: RepairService, private _router: Router) {
    console.log('konstruktor');
    console.log(this.ide);
  }

  @Input() ide: number;
  ngOnInit() {
    console.log('Repairlist');
    this.repairService.getRepairsByCarId(this.ide).then(repair => this.repairs = repair);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('change');
    var tempCar;
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      tempCar = cur;
    }
    let carRepId = +tempCar;
    if (Number.isInteger(carRepId)) {
      this.repairService.getRepairsByCarId(carRepId).then(repair => this.repairs = repair);
    }
    console.log('end onCh');
  }
  selectRepair(selRepair: Repair) {
    console.log(selRepair);
    console.log(this.selectedRepair);
    this.selectedRepair = selRepair;
    this._router.navigate(['repairDetail', this.selectedRepair.id]);

  }
  selectCarHandle(carId: number) {
    console.log('Handle');
    this.repairService.getRepairsByCarId(carId).then(repair => this.repairs = repair);
  }

}
