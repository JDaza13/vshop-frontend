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
    
    const item = {
      sublevel_id: this.product.sublevel_id,
      quantity: this.product.quantity,
      price: this.product.price,
      available: this.product.available,
      name: this.product.name,
      cart_quantity: this.storeQuantity,
      cart_added: (new Date).getTime()
    };

    const items = {
      itemsArray: [item]
    };
    
    const snackBarMsg = 'Has agregado ' +
      item.cart_quantity + ' de ' +
        item.name + ' a tu carrito.';
    
    this.snackBar.open(snackBarMsg, 'Vale!', {
      duration: 5000,
    });

    this.cartService.addToCart(items).subscribe();
  }
  
  editInCart(): void {
    
    const item = {
      sublevel_id: this.product.sublevel_id,
      quantity: this.product.quantity,
      price: this.product.price,
      available: this.product.available,
      name: this.product.name,
      cart_quantity: this.product.cart_quantity,
      cart_added: this.product.cart_added
    };
    
    const snackBarMsg = 'Has editado ' +
      this.product.name + ' en tu carrito.';
    
    this.snackBar.open(snackBarMsg, 'Vale!', {
      duration: 5000,
    });
    
    this.cartService.editCart(item, this.product._id).subscribe((success) => {
      location.reload();
    });
  }
  
  deleteFromCart(): void {
    
    const itemId = this.product._id;
    
    const snackBarMsg = 'Has eliminado ' +
      this.product.name + ' de tu carrito.';
    
    this.snackBar.open(snackBarMsg, 'Vale!', {
      duration: 5000,
    });
    
    this.cartService.deleteFromCart(itemId).subscribe((success) => {
      location.reload();
    });
  }

}
