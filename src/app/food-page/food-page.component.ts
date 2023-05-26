import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {

  foodPage!: Food;

  constructor(private foodService: FoodService, private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
      this.activatedRoute.params.subscribe(params => {
        if (params['id'])
          this.foodPage = this.foodService.getFoodById(params['id']);
      })

    }

    addToCart(): void{
      
    }

  }
