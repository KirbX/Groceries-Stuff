import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: 'IngredientDetail',
  templateUrl: './ingredient-detail.component.html',
  styleUrls: ['./ingredient-detail.component.css']
})
export class IngredientDetailComponent implements OnInit {

  constructor( 
    private _route: ActivatedRoute,
    private _routerExtensions: RouterExtensions, ) { }

  ngOnInit() {
    const id = +this._route.snapshot.params.id;
    // this.item = this._data.getTask(id);
  }

}
