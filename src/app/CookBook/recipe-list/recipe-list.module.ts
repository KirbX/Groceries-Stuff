import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module"; 
import { RecipeListRoutingModule } from "./recipe-list-routing.module";
import { RecipeListComponent } from "./recipe-list.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        RecipeListRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        RecipeListComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RecipeListModule { 

    

}
