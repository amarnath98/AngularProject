import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tags } from '../shared/models/Tags.component';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {

  @Input()
  foodPageTag?: String[];

  @Input()
  justifyContent: String = "center";

  tag?: Tags[];

  constructor(private route: ActivatedRoute, private foodservice: FoodService){}

  ngOnInit() {
    if(!this.foodPageTag)
      this.tag = this.foodservice.getAllTags();
  }

}
