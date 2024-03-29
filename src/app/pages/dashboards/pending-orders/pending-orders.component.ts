import { Component, ViewChild } from '@angular/core';
import { EstimateDetailComponent } from 'src/app/shared/modals/estimate-detail/estimate-detail.component';

@Component({
  selector: "app-pending-orders",
  templateUrl: "./pending-orders.component.html",
  styleUrl: "./pending-orders.component.scss",
})
export class PendingOrdersComponent {
  breadCrumbItems: Array<{}>;
  masterCheckbox: boolean = false;
  childCheckboxes: boolean = false;
  @ViewChild(EstimateDetailComponent) estimateDetailComponent: EstimateDetailComponent;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Dashboard" },
      { label: "Pending Orders", active: true },
    ];
  }

  showEstimateModal() {
    this.estimateDetailComponent.showModal();
  }

  toggleAllChildCheckboxes() {
    this.childCheckboxes = this.masterCheckbox;
  }
}
