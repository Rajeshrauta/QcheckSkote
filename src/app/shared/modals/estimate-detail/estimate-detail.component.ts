import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estimate-detail',
  templateUrl: './estimate-detail.component.html',
  styleUrl: './estimate-detail.component.scss'
})
export class EstimateDetailComponent {
  @ViewChild('estimateDetailModal') estimateDetailModal: any; // Assuming 'invoiceDetailModal' is the template reference variable for the modal

  constructor(private router: Router) { }


  navigateToEditInTab() {
    this.router.navigate(['/estimate', 'edit-estimate']);
  }

  navigateToEditInManual() {
    this.router.navigate(['/estimate', 'edit-manual-estimate']);
  }
  showModal() {
    this.estimateDetailModal.show();
  }
  public numberOnly(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
