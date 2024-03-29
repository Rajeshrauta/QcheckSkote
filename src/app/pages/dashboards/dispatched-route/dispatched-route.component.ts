import { Component, QueryList, ViewChildren, ViewChild } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { Observable } from "rxjs";

import { BsModalService, ModalDirective } from "ngx-bootstrap/modal";
import {
  Validators,
  FormGroup,
  FormBuilder
} from "@angular/forms";

// Date Format
import { DatePipe } from "@angular/common";

import { DispatchModel } from "./utilities/dispatch.model";
import { dispatchData } from "./utilities/data";
import { AdvancedService } from './services/advanced.service';
import { AdvancedSortableDirective, SortEvent } from './utilities/advanced-sortable.directive';
import { InvoiceDetailComponent } from "src/app/shared/modals/invoice-detail/invoice-detail.component";

@Component({
  selector: "app-dispatched-route",
  templateUrl: "./dispatched-route.component.html",
  styleUrl: "./dispatched-route.component.scss",
  providers: [AdvancedService, DecimalPipe],
})
export class DispatchedRouteComponent {
  masterSelected!: boolean;
  breadCrumbItems: Array<{}>;
  masterCheckbox: boolean = false;
  childCheckboxes: boolean = false;

  tableData: DispatchModel[];

  printRouteForm: FormGroup;
  submitted = false;

  ordersList: Observable<DispatchModel[]>;
  total: Observable<number>;
  deletId: any;

  @ViewChild("printRouteModal", { static: false }) printRouteModal?: ModalDirective;
  @ViewChild("removeItemModal", { static: false }) removeItemModal?: ModalDirective;
  @ViewChildren(AdvancedSortableDirective) headers: QueryList<AdvancedSortableDirective>;
  @ViewChild(InvoiceDetailComponent) invoiceDetailComponent: InvoiceDetailComponent;

  constructor(
    public service: AdvancedService,
    private formBuilder: FormBuilder,
  ) {
    this.ordersList = service.tables$;
    this.total = service.total$;
  }

  ngOnInit() {
    this.breadCrumbItems = [
      { label: "Dashboard" },
      { label: "Dispatched Route", active: true },
    ];

    this.tableData = dispatchData;

    this.printRouteForm = this.formBuilder.group({
      dispatchDate: ["", [Validators.required]],
      driver: ["", [Validators.required]],
      shippingCompany: ["", [Validators.required]],
    });
  }

  toggleAllChildCheckboxes() {
    this.childCheckboxes = this.masterCheckbox;
  }

  /**
   * Sort table data
   * @param param0 sort the column
   *
   */
  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }


  confirm(id: any) {
    this.deletId = id;
    this.removeItemModal.show();
  }

  deleteOrder() {
    this.removeItemModal.hide();
  }

  get pr() {
    return this.printRouteForm.controls;
  }

  saveUser() {
    this.printRouteModal?.hide();
    setTimeout(() => {
      this.printRouteForm.reset();
    }, 0);
    this.printRouteForm.reset();
    this.submitted = true;
  }

  editModal(id: any) {
    this.submitted = false;
    this.printRouteModal?.show();
  }

  showInvoiceModal() {
    this.invoiceDetailComponent.showModal();
  }
}
