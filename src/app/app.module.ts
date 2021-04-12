import { ProductEffects } from './product/state/product.effects';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import {BookListComponent } from './book-list/book-list.component';
import { collectionReducer } from './state/collection.reducer';
import { booksReducer } from './state/books.reducer';
import { productReducer } from './product/state/product.reducer';
import { counterReducer } from './counter/state/counter.reducer';


import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { CounterComponent } from './counter/counter.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    AppComponent, BookListComponent, BookCollectionComponent, CounterComponent, ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({  count: counterReducer , books: booksReducer, collection: collectionReducer, product: productReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    // TODO parece que todavía no tengo el archivo para guardar en effects .
    EffectsModule.forRoot([ProductEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
