import { CounterComponent } from './counter/counter.component';
import { ProductComponent } from './product/product.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "counter", component: CounterComponent },
  { path: "product", component: ProductComponent },
  { path: "book", component: CounterComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
