import { Component } from '@angular/core';

@Component({
  selector: "app-edit-credit-memo",
  templateUrl: "./edit-credit-memo.component.html",
  styleUrl: "./edit-credit-memo.component.scss",
})
export class EditCreditMemoComponent {
  breadCrumbItems: Array<{}>;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Credit Memo" },
      { label: "Edit", active: true },
    ];
  }
}
