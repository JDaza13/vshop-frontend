import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Product } from '../store/product';
import { APP_CONSTANTS } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  const putHttpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Methods': 'PUT'
    })
  };

  constructor(private http: HttpClient) { }
  
  getCart(): Observable<Product[]> {
    return this.http.get<Product[]>(APP_CONSTANTS.API.API_BASE_PATH +
      APP_CONSTANTS.API.CART_SERVICE.GET_CART, {});
  }
  
  addToCart(items): Observable<Product[]> {

    return this.http.put<Product[]>(APP_CONSTANTS.API.API_BASE_PATH +
      APP_CONSTANTS.API.CART_SERVICE.PUT_ITEMS, items);
  }
  
  editCart(item, itemId): Observable<Product[]> {

    return this.http.post<Product[]>(APP_CONSTANTS.API.API_BASE_PATH +
      APP_CONSTANTS.API.CART_SERVICE.EDIT_ITEM.replace(':itemId', itemId), item);
  }
  
  deleteFromCart(itemId): Observable<Product[]> {

    return this.http.delete<Product[]>(APP_CONSTANTS.API.API_BASE_PATH +
      APP_CONSTANTS.API.CART_SERVICE.DELETE_ITEM.replace(':itemId', itemId), {});
  }
}
