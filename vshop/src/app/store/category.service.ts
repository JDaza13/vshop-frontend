import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Category } from './category';
import { APP_CONSTANTS } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient) { }
    
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(APP_CONSTANTS.API.API_BASE_PATH +
      APP_CONSTANTS.API.CATEGORIES_SERVICE.GET_CATEGORIES, {});
  }
}
