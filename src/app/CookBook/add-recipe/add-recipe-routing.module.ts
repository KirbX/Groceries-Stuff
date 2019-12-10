import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AddRecipeComponent } from './add-recipe.component'

const routes: Routes = [
    { path: "default", component: AddRecipeComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class AddRecipeRoutingModule { }
