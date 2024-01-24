import { Component, OnInit } from '@angular/core';
import { MatInputHarness } from '@angular/material/input/testing';
import { Router } from '@angular/router';
import Category from '../models/Category';
import Layer from '../models/Layer';
import Recipe from '../models/Recipe';
import User from '../models/User';
import { CategoryService } from '../services/category.service';
import { recipeService } from '../services/reciepe.service';
@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  insVal = ""
  instructionsarr = [];
  ingrudientarr = [];
  constructor(public recipeService: recipeService, public router: Router, public categoryService: CategoryService) {
  }
  categoryArry: Category[];
  myRecipe: Recipe = new Recipe("", 0, 0, 0, [new Layer(null, this.ingrudientarr)], this.instructionsarr, 0, null, false)
  ngOnInit(): void {
    this.categoryService.GetCategories().subscribe((succ) => {
      this.categoryArry = succ;
      console.log(succ)
    },
      (err) => {
        alert("התרחשה שגיאה בקבלת הנתונים");
        console.log(err)
      })
  }
  addIngrudient(recipeIngrudients: string) {
    this.ingrudientarr.push(recipeIngrudients);
    this.insVal = ""
  }
  addInstruction(recipeInstructions: string) {
    this.instructionsarr.push(recipeInstructions)
    this.insVal = ""
  }
  AddRecipe() {
    this.myRecipe.AddDate = new Date(Date.now());
    this.myRecipe.UserId = JSON.parse(localStorage.getItem("currentUser")).Id;
    this.myRecipe.IsDisplay = true;
    this.recipeService.addRecipe(this.myRecipe).subscribe((succ) => {
      console.log("הגיע");
      alert("תודה ששיתפת אותנו ממטבחך");
    },
      (err) => {
        alert(" שגיאה בקבלת הנתונים");
        console.log(err)
      });
    console.log(this.myRecipe)
    this.router.navigate(["/recipies"])

  }
}

