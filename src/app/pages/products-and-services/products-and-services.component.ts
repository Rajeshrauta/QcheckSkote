import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { Table } from './utilities/products.model';
import { tableData } from './utilities/data';
import { AdvancedService } from './services/advanced.service';
import { AdvancedSortableDirective, SortEvent } from './utilities/advanced-sortable.directive';


@Component({
  selector: "app-products-and-services",
  templateUrl: "./products-and-services.component.html",
  styleUrl: "./products-and-services.component.scss",
  providers: [AdvancedService, DecimalPipe]
})
export class ProductsAndServicesComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;
  // Table data
  tableData: Table[];
  public selected: any;
  hideme: boolean[] = [];
  tables$: Observable<Table[]>;
  total$: Observable<number>;

  @ViewChildren(AdvancedSortableDirective) headers: QueryList<AdvancedSortableDirective>;
  public isCollapsed = true;

  constructor(public service: AdvancedService) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.breadCrumbItems = [
      { label: "Products & Services" },
      { label: "All", active: true },
    ];

    this._fetchData();
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


  // products = [
  //   {
  //     Itemname: "Item 1",
  //     Itemcode: "IC001",
  //     Sku: "12",
  //     Desc: "Item description",
  //     Price: "$128",
  //     Qtyinhand: "1222",
  //   },
  //   {
  //     Itemname: "Item 1",
  //     Itemcode: "IC001",
  //     Sku: "12",
  //     Desc: "Item description",
  //     Price: "$128",
  //     Qtyinhand: "1222",
  //   },
  //   {
  //     Itemname: "Item 1",
  //     Itemcode: "IC001",
  //     Sku: "12",
  //     Desc: "Item description",
  //     Price: "$128",
  //     Qtyinhand: "1222",
  //   },
  //   {
  //     Itemname: "Item 1",
  //     Itemcode: "IC001",
  //     Sku: "12",
  //     Desc: "Item description",
  //     Price: "$128",
  //     Qtyinhand: "1222",
  //   },
  //   {
  //     Itemname: "Item 1",
  //     Itemcode: "IC001",
  //     Sku: "12",
  //     Desc: "Item description",
  //     Price: "$128",
  //     Qtyinhand: "1222",
  //   }
  // ]
}
