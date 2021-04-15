import { Product } from './product.model';
import { createAction, props } from '@ngrx/store';


export const setSelectedProductId = createAction('[Product] toogle', props<{ id: number }>());

export const tootleProductCode = createAction(
  '[Product] Toogle Code'
);

export const setCurrentProduct = createAction(
  '[Product] Set Current Product', props<{ product: any }>()
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
  '[Product] Load Product Success', props<{ products: Array<Product> }>()
)

export const loadProductFailure = createAction(
  '[Product] Load Product Failure', props<{ error: string }>()
)

// Nota lo que se empieza a complicar es que por cada operación debo agregar 3 acciones
export const updateProduct = createAction(
  '[Product] update product', props<{ product: Product }>()
)

export const updateProductSuccess = createAction(
  '[Product] update Product Success', props<{ product: Product }>()
)


export const updateProductFailure = createAction(
  '[Product] update Product Failure', props<{ error: string }>()
)
