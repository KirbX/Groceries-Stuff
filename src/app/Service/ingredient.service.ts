import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Ingredient {
  name : string;
  comment : string;
  unit : string;

  constructor(_name: string, _comment: string, _unit: string) { 
    this.name = _name;
    this.comment = _comment;
    this.unit = _unit;
  }
}
