import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Recipe from '../models/Recipe';
import { StarPipe } from '../pipes/star.pipe';
import { TimePipe } from '../pipes/time.pipe';


@Component({
  selector: 'app-small-recipe',
  templateUrl: './small-recipe.component.html',
  styleUrls: ['./small-recipe.component.scss']
})
export class SmallRecipeComponent implements OnInit {
@Input()
myRecipe:Recipe=new Recipe("",0,0,0,null,null,0,"",false)
  constructor( public route:Router) { }

  ngOnInit(): void {
  }
  recipeDetails() {
    if (JSON.parse(localStorage.getItem("currentUser")).Name!="guest")  
    this.route.navigate(["recipeDetails", this.myRecipe.Id])
  }
}