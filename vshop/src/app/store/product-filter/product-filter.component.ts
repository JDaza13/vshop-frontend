import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  
  @Output() filterChange = new EventEmitter();
  
  filterData = {
    availability: {
      availables: true,
      nonAvailables: true,
      sort: false
    },
    price: {
      min: 0,
      max: 99999999,
      sort: false
    },
    stock: {
      min: 0,
      max: 99999999,
      sort: false
    }
  };

  constructor() { }

  ngOnInit() {
  }
  
  applyFilters(): void {
    this.filterChange.emit(this.filterData);
  }

}
