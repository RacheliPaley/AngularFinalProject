import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Category from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public http: HttpClient) { }
  baseRouteUrl=`${environment.baseUrl}/category`
  GetCategories(){
    return this.http.get<Category[]>(`${this.baseRouteUrl}/GetAllCategories/`)
  }
}
