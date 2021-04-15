import { Injectable } from '@angular/core';
import { ProductService } from '../product.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductActions from './product.actions';
import { mergeMap, map, catchError, concatMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class ProductEffects {

  constructor(private actions$: Actions, private productService: ProductService) {
  }

  loadProducts$ = createEffect(() => {
    // para reflexionar, loadProduct, se ejecuta primer dispatch, El reducer es quien escucha las acciones, pero no esta allí.
    // pero también hay que entender que this.actions$ recibe todas las acciones que estan siendo dispatch  aqui hacemos el filtro adecuando
    return this.actions$.pipe(
      ofType(ProductActions.loadProduct),
      mergeMap(() => this.productService.getProducts().pipe(
        tap( products => console.log("products", products)),
        // esta parte parece que hace entonces el distpatch sin pasar por un store.dispatch
        map(products => ProductActions.loadProductSuccess({ products })),
        catchError(error => of(ProductActions.loadProductFailure({ error }))

        )
      ))
    )
  });


  updateProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.updateProduct),
      concatMap((action) => this.productService.updateProduct(action.product).pipe(
        // esta parte parece que hace entonces el distpatch sin pasar por un store.dispatch
        map(product => ProductActions.updateProductSuccess({ product })),
        catchError(error => of(ProductActions.updateProductFailure({ error }))
        )
      ))
    )
  });


}
