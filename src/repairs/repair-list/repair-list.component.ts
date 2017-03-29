import { Component, OnInit, Input } from '@angular/core';
import { RepairService } from '../repair.service';
import { Repair } from '../repair';
@Component({
  selector: 'app-repair-list',
  templateUrl: './repair-list.component.html',
  styleUrls: ['./repair-list.component.css']
})
export class RepairListComponent implements OnInit {
  repairs: Repair[];
  selectedRepair: Repair;
  constructor(private repairService: RepairService) { }
  @Input() id: number;
  ngOnInit() {
    this.repairService.getRepairsByCarId(this.id).then(repair => this.repairs = repair);

  }
  selectRepair(selRepair: Repair) {
    if (!(this.selectedRepair.id === selRepair.id)) {
      this.selectedRepair = selRepair;
      console.log(this.selectRepair.toString());
    }
  }
}
