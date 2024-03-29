import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "app-order-received",
  templateUrl: "./order-received.component.html",
  styleUrl: "./order-received.component.scss",
})
export class OrderReceivedComponent {
  breadCrumbItems: Array<{}>;
  masterCheckbox: boolean = false;
  childCheckboxes: boolean = false;

  selectedEstimateType: string = 'tabView';

  constructor(private router: Router) { }

  createEstimateClicked() {
    if (this.selectedEstimateType === 'tabView') {
      this.router.navigate(['/estimate/create-estimate']);
    }
    else if (this.selectedEstimateType === 'manualInput') {
      this.router.navigate(['/estimate/create-manual-estimate']);
    }
  }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Dashboard" },
      { label: "Order Received", active: true },
    ];
  }

  toggleAllChildCheckboxes() {
    this.childCheckboxes = this.masterCheckbox;
  }
}
