import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AllRecipeComponent } from './all-recipe/all-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { LoginComponent } from './login/login.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  { path: "", component: LoginComponent },
  { path: "recipies", component: AllRecipeComponent },
  { path: "login", component: LoginComponent },
  { path: "register/:name", component: RegisterComponent },
  { path: "register", component: RegisterComponent },
  { path: "editRecipe/:id", component: EditRecipeComponent },
  { path: "addRecipe", component: AddRecipeComponent },
  { path: "recipeDetails/:id", component: RecipeDetailsComponent },
  { path: "**", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
