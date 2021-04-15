import { Product } from './product.model';
import { createFeatureSelector } from '@ngrx/store';
import { createSelector } from '@ngrx/store';
import { createReducer, on, createAction } from '@ngrx/store';
import * as ProductActions from './product.actions';

export interface ProductState {
  showProductCode: boolean;
  selectedProductId: number;
  products: Array<Product>;
  error?: string;
}

// export const actionToogleText = createAction('[Product] toogle')

// parece que el selector se componete siempre de un feature, que es un slice, y luego la projección, lo que vas a hacer con la rebanada
const featureProducts = createFeatureSelector('product')
// en el selector puedo agregar más selectores, y los recibo en la proyeccción
export const getProductShowCode = createSelector(featureProducts, (state: ProductState) => state.showProductCode);

export const getProducts = createSelector(featureProducts, (state: ProductState) => state.products);

export const getSelectedId = createSelector(featureProducts, (state: ProductState) => state.selectedProductId);

export const getSelectedProduct = createSelector(featureProducts, (state: ProductState) =>
  state.products.find(product => product.id === state.selectedProductId)
)

const initialState: ProductState = { showProductCode: true, selectedProductId: 1, products: [] }


export const productReducer = createReducer<ProductState>(
  initialState,
  on(ProductActions.tootleProductCode,
    (state: any) => {
      console.log("statte", state)
      return { ...state, showProductCode: !state.showProductCode }
    }
  ),
  on(ProductActions.setCurrentProduct,
    (state, action) => {
      console.log("state", state, "action ", action);
      return { ...state, currentProduct: action.product }
    }),
  on(ProductActions.clearCurrentProduct, state => {
    return { ...state, currentProduct: { id: 0, productName: '', prodcutCode: 'New' } }
  }),

  on(ProductActions.loadProductSuccess, (state, action) => {
    console.log("success", action.products)
    return { ...state, products: action.products }
  }),

  on(ProductActions.loadProductFailure, (state, action) => {
    return { ...state, products: [], error: action.error }
  }),

  on(ProductActions.setSelectedProductId, (state, action) => {
    console.log("Ejecuantdo se selected");
    return { ...state, selectedProductId: action.id }
  }),

  on(ProductActions.updateProductSuccess, (state, action) => {
    const updatedProducts = state.products.map(product => action.product.id == product.id ? action.product : product);
    console.log("Ejecutand updateProductSuccess,", updatedProducts);

    return {
      ...state, products: updatedProducts,
    }
  }),



);
