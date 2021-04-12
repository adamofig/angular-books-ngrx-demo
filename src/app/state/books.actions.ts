import { createAction, props } from '@ngrx/store';

// Se crean 3 acciones, parece con un atributo

// para el caso de agregar un libro, será que solo necestio un id??
export const addBook = createAction(
  '[Book List] Add Book',
  props<{ bookId }>()
);

export const removeBook = createAction(
  '[Book Collection] Remove Book',
  props<{ bookId }>()
);

export const retrievedBookList = createAction(
  '[Book List/API] Retrieve Books Success',
  props<{ Book }>()
);


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
