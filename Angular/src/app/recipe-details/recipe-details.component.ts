import { Component, OnInit } from '@angular/core';
import Layer from '../models/Layer';
import Recipe from '../models/Recipe';
import { AddRecipeComponent } from '../add-recipe/add-recipe.component';
import { ActivatedRoute, Router } from '@angular/router';
import { recipeService } from '../services/reciepe.service';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  myRecipe: Recipe = new Recipe("", 0, 0, 0, null, null, 0, null, false)
  getFromStorage
  constructor(public myActive: ActivatedRoute, public recipeSer: recipeService
    , public userSer: LoginService, public rout: Router) {
    this.myActive.params.subscribe(s => {
      this.recipeSer.getRecipeById(s["id"]).subscribe(succ => this.myRecipe = succ);
    })
    this.getFromStorage = userSer.getFromStorage().Id;
  }
  ngOnInit(): void {
  }
  editRecipe() {
    this.rout.navigate(["editRecipe", this.myRecipe.Id])
  }
}
