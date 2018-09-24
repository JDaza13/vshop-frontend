import { Component, OnInit, Input } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { Product } from '../product';

import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  
  @Input() product: Product;
  @Input() inShopCart?: boolean;
  
  storeQuantity = 0;

  constructor(private cartService: CartService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  
  addToCart(): void {
    
    let item = {};
    Object.assign(item, this.product)
    
    item.cart_quantity = this.storeQuantity;
    item.cart_added = (new Date).getTime();
    delete item._id;

    let items = {
      itemsArray: [item]
    };
    
    let snackBarMsg = 'Has agregado ' +
      item.cart_quantity + ' de ' +
        item.name + ' a tu carrito.';
    
    this.snackBar.open(snackBarMsg, 'Vale!', {
      duration: 5000,
    });

    this.cartService.addToCart(items).subscribe();
  }
  
  editInCart(): void {
    
    let item = {};
    Object.assign(item, this.product)
    
    delete item._id;
    
    let snackBarMsg = 'Has editado ' +
      this.product.name + ' en tu carrito.';
    
    this.snackBar.open(snackBarMsg, 'Vale!', {
      duration: 5000,
    });
    
    this.cartService.editCart(item, this.product._id).subscribe((success) => {
      location.reload();
    });
  }
  
  deleteFromCart(): void {
    
    let itemId = this.product._id;
    
    let snackBarMsg = 'Has eliminado ' +
      this.product.name + ' de tu carrito.';
    
    this.snackBar.open(snackBarMsg, 'Vale!', {
      duration: 5000,
    });
    
    this.cartService.deleteFromCart(itemId).subscribe((success) => {
      location.reload();
    });
  }

}
