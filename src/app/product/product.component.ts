import { AppState } from './../state/app.state';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as ProductActions from './state/product.actions';
import { getProductShowCode } from "./state/product.reducer";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public product$: Observable<any>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(ProductActions.loadProduct());

    this.product$ = this.store.select("product");
  }


  public setProduct() {
    const product: any = { id: 1, productName: "Hyper sound", productCode: 1230 }
    this.store.dispatch(ProductActions.setCurrentProduct({ product: product }))
  }

  public clearProduct() {
    console.log("Product")
    this.store.dispatch(ProductActions.clearCurrentProduct());
  }


  private selectProduct() {
    console.log("Aqui inicia la subs");
    // this.store.pipe(select('product' as any)).subscribe(product => {
    //   console.log("Suscrito a producto tenemos datos", product);
    // });

    this.store.select(getProductShowCode).subscribe(showProductCode => {

      console.log("Ser recibió el producto code", showProductCode);
    })
  }

  public onChangeCheck(): void {
    console.log("onChange evento ")
    //this.store.dispatch( { type:"[Product] toogle"});
    this.store.dispatch(ProductActions.tootleProductCode());
    //console.log("Aqui ya se inició el dispatch pero no hizo nada")
  }
}
