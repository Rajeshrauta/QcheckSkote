import { Component, HostListener } from "@angular/core";
import { NgbModal, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrl: "./customer.component.scss",
})
export class CustomerComponent {
  breadCrumbItems: Array<{}>;

  data: any[] = [];
  public showMenu: boolean = window.innerWidth > 450;
  public OrderFormForm!: FormGroup;
  private searchQuery: string = "";
  public poperOverData: any[] = [];

  constructor(private fb: FormBuilder, private modalService: NgbModal) {}

  @HostListener("window:resize", ["$event"])
  onResize(event: any) {
    // Update showMenu value when window is resized
    this.showMenu = window.innerWidth > 450;
  }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Customer" },
      { label: "Customer Details", active: true },
    ];

    this.OrderFormForm = this.fb.group({
      items: this.fb.array([]),
    });
    this.CreateDummy();
    this.patchItemsIntoFormArray(this.data);
  }

  customerTransaction = [
    {
      CreatedDate: "Jan 05,2024",
      Type: "Estimate",
      Id: "62041",
      Balance: "$123",
      Total: "$128",
      TransactionDate: "Jan 05,2024",
    },
    {
      CreatedDate: "Jan 05,2024",
      Type: "Invoice",
      Id: "62041",
      Balance: "$123",
      Total: "$128",
      TransactionDate: "Jan 05,2024",
    },
    {
      CreatedDate: "Jan 05,2024",
      Type: "Estimate",
      Id: "62041",
      Balance: "$123",
      Total: "$128",
      TransactionDate: "Jan 05,2024",
    },
  ];

  get items(): FormArray {
    return <FormArray>this.OrderFormForm?.get("items");
  }

  private patchItemsIntoFormArray(dataItem: any[]) {
    const formArray = this.OrderFormForm?.get("items") as FormArray;
    formArray?.clear();
    dataItem.forEach((item) => {
      formArray.push(
        this.fb.group({
          productId: [item?.productId],
          name: [item?.name],
          qtyOnHand: [item?.qtyOnHand],
          qty: [item?.qty],
          free: [item?.free],
          rate: [item?.rate],
          isPopoverVisible: [false],
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

  search(): void {
    const query = this.searchQuery.toLowerCase().trim();
    const data = this.data.filter((item) =>
      item.name.toLowerCase().includes(query)
    );
    if (data) {
      this.patchItemsIntoFormArray(data);
    }
  }

  onSearch(event: any) {
    this.searchQuery = event.target.value;
    this.search();
  }

  private CreateDummy() {
    for (let i = 1; i <= 5; i++) {
      this.data.push({
        productId: i * 5,
        name: `***Opener Ginger (Bottle)***250ml*12*(India Format) ${i}`,
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

  private openFreeModal(rowIndex: number) {}

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  showPopover(event: MouseEvent, rowIndex: number) {
    this.items.controls[rowIndex].get("isPopoverVisible")?.setValue(true);
    this.poperOverData = Array(this.items.controls[rowIndex].value);
    event.stopPropagation(); // Prevent event bubbling
  }

  hidePopover(rowIndex: number) {
    this.poperOverData = [];
    this.items.controls[rowIndex].get("isPopoverVisible")?.setValue(false);
  }

  public numberOnly(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  public ProductData = [
    {
      Id: 1,
      ProductName: "Customer Name 1",
    },
    {
      Id: 2,
      ProductName: "Customer Name 2",
    },
    {
      Id: 3,
      ProductName: "Customer Name 3",
    },
    {
      Id: 4,
      ProductName: "Customer Name 4",
    },
    {
      Id: 5,
      ProductName: "Customer Name 5",
    },
    {
      Id: 6,
      ProductName: "Customer Name 6",
    },
    {
      Id: 6,
      ProductName: "Customer Name 7",
    },
    {
      Id: 6,
      ProductName: "Customer Name 8",
    },
    {
      Id: 6,
      ProductName: "Customer Name 9",
    },
    {
      Id: 1,
      ProductName: "Customer Name 10",
    },
  ];
}
