import { CartItems } from "./CartItems.component";
import { Food } from "./Food.component";

export class Cart{

    items: CartItems[] = [];

    getTotalPrice(): number{
        let totalPrice = 0;
        this.items.forEach( items => {
            totalPrice += items.getPrice();
        })
        return totalPrice;
    }
}