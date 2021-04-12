import { Book } from '../book-list/books.model';


// La interface del usuario nos dice que en si tenemos 2 propiedades.
export interface AppState {
  books: ReadonlyArray<Book>;
  collection: ReadonlyArray<string>;
  count:  number;
  product: any;
}

// es como tener 2 tablas en la base de datos. solo que sabemos en en js se trabajaría así.



/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
