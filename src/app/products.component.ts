import { Component } from '@angular/core';
import { ProductService } from './product.serice';
@Component({
  selector: 'products',
  template: `<h1>Umesh</h1>
  <ul>
    <li *ngFor="let product of products">
      {{product}}
    </li>
  </ul>
  `,
})
export class ProductsComponet {
  products;

  constructor(productservice: ProductService) {
    this.products = productservice.getProduct();

    console.log(this.products);
  }
}
