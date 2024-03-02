import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: "app-customer-list",
  templateUrl: "./customer-list.component.html",
  styleUrl: "./customer-list.component.scss",
})
export class CustomerListComponent {
  selectedRoute: string = "";

  customers = [
    { id: 1, name: "First Customer Name", value: "/customer/customer-info" },
    { id: 1, name: "Second Customer Name", value: "/customer/customer-info" },
    { id: 1, name: "Third Customer Name", value: "/customer/customer-info" },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Retrieve the selected route from local storage on component initialization
    const storedRoute = localStorage.getItem("selectedCustomer");
    if (storedRoute) {
      this.selectedRoute = storedRoute;
    }
  }
  
  onSelect(event: any): void {
    this.selectedRoute = event.target.value;
    // Store the selected route in local storage
    localStorage.setItem("selectedCustomer", this.selectedRoute);
    this.router.navigate([this.selectedRoute]);
  }
}
