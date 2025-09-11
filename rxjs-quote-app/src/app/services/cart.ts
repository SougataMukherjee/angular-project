import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface CartItem {
  id: number;
  title: string;
  price: number;
  qty: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private base = 'http://localhost:3000';

  cartItems$!: Observable<CartItem[]>;

  constructor(private http: HttpClient) {
    this.cartItems$ = this.http.get<CartItem[]>(`${this.base}/cart`).pipe(
      shareReplay(1)
    );
  }

  count$() {
    return this.cartItems$.pipe(
      map(items => items.reduce((s, it) => s + (it.qty || 0), 0))
    );
  }

  total$() {
    return this.cartItems$.pipe(
      map(items => items.reduce((s, it) => s + (it.price * (it.qty || 0)), 0))
    );
  }
}
