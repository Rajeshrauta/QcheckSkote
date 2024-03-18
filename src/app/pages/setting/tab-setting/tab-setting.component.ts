import { Component,ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";

import { BsModalRef, BsModalService, ModalDirective } from 'ngx-bootstrap/modal';

import { tableData } from './utilities/data';
import { tabSettingTable } from './utilities/tab-setting.model';

@Component({
  selector: "app-tab-setting",
  templateUrl: "./tab-setting.component.html",
  styleUrl: "./tab-setting.component.scss",
})
export class TabSettingComponent {
  breadCrumbItems: Array<{}>;
  TableData: tabSettingTable[];

  addRecordForm: FormGroup;
  editRecordForm: FormGroup;

  @ViewChild("addRecordModal", { static: false })
  addRecordModal?: ModalDirective;
  @ViewChild("editRecordModal", { static: false })
  editRecordModal?: ModalDirective;
  @ViewChild("removeRecordModal", { static: false })
  removeRecordModal?: ModalDirective;

  constructor(private formBuilder: FormBuilder ) {  }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Setting" },
      { label: "Tab Setting", active: true },
    ];
     this.TableData = tableData;

     this.addRecordForm = this.formBuilder.group({
      file: ["", [Validators.required]],
    });

     this.editRecordForm = this.formBuilder.group({
      tabname: ["", [Validators.required]],
    });
  }

  onaddRecordFormSubmit() {
    console.log(this.addRecordForm.value);
    if (this.addRecordForm.invalid) {
      return;
    }
    // Form is valid, continue with your logic
    this.addRecordForm.reset();
    this.addRecordModal.hide();
  }

  onEditRecordFormSubmit() {
    console.log(this.editRecordForm.value);
    if (this.editRecordForm.invalid) {
      return;
    }
    // Form is valid, continue with your logic
    this.editRecordForm.reset();
    this.editRecordModal.hide();
  }

  get c() {
    return this.addRecordForm.controls;
  }

  get e() {
    return this.editRecordForm.controls;
  }


}
