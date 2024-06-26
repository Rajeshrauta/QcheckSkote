import { Component,ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrl: './invoice-detail.component.scss'
})
export class InvoiceDetailComponent {
  @ViewChild('invoiceDetailModal') invoiceDetailModal: any; // Assuming 'invoiceDetailModal' is the template reference variable for the modal

  constructor(private router: Router) { }

  navigateToEditInvoice() {
    this.router.navigate(['/invoice', 'edit']);
  }

  navigateTolinkedwithestimate() {
    this.router.navigate(['/invoice', 'invoice-linked-with-estimate']);
  }
  showModal() {
    this.invoiceDetailModal.show();
  }
  public numberOnly(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
