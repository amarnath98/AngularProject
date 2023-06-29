import { Component } from '@angular/core';
import { Cart } from '../shared/models/Cart.component';
import { CartService } from '../services/cart/cart.service';
import { CartItems } from '../shared/models/CartItems.component';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {

  cart!: Cart;
  totalPrice: number = 0;

  constructor(private cartService: CartService){
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();
    this.totalPrice = this.cart.getTotalPrice();
  }

  removeCart(cartItem: CartItems){
    this.cartService.removeCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItems, quant: string){
    const quantity = parseInt(quant);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

}


