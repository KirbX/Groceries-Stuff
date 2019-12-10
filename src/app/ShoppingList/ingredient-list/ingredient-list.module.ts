import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module"; 
import { IngredientListRoutingModule } from "./ingredient-list-routing.module";
import { IngredientListComponent } from "./ingredient-list.component";
import { IngredientDetailComponent } from './ingredient-detail/ingredient-detail/ingredient-detail.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        IngredientListRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        IngredientListComponent,
        IngredientDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AddModule { 

    

}
