import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient.service'
import { ObservableArray } from 'tns-core-modules/data/observable-array';



export class IngredientShoppingList extends Ingredient{
  quantity : number;
  isBought : boolean;
  constructor(_name : string, _comment : string, _unit : string, _quantity : number){
    super(_name, _comment, _unit);
    this.quantity = _quantity;
    this.isBought = false;
  }
}
@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private items = new ObservableArray<IngredientShoppingList>([]);

  constructor() { }

  getItems() : ObservableArray<IngredientShoppingList> {
    return this.items;
  }
}
