import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];
  constructor() {
    this.products = [];
    this.products.push(new Product('NICEHAT', 'A nice black hay', '/assets/images/products/black-hat.jpg', ['men', 'accessories', 'hat'], 29.99));
    this.products.push(new Product('MYSHOES', 'Black running shoes', '/assets/images/products/black-shoes.jpg', ['men', 'shoes', 'running shoes'], 109.99));
    this.products.push(new Product('NEATOJACKET', 'Blue jacket', '/assets/images/products/blue-jacket.jpg', ['women', 'apparel', 'jackets & vests'], 238.99));
  }

  public productWasSelected(product: Product) {
    console.log(`selected: ${product.name} with price ${product.price}`);
  }
}
