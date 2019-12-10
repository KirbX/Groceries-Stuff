import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";

const routes: Routes = [
    {   
        path: "", 
        redirectTo: "/(authentificationTab:authentification/default//addRecipeTab:addRecipe/default//recipeListTab:recipeList/default//addIngredientTab:addIngredient/default//ingredientListTab:ingredientList/default)",
        pathMatch: "full" 
    },
    {
        path: "authentification",
        component: NSEmptyOutletComponent,
        loadChildren: () => import ("~/app/Auth/authentification/authentification.module").then((m) => m.AuthentificationModule),
        outlet: "authentificationTab"
    },
    {
        path: "addRecipe",
        component: NSEmptyOutletComponent,
        loadChildren: () => import ("~/app/CookBook/add-recipe/add-recipe.module").then((m) => m.AddRecipeModule),
        outlet: "addRecipeTab"
    },
    {
        path: "recipeList",
        component: NSEmptyOutletComponent,
        loadChildren: () => import ("~/app/CookBook/recipe-list/recipe-list.module").then((m) => m.RecipeListModule),
        outlet: "recipeListTab"
    },
    {
        path: "addIngredient",
        component: NSEmptyOutletComponent,
        loadChildren: () => import ("~/app/ShoppingList/add-ingredient/add-ingredient.module").then((m) => m.AddIngredientModule),
        outlet: "addIngredientTab"
    },
    {
        path: "ingredientList",
        component: NSEmptyOutletComponent,
        loadChildren: () => import ("~/app/ShoppingList/ingredient-list/ingredient-list.module").then((m) => m.AddModule),
        outlet: "ingredientListTab"
    }
   
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
