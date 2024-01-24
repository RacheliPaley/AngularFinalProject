import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Recipe from '../models/Recipe';
import {HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(public http:HttpClient) { }

  baseRouteUrl=`${environment.baseUrl}/Recipe`
  getAllRecipes(){
return this.http.get<Recipe[]>(`${this.baseRouteUrl}/GetAllRecipes`);
  }
  
  
}
