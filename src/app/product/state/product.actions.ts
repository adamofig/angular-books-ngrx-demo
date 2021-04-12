import { createAction, props } from '@ngrx/store';

export const tootleProductCode = createAction(
  '[Product] Toogle Code'
);

export const setCurrentProduct = createAction(
  '[Product] Set Current Product', props<{product: any}>()
);

export const clearCurrentProduct = createAction(
  '[Product] Clear Current Product'
);

export const initializeCurrentProduct = createAction(
  '[Product] Inialize Current Product'
);

// Acciones para traer información del servidor

export const loadProduct = createAction(
  '[Product] Load'
)

export const loadProductSuccess = createAction(
  '[Product] Load Product Success', props< {products: Array<any>}>()
)

export const loadProductFailure = createAction(
  '[Product] Load Product Failure', props< {error: string}>()
)
