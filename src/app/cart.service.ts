import { Injectable } from '@angular/core';
import { Menu, menus } from './menus';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Menu[] = [];

  constructor() {}

  addToCart(menu: Menu) {
    this.items.push(menu);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
