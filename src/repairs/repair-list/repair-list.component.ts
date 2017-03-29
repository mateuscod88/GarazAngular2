import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RepairService } from '../repair.service';
import { Repair } from '../repair';

@Component({
  selector: 'app-repair-list',
  templateUrl: './repair-list.component.html',
  styleUrls: ['./repair-list.component.css']
})
export class RepairListComponent implements OnInit, OnChanges {
  repairs: Repair[];
  selectedRepair: Repair;
  constructor(private repairService: RepairService) { }
  @Input() id: number;
  ngOnInit() {
    this.repairService.getRepairsByCarId(this.id).then(repair => this.repairs = repair);

  }
  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(cur.toString());
    }
  }
  selectRepair(selRepair: Repair) {
    if (!(this.selectedRepair.id === selRepair.id)) {
      this.selectedRepair = selRepair;
      console.log(this.selectRepair.toString());
    }
  }
  selectCarHandle(carId: number) {
    console.log('Handle');

    this.repairService.getRepairsByCarId(carId).then(repair => this.repairs = repair);
  }

}
