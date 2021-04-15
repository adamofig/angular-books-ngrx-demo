import { Product } from './state/product.model';
import { AppState } from './../state/app.state';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as ProductActions from './state/product.actions';
import { getProductShowCode, getProducts, getSelectedId, getSelectedProduct } from "./state/product.reducer";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public products$: Observable<Array<Product>>;

  public selectedId$: Observable<number>;

  public selectedProduct$: Observable<Product>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.products$ = this.store.select(getProducts);

    this.selectedId$ = this.store.select(getSelectedId);

    this.selectedProduct$ = this.store.select(getSelectedProduct);

    this.store.dispatch(ProductActions.loadProduct());


  }


  public setProduct() {
    const product: any = { id: 1, productName: "Hyper sound", productCode: 1230 }
    this.store.dispatch(ProductActions.setCurrentProduct({ product: product }))
  }

  public clearProduct() {
    console.log("Product")
    this.store.dispatch(ProductActions.clearCurrentProduct());
  }


  public selectProduct(id: number) {
    console.log("Cambiando  propiedad id", id);
    this.store.dispatch(ProductActions.setSelectedProductId({ id }));
  }

  public onChangeCheck(): void {
    console.log("onChange evento ")
    //this.store.dispatch( { type:"[Product] toogle"});
    this.store.dispatch(ProductActions.tootleProductCode());
    //console.log("Aqui ya se inició el dispatch pero no hizo nada")
  }

  public updateProduct(id: number) {
    console.log("Actualizando ", id);
    const productName = document.getElementById("productName") as HTMLInputElement;
    const productCode = document.getElementById("productCode") as HTMLInputElement;
    const updatedProduct: Product = { id, productCode: productCode.value, productName: productName.value };
    console.log(updatedProduct,"products", productName.value, productCode.value);

    this.store.dispatch(ProductActions.updateProduct({ product: updatedProduct }));

    // console.log("update component");
  }

}
