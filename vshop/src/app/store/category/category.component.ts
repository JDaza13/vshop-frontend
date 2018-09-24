import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../category';
import { Product } from '../product';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  
  @Input() categoryData: Category;
  
  filterObj = {};
  
  products: Product[];
  
  appliedFilter = false;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }
  
  getProducts(filter): void {
    if (this.categoryData.id && !this.categoryData.sublevels) {
      this.productService.getProducts({'categoryId': this.categoryData.id}, filter)
        .subscribe(products => this.products = products);
    }
  }
  
  filterChange(filterData): void {
    
    this.appliedFilter = true;
    
    this.filterObj = {
      'ava': filterData.availability.availables,
      'avna': filterData.availability.nonAvailables,
      'avsrt': filterData.availability.sort ? 1 : -1,
      'prmin': filterData.price.min,
      'prmax': filterData.price.max,
      'prsrt': filterData.price.sort ? 1 : -1,
      'stmin': filterData.stock.min,
      'stmax': filterData.stock.max,
      'stsrt': filterData.stock.sort ? 1 : -1
    };
    
    this.getProducts(this.filterObj);
  }

}
