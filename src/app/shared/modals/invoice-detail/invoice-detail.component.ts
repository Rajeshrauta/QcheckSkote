import { Component,ViewChild } from '@angular/core';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrl: './invoice-detail.component.scss'
})
export class InvoiceDetailComponent {
  @ViewChild('invoiceDetailModal') invoiceDetailModal: any; // Assuming 'invoiceDetailModal' is the template reference variable for the modal

  showModal() {
    this.invoiceDetailModal.show();
  }
}
