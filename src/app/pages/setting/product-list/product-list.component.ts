import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrl: "./product-list.component.scss",
})
export class ProductListComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;
  files: File[] = [];

  constructor() {}

  ngOnInit() {
    this.breadCrumbItems = [
      { label: "Product List" },
      { label: "All", active: true },
    ];
  }

  // File Upload
  imageURL: any;
  onSelect(event: any) {
    this.files.push(...event.addedFiles);
    let file: File = event.addedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
      setTimeout(() => {
        // this.profile.push(this.imageURL)
      }, 100);
    };
    reader.readAsDataURL(file);
  }
}
