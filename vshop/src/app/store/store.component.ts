import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from './mock-categories';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  
  categories = CATEGORIES;

  constructor() { }

  ngOnInit() {
  }

}
