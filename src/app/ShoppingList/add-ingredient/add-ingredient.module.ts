import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module"; 
import { AddIngredientRoutingModule } from "./add-ingredient-routing.module";
import { AddIngredientComponent } from "./add-ingredient.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AddIngredientRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AddIngredientComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AddIngredientModule { 

    

}
