import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { RecipeListComponent } from "./recipe-list.component";

const routes: Routes = [
    { path: "default", component: RecipeListComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class RecipeListRoutingModule { }
