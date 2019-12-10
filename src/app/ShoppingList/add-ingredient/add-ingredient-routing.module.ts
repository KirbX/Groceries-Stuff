import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AddIngredientComponent } from "./add-ingredient.component";

const routes: Routes = [
    { path: "default", component: AddIngredientComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class AddIngredientRoutingModule { }
