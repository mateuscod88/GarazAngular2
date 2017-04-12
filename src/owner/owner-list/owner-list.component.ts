import { Component, OnInit } from '@angular/core';
import { Owner } from '../owner';
import { OwnerService } from '../owner.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {
  owners: Owner[];
  selectedOwner: Owner;
  constructor(private _ownerService: OwnerService, private _route: Router) { }

  ngOnInit() {
    this._ownerService.getOwners().then(owners => this.owners = owners);
  }
  selectOwner(owner: Owner) {
    this.selectedOwner = owner;
  }
  addOwner() {
    this._route.navigate(['/addOwner']);
  }

}
