import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Product} from "../model/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'http://localhost:8000/api/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<HttpResponse<Product[]>> {
    return this.http.get<Product[]>(this.url, {observe: 'response'});
  }

  getProduct(id: number): Observable<HttpResponse<Product>> {
    return this.http.get<Product>(`${this.url}/${id}`, {observe: 'response'});
  }

  createProduct(title: string): Observable<HttpResponse<Product>> {
    return this.http.post<Product>(this.url, { title }, {observe: 'response'});
  }

  updateProduct(product: Product): Observable<HttpResponse<Product>> {
    return this.http.put<Product>(`${this.url}/${product.id}`, product, {observe: 'response'});
  }

  deleteProduct(id: number): Observable<HttpResponse<Product>> {
    return this.http.patch<Product>(`${this.url}/${id}/visibility`, null, {observe: 'response'});
  }
}
