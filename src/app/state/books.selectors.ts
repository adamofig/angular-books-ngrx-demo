import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "./app.state";
import { Book } from "../book-list/books.model";

// Esto parece significar que estoy obteniendo multiples revanadas del estado.
export const selectBooks = createSelector(
  (state: AppState) => state.books,
  (books: Array<Book>) => books
);

// Necesito un pedazo inicial que seleccione la rebanada.
export const selectCollectionState = createFeatureSelector<AppState, ReadonlyArray<string>>("collection");


// Este es un tema importante la composición de selectores
// este es el verdadero selector, recibe 2 selects books y collection State, luego la función de proyección, pero esta recibe un parámetro por cada selector,
export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books: Array<Book>, collection: Array<string>) => {
    return collection.map((id) => books.find((book) => book.id === id));
  }
);


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
