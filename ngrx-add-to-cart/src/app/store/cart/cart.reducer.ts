import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart, clearCart } from './cart.actions';
import { CartItem } from './cart.models';

export interface CartState {
  items: CartItem[];
}

export const initialState: CartState = {
  items: []
};

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { product }) => {
    const existing = state.items.find(i => i.id === product.id);
    if (existing) {
      return {
        ...state,
        items: state.items.map(i =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      };
    }
    return { ...state, items: [...state.items, { ...product, quantity: 1 }] };
  }),
  on(removeFromCart, (state, { productId }) => ({
    ...state,
    items: state.items.filter(i => i.id !== productId)
  })),
  on(clearCart, () => initialState)
);
