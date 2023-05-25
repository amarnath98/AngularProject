import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchTerm: String = "";
  constructor(private activatedRoute: ActivatedRoute, private router:Router){}
  ngOnInit(): void{
    this.activatedRoute.params.subscribe(params => {
      if(params['name'])
        this.searchTerm = params['name'];
    })
  }

  search():void{
    if(this.searchTerm)
      this.router.navigateByUrl("/search/"+this.searchTerm)
    else
    this.router.navigateByUrl("/");
  }
}
