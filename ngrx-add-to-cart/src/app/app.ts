import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { ProductList } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    ProductList
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  
})
export class App {
  protected readonly title = signal('ngrx-add-to-cart');
}
