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
  
  products : Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }
  
  getProducts(): void {
    if(this.categoryData.id && !this.categoryData.sublevels){
      this.productService.getProducts({'categoryId': this.categoryData.id})
        .subscribe(products => this.products = products);
    }
  }

}
