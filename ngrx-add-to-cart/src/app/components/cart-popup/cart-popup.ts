import { Component,Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { CartItem } from '../../store/cart/cart.models';

@Component({
  selector: 'app-cart-popup',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cart-popup.html',
  styleUrl: './cart-popup.scss'
})
export class CartPopup {
  @Input() items: CartItem[] = [];
  @Input() total: number = 0;
  @Input() close!: () => void;
}
