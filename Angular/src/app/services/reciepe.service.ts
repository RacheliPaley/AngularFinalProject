import {Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import Recipe from '../models/Recipe';

@Injectable({
  providedIn: 'root'
 
})
export class recipeService implements OnInit{
 

  constructor(public http: HttpClient) { }
  baseRouteUrl=`${environment.baseUrl}/recipe`
  getAllRecipes(){
    return this.http.get<Recipe[]>(`${this.baseRouteUrl}/GetAllRecipes/`)
  }
  addRecipe(recipe:Recipe){
   return this.http.post<Recipe>(`${this.baseRouteUrl}/AddRecipe/`,recipe);
    }
  getRecipeById(id){
    return this.http.get<Recipe>(`${this.baseRouteUrl}/GetRecipeById/${id}`);
    }
    updateRecipe(recipeId: number, recipe: Recipe) {
      return this.http.put<Recipe>(`${this.baseRouteUrl}/UpdateRecipe/${recipeId}`,recipe)
    }
   
  ngOnInit(): void {
   
  }
  
}