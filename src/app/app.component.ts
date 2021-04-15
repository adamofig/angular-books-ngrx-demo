import { AppState } from './state/app.state';
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from "rxjs";

import { selectBookCollection, selectBooks } from './state/books.selectors';
import {
  retrievedBookList,
  addBook,
  removeBook,
} from './state/books.actions';


import { GoogleBooksService } from './book-list/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // llamada al store para ejecutar el select : selectBooks. este trae 2 revanadas.
  count$: Observable<number>;
  books$ = this.store.pipe(select(selectBooks));
  bookCollection$ = this.store.pipe(select(selectBookCollection));
  //product$ = this.store.select("product");
  product$: Observable<any>;

  onAdd(bookId) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId) {
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor(
    private booksService: GoogleBooksService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.count$ = this.store.pipe(select('count' as any));

    this.booksService.getBooks().subscribe(
      (Book) => this.store.dispatch(retrievedBookList({ Book })));


  }


}
