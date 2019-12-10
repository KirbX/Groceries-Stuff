import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient.service'


export class IngredientRecipe extends Ingredient {
  quantity : number;
  constructor(_name : string, _comment : string, _unit : string, _quantity : number){
    super(_name, _comment, _unit);
    this.quantity = _quantity;
  }
}

@Injectable({
  providedIn: 'root'
})
export class Recipe {
  text : string;
  comment : string;
  numberOfPeople : number;
  ingredientList : Array<IngredientRecipe> 
  constructor() { }
}
