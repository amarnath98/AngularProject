import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { CartItems } from '../shared/models/CartItems.component';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {

  foodPage!: Food;

  constructor(private foodService: FoodService, private activatedRoute: ActivatedRoute, private cartService: CartService, private router: Router) {
    
   }
  ngOnInit() {
      this.activatedRoute.params.subscribe(params => {
        if (params['id'])
          this.foodPage = this.foodService.getFoodById(params['id']);
      })
    }

    addToCart(): void{
      this.cartService.addtoCart(this.foodPage);
      this.router.navigateByUrl("/cart-page");
    }


  }
