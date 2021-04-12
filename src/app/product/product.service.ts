import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  public getProducts(){
  return this.httpClient.get<Array<any>>("https://jsonplaceholder.typicode.com/posts")
  }

}
