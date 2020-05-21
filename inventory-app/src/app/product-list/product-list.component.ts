import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];
  @Output() productSelected: EventEmitter<Product>;
  private selectedProduct: Product;
  constructor() {
    this.productSelected = new EventEmitter();
  }

  ngOnInit(): void {
  }

  emitProductSelected(product: Product): void {
    this.selectedProduct = product;
    this.productSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    return this.selectedProduct && this.selectedProduct.sku === product.sku;
  }

}
