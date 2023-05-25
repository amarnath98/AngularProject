import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food.component';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  foods: Food[] = [];


  constructor(private foodService: FoodService, private activatedRoute: ActivatedRoute){
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      if (params['name'])
        this.foods = this.foodService.getAll().filter(food => food.name.toLocaleLowerCase().includes(params['name'].toLocaleLowerCase()));
      else
        this.foods = this.foodService.getAll();
    })

  }



  

}
