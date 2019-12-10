import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { IngredientListComponent } from "./ingredient-list.component";

const routes: Routes = [
    { path: "default", component: IngredientListComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class IngredientListRoutingModule { }
