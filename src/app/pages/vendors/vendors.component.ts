import { Component } from '@angular/core';

@Component({
  selector: "app-vendors",
  templateUrl: "./vendors.component.html",
  styleUrl: "./vendors.component.scss",
})
export class VendorsComponent {
  breadCrumbItems: Array<{}>;
  height: number = 400;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Vendors" },
      { label: "All", active: true },
    ];
  }



  public ProductData = [
    {
      Id: 1,
      ProductName: "Vendor Name 1",
    },
    {
      Id: 2,
      ProductName: "Vendor Name 2",
    },
    {
      Id: 3,
      ProductName: "Vendor Name 3",
    },
    {
      Id: 4,
      ProductName: "Vendor Name 4",
    },
    {
      Id: 5,
      ProductName: "Vendor Name 5",
    },
    {
      Id: 6,
      ProductName: "Vendor Name 6",
    },
    {
      Id: 6,
      ProductName: "Vendor Name 7",
    },
    {
      Id: 6,
      ProductName: "Vendor Name 8",
    },
    {
      Id: 6,
      ProductName: "Vendor Name 9",
    },
    {
      Id: 1,
      ProductName: "Vendor Name 10",
    },
    {
      Id: 1,
      ProductName: "Vendor Name 11",
    },
    {
      Id: 1,
      ProductName: "Vendor Name 12",
    },
    {
      Id: 1,
      ProductName: "Vendor Name 13",
    },
    {
      Id: 1,
      ProductName: "Vendor Name 14",
    },
    {
      Id: 1,
      ProductName: "Vendor Name 15",
    },
    {
      Id: 1,
      ProductName: "Vendor Name 16",
    },
    {
      Id: 1,
      ProductName: "Vendor Name 17",
    },
    {
      Id: 1,
      ProductName: "Vendor Name 18",
    },
    {
      Id: 1,
      ProductName: "Vendor Name 19",
    },
  ];
}
