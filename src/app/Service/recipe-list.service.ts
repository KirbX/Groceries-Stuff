import { Injectable } from '@angular/core';
import { Recipe } from './recipe.service'
import { ObservableArray } from 'tns-core-modules/data/observable-array';

@Injectable({
  providedIn: 'root'
})
export class RecipeListService {
  private recipeList = new ObservableArray<Recipe>([]);

  constructor() { }
}
