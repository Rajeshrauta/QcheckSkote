import { Component, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidatorFn,
} from "@angular/forms";

import { BsModalRef, BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
@Component({
  selector: "app-create-credit-memo",
  templateUrl: "./create-credit-memo.component.html",
  styleUrl: "./create-credit-memo.component.scss",
})
export class CreateCreditMemoComponent {
  breadCrumbItems: Array<{}>;

  addMemoForm: FormGroup;
  editMemoForm: FormGroup;

  @ViewChild("createMemeoModal", { static: false })
  createMemeoModal?: ModalDirective;
  @ViewChild("editMemoModal", { static: false })
  editMemoModal?: ModalDirective;

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Credit Memo" },
      { label: "Create", active: true },
    ];

    this.addMemoForm = this.formBuilder.group({
      product: ["", [Validators.required]],
      desc: ["", [Validators.required]],
      qty: ["", [Validators.required]],
      unitPrice: ["", [Validators.required]],
    });

    this.editMemoForm = this.formBuilder.group({
      product: ["", [Validators.required]],
      desc : ["", [Validators.required]],
      qty: ["", [Validators.required]],
      unitPrice: ["", [Validators.required]],
    });
  }

  onEditMemoFormSubmit() {
    console.log(this.editMemoForm.value);
    if (this.editMemoForm.invalid) {
      return;
    }
    // Form is valid, continue with your logic
    this.editMemoForm.reset();
    this.editMemoModal.hide();
  }

  onAddMemoFormSubmit() {
    console.log(this.addMemoForm.value);
    if (this.addMemoForm.invalid) {
      return;
    }
    // Form is valid, continue with your logic
    this.addMemoForm.reset();
    this.createMemeoModal.hide();
  }

  get c() {
    return this.addMemoForm.controls;
  }

  get e() {
    return this.editMemoForm.controls;
  }

  customerTransaction = [
    {
      Product: "HRFAP",
      Description: "Haldi ram frozen aloo paratha",
      UnitPrice: "$23",
      Qty: "33",
      Free: "3",
      QuantityOnHand: "24",
    },
    {
      Product: "HRFAP",
      Description: "Haldi ram frozen aloo paratha",
      UnitPrice: "$23",
      Qty: "33",
      Free: "3",
      QuantityOnHand: "24",
    },
    {
      Product: "HRFAP",
      Description: "Haldi ram frozen aloo paratha",
      UnitPrice: "$23",
      Qty: "33",
      Free: "3",
      QuantityOnHand: "24",
    },
  ];
}
