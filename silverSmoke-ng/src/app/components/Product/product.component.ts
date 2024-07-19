import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/Product";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  newProductTitle: string = '';
  products: Product[];
  product: Product;

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this._productService.getProducts().subscribe(response => {
      if (response.status === 200) {
        this.products = response.body;
      }
    });
  }

  addProduct(): void {
    if (this.newProductTitle.trim()) {
      this._productService.createProduct(this.newProductTitle).subscribe(product => {
        if (product.status === 200) {
          this.product = product.body;
        }
      });
    }
  }

  updateProduct(product: Product): void {
    this._productService.updateProduct(product).subscribe();
  }

  deleteProduct(product: Product): void {
    this._productService.deleteProduct(product.id).subscribe(response => {
      if(response.status === 204) {
        console.log('Le produit est bien supprimé')
      }
    });
  }

  buyProduct(product: Product) {
    if (product.count > 0) {
      product.count--;
      this._productService.updateProduct(product).subscribe();
    }
  }

}
