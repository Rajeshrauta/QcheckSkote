import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { FreeItemComponent } from '../create-estimate/sub-components/free-item/free-item.component';
import { NgbModal, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-create-manual-estimate",
  templateUrl: "./create-manual-estimate.component.html",
  styleUrl: "./create-manual-estimate.component.scss",
})
export class CreateManualEstimateComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  bsConfig: Partial<BsDatepickerConfig>;
  selectValue: string[];
  tableVisible: boolean = false;

  data: any[] = [];
  public showMenu: boolean = window.innerWidth > 450;
  public OrderForm!: FormGroup;
  public poperOverData: any[] = [];
  private searchQuery: string = "";


  constructor(private fb: FormBuilder, private modalService: NgbModal ) {
    this.bsConfig = Object.assign({}, {
      // containerClass: 'theme-dark-blue',
      dateInputFormat: 'DD/MM/YYYY',
      showWeekNumbers: false
    });
  }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Estimate" },
      { label: "Create Manual", active: true },
    ];

    this.selectValue = ['Alaska Berry', 'Ronaldo Hawaii', 'Tony Stark', 'Natasha', 'Steve Jobs', 'Robin Hood', 'Tom', 'Jerry'];
  
    this.OrderForm = this.fb.group({
      items: this.fb.array([]),
    });

    this.CreateDummy();
    this.patchItemsIntoFormArray(this.data);
  }


  toggleTableVisibility() {
    this.tableVisible = !this.tableVisible;
  }


  get items(): FormArray {
    return <FormArray>this.OrderForm?.get("items");
  }

  private patchItemsIntoFormArray(dataItem: any[]) {
    const formArray = this.OrderForm?.get("items") as FormArray;
    formArray?.clear();
    dataItem.forEach((item) => {
      formArray.push(
        this.fb.group({
          productId: [item?.productId],
          description: [item?.description],
          name: [item?.name],
          qtyOnHand: [item?.qtyOnHand],
          qty: [item?.qty],
          free: [item?.free],
          rate: [item?.rate],
        })
      );
    });
  }

  onAdd(rowIndex: number) {
    const data = parseInt(this.items?.controls[rowIndex]?.get("qty")?.value);
    this.items?.controls[rowIndex]?.get("qty")?.setValue(data + 1);
    if (parseInt(this.items?.controls[rowIndex]?.get("qty")?.value) >= 10) {
      this.openFreeModal(rowIndex);
    }
  }

  onSub(rowIndex: number) {
    const data = parseInt(this.items?.controls[rowIndex]?.get("qty")?.value);
    this.items?.controls[rowIndex]?.get("qty")?.setValue(data - 1);
  }

  private CreateDummy() {
    for (let i = 1; i <= 5; i++) {
      this.data.push({
        productId: i * 5,
        name: `***Opener Ginger (Bottle)***250ml*12*(India Format) ${i}`,
        description : "Description",
        qtyOnHand: this.getRandomInt(1, 1000), // Random quantity on hand between 1 and 1000
        qty: 0, // Random quantity between 1 and 100
        free: 0, // Random free quantity between 0 and 10
        rate: this.getRandomInt(10, 100), // Random rate between 10 and 100
      });
    }
  }

  public onQuantityChange(rowIndex: number) {
    const dataItem = this.items.controls[rowIndex];
    if (parseInt(dataItem?.get("qty")?.value) >= 10) {
      this.openFreeModal(rowIndex);
    }
  }

  private openFreeModal(rowIndex: number) {
    const modalOptions: NgbModalOptions = {
      backdrop: "static",
      windowClass: "free-items",
      keyboard: true,
    };
    const modalRef = this.modalService.open(FreeItemComponent, modalOptions);
    modalRef.result.then((result: any) => {
      if (result) {
        this.items.controls[rowIndex].get("qty")?.setValue(result.qty);
        this.items.controls[rowIndex].get("free")?.setValue(result.free);
      }
    });
  }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  public numberOnly(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

}
