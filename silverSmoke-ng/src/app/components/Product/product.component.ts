import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/Product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  newProductTitle: string = '';
  products: Product[];

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this._productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  addProduct(): void {
    if (this.newProductTitle.trim()) {
      this._productService.createProduct(this.newProductTitle).subscribe(task => {
        this.products.push(task);
        this.newProductTitle = '';
      });
    }
  }

  updateProduct(product: Product): void {
    this._productService.updateProduct(product.id).subscribe();
  }

  deleteProduct(product: Product): void {
    this._productService.deleteProduct(product.id).subscribe(() => {
      this.products = this.products.filter(p => p.id !== product.id);
    });
  }

}
