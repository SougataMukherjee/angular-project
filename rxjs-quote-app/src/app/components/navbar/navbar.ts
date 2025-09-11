import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [DecimalPipe],
  template: `
    <header class="header">
      <div><strong>Rx Quote Cart</strong></div>
    </header>
  `
})
export class Navbar {
  count$;
  total$;

  constructor(private cart: CartService) {
    this.count$ = this.cart.count$();
    this.total$ = this.cart.total$();
  }
}
