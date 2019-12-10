import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module"; 
import { AddRecipeComponent } from './add-recipe.component'

import { AddRecipeRoutingModule } from "./add-recipe-routing.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AddRecipeRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AddRecipeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AddRecipeModule { 

    

}
