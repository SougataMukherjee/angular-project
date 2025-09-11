import { Component,OnInit } from '@angular/core';
import { ProductService } from '../../services/product';
import { Store } from '@ngrx/store';
import { addToCart } from '../../store/cart/cart.actions';
import { Product } from '../../store/cart/cart.models';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private store: Store) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(data => this.products = data);
  }

  add(product: Product) {
    this.store.dispatch(addToCart({ product }));
  }
}
