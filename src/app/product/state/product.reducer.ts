import { createFeatureSelector } from '@ngrx/store';
import { createSelector } from '@ngrx/store';
import { createReducer, on, createAction } from '@ngrx/store';
import * as ProductActions from './product.actions';


// export const actionToogle = createAction('[Product] toogle', (state: any) => {
//   console.log("statte", state)
//   return { ...state, showProductCode: state.showProductCode }
// })

export interface ProductState {
  showProductCode: boolean;
  currentProduct: any;
  products: Array<any>;
}

// export const actionToogleText = createAction('[Product] toogle')

// parece que el selector se componete siempre de un feature, que es un slice, y luego la projección, lo que vas a hacer con la rebanada
const featureProdcuts = createFeatureSelector('product')
// en el selector puedo agregar más selectores, y los recibo en la proyeccción
export const getProductShowCode = createSelector(featureProdcuts, (state: any) => state.showProductCode);

const initialState: ProductState = { showProductCode: true, currentProduct: 'producto', products: ["p1", "p2"] }

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

  on(ProductActions.loadProductSuccess, (state, action)=>{
    return { ...state, products: action.products}
  })
);
