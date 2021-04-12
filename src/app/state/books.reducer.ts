import { createReducer, on, Action } from '@ngrx/store';

import { retrievedBookList } from './books.actions';
import { Book } from '../book-list/books.model';

// readonly Array parece una interface de typescript.
export const initialState: ReadonlyArray<Book> = [];

// 1) bookReducer es la configuración que se guarda en appmodule de modo que cualquier llamada disptach ya sabe donde
// 2) recordar paso un estado inicial siempre es un array vacío
// 3) on recibe primero la acción que solo tiene nombre en realidad un un props
// 4) tiene que recibir el estado, sin embargo books, puede venir gracias al prop
// 5) regresa el arreglo de Books

export const booksReducer = createReducer<ReadonlyArray<Book>>(
  initialState,
  on(retrievedBookList, (state, { Book }) => [...Book])
);


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
