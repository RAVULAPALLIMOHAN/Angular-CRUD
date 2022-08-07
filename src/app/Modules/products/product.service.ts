import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from "./products";

@Injectable({
  providedIn: 'root'
})

//productList : product;
export class ProductService {
 
 
  constructor(private httpclient:HttpClient) { }
  
  // create(product){
  //   const Url ="http://localhost:3000/comments";
  //   return this.httpclient.get(Url,product);
  // }
}
