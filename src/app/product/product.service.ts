import { Observable } from 'rxjs';
import { Product } from './state/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  public getProducts(): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>("http://localhost:3000/product");
  }

  public updateProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>("http://localhost:3000/product", product);
  }

}
