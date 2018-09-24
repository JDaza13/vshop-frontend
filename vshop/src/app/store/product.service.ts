import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Product } from './product';
import { APP_CONSTANTS } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  
  getProducts(params): Observable<Product[]> {
    return this.http.get<Product[]>(APP_CONSTANTS.API.API_BASE_PATH +
      APP_CONSTANTS.API.PRODUCTS_SERVICE.GET_PRODUCTS.replace(':categoryId', params.categoryId), {});
  }
  
}
