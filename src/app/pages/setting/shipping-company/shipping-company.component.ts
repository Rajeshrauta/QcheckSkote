import { Component,ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidatorFn,
} from "@angular/forms";

import { BsModalRef, BsModalService, ModalDirective } from 'ngx-bootstrap/modal';

import { tableData } from './utilities/data';
import { ShippingCompanyTable } from './utilities/shipping-company.model';

@Component({
  selector: "app-shipping-company",
  templateUrl: "./shipping-company.component.html",
  styleUrl: "./shipping-company.component.scss",
})
export class ShippingCompanyComponent {
  breadCrumbItems: Array<{}>;

  TableData: ShippingCompanyTable[];

  addCompanyForm: FormGroup;
  editCompanyForm: FormGroup;

  @ViewChild("addCompanyModal", { static: false })
  addCompanyModal?: ModalDirective;
  @ViewChild("editCompanyModal", { static: false })
  editCompanyModal?: ModalDirective;

  constructor(private formBuilder: FormBuilder ) {  }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Setting" },
      { label: "Shipping Company", active: true },
    ];

    this.TableData = tableData;

    this.addCompanyForm = this.formBuilder.group({
      companyname: ["", [Validators.required]],
      desc: ["", [Validators.required]],
    });

    this.editCompanyForm = this.formBuilder.group({
      companyname: ["", [Validators.required]],
      desc: ["", [Validators.required]],
    });
  }

   onEditCompanyFormSubmit() {
    console.log(this.addCompanyForm.value);
    if (this.editCompanyForm.invalid) {
      return;
    }
    // Form is valid, continue with your logic
    this.editCompanyForm.reset();
    this.editCompanyModal.hide();
  }

  onAddCompanyFormSubmit() {
    console.log(this.addCompanyForm.value);
    if (this.addCompanyForm.invalid) {
      return;
    }
    // Form is valid, continue with your logic
    this.addCompanyForm.reset();
    this.addCompanyModal.hide();
  }

  get c() {
    return this.addCompanyForm.controls;
  }

  get e() {
    return this.editCompanyForm.controls;
  }
  
}
