import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../category';
import { Product } from '../product';

import { PRODUCTS } from '../mock-products';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  
  @Input() categoryData: Category;
  
  products = PRODUCTS;

  constructor() { }

  ngOnInit() {
    this.getProducts();
  }
  
  getProducts(): void {
    this.products = this.products.filter(product => product.sublevel_id == this.categoryData.id);
  }

}
