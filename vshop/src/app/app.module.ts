import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './store/category/category.component';
import { ProductComponent } from './store/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StoreComponent,
    CartComponent,
    CategoryComponent,
    ProductComponent
  ],
  imports: [
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatCardModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
