import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './store/category/category.component';
import { ProductComponent } from './store/product/product.component';
import { ProductFilterComponent } from './store/product-filter/product-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StoreComponent,
    CartComponent,
    CategoryComponent,
    ProductComponent,
    ProductFilterComponent
  ],
  imports: [
    MatSlideToggleModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatCardModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
