import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-estimate-detail',
  templateUrl: './estimate-detail.component.html',
  styleUrl: './estimate-detail.component.scss'
})
export class EstimateDetailComponent {
  @ViewChild('estimateDetailModal') estimateDetailModal: any; // Assuming 'invoiceDetailModal' is the template reference variable for the modal

  showModal() {
    this.estimateDetailModal.show();
  }
}
