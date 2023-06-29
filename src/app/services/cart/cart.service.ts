import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart.component';
import { Food } from 'src/app/shared/models/Food.component';
import { CartItems } from 'src/app/shared/models/CartItems.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart = new Cart;

  constructor() { }

  addtoCart(food: Food) {

    let foodItem = this.cart.items.find(items => items.food.id == food.id);
    debugger
    if (foodItem) {
      this.changeQuantity(food.id, foodItem.quantity + 1);
    }
    else {
      this.cart.items.push(new CartItems(food));
    }
  }

  changeQuantity(id: number, quantity: number): void {

    let cartItem = this.cart.items.find(items => items.food.id === id);

    if (!cartItem) { return; }

    cartItem.quantity = quantity;

  }

  removeCart(id: number): void {
    this.cart.items = this.cart.items.filter(items => items.food.id !== id);
  }

  getCart(): Cart {
    return this.cart;
  }


}
