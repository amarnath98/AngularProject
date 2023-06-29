import { Food } from "./Food.component";

export class CartItems{

    food: Food = new Food;
    quantity: number = 1;

    constructor(food: Food){
    this.food = food;
    }

    getPrice(): number{
        return this.food.price*this.quantity;
    }
    
}