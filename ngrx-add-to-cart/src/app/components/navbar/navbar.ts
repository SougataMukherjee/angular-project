import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {selectCartItems, selectCartCount, selectCartTotal } from '../../store/cart/cart.selectors';
import { AppState } from '../../store/app.state';
import { AsyncPipe,NgIf } from '@angular/common';
import { CartPopup } from '../cart-popup/cart-popup';
import { CartItem } from '../../store/cart/cart.models';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  imports: [AsyncPipe,NgIf,CartPopup],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  cartCount$: Observable<number>;
  cartTotal$: Observable<number>;
  cartItems$: Observable<CartItem[]>;
   popupVisible = false;
  constructor(private store: Store<AppState>) {
   this.cartCount$ = this.store.select(selectCartCount).pipe(
    map(count => count ?? 0)   // always number
  );

 this.cartTotal$ = this.store.select(selectCartTotal).pipe(
  map(total => total ?? 0)
);

  this.cartItems$ = this.store.select(selectCartItems).pipe(
    map(items => items ?? [])
  );
  }
  togglePopup() {
    this.popupVisible = !this.popupVisible;
  }
}
