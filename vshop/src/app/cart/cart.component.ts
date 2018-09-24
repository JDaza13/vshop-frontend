import { Component, OnInit } from '@angular/core';
import { Product } from '../store/product';

import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: Product[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getCart();
  }
  
  getCart(): void {
    this.cartService.getCart()
      .subscribe(cartItems => this.cartItems = cartItems);
  }

}
