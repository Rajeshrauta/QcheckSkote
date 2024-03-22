import { Component, OnInit, ViewChildren, QueryList, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { Table } from './utilities/customer-transaction.model';
import { tableData } from './utilities/data';
import { CustomerService } from './services/customer.service';
import { AdvancedSortableDirective, SortEvent } from './utilities/customer-sortable.directive';


@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrl: "./customer.component.scss",
  providers: [CustomerService, DecimalPipe]
})


export class CustomerComponent implements OnInit,AfterViewInit {
  breadCrumbItems: Array<{}>;
  height : number;

   // Table data
  tableData: Table[];
  public selected: any;
  hideme: boolean[] = [];
  tables$: Observable<Table[]>;
  total$: Observable<number>;

  @ViewChild('sourceElement') sourceElementRef: ElementRef;
  @ViewChild('targetElement') targetElementRef: ElementRef;

  @ViewChildren(AdvancedSortableDirective) headers: QueryList<AdvancedSortableDirective>;
  public isCollapsed = true;

  // constructor(private fb: FormBuilder, private modalService: NgbModal) {}

  constructor(public service: CustomerService) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }
  ngAfterViewInit() {
    this.adjustElementHeight();

    setInterval(() => {
      const currentHeight = this.sourceElementRef.nativeElement.offsetHeight;
      if (this.height !== currentHeight) {
        this.adjustElementHeight();
      }
    }, 10);
  }

  private adjustElementHeight() {
    const sourceHeight = this.sourceElementRef.nativeElement.offsetHeight;
    const screenWidth = window.innerWidth;
    if (screenWidth >= 575) {
      this.height = sourceHeight;
    }
    else{
      this.height = 200;
    }
  }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Customer" },
      { label: "Customer Details", active: true },
    ];

    this._fetchData();
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.adjustElementHeight();
  }
  
  changeValue(i) {
    this.hideme[i] = !this.hideme[i];
  }


  //fetches the table value
  _fetchData() {
    this.tableData = tableData;
    for (let i = 0; i <= this.tableData.length; i++) {
      this.hideme.push(true);
    }
  }

  /**
   * Sort table data
   * @param param0 sort the column
   *
   */
  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }


  public ProductData = [
    {
      Id: 1,
      ProductName: "Customer Name 1",
    },
    {
      Id: 2,
      ProductName: "Customer Name 2",
    },
    {
      Id: 3,
      ProductName: "Customer Name 3",
    },
    {
      Id: 4,
      ProductName: "Customer Name 4",
    },
    {
      Id: 5,
      ProductName: "Customer Name 5",
    },
    {
      Id: 6,
      ProductName: "Customer Name 6",
    },
    {
      Id: 6,
      ProductName: "Customer Name 7",
    },
    {
      Id: 6,
      ProductName: "Customer Name 8",
    },
    {
      Id: 6,
      ProductName: "Customer Name 9",
    },
    {
      Id: 1,
      ProductName: "Customer Name 10",
    },
    {
      Id: 1,
      ProductName: "Customer Name 11",
    },
    {
      Id: 1,
      ProductName: "Customer Name 12",
    },
    {
      Id: 1,
      ProductName: "Customer Name 13",
    },
    {
      Id: 1,
      ProductName: "Customer Name 14",
    },
    {
      Id: 1,
      ProductName: "Customer Name 15",
    },
    {
      Id: 1,
      ProductName: "Customer Name 16",
    },
    {
      Id: 1,
      ProductName: "Customer Name 17",
    },
    {
      Id: 1,
      ProductName: "Customer Name 18",
    },
    {
      Id: 1,
      ProductName: "Customer Name 19",
    },
     {
      Id: 1,
      ProductName: "Customer Name 1",
    },
    {
      Id: 2,
      ProductName: "Customer Name 2",
    },
    {
      Id: 3,
      ProductName: "Customer Name 3",
    },
    {
      Id: 4,
      ProductName: "Customer Name 4",
    },
    {
      Id: 5,
      ProductName: "Customer Name 5",
    },
    {
      Id: 6,
      ProductName: "Customer Name 6",
    },
    {
      Id: 6,
      ProductName: "Customer Name 7",
    },
    {
      Id: 6,
      ProductName: "Customer Name 8",
    },
    {
      Id: 6,
      ProductName: "Customer Name 9",
    },
    {
      Id: 1,
      ProductName: "Customer Name 10",
    },
    {
      Id: 1,
      ProductName: "Customer Name 11",
    },
    {
      Id: 1,
      ProductName: "Customer Name 12",
    },
    {
      Id: 1,
      ProductName: "Customer Name 13",
    },
    {
      Id: 1,
      ProductName: "Customer Name 14",
    },
    {
      Id: 1,
      ProductName: "Customer Name 15",
    },
    {
      Id: 1,
      ProductName: "Customer Name 16",
    },
    {
      Id: 1,
      ProductName: "Customer Name 17",
    },
    {
      Id: 1,
      ProductName: "Customer Name 18",
    },
    {
      Id: 1,
      ProductName: "Customer Name 19",
    },
  ];
}
