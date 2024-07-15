import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Product} from "../model/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'http://localhost:8000/api/product';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  createProduct(title: string): Observable<Product> {
    return this.http.post<Product>(this.url, { title });
  }

  updateProduct(id: number): Observable<Product> {
    return this.http.put<Product>(`${this.url}/${id}`, null);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
