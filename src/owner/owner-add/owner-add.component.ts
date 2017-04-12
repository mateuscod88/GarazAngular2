import { Component, OnInit, Input, Output, AfterViewChecked, ViewChild } from '@angular/core';
import { Owner } from '../owner';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OwnerService } from '../owner.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-owner-add',
  templateUrl: './owner-add.component.html',
  styleUrls: ['./owner-add.component.css']
})
export class OwnerAddComponent implements OnInit {
  owner: Owner = { id: 1, name: '', lastName: '', phone: '', idDocument: '' };
  formErrors = {
    'name': '',
    'power': ''
  };

  validationMessages = {
    'name': {
      'required': 'Name is required.',
      'minlength': 'Name must be at least 4 characters long.',
      'maxlength': 'Name cannot be more than 24 characters long.',
      'forbiddenName': 'Someone named "Bob" cannot be a hero.'
    },
    'power': {
      'required': 'Power is required.'
    }
  };
  constructor(private _ownerService: OwnerService, private _route: Router) { }
  heroForm: NgForm;
  @ViewChild('heroForm') currentForm: NgForm;

  ngAfterViewChecked() {
    console.log(this.currentForm);
    //this.formChanged();
  }

  formChanged() {
    console.log("ngFormChanged");

    if (this.currentForm === this.heroForm) { return; }
    this.heroForm = this.currentForm;
    if (this.heroForm) {
      this.heroForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
    }
  }
  onValueChanged(data?: any) {
    console.log("onValueChangeddd");

    if (!this.heroForm) { return; }
    const form = this.heroForm.form;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }

  }

  ngOnInit() {

  }




  addUser() {
    console.log(this.owner);
    this._ownerService.create(this.owner.name, this.owner.lastName, this.owner.phone, this.owner.idDocument);
    this._route.navigate(['/ownerList']);
  }
}
